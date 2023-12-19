import axios, { Axios, AxiosError, AxiosResponse, GenericAbortSignal } from "axios"
import methods from "./methods"

export default class KoiosTinyClientClass {
  public client: Axios
  public methods: ReturnType<typeof methods>

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL })
    this.client.interceptors.response.use(
      (response: AxiosResponse): any => {
        return {
          ok: response,
        }
      },
      (error: AxiosError): any => {
        return {
          error,
        }
      }
    )
    this.methods = methods(this.client)
  }
}

export type * as KoiosTypes from "./types"
