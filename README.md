# Koios Tiny TypeScript Client

Automatically generated Axios-based client for [Koios](https://koios.rest) Cardano RESTful API based on [koiosapi.yaml](https://api.koios.rest/koiosapi.yaml) schema. Works great with [raygraph-output](https://github.com/ray-network/raygraph-output) (a dockered Koios-based solution extended by Postgraphile) and the original Koios. Visit [RayGraph.io](https://raygraph.io) for more information.

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

## Advanced

<details>
<summary>Filtering / Sorting</summary>

Read https://api.koios.rest/#overview--api-usage for more information
``` TypeScript
  Hello
```

</details>

<details>
Read https://api.koios.rest/#overview--pagination-offsetlimit for more information
<summary>Pagination</summary>

``` TypeScript
  Hello
```

</details>

<details>
<summary>Custom Axios Interceptors</summary>

``` TypeScript
  Hello
```

</details>

<details>
<summary>Request Cancellation</summary>

``` TypeScript
  Hello
```

</details>

<details>
<summary>Accessing Types</summary>

``` TypeScript
  Hello
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