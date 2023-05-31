<a href="https://www.npmjs.com/package/koios-tiny-client">
  <img src="https://img.shields.io/npm/v/koios-tiny-client/latest?style=for-the-badge"
</a>
<a href="https://github.com/ray-network/koios-tiny-client/actions">
  <img src="https://img.shields.io/github/actions/workflow/status/ray-network/koios-tiny-client/codeql.yml?label=CodeQL&style=for-the-badge"
</a>
<a href="https://discord.gg/WhZmm46APN">
  <img src="https://img.shields.io/discord/852538978946383893?label=Discord&style=for-the-badge"
</a>
  
# Koios Tiny TypeScript Client

Automatically generated Axios-based client for [Koios](https://koios.rest) Cardano RESTful API based on [koiosapi.yaml](https://api.koios.rest/koiosapi.yaml) schema. Works great with [raygraph-output](https://github.com/ray-network/raygraph-output) (a dockered Koios-based & DB Sync Cardano API solution extended by Postgraphile) and the original Koios. Visit [RayGraph.io](https://raygraph.io) for more information.

## Installation

To install the client with Yarn, run:

```TypeScript
yarn install koios-tiny-client
```

To install the client with NPM, run:

```TypeScript
npm i koios-tiny-client
```

## Usage

![Example](https://github.com/ray-network/koios-tiny-client/assets/38279597/4bc0cdee-a75c-4547-bbe9-994707bb7814)

```TypeScript
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

app()
```

## Advanced Usage

<details>
<summary>Filtering / Ordering</summary>
  
Read https://api.koios.rest/#overview--api-usage for more information
``` TypeScript
const { methods: Koios } = new KoiosTinyClient("https://api.koios.rest/api/v0")
  
const Blocks = await Koios.Blocks("&pool=eq.pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc&order=block_height.asc")
console.log(Blocks)
  
const PoolsList = await Koios.PoolList("&ticker=like.*RAY*")
console.log(PoolsList)
```

</details>

<details>
Read https://api.koios.rest/#overview--pagination-offsetlimit for more information
<summary>Offset / Limit / Pagination</summary>

```TypeScript
const { methods: Koios } = new KoiosTinyClient("https://api.koios.rest/api/v0")

// simple offset limit
const Blocks = await Koios.Blocks("&offset=10&limit=5")
console.log(Blocks)

// advanced pagination
const headers = { Prefer: "count=estimated" } // get the exact "content-range" header in the request
const PoolListFirst5Items = await Koios.PoolList("&limit=5", headers)
if (PoolListFirst5Items.success) {
  const contentRange = PoolListFirst5Items.success.headers?.["content-range"] || ""
  const [currentPosition, totalItems] = contentRange.split('/')
  const queryRange = `${Number(totalItems) - 5}-${Number(totalItems)}`
  const PoolListLast5Items = await Koios.PoolList(undefined, { ...headers, Range: queryRange})
  console.log(PoolListLast5Items)
}
```

</details>

<details>
<summary>Custom Axios Interceptors</summary>

```TypeScript
const { client, methods: Koios } = new KoiosTinyClient("https://api.koios.rest/api/v0")

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

```TypeScript
const { methods: Koios } = new KoiosTinyClient("https://api.koios.rest/api/v0")

const abortController = new AbortController()
setTimeout(() => {
  abortController.abort() // cancel request
  console.log('Aborted!')
}, 200)
const PoolList = await Koios.PoolList(undefined, undefined, abortController.signal)
```

</details>

<details>
<summary>Accessing Types</summary>

```TypeScript
import KoiosTinyClient, { KoiosTypes } from "koios-tiny-client"

// no error
const correctItem: KoiosTypes.IAssetTokenRegistry = {
  policy_id: "somePolidyId",
  asset_name: "someAssetNameOrNull",
  asset_name_ascii: "someAsciiName",
  ticker: "someTicker",
  description: "someDescription",
  url: "someUrl",
  decimals: 6,
  logo: "someBase64PngString"
}

// error
const wrongItem: KoiosTypes.IAssetTokenRegistry = {
  policy_id: "somePolidyId",
}
```

</details>

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
https://mainnet.blockchain.raygraph.io
```

```
https://preprod.blockchain.raygraph.io
```

```
https://preview.blockchain.raygraph.io
```

## Methods

Use the https://api.koios.rest/ sandbox to explore and live query all available API methods

<!-- START -->
<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>
        Tip()
      </td>
      <td>
        Query Chain Tip<br />
        Get the tip info about the latest block seen by chain
      </td>
    </tr>
    <tr>
      <td>
        Genesis()
      </td>
      <td>
        Get Genesis info<br />
        Get the Genesis parameters used to start specific era on chain
      </td>
    </tr>
    <tr>
      <td>
        Totals()
      </td>
      <td>
        Get historical tokenomic stats<br />
        Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
      </td>
    </tr>
    <tr>
      <td>
        ParamUpdates()
      </td>
      <td>
        Param Update Proposals<br />
        Get all parameter update proposals submitted to the chain starting Shelley era
      </td>
    </tr>
    <tr>
      <td>
        EpochInfo()
      </td>
      <td>
        Epoch Information<br />
        Get the epoch information, all epochs if no epoch specified
      </td>
    </tr>
    <tr>
      <td>
        EpochParams()
      </td>
      <td>
        Epoch's Protocol Parameters<br />
        Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
      </td>
    </tr>
    <tr>
      <td>
        EpochBlockProtocols()
      </td>
      <td>
        Epoch's Block Protocols<br />
        Get the information about block protocol distribution in epoch
      </td>
    </tr>
    <tr>
      <td>
        Blocks()
      </td>
      <td>
        Block List<br />
        Get summarised details about all blocks (paginated - latest first)
      </td>
    </tr>
    <tr>
      <td>
        BlockInfo()
      </td>
      <td>
        Block Information<br />
        Get detailed information about a specific block
      </td>
    </tr>
    <tr>
      <td>
        BlockTxs()
      </td>
      <td>
        Block Transactions<br />
        Get a list of all transactions included in provided blocks
      </td>
    </tr>
    <tr>
      <td>
        TxInfo()
      </td>
      <td>
        Transaction Information<br />
        Get detailed information about transaction(s)
      </td>
    </tr>
    <tr>
      <td>
        TxUtxos()
      </td>
      <td>
        Transaction UTxOs<br />
        Get UTxO set (inputs/outputs) of transactions.
      </td>
    </tr>
    <tr>
      <td>
        TxMetadata()
      </td>
      <td>
        Transaction Metadata<br />
        Get metadata information (if any) for given transaction(s)
      </td>
    </tr>
    <tr>
      <td>
        TxMetalabels()
      </td>
      <td>
        Transaction Metadata Labels<br />
        Get a list of all transaction metalabels
      </td>
    </tr>
    <tr>
      <td>
        Submittx()
      </td>
      <td>
        Submit Transaction<br />
        Submit an already serialized transaction to the network.
      </td>
    </tr>
    <tr>
      <td>
        TxStatus()
      </td>
      <td>
        Transaction Status (Block Confirmations)<br />
        Get the number of block confirmations for a given transaction hash list
      </td>
    </tr>
    <tr>
      <td>
        AddressInfo()
      </td>
      <td>
        Address Information<br />
        Get address info - balance, associated stake address (if any) and UTxO set for given addresses
      </td>
    </tr>
    <tr>
      <td>
        AddressTxs()
      </td>
      <td>
        Address Transactions<br />
        Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
      </td>
    </tr>
    <tr>
      <td>
        CredentialUtxos()
      </td>
      <td>
        UTxOs from payment credentials<br />
        Get a list of UTxO against input payment credential array including their balances
      </td>
    </tr>
    <tr>
      <td>
        AddressAssets()
      </td>
      <td>
        Address Assets<br />
        Get the list of all the assets (policy, name and quantity) for given addresses
      </td>
    </tr>
    <tr>
      <td>
        CredentialTxs()
      </td>
      <td>
        Transactions from payment credentials<br />
        Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
      </td>
    </tr>
    <tr>
      <td>
        AccountList()
      </td>
      <td>
        Account List<br />
        Get a list of all stake addresses that have atleast 1 transaction
      </td>
    </tr>
    <tr>
      <td>
        AccountInfo()
      </td>
      <td>
        Account Information<br />
        Get the account information for given stake addresses
      </td>
    </tr>
    <tr>
      <td>
        AccountUtxos()
      </td>
      <td>
        Account UTxOs<br />
        Get a list of all UTxOs for a given stake address (account)
      </td>
    </tr>
    <tr>
      <td>
        AccountInfoCached()
      </td>
      <td>
        Account Information (Cached)<br />
        Get the cached account information for given stake addresses, effective for registered accounts
      </td>
    </tr>
    <tr>
      <td>
        AccountRewards()
      </td>
      <td>
        Account Rewards<br />
        Get the full rewards history (including MIR) for given stake addresses
      </td>
    </tr>
    <tr>
      <td>
        AccountUpdates()
      </td>
      <td>
        Account Updates<br />
        Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
      </td>
    </tr>
    <tr>
      <td>
        AccountAddresses()
      </td>
      <td>
        Account Addresses<br />
        Get all addresses associated with given staking accounts
      </td>
    </tr>
    <tr>
      <td>
        AccountAssets()
      </td>
      <td>
        Account Assets<br />
        Get the native asset balance for a given stake address
      </td>
    </tr>
    <tr>
      <td>
        AccountHistory()
      </td>
      <td>
        Account History<br />
        Get the staking history of given stake addresses (accounts)
      </td>
    </tr>
    <tr>
      <td>
        AssetList()
      </td>
      <td>
        Asset List<br />
        Get the list of all native assets (paginated)
      </td>
    </tr>
    <tr>
      <td>
        AssetTokenRegistry()
      </td>
      <td>
        Asset Token Registry<br />
        Get a list of assets registered via token registry on github
      </td>
    </tr>
    <tr>
      <td>
        AssetAddresses()
      </td>
      <td>
        Asset Addresses<br />
        Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
      </td>
    </tr>
    <tr>
      <td>
        AssetAddressList()
      </td>
      <td>
        Asset Address List [DEPRECATED]<br />
        Get the list of all addresses holding a given asset (replaced by asset_addresses)
      </td>
    </tr>
    <tr>
      <td>
        AssetNftAddress()
      </td>
      <td>
        NFT Address<br />
        Get the address where specified NFT currently reside on.
      </td>
    </tr>
    <tr>
      <td>
        AssetInfo()
      </td>
      <td>
        Asset Information<br />
        Get the information of an asset including first minting & token registry metadata
      </td>
    </tr>
    <tr>
      <td>
        AssetInfoBulk()
      </td>
      <td>
        Asset Information (Bulk)<br />
        Get the information of a list of assets including first minting & token registry metadata
      </td>
    </tr>
    <tr>
      <td>
        AssetHistory()
      </td>
      <td>
        Asset History<br />
        Get the mint/burn history of an asset
      </td>
    </tr>
    <tr>
      <td>
        PolicyAssetAddresses()
      </td>
      <td>
        Policy Asset Address List<br />
        Get the list of addresses with quantity for each asset on the given policy <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
      </td>
    </tr>
    <tr>
      <td>
        PolicyAssetInfo()
      </td>
      <td>
        Policy Asset Information<br />
        Get the information for all assets under the same policy
      </td>
    </tr>
    <tr>
      <td>
        AssetPolicyInfo()
      </td>
      <td>
        Asset Policy Information [DEPRECATED]<br />
        Get the information for all assets under the same policy (replaced by asset_addresses)
      </td>
    </tr>
    <tr>
      <td>
        PolicyAssetList()
      </td>
      <td>
        Policy Asset List<br />
        Get the list of asset under the given policy (including balances)
      </td>
    </tr>
    <tr>
      <td>
        AssetSummary()
      </td>
      <td>
        Asset Summary<br />
        Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
      </td>
    </tr>
    <tr>
      <td>
        AssetTxs()
      </td>
      <td>
        Asset Transactions<br />
        Get the list of current or all asset transaction hashes (newest first)
      </td>
    </tr>
    <tr>
      <td>
        PoolList()
      </td>
      <td>
        Pool List<br />
        A list of all currently registered/retiring (not retired) pools
      </td>
    </tr>
    <tr>
      <td>
        PoolInfo()
      </td>
      <td>
        Pool Information<br />
        Current pool statuses and details for a specified list of pool ids
      </td>
    </tr>
    <tr>
      <td>
        PoolStakeSnapshot()
      </td>
      <td>
        Pool Stake Snapshot<br />
        Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
      </td>
    </tr>
    <tr>
      <td>
        PoolDelegators()
      </td>
      <td>
        Pool Delegators List<br />
        Return information about live delegators for a given pool.
      </td>
    </tr>
    <tr>
      <td>
        PoolDelegatorsHistory()
      </td>
      <td>
        Pool Delegators History<br />
        Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
      </td>
    </tr>
    <tr>
      <td>
        PoolBlocks()
      </td>
      <td>
        Pool Blocks<br />
        Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
      </td>
    </tr>
    <tr>
      <td>
        PoolHistory()
      </td>
      <td>
        Pool Stake, Block and Reward History<br />
        Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
      </td>
    </tr>
    <tr>
      <td>
        PoolUpdates()
      </td>
      <td>
        Pool Updates (History)<br />
        Return all pool updates for all pools or only updates for specific pool if specified
      </td>
    </tr>
    <tr>
      <td>
        PoolRelays()
      </td>
      <td>
        Pool Relays<br />
        A list of registered relays for all currently registered/retiring (not retired) pools
      </td>
    </tr>
    <tr>
      <td>
        PoolMetadata()
      </td>
      <td>
        Pool Metadata<br />
        Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
      </td>
    </tr>
    <tr>
      <td>
        NativeScriptList()
      </td>
      <td>
        Native Script List<br />
        List of all existing native script hashes along with their creation transaction hashes
      </td>
    </tr>
    <tr>
      <td>
        PlutusScriptList()
      </td>
      <td>
        Plutus Script List<br />
        List of all existing Plutus script hashes along with their creation transaction hashes
      </td>
    </tr>
    <tr>
      <td>
        ScriptRedeemers()
      </td>
      <td>
        Script Redeemers<br />
        List of all redeemers for a given script hash
      </td>
    </tr>
    <tr>
      <td>
        DatumInfo()
      </td>
      <td>
        Datum Information<br />
        List of datum information for given datum hashes
      </td>
    </tr>
  </tbody>
</table>
 <!-- END -->

## Code Generation & Build

Downloads the YAML schema and generates library methods and types

```sh
yarn prepare && yarn codegen && yarn build
```
