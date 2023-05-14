const fs = require("fs")
const YAML = require("yaml")
const { dereferenceSync } = require("dereference-json-schema")

const schemaYaml = fs.readFileSync("codegen/koiosapi.yaml", "utf8")
const schemaPaths = dereferenceSync(YAML.parse(schemaYaml)).paths
delete schemaPaths["/submittx"] // removing the submit tx method because it is not represented in koios-lite by default
const schemaJson = Object.entries(schemaPaths).flatMap(([path, pathObject]) => {
  return ["get", "post"]
    .map((method) => ({ path, method, operation: pathObject?.[method] }))
    .filter(({ operation }) => operation)
    .map(({ operation, method }) => {
      const op = {
        ...(typeof operation === "object" ? operation : {}),
        path,
        method,
      }
      if (pathObject?.parameters) {
        op.parameters = [...(op.parameters || []), ...pathObject.parameters]
      }
      return op
    })
})
fs.writeFileSync("codegen/koiosapi.json", JSON.stringify(schemaJson, null, 2))
