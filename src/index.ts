import createClient, { HeadersOptions } from "openapi-fetch"
import type { paths } from "./schema/schema"
import * as KoiosTypes from "./schema/schema"

export default (baseUrl: string, headers?: HeadersOptions) => {
  return createClient<paths>({
    baseUrl,
    headers,
  })
}
