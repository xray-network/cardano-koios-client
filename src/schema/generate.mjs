import fs from "fs"
import openapiTS, { astToString } from "openapi-typescript"

const run = async () => {
  const schema = (await openapiTS(
    new URL(
      "https://api.koios.rest/koiosapi.yaml"
    ),
    {
      exportType: true,
    }
  ))
  fs.writeFileSync("./src/schema/schema.ts", astToString(schema).replaceAll('["items"]', "[number]"))
}

run()
