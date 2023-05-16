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

      let notRequired = true
      const getParamsWithTypesRaw = (() => {
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
        return _get || _post
      })()

      const getParamsWithTypes = getParamsWithTypesRaw
        ? `params${notRequired ? "?" : ""}: { ${getParamsWithTypesRaw} },`
        : ""

      const getPostParams = (() => {
        const _postParams = Object.keys(postProperties)
          .map((prop) => `${prop}: params.${prop}`)
          .join(",\n")
        return _postParams ? `{ ${_postParams}, },` : ""
      })()

      const getQueryString = (() => {
        return (
          getParameters
            .map(
              (param) =>
                `${param.name ? `\${params.${param.name} ? "&${param.name}=" + params.${param.name} : ""}` : ""}`
            )
            .join("") || ""
        )
      })()

      const printDescription = `
        \n/**
          ${op.description ? `* ${op.description}` : ""}
          ${getParamsWithTypesRaw
            .replaceAll("\n", "")
            .split(",")
            .filter((i) => i)
            .map((i) => {
              const [key, value] = i.split(":")
              const isReqired = key.includes("?")
              return `* @param params.${key.replaceAll("?", "")} ${value} ${isReqired ? "optional" : ""}`
            })
            .join("\n")}
        * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
        * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
        * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
        */`

      return `
        ${printDescription}
        ${name}: (
          ${getParamsWithTypes}
          extraParams?: string,
          headers?: object,
          signal?: GenericAbortSignal,
        ): Promise<{ success: AxiosResponse<KoiosTypes.${name}Response>; error: KoiosTypes.IError }> => {
          return client.${method}(
            \`${path}?${getQueryString}\${extraParams ? extraParams : ""}\`, ${getPostParams}
            { signal, headers },
          )
        }
      \n`
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
  const printDescription = schema.description
    ? schema.example
      ? `\n/** \n* ${schema.description} \n* @example \n* ${JSON.stringify(schema.example, null, 2).replaceAll(
          "\n",
          "\n* "
        )} \n*/`
      : `\n/** ${schema.description} */`
    : ""

  switch (type) {
    case "[]":
      return `${printDescription}\n${printProp} ${buildInterface(schema.items)}[]`
    case "{}":
      return `${printDescription}\n${printProp} {\n${Object.keys(schema.properties || {})
        .map((prop) => buildInterface(schema.properties[prop], prop))
        .join("")}}${printNullable}`
    case "allOf":
      return `${printDescription}\n${printProp} (${schema.allOf.map((i) => buildInterface(i))})${printNullable}`
    case "oneOf":
      return `${printDescription}\n${printProp} ${schema.additionalProperties.oneOf
        .map((i) => mapTypes(i.type))
        .join(" | ")}${printNullable}`
    case "enum":
      return `${printDescription}\n${printProp} ${schema.enum.map((i) => `"${i}"`).join(" | ")}${printNullable}`
    default:
      return `${printDescription}\n${printProp} ${type}${printNullable}`
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
     /**
      ${op.summary ? `* ${op.summary}` : ""}
      ${op.description ? `* ${op.description}` : ""}
      */
      export type ${name}Response = I${name}[]
      export interface I${name}${buildInterface(schema.items)}
    `
  })
  .join("\n")}
`

fs.writeFileSync("src/types.ts", prettier.format(types, prettierOptions))
