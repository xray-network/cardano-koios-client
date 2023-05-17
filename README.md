# Koios Tiny TypeScript Client

Automatically generated Axios-based client for [Koios](https://koios.rest) Cardano RESTful API based on [koiosapi.yaml](https://api.koios.rest/koiosapi.yaml) schema. Works great with [raygraph-output](https://github.com/ray-network/raygraph-output) (a dockered Koios-based & DB Sync Cardano API solution extended by Postgraphile) and the original Koios. Visit [RayGraph.io](https://raygraph.io) for more information.

## Installation

To install the client with Yarn, run:
``` TypeScript
yarn install koios-tiny-client
```

To install the client with NPM, run:
``` TypeScript
npm i koios-tiny-client
```

## Usage

Use the https://api.koios.rest/ sandbox to explore and live query all available API methods

![Example](https://github.com/ray-network/koios-tiny-client/assets/38279597/4bc0cdee-a75c-4547-bbe9-994707bb7814)

``` TypeScript
import KoiosTinyClient from "koios-tiny-client"

const { client, methods: Koios } = new KoiosTinyClient("https://api.koios.rest/api/v0")

// async call
const app = async () => {
  const Tip = await Koios.Tip()
  if (Tip.success) {
    console.log(Tip.success.data[0].block_no)
  }
  if (Tip.error) {
    console.error(Tip.error)
  }
}

app();
```

## API URLs
Managed by Cardano Community (Koios Elastic Query Layer / HAproxy Balancer)
```
https://api.koios.rest/api/v0
```
```
https://preprod.koios.rest/api/v0
```
```
https://preview.koios.rest/api/v0
```
```
https://guild.koios.rest/api/v0
```

Managed by Ray Network (RayGraph-Output Cluster / Cloudflare FAW & Load Balancer)
```
https://mainnet.blockchain.raygraph.io/rpc
```
```
https://preprod.blockchain.raygraph.io/rpc
```
```
https://preview.blockchain.raygraph.io/rpc
```

## Advanced

<details>
<summary>Filtering / Ordering</summary>
  
Read https://api.koios.rest/#overview--api-usage for more information
``` TypeScript
const { methods: KoiosClient } = new KoiosTinyClient("https://api.koios.rest/api/v0")
  
const Blocks = await KoiosClient.Blocks("&pool=eq.pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc&order=block_height.asc")
console.log(Blocks)
  
const PoolsList = await KoiosClient.PoolList("&ticker=like.*RAY*")
console.log(PoolsList)
```

</details>

<details>
Read https://api.koios.rest/#overview--pagination-offsetlimit for more information
<summary>Offset / Limit / Pagination</summary>

``` TypeScript
const { methods: KoiosClient } = new KoiosTinyClient("https://api.koios.rest/api/v0")
  
// simple offset limit
const Blocks = await KoiosClient.Blocks("&offset=10&limit=5")
console.log(Blocks)
  
// advanced pagination
const headers = { Prefer: "count=estimated" } // get the exact "content-range" header in the request
const PoolListFirst5Items = await KoiosClient.PoolList("&limit=5", headers)
if (PoolListFirst5Items.success) {
  const contentRange = PoolListFirst5Items.success.headers?.["content-range"] || ""
  const [currentPosition, totalItems] = contentRange.split('/')
  const queryRange = `${Number(totalItems) - 5}-${Number(totalItems)}`
  const PoolListLast5Items = await KoiosClient.PoolList(undefined, { ...headers, Range: queryRange})
  console.log(PoolListLast5Items)
} 
```

</details>

<details>
<summary>Custom Axios Interceptors</summary>

``` TypeScript
const { client, methods: KoiosClient } = new KoiosTinyClient("https://api.koios.rest/api/v0")
  
// your response interceptor, used as default shown in the example below
client.interceptors.response.use(
  (response: AxiosResponse): any => {
    return {
      success: response,
    }
  },
  (error: AxiosError): { error: AxiosError } => {
    return {
      error,
    }
  }
)
  
// your request interceptor  
client.interceptors.request.use(
  // ...  
)
```

</details>

<details>
<summary>Request Cancellation</summary>

``` TypeScript
const { methods: KoiosClient } = new KoiosTinyClient("https://api.koios.rest/api/v0")
  
const abortController = new AbortController()
setTimeout(() => {
  abortController.abort() // cancel request
  console.log('Aborted!')
}, 200)
const PoolListFirst5Items = await KoiosClient.PoolList(undefined, undefined, abortController.signal)
```

</details>

<details>
<summary>Accessing Types</summary>

``` TypeScript
import KoiosTinyClient, { KoiosTypes } from "koios-tiny-client"
  
const correctItem = {
  policy_id: "somePolidyId",
  asset_name: "someAssetNameOrNull",
  asset_name_ascii: "someAsciiName",
  ticker: "someTicker",
  description: "someDescription",
  url: "someUrl",
  decimals: 6,
  logo: "someBase64PngString"
}

const wrongItem = {
  policy_id: "somePolidyId",
}

const response: KoiosTypes.AssetTokenRegistryResponse = [correctItem] // no type error
const someVar: KoiosTypes.IAssetTokenRegistry = correctItem // no type error

const response2: KoiosTypes.AssetTokenRegistryResponse = [wrongItem] // type error
const someVar2: KoiosTypes.IAssetTokenRegistry = wrongItem // type error
```

</details>

## Features

[//]: <> (START)
[//]: <> (END)

## Code Generation & Build

Downloads the YAML schema and generates library methods and types
``` sh
yarn prepare && yarn codegen && yarn build
```
