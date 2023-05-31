import fs from "fs"
import YAML from "yaml"
import $RefParser from "dereference-json-schema"

const { dereferenceSync } = $RefParser
const schemaRaw = dereferenceSync(YAML.parse(fs.readFileSync("codegen/koiosapi.yaml", "utf8")))
const schemaPaths = schemaRaw.paths

schemaPaths["/credential_txs"].post.responses["200"].content["application/json"].schema =
  schemaPaths["/address_txs"].post.responses["200"].content["application/json"].schema // weird hack to fix $ref top-level non-assigment problem on /credential_txs path, need to write own parser?

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
fs.writeFileSync("codegen/koiosapiraw.json", JSON.stringify(schemaRaw, null, 2))
fs.writeFileSync("codegen/koiosapi.json", JSON.stringify(schemaJson, null, 2))
