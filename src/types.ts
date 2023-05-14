import { AxiosError } from "axios"

export interface IError {
  type: "error" | "no-response" | "bad-request"
  message: string
  name: string
  error: AxiosError
}

export type TipResponse = ITip[]
export interface ITip {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type GenesisResponse = IGenesis[]
export interface IGenesis {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TotalsResponse = ITotals[]
export interface ITotals {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type ParamUpdatesResponse = IParamUpdates[]
export interface IParamUpdates {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type EpochInfoResponse = IEpochInfo[]
export interface IEpochInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type EpochParamsResponse = IEpochParams[]
export interface IEpochParams {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type EpochBlockProtocolsResponse = IEpochBlockProtocols[]
export interface IEpochBlockProtocols {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type BlocksResponse = IBlocks[]
export interface IBlocks {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type BlockInfoResponse = IBlockInfo[]
export interface IBlockInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type BlockTxsResponse = IBlockTxs[]
export interface IBlockTxs {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TxInfoResponse = ITxInfo[]
export interface ITxInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TxUtxosResponse = ITxUtxos[]
export interface ITxUtxos {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TxMetadataResponse = ITxMetadata[]
export interface ITxMetadata {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TxMetalabelsResponse = ITxMetalabels[]
export interface ITxMetalabels {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type TxStatusResponse = ITxStatus[]
export interface ITxStatus {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AddressInfoResponse = IAddressInfo[]
export interface IAddressInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AddressTxsResponse = IAddressTxs[]
export interface IAddressTxs {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type CredentialUtxosResponse = ICredentialUtxos[]
export interface ICredentialUtxos {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AddressAssetsResponse = IAddressAssets[]
export interface IAddressAssets {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type CredentialTxsResponse = ICredentialTxs[]
export interface ICredentialTxs {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountListResponse = IAccountList[]
export interface IAccountList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountInfoResponse = IAccountInfo[]
export interface IAccountInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountUtxosResponse = IAccountUtxos[]
export interface IAccountUtxos {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountInfoCachedResponse = IAccountInfoCached[]
export interface IAccountInfoCached {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountRewardsResponse = IAccountRewards[]
export interface IAccountRewards {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountUpdatesResponse = IAccountUpdates[]
export interface IAccountUpdates {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountAddressesResponse = IAccountAddresses[]
export interface IAccountAddresses {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountAssetsResponse = IAccountAssets[]
export interface IAccountAssets {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AccountHistoryResponse = IAccountHistory[]
export interface IAccountHistory {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetListResponse = IAssetList[]
export interface IAssetList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetTokenRegistryResponse = IAssetTokenRegistry[]
export interface IAssetTokenRegistry {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetAddressesResponse = IAssetAddresses[]
export interface IAssetAddresses {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetAddressListResponse = IAssetAddressList[]
export interface IAssetAddressList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetNftAddressResponse = IAssetNftAddress[]
export interface IAssetNftAddress {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetInfoResponse = IAssetInfo[]
export interface IAssetInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetInfoBulkResponse = IAssetInfoBulk[]
export interface IAssetInfoBulk {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetHistoryResponse = IAssetHistory[]
export interface IAssetHistory {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PolicyAssetAddressesResponse = IPolicyAssetAddresses[]
export interface IPolicyAssetAddresses {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PolicyAssetInfoResponse = IPolicyAssetInfo[]
export interface IPolicyAssetInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetPolicyInfoResponse = IAssetPolicyInfo[]
export interface IAssetPolicyInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PolicyAssetListResponse = IPolicyAssetList[]
export interface IPolicyAssetList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetSummaryResponse = IAssetSummary[]
export interface IAssetSummary {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type AssetTxsResponse = IAssetTxs[]
export interface IAssetTxs {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolListResponse = IPoolList[]
export interface IPoolList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolInfoResponse = IPoolInfo[]
export interface IPoolInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolStakeSnapshotResponse = IPoolStakeSnapshot[]
export interface IPoolStakeSnapshot {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolDelegatorsResponse = IPoolDelegators[]
export interface IPoolDelegators {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolDelegatorsHistoryResponse = IPoolDelegatorsHistory[]
export interface IPoolDelegatorsHistory {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolBlocksResponse = IPoolBlocks[]
export interface IPoolBlocks {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolHistoryResponse = IPoolHistory[]
export interface IPoolHistory {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolUpdatesResponse = IPoolUpdates[]
export interface IPoolUpdates {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolRelaysResponse = IPoolRelays[]
export interface IPoolRelays {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PoolMetadataResponse = IPoolMetadata[]
export interface IPoolMetadata {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type NativeScriptListResponse = INativeScriptList[]
export interface INativeScriptList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type PlutusScriptListResponse = IPlutusScriptList[]
export interface IPlutusScriptList {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type ScriptRedeemersResponse = IScriptRedeemers[]
export interface IScriptRedeemers {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}

export type DatumInfoResponse = IDatumInfo[]
export interface IDatumInfo {
  abs_slot: number
  block_no: number
  block_time: number
  epoch_no: number
  epoch_slot: number
  hash: string
}
