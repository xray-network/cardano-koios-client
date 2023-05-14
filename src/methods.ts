import { Axios, AxiosResponse, GenericAbortSignal } from "axios"
import * as KoiosTypes from "./types"

export default (client: Axios) => {
  return {
    Tip: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TipResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/tip?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    Genesis: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.GenesisResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/genesis?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    Totals: (
      params?: { _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TotalsResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/totals?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    ParamUpdates: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.ParamUpdatesResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/param_updates?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    EpochInfo: (
      params?: { _epoch_no?: string; _include_next_epoch?: boolean },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.EpochInfoResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/epoch_info?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${
          params._include_next_epoch ? "&_include_next_epoch=" + params._include_next_epoch : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    EpochParams: (
      params?: { _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.EpochParamsResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/epoch_params?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    EpochBlockProtocols: (
      params?: { _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.EpochBlockProtocolsResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/epoch_block_protocols?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    Blocks: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.BlocksResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/blocks?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    BlockInfo: (
      params: { _block_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.BlockInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/block_info?${extraParams ? extraParams : ""}`,
        { _block_hashes: params._block_hashes },
        { signal, headers }
      )
    },
    BlockTxs: (
      params: { _block_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.BlockTxsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/block_txs?${extraParams ? extraParams : ""}`,
        { _block_hashes: params._block_hashes },
        { signal, headers }
      )
    },
    TxInfo: (
      params: { _tx_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TxInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/tx_info?${extraParams ? extraParams : ""}`,
        { _tx_hashes: params._tx_hashes },
        { signal, headers }
      )
    },
    TxUtxos: (
      params: { _tx_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TxUtxosResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/tx_utxos?${extraParams ? extraParams : ""}`,
        { _tx_hashes: params._tx_hashes },
        { signal, headers }
      )
    },
    TxMetadata: (
      params: { _tx_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TxMetadataResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/tx_metadata?${extraParams ? extraParams : ""}`,
        { _tx_hashes: params._tx_hashes },
        { signal, headers }
      )
    },
    TxMetalabels: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TxMetalabelsResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/tx_metalabels?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    TxStatus: (
      params: { _tx_hashes: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.TxStatusResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/tx_status?${extraParams ? extraParams : ""}`,
        { _tx_hashes: params._tx_hashes },
        { signal, headers }
      )
    },
    AddressInfo: (
      params: { _addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AddressInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/address_info?${extraParams ? extraParams : ""}`,
        { _addresses: params._addresses },
        { signal, headers }
      )
    },
    AddressTxs: (
      params: { _addresses: string[]; _after_block_height?: number },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AddressTxsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/address_txs?${extraParams ? extraParams : ""}`,
        { _addresses: params._addresses, _after_block_height: params._after_block_height },
        { signal, headers }
      )
    },
    CredentialUtxos: (
      params: { _payment_credentials: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.CredentialUtxosResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/credential_utxos?${extraParams ? extraParams : ""}`,
        { _payment_credentials: params._payment_credentials },
        { signal, headers }
      )
    },
    AddressAssets: (
      params: { _addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AddressAssetsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/address_assets?${extraParams ? extraParams : ""}`,
        { _addresses: params._addresses },
        { signal, headers }
      )
    },
    CredentialTxs: (
      params: { _payment_credentials: string[]; _after_block_height?: number },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.CredentialTxsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/credential_txs?${extraParams ? extraParams : ""}`,
        { _payment_credentials: params._payment_credentials, _after_block_height: params._after_block_height },
        { signal, headers }
      )
    },
    AccountList: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountListResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/account_list?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    AccountInfo: (
      params: { _stake_addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_info?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses },
        { signal, headers }
      )
    },
    AccountUtxos: (
      params: { _stake_address: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountUtxosResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/account_utxos?${params._stake_address ? "&_stake_address=" + params._stake_address : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    AccountInfoCached: (
      params: { _stake_addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountInfoCachedResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_info_cached?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses },
        { signal, headers }
      )
    },
    AccountRewards: (
      params: { _stake_addresses: string[]; _epoch_no?: number },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountRewardsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_rewards?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses, _epoch_no: params._epoch_no },
        { signal, headers }
      )
    },
    AccountUpdates: (
      params: { _stake_addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountUpdatesResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_updates?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses },
        { signal, headers }
      )
    },
    AccountAddresses: (
      params: { _stake_addresses: string[]; _first_only?: boolean; _empty?: boolean },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountAddressesResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_addresses?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses, _first_only: params._first_only, _empty: params._empty },
        { signal, headers }
      )
    },
    AccountAssets: (
      params: { _stake_addresses: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountAssetsResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_assets?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses },
        { signal, headers }
      )
    },
    AccountHistory: (
      params: { _stake_addresses: string[]; _epoch_no?: number },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AccountHistoryResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/account_history?${extraParams ? extraParams : ""}`,
        { _stake_addresses: params._stake_addresses, _epoch_no: params._epoch_no },
        { signal, headers }
      )
    },
    AssetList: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetListResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/asset_list?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    AssetTokenRegistry: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetTokenRegistryResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/asset_token_registry?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    AssetAddresses: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetAddressesResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_addresses?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    AssetAddressList: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetAddressListResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_address_list?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    AssetNftAddress: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetNftAddressResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_nft_address?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    AssetInfo: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetInfoResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_info?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    AssetInfoBulk: (
      params: { _asset_list: string[][] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetInfoBulkResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/asset_info?${extraParams ? extraParams : ""}`,
        { _asset_list: params._asset_list },
        { signal, headers }
      )
    },
    AssetHistory: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetHistoryResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_history?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    PolicyAssetAddresses: (
      params: { _asset_policy: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PolicyAssetAddressesResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/policy_asset_addresses?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    PolicyAssetInfo: (
      params: { _asset_policy: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PolicyAssetInfoResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/policy_asset_info?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    AssetPolicyInfo: (
      params: { _asset_policy: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetPolicyInfoResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_policy_info?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    PolicyAssetList: (
      params: { _asset_policy: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PolicyAssetListResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/policy_asset_list?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    AssetSummary: (
      params: { _asset_policy: string; _asset_name?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetSummaryResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_summary?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    AssetTxs: (
      params: { _asset_policy: string; _asset_name?: string; _after_block_height?: number; _history?: boolean },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.AssetTxsResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/asset_txs?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${
          params._asset_name ? "&_asset_name=" + params._asset_name : ""
        }${params._after_block_height ? "&_after_block_height=" + params._after_block_height : ""}${
          params._history ? "&_history=" + params._history : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    PoolList: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolListResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/pool_list?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    PoolInfo: (
      params: { _pool_bech32_ids: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/pool_info?${extraParams ? extraParams : ""}`,
        { _pool_bech32_ids: params._pool_bech32_ids },
        { signal, headers }
      )
    },
    PoolStakeSnapshot: (
      params: { _pool_bech32: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolStakeSnapshotResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_stake_snapshot?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    PoolDelegators: (
      params: { _pool_bech32: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolDelegatorsResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_delegators?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    PoolDelegatorsHistory: (
      params: { _pool_bech32: string; _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolDelegatorsHistoryResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_delegators_history?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    PoolBlocks: (
      params: { _pool_bech32: string; _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolBlocksResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_blocks?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    PoolHistory: (
      params: { _pool_bech32: string; _epoch_no?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolHistoryResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_history?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""
        }${extraParams ? extraParams : ""}`,
        { signal, headers }
      )
    },
    PoolUpdates: (
      params?: { _pool_bech32?: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolUpdatesResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/pool_updates?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    PoolRelays: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolRelaysResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/pool_relays?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    PoolMetadata: (
      params?: { _pool_bech32_ids?: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PoolMetadataResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/pool_metadata?${extraParams ? extraParams : ""}`,
        { _pool_bech32_ids: params._pool_bech32_ids },
        { signal, headers }
      )
    },
    NativeScriptList: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.NativeScriptListResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/native_script_list?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    PlutusScriptList: (
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.PlutusScriptListResponse>; error: KoiosTypes.IError }> => {
      return client.get(`/plutus_script_list?${extraParams ? extraParams : ""}`, { signal, headers })
    },
    ScriptRedeemers: (
      params: { _script_hash: string },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.ScriptRedeemersResponse>; error: KoiosTypes.IError }> => {
      return client.get(
        `/script_redeemers?${params._script_hash ? "&_script_hash=" + params._script_hash : ""}${
          extraParams ? extraParams : ""
        }`,
        { signal, headers }
      )
    },
    DatumInfo: (
      params?: { _datum_hashes?: string[] },
      extraParams?: string,
      headers?: object,
      signal?: GenericAbortSignal
    ): Promise<{ success: AxiosResponse<KoiosTypes.DatumInfoResponse>; error: KoiosTypes.IError }> => {
      return client.post(
        `/datum_info?${extraParams ? extraParams : ""}`,
        { _datum_hashes: params._datum_hashes },
        { signal, headers }
      )
    },
  }
}
