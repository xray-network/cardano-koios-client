import fs from "fs"
import openapiTS from "openapi-typescript"

const run = async () => {
  const schema = (await openapiTS(
    new URL(
      "https://raw.githubusercontent.com/cardano-community/koios-artifacts/main/specs/results/koiosapi-mainnet.yaml"
    ),
    {
      exportType: true,
    }
  )) as string
  fs.writeFileSync("./src/schema/schema.ts", schema.replaceAll('["items"]', "[number]"))
}

run()
