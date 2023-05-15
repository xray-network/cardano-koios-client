import { AxiosError } from "axios"

export interface IError {
  type: "error" | "no-response" | "bad-request"
  message: string
  name: string
  error: AxiosError
}

export type TipResponse = ITip[]
export interface ITip {
  hash: string
  epoch_no: number
  abs_slot: number
  epoch_slot: number
  block_no: number | null
  block_time: number
}

export type GenesisResponse = IGenesis[]
export interface IGenesis {
  networkmagic: string
  networkid: string
  epochlength: string
  slotlength: string
  maxlovelacesupply: string
  systemstart: number
  activeslotcoeff: string
  slotsperkesperiod: string
  maxkesrevolutions: string
  securityparam: string
  updatequorum: string
  alonzogenesis: string
}

export type TotalsResponse = ITotals[]
export interface ITotals {
  epoch_no: number
  circulation: string
  treasury: string
  reward: string
  supply: string
  reserves: string
}

export type ParamUpdatesResponse = IParamUpdates[]
export interface IParamUpdates {
  tx_hash: string
  block_height: number | null
  block_time: number
  epoch_no: number
  data: string
}

export type EpochInfoResponse = IEpochInfo[]
export interface IEpochInfo {
  epoch_no: number
  out_sum: string
  fees: string
  tx_count: number
  blk_count: number
  start_time: number
  end_time: number
  first_block_time: number
  last_block_time: number
  active_stake: string | null
  total_rewards: string | null
  avg_blk_reward: string | null
}

export type EpochParamsResponse = IEpochParams[]
export interface IEpochParams {
  epoch_no: number
  min_fee_a: number | null
  min_fee_b: number | null
  max_block_size: number | null
  max_tx_size: number | null
  max_bh_size: number | null
  key_deposit: string | null
  pool_deposit: string | null
  max_epoch: number | null
  optimal_pool_count: number | null
  influence: any | null
  monetary_expand_rate: any | null
  treasury_growth_rate: any | null
  decentralisation: any | null
  extra_entropy: string | null
  protocol_major: number | null
  protocol_minor: number | null
  min_utxo_value: string | null
  min_pool_cost: string | null
  nonce: string | null
  block_hash: string
  cost_models: string | null
  price_mem: any | null
  price_step: any | null
  max_tx_ex_mem: any | null
  max_tx_ex_steps: any | null
  max_block_ex_mem: any | null
  max_block_ex_steps: any | null
  max_val_size: any | null
  collateral_percent: number | null
  max_collateral_inputs: number | null
  coins_per_utxo_size: string | null
}

export type EpochBlockProtocolsResponse = IEpochBlockProtocols[]
export interface IEpochBlockProtocols {
  proto_major: number
  proto_minor: number
  blocks: number
}

export type BlocksResponse = IBlocks[]
export interface IBlocks {
  hash: string
  epoch_no: number
  abs_slot: number
  epoch_slot: number
  block_height: number | null
  block_size: number
  block_time: number
  tx_count: number
  vrf_key: string
  pool: string | null
  op_cert_counter: number
  proto_major: number | null
  proto_minor: number | null
}

export type BlockInfoResponse = IBlockInfo[]
export interface IBlockInfo {
  hash: string
  epoch_no: number
  abs_slot: number
  epoch_slot: number
  block_height: number | null
  block_size: number
  block_time: number
  tx_count: number
  vrf_key: string
  op_cert: string
  op_cert_counter: number
  pool: string | null
  proto_major: number | null
  proto_minor: number | null
  total_output: string | null
  total_fees: string | null
  num_confirmations: number
  parent_hash: string
  child_hash: string
}

export type BlockTxsResponse = IBlockTxs[]
export interface IBlockTxs {
  block_hash: string
  tx_hashes: string[]
}

export type TxInfoResponse = ITxInfo[]
export interface ITxInfo {
  tx_hash: string
  block_hash: string
  block_height: number | null
  epoch_no: number
  epoch_slot: number
  absolute_slot: number
  tx_timestamp: number
  tx_block_index: number
  tx_size: number
  total_output: string
  fee: string
  deposit: string
  invalid_before: string | null
  invalid_after: string | null
  collateral_inputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }[]
  collateral_output: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }
  reference_inputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }[]
  inputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }[]
  outputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }[]
  withdrawals: {
    amount: string
    stake_addr: string
  }[]
  assets_minted: {
    policy_id: string
    asset_name: string | null
    fingerprint: string
    decimals: number
    quantity: string
  }[]
  metadata: {} | null
  certificates: {
    index: number | null
    type: string
    info: {} | null
  }[]
  native_scripts: {
    script_hash: string
    script_json: {}
  }[]
  plutus_contracts: {
    address: string | null
    script_hash: string
    bytecode: string
    size: number
    valid_contract: boolean
    input: {
      redeemer: {
        purpose: "spend" | "mint" | "cert" | "reward"
        fee: string
        unit: {
          steps: string | number | null
          mem: string | number | null
        }
        datum: {
          hash: string | null
          value: {}
        }
      }
      datum: {
        hash: string | null
        value: {}
      }
    }
  }[]
}

export type TxUtxosResponse = ITxUtxos[]
export interface ITxUtxos {
  tx_hash: string
  inputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
  }[]
  outputs: {
    payment_addr: {
      bech32: string
      cred: string
    }
    stake_addr: string | null
    tx_hash: string
    tx_index: number
    value: string
  }[]
}

export type TxMetadataResponse = ITxMetadata[]
export interface ITxMetadata {
  tx_hash: string
  metadata: {} | null
}

export type TxMetalabelsResponse = ITxMetalabels[]
export interface ITxMetalabels {
  key: string
}

export type TxStatusResponse = ITxStatus[]
export interface ITxStatus {
  tx_hash: string
  num_confirmations: number | null
}

export type AddressInfoResponse = IAddressInfo[]
export interface IAddressInfo {
  address: string
  balance: string
  stake_address: string | null
  script_address: boolean
  utxo_set: {
    tx_hash: string
    tx_index: number
    block_height: number | null
    block_time: number
    value: string
    datum_hash: string | null
    inline_datum: {
      bytes: string
      value: {}
    } | null
    reference_script: {
      hash: string
      size: number
      type: string
      bytes: string
      value: {} | null
    } | null
    asset_list: {
      policy_id: string
      asset_name: string | null
      fingerprint: string
      decimals: number
      quantity: string
    }[]
  }[]
}

export type AddressTxsResponse = IAddressTxs[]
export interface IAddressTxs {
  tx_hash: string
  epoch_no: number
  block_height: number | null
  block_time: number
}

export type CredentialUtxosResponse = ICredentialUtxos[]
export interface ICredentialUtxos {
  tx_hash: string
  tx_index: number
  value: string
}

export type AddressAssetsResponse = IAddressAssets[]
export interface IAddressAssets {
  address: string
  asset_list: {
    policy_id: string
    asset_name: string | null
    fingerprint: string
    decimals: number
    quantity: string
  }[]
}

export type CredentialTxsResponse = ICredentialTxs[]
export interface ICredentialTxs {
  tx_hash: string
  epoch_no: number
  block_height: number | null
  block_time: number
}

export type AccountListResponse = IAccountList[]
export interface IAccountList {
  id: string
}

export type AccountInfoResponse = IAccountInfo[]
export interface IAccountInfo {
  stake_address: string
  status: "registered" | "not registered"
  delegated_pool: string | null
  total_balance: string
  utxo: string
  rewards: string
  withdrawals: string
  rewards_available: string
  reserves: string
  treasury: string
}

export type AccountUtxosResponse = IAccountUtxos[]
export interface IAccountUtxos {
  tx_hash: string
  tx_index: number
  address: string
  value: string
  block_height: number | null
  block_time: number
}

export type AccountInfoCachedResponse = IAccountInfoCached[]
export interface IAccountInfoCached {
  stake_address: string
  status: "registered" | "not registered"
  delegated_pool: string | null
  total_balance: string
  utxo: string
  rewards: string
  withdrawals: string
  rewards_available: string
  reserves: string
  treasury: string
}

export type AccountRewardsResponse = IAccountRewards[]
export interface IAccountRewards {
  stake_address: string
  rewards: {
    earned_epoch: number
    spendable_epoch: number
    amount: string
    type: "member" | "leader" | "treasury" | "reserves"
    pool_id: string | null
  }[]
}

export type AccountUpdatesResponse = IAccountUpdates[]
export interface IAccountUpdates {
  stake_address: string
  updates: {
    action_type: "registration" | "delegation" | "withdrawal" | "deregistration"
    tx_hash: string
    epoch_no: number
    epoch_slot: number
    absolute_slot: number
    block_time: number
  }[]
}

export type AccountAddressesResponse = IAccountAddresses[]
export interface IAccountAddresses {
  stake_address: string
  addresses: string[]
}

export type AccountAssetsResponse = IAccountAssets[]
export interface IAccountAssets {
  stake_address: string
  asset_list: {
    policy_id: string
    asset_name: string | null
    fingerprint: string
    decimals: number
    quantity: string
  }[]
}

export type AccountHistoryResponse = IAccountHistory[]
export interface IAccountHistory {
  stake_address: string
  history: {
    pool_id: string
    epoch_no: number
    active_stake: string
  }[]
}

export type AssetListResponse = IAssetList[]
export interface IAssetList {
  policy_id: string
  asset_name: string | null
  fingerprint: string
}

export type AssetTokenRegistryResponse = IAssetTokenRegistry[]
export interface IAssetTokenRegistry {
  policy_id: string
  asset_name: string | null
  asset_name_ascii: string
  ticker: string
  description: string
  url: string
  decimals: number
  logo: string
}

export type AssetAddressesResponse = IAssetAddresses[]
export interface IAssetAddresses {
  payment_address: string
  quantity: string
}

export type AssetAddressListResponse = IAssetAddressList[]
export interface IAssetAddressList {
  payment_address: string
  quantity: string
}

export type AssetNftAddressResponse = IAssetNftAddress[]
export interface IAssetNftAddress {
  payment_address: string
}

export type AssetInfoResponse = IAssetInfo[]
export interface IAssetInfo {
  policy_id: string
  asset_name: string | null
  asset_name_ascii: string
  fingerprint: string
  minting_tx_hash: string
  total_supply: string
  mint_cnt: number
  burn_cnt: number
  creation_time: number
  minting_tx_metadata: {} | null
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    logo: string
    decimals: number
  } | null
}

export type AssetInfoBulkResponse = IAssetInfoBulk[]
export interface IAssetInfoBulk {
  policy_id: string
  asset_name: string | null
  asset_name_ascii: string
  fingerprint: string
  minting_tx_hash: string
  total_supply: string
  mint_cnt: number
  burn_cnt: number
  creation_time: number
  minting_tx_metadata: {} | null
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    logo: string
    decimals: number
  } | null
}

export type AssetHistoryResponse = IAssetHistory[]
export interface IAssetHistory {
  policy_id: string
  asset_name: string | null
  fingerprint: string
  minting_txs: {
    tx_hash: string
    block_time: number
    quantity: string
    metadata: ({} | null)[]
  }[]
}

export type PolicyAssetAddressesResponse = IPolicyAssetAddresses[]
export interface IPolicyAssetAddresses {
  asset_name: string | null
  payment_address: string
  quantity: string
}

export type PolicyAssetInfoResponse = IPolicyAssetInfo[]
export interface IPolicyAssetInfo {
  asset_name: string | null
  asset_name_ascii: string
  fingerprint: string
  minting_tx_hash: string
  total_supply: string
  mint_cnt: number
  burn_cnt: number
  creation_time: number
  minting_tx_metadata: {} | null
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    logo: string
    decimals: number
  } | null
}

export type AssetPolicyInfoResponse = IAssetPolicyInfo[]
export interface IAssetPolicyInfo {
  asset_name: string | null
  asset_name_ascii: string
  fingerprint: string
  minting_tx_hash: string
  total_supply: string
  mint_cnt: number
  burn_cnt: number
  creation_time: number
  minting_tx_metadata: {} | null
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    logo: string
    decimals: number
  } | null
}

export type PolicyAssetListResponse = IPolicyAssetList[]
export interface IPolicyAssetList {
  asset_name: string | null
  fingerprint: string
  total_supply: string
  decimals: number
}

export type AssetSummaryResponse = IAssetSummary[]
export interface IAssetSummary {
  policy_id: string
  asset_name: string | null
  fingerprint: string
  total_transactions: number
  staked_wallets: number
  unstaked_addresses: number
}

export type AssetTxsResponse = IAssetTxs[]
export interface IAssetTxs {
  tx_hash: string
  epoch_no: number
  block_height: number | null
  block_time: number
}

export type PoolListResponse = IPoolList[]
export interface IPoolList {
  pool_id_bech32: string | null
  ticker: string | null
}

export type PoolInfoResponse = IPoolInfo[]
export interface IPoolInfo {
  pool_id_bech32: string
  pool_id_hex: string
  active_epoch_no: number
  vrf_key_hash: string
  margin: any
  fixed_cost: string
  pledge: string
  reward_addr: string
  owners: string[]
  relays: {
    dns: string | null
    srv: string | null
    ipv4: string | null
    ipv6: string | null
    port: any | null
  }[]
  meta_url: string | null
  meta_hash: string | null
  meta_json: {
    name: string
    ticker: string
    homepage: string
    description: string
  } | null
  pool_status: "registered" | "retiring" | "retired"
  retiring_epoch: number | null
  op_cert: string | null
  op_cert_counter: number | null
  active_stake: string | null
  sigma: any | null
  block_count: number | null
  live_pledge: string | null
  live_stake: string | null
  live_delegators: number
  live_saturation: any | null
}

export type PoolStakeSnapshotResponse = IPoolStakeSnapshot[]
export interface IPoolStakeSnapshot {
  snapshot: string
  epoch_no: number
  nonce: string | null
  pool_stake: string
  active_stake: string
}

export type PoolDelegatorsResponse = IPoolDelegators[]
export interface IPoolDelegators {
  stake_address: string
  amount: string
  active_epoch_no: number
  latest_delegation_tx_hash: string
}

export type PoolDelegatorsHistoryResponse = IPoolDelegatorsHistory[]
export interface IPoolDelegatorsHistory {
  stake_address: string
  amount: string
  epoch_no: number
}

export type PoolBlocksResponse = IPoolBlocks[]
export interface IPoolBlocks {
  epoch_no: number
  epoch_slot: number
  abs_slot: number
  block_height: number | null
  block_hash: string
  block_time: number
}

export type PoolHistoryResponse = IPoolHistory[]
export interface IPoolHistory {
  epoch_no: number
  active_stake: string
  active_stake_pct: any
  saturation_pct: any
  block_cnt: number | null
  delegator_cnt: number
  margin: any
  fixed_cost: string
  pool_fees: string
  deleg_rewards: string
  epoch_ros: any
}

export type PoolUpdatesResponse = IPoolUpdates[]
export interface IPoolUpdates {
  tx_hash: string
  block_time: number
  pool_id_bech32: string
  pool_id_hex: string
  active_epoch_no: number
  vrf_key_hash: string
  margin: any
  fixed_cost: string
  pledge: string
  reward_addr: string
  owners: string[]
  relays: {
    dns: string | null
    srv: string | null
    ipv4: string | null
    ipv6: string | null
    port: any | null
  }[]
  meta_url: string | null
  meta_hash: string | null
  meta_json: {
    name: string
    ticker: string
    homepage: string
    description: string
  } | null
  pool_status: "registered" | "retiring" | "retired"
  retiring_epoch: number | null
}

export type PoolRelaysResponse = IPoolRelays[]
export interface IPoolRelays {
  pool_id_bech32: string
  relays: {
    dns: string | null
    srv: string | null
    ipv4: string | null
    ipv6: string | null
    port: any | null
  }[]
}

export type PoolMetadataResponse = IPoolMetadata[]
export interface IPoolMetadata {
  pool_id_bech32: string
  meta_url: string | null
  meta_hash: string | null
  meta_json: {
    name: string
    ticker: string
    homepage: string
    description: string
  } | null
}

export type NativeScriptListResponse = INativeScriptList[]
export interface INativeScriptList {
  script_hash: string
  creation_tx_hash: string
  type: "timelock" | "multisig"
}

export type PlutusScriptListResponse = IPlutusScriptList[]
export interface IPlutusScriptList {
  script_hash: string
  creation_tx_hash: string
}

export type ScriptRedeemersResponse = IScriptRedeemers[]
export interface IScriptRedeemers {
  script_hash: string
  redeemers: {
    tx_hash: string
    tx_index: number
    unit_mem: string | number | null
    unit_steps: string | number | null
    fee: string
    purpose: "spend" | "mint" | "cert" | "reward"
    datum_hash: string | null
    datum_value: {}
  }[]
}

export type DatumInfoResponse = IDatumInfo[]
export interface IDatumInfo {
  hash: string | null
  value: {}
  bytes: string
}
