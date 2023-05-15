const fs = require("fs")
const prettier = require("prettier")
const schemaJson = require("./koiosapi.json")

const prettierOptions = {
  parser: "typescript",
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 120,
}

const mapTypes = (type) => {
  const types = {
    integer: "number",
    string: "string",
    boolean: "boolean",
    array: "[]",
    object: "{}",
    enum: "enum",
    null: "null",
  }
  return types[type] || "any"
}

const transformRequestBodyTypes = (obj) => {
  if (obj.type === "array") {
    return `${transformRequestBodyTypes(obj.items)}[]`
  } else {
    return mapTypes(obj.type)
  }
}

/*********************************************
 * Build Methods
 */

const methods = `
import { Axios, AxiosResponse, GenericAbortSignal } from "axios"
import * as KoiosTypes from "./types"

export default (client: Axios) => {
  return {
    ${schemaJson.map((op) => {
      const { path, method } = op

      const postfix = (path === "/asset_info" && method === "post" && "Bulk") || "" // exception for /asset_info POST method
      const name =
        path.replace(/\//g, "").replace(/(?:_| |\b)(\w)/g, function ($1) {
          return $1.toUpperCase().replace("_", "")
        }) + postfix

      const getParameters = op.parameters || []
      const postProperties = op.requestBody?.content["application/json"].schema.properties || {}
      const postRequired = op.requestBody?.content["application/json"].schema.required || []

      const getParamsWithTypes = () => {
        let notRequired = true
        const _get = getParameters
          .map((param) => {
            const isRequired = param.required
            if (isRequired) {
              notRequired = false
            }
            return `${param.name}${!isRequired ? "?" : ""}: ${mapTypes(param.schema.type)}`
          })
          .join(",\n")
        const _post = Object.keys(postProperties)
          .map((prop) => {
            const isRequired = postRequired.includes(prop)
            if (isRequired) {
              notRequired = false
            }
            return `${prop}${!isRequired ? "?" : ""}: ${transformRequestBodyTypes(postProperties[prop])}`
          })
          .join(",\n")
        const _paramsWithTypes = _get || _post
        return _paramsWithTypes ? `params${notRequired ? "?" : ""}: { ${_paramsWithTypes} },` : ""
      }

      const getPostParams = () => {
        const _postParams = Object.keys(postProperties)
          .map((prop) => `${prop}: params.${prop}`)
          .join(",\n")
        return _postParams ? `{ ${_postParams}, },` : ""
      }

      const getQueryString = () => {
        return (
          getParameters
            .map(
              (param) =>
                `${param.name ? `\${params.${param.name} ? "&${param.name}=" + params.${param.name} : ""}` : ""}`
            )
            .join("") || ""
        )
      }

      return `
        ${name}: (
          ${getParamsWithTypes()}
          extraParams?: string,
          headers?: object,
          signal?: GenericAbortSignal,
        ): Promise<{ success: AxiosResponse<KoiosTypes.${name}Response>; error: KoiosTypes.IError }> => {
          return client.${method}(
            \`${path}?${getQueryString()}\${extraParams ? extraParams : ""}\`, ${getPostParams()}
            { signal, headers },
          )
        }
      `
    })}
  }
}
`

fs.writeFileSync("src/methods.ts", prettier.format(methods, prettierOptions))

/*********************************************
 * Build Types
 */

const buildAllOf = (schema) => {
  return ""
}

const buildInterface = (schema, prop, parentType) => {
  let type = mapTypes(schema.type || "object")
  if (schema.allOf) type = "allOf"
  if (schema.additionalProperties?.oneOf) type = "oneOf"
  if (schema.enum) type = "enum"

  const printNullable = schema.nullable ? " | null" : ""
  const printProp = prop ? `${prop}: ` : ""

  switch (type) {
    case "[]":
      return `\n${printProp}${buildInterface(schema.items)}[]`
    case "{}":
      return `\n${printProp}{\n${Object.keys(schema.properties || {})
        .map((prop) => buildInterface(schema.properties[prop], prop))
        .join("")}}${printNullable}`
    case "allOf":
      return `\n${printProp} (${schema.allOf.map((i) => buildInterface(i))})${printNullable}`
    case "oneOf":
      return `\n${printProp} ${schema.additionalProperties.oneOf
        .map((i) => mapTypes(i.type))
        .join(" | ")}${printNullable}`
    case "enum":
      return `\n${printProp} ${schema.enum.map((i) => `"${i}"`).join(" | ")}${printNullable}`
    default:
      return `\n${printProp} ${type}${printNullable}`
  }
}

const types = `
import { AxiosError } from "axios"

export interface IError {
  type: "error" | "no-response" | "bad-request"
  message: string
  name: string
  error: AxiosError
}

${schemaJson
  .map((op) => {
    const { path, method } = op
    const postfix = (path === "/asset_info" && method === "post" && "Bulk") || "" // exception for /asset_info POST method
    const name =
      path.replace(/\//g, "").replace(/(?:_| |\b)(\w)/g, function ($1) {
        return $1.toUpperCase().replace("_", "")
      }) + postfix

    const { schema } = op.responses["200"].content["application/json"]

    return `
      export type ${name}Response = I${name}[]
      export interface I${name}${buildInterface(schema.items)}
    `
  })
  .join("\n")}
`

fs.writeFileSync("src/types.ts", prettier.format(types, prettierOptions))
