<a href="https://discord.gg/WhZmm46APN"><img alt="Discord" src="https://img.shields.io/discord/852538978946383893?style=for-the-badge&logo=discord&label=Discord&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://www.npmjs.com/package/cardano-koios-client"><img alt="NPM" src="https://img.shields.io/npm/v/cardano-koios-client/latest?style=for-the-badge&logo=npm&labelColor=%231940ED&color=%233FCB9B"></a>
<a href="https://github.com/xray-network/cardano-koios-client/actions"><img alt="CODEQL" src="https://img.shields.io/github/actions/workflow/status/xray-network/cardano-koios-client/codeql.yml?label=CodeQL&logo=github&style=for-the-badge&labelColor=%231940ED&color=%233FCB9B"></a>
  
# Cardano Koios TypeScript Client

> [!NOTE]
> Automatically generated Openapi-fetch (Axios) client for [Koios](https://koios.rest) Cardano RESTful API based on [koiosapi-mainnet.yaml](https://raw.githubusercontent.com/cardano-community/koios-artifacts/main/specs/results/koiosapi-mainnet.yaml) schema. Works great with XRAY/Graph Koios Tiny and the original Koios

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install cardano-koios-client
```

To install the client with NPM, run:

```TypeScript
npm i cardano-koios-client
```

## Usage

```TypeScript
import KoiosClient from "cardano-koios-client"

const client = KoiosClient("https://api.koios.rest/api/v1")

const app = async () => {
  const tip = await client.GET("/tip")

  if (tip.data) {
    console.log(tip.data?.[0]?.block_no)
  }
  if (tip.error) {
    console.error(tip.error)
  }
}

app()
```

## Advanced Usage

<details>
<summary>Headers / Query Params</summary>
  
Read https://api.koios.rest/#overview--api-usage for more information
``` TypeScript
import KoiosClient from "cardano-koios-client"

const baseUrl = "https://api.koios.rest/api/v1"
const headers = {} // rest headers
const client = KoiosClient(baseUrl, headers)

const app = async () => {
  const blocks = await client.GET("/blocks", {
    headers: { "Content-Type": "application/json" }, // one shot headers
    params: { 
      query: { 
        limit: 1,
        offset: 100,
        epoch_no: "eq.250",
      },
    },
  })

  console.log(blocks.data)
}

app()
```

</details>

<details>
<summary>Request Cancellation (AbortSignal)</summary>

```TypeScript
import KoiosClient from "cardano-koios-client"

const client = KoiosClient("https://api.koios.rest/api/v1")

const app = async () => {
  const abortController = new AbortController()

  setTimeout(() => {
    abortController.abort() // cancel request
    console.log('Aborted!')
  }, 200)

  const tip = await client.GET("/tip", {
    signal: abortController.signl,
  })

  if (tip.data) {
    console.log(tip.data?.[0]?.block_no)
  }
  if (tip.error) {
    console.error(tip.error)
  }
}

app()
```

</details>

## Endpoints

* Check OpenAPI fetch documentations for available endpoint parameters: https://openapi-ts.pages.dev/openapi-fetch/
* The client uses OpenAPI definitions from the Koios configuration: [koiosapi-mainnet.yaml](https://raw.githubusercontent.com/cardano-community/koios-artifacts/main/specs/results/koiosapi-mainnet.yaml)
* A complete list of endpoints can be found here (RapiDoc): https://api.koios.rest


## API URLs

Managed by Cardano Community (Koios Elastic Query Layer, HAproxy Balancer)

```
https://api.koios.rest/api/v1
```

```
https://preprod.koios.rest/api/v1
```

```
https://preview.koios.rest/api/v1
```

```
https://guild.koios.rest/api/v1
```

Managed by XRAY/Network (XRAY/Graph, Cloudflare WAF & Load Balancer)

```
https://graph.xray.app/output/koios/mainnet/api/v1
```

```
https://graph.xray.app/output/koios/preprod/api/v1
```

```
https://graph.xray.app/output/koios/preview/api/v1
```
