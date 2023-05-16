import { AxiosError } from "axios"

export interface IError {
  type: "error" | "no-response" | "bad-request"
  message: string
  name: string
  error: AxiosError
}

/**
 * Query Chain Tip
 * Get the tip info about the latest block seen by chain
 */
export type TipResponse = ITip[]
export interface ITip {
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: number
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_no: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * Get Genesis info
 * Get the Genesis parameters used to start specific era on chain
 */
export type GenesisResponse = IGenesis[]
export interface IGenesis {
  /**
   * Unique network identifier for chain
   * @example
   * 764824073
   */
  networkmagic: string
  /**
   * Network ID used at various CLI identification to distinguish between Mainnet and other networks
   * @example
   * "Mainnet"
   */
  networkid: string
  /**
   * Number of slots in an epoch
   * @example
   * 432000
   */
  epochlength: string
  /**
   * Duration of a single slot (in seconds)
   * @example
   * 1
   */
  slotlength: string
  /**
   * Maximum smallest units (lovelaces) supply for the blockchain
   * @example
   * 45000000000000000
   */
  maxlovelacesupply: string
  /**
   * UNIX timestamp of the first block (genesis) on chain
   * @example
   * 1506203091
   */
  systemstart: number
  /**
   * Active Slot Co-Efficient (f) - determines the _probability_ of number of slots in epoch that are expected to have blocks (so mainnet, this would be: 432000 * 0.05 = 21600 estimated blocks)
   * @example
   * 0.05
   */
  activeslotcoeff: string
  /**
   * Number of slots that represent a single KES period (a unit used for validation of KES key evolutions)
   * @example
   * 129600
   */
  slotsperkesperiod: string
  /**
   * Number of KES key evolutions that will automatically occur before a KES (hot) key is expired. This parameter is for security of a pool, in case an operator had access to his hot(online) machine compromised
   * @example
   * 62
   */
  maxkesrevolutions: string
  /**
   * A unit (k) used to divide epochs to determine stability window (used in security checks like ensuring atleast 1 block was created in 3*k/f period, or to finalize next epoch's nonce at 4*k/f slots before end of epoch)
   * @example
   * 2160
   */
  securityparam: string
  /**
   * Number of BFT members that need to approve (via vote) a Protocol Update Proposal
   * @example
   * 5
   */
  updatequorum: string
  /**
   * A JSON dump of Alonzo Genesis
   * @example
   * "{\\\"lovelacePerUTxOWord\\\":34482,\\\"executionPrices\\\":{\\\"prSteps\\\":{\\\"numerator\\\":721,\\\"denominator\\\":10000000},..."
   */
  alonzogenesis: string
}

/**
 * Get historical tokenomic stats
 * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
 */
export type TotalsResponse = ITotals[]
export interface ITotals {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: number
  /**
   * Circulating UTxOs for given epoch (in lovelaces)
   * @example
   * 32081169442642320
   */
  circulation: string
  /**
   * Funds in treasury for given epoch (in lovelaces)
   * @example
   * 637024173474141
   */
  treasury: string
  /**
   * Rewards accumulated as of given epoch (in lovelaces)
   * @example
   * 506871250479840
   */
  reward: string
  /**
   * Total Active Supply (sum of treasury funds, rewards, UTxOs, deposits and fees) for given epoch (in lovelaces)
   * @example
   * 33228495612391330
   */
  supply: string
  /**
   * Total Reserves yet to be unlocked on chain
   * @example
   * 11771504387608670
   */
  reserves: string
}

/**
 * Param Update Proposals
 * Get all parameter update proposals submitted to the chain starting Shelley era
 */
export type ParamUpdatesResponse = IParamUpdates[]
export interface IParamUpdates {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: number
  /**
   * JSON encoded data with details about the parameter update
   * @example
   * {
   *   "decentralisation": 0.9
   * }
   */
  data: string
}

/**
 * Epoch Information
 * Get the epoch information, all epochs if no epoch specified
 */
export type EpochInfoResponse = IEpochInfo[]
export interface IEpochInfo {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: number
  /**
   * Total output value across all transactions in epoch
   * @example
   * 15432725054364942
   */
  out_sum: string
  /**
   * Total fees incurred by transactions in epoch
   * @example
   * 74325855210
   */
  fees: string
  /**
   * Number of transactions submitted in epoch
   * @example
   * 357919
   */
  tx_count: number
  /**
   * Number of blocks created in epoch
   * @example
   * 17321
   */
  blk_count: number
  /**
   * UNIX timestamp of the epoch start
   * @example
   * 1506203091
   */
  start_time: number
  /**
   * UNIX timestamp of the epoch end
   * @example
   * 1506635091
   */
  end_time: number
  /**
   * UNIX timestamp of the epoch's first block
   * @example
   * 1506635091
   */
  first_block_time: number
  /**
   * UNIX timestamp of the epoch's last block
   * @example
   * 1506635091
   */
  last_block_time: number
  /**
   * Total active stake in epoch stake snapshot (null for pre-Shelley epochs)
   * @example
   * 23395112387185880
   */
  active_stake: string | null
  /**
   * Total rewards earned in epoch (null for pre-Shelley epochs)
   * @example
   * 252902897534230
   */
  total_rewards: string | null
  /**
   * Average block reward for epoch (null for pre-Shelley epochs)
   * @example
   * 660233450
   */
  avg_blk_reward: string | null
}

/**
 * Epoch's Protocol Parameters
 * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
 */
export type EpochParamsResponse = IEpochParams[]
export interface IEpochParams {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: number
  /**
   * The 'a' parameter to calculate the minimum transaction fee
   * @example
   * 44
   */
  min_fee_a: number | null
  /**
   * The 'b' parameter to calculate the minimum transaction fee
   * @example
   * 155381
   */
  min_fee_b: number | null
  /**
   * The maximum block size (in bytes)
   * @example
   * 65536
   */
  max_block_size: number | null
  /**
   * The maximum transaction size (in bytes)
   * @example
   * 16384
   */
  max_tx_size: number | null
  /**
   * The maximum block header size (in bytes)
   * @example
   * 1100
   */
  max_bh_size: number | null
  /**
   * The amount (in lovelace) required for a deposit to register a stake address
   * @example
   * 2000000
   */
  key_deposit: string | null
  /**
   * The amount (in lovelace) required for a deposit to register a stake pool
   * @example
   * 500000000
   */
  pool_deposit: string | null
  /**
   * The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for
   * @example
   * 18
   */
  max_epoch: number | null
  /**
   * The optimal number of stake pools
   * @example
   * 500
   */
  optimal_pool_count: number | null
  /**
   * The pledge influence on pool rewards
   * @example
   * 0.3
   */
  influence: any | null
  /**
   * The monetary expansion rate
   * @example
   * 0.003
   */
  monetary_expand_rate: any | null
  /**
   * The treasury growth rate
   * @example
   * 0.2
   */
  treasury_growth_rate: any | null
  /**
   * The decentralisation parameter (1 fully centralised, 0 fully decentralised)
   * @example
   * 0.1
   */
  decentralisation: any | null
  /**
   * The hash of 32-byte string of extra random-ness added into the protocol's entropy pool
   * @example
   * "d982e06fd33e7440b43cefad529b7ecafbaa255e38178ad4189a37e4ce9bf1fa"
   */
  extra_entropy: string | null
  /**
   * The protocol major version
   * @example
   * 5
   */
  protocol_major: number | null
  /** The protocol minor version */
  protocol_minor: number | null
  /**
   * The minimum value of a UTxO entry
   * @example
   * 34482
   */
  min_utxo_value: string | null
  /**
   * The minimum pool cost
   * @example
   * 340000000
   */
  min_pool_cost: string | null
  /**
   * The nonce value for this epoch
   * @example
   * "01304ddf5613166be96fce27be110747f2c8fcb38776618ee79225ccb59b81e2"
   */
  nonce: string | null
  /**
   * The hash of the first block where these parameters are valid
   * @example
   * "f9dc2a2fc3a2db09a71af007a740261de585afc9e3022b8e30535592ff4dd9e5"
   */
  block_hash: string
  /** The per language cost models */
  cost_models: string | null
  /**
   * The per word cost of script memory usage
   * @example
   * 0.0577
   */
  price_mem: any | null
  /**
   * The cost of script execution step usage
   * @example
   * 0.0000721
   */
  price_step: any | null
  /**
   * The maximum number of execution memory allowed to be used in a single transaction
   * @example
   * 10000000
   */
  max_tx_ex_mem: any | null
  /**
   * The maximum number of execution steps allowed to be used in a single transaction
   * @example
   * 10000000000
   */
  max_tx_ex_steps: any | null
  /**
   * The maximum number of execution memory allowed to be used in a single block
   * @example
   * 50000000
   */
  max_block_ex_mem: any | null
  /**
   * The maximum number of execution steps allowed to be used in a single block
   * @example
   * 40000000000
   */
  max_block_ex_steps: any | null
  /**
   * The maximum Val size
   * @example
   * 5000
   */
  max_val_size: any | null
  /**
   * The percentage of the tx fee which must be provided as collateral when including non-native scripts
   * @example
   * 150
   */
  collateral_percent: number | null
  /**
   * The maximum number of collateral inputs allowed in a transaction
   * @example
   * 3
   */
  max_collateral_inputs: number | null
  /**
   * The cost per UTxO size
   * @example
   * 34482
   */
  coins_per_utxo_size: string | null
}

/**
 * Epoch's Block Protocols
 * Get the information about block protocol distribution in epoch
 */
export type EpochBlockProtocolsResponse = IEpochBlockProtocols[]
export interface IEpochBlockProtocols {
  /**
   * Protocol major version
   * @example
   * 6
   */
  proto_major: number
  /**
   * Protocol major version
   * @example
   * 2
   */
  proto_minor: number
  /**
   * Amount of blocks with specified major and protocol combination
   * @example
   * 2183
   */
  blocks: number
}

/**
 * Block List
 * Get summarised details about all blocks (paginated - latest first)
 */
export type BlocksResponse = IBlocks[]
export interface IBlocks {
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: number
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * Block size in bytes
   * @example
   * 79109
   */
  block_size: number
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
  /**
   * Number of transactions in the block
   * @example
   * 44
   */
  tx_count: number
  /**
   * VRF key of the block producer
   * @example
   * "vrf_vk1pmxyz8efuyj6eq6zkk373f28u47v06nwp5t59jr5fcmcusaazlmqhxu8k2"
   */
  vrf_key: string
  /**
   * Pool ID in bech32 format (null for pre-Shelley blocks)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool: string | null
  /**
   * Counter value of the operational certificate used to create this block
   * @example
   * 8
   */
  op_cert_counter: number
  /**
   * The protocol major version
   * @example
   * 5
   */
  proto_major: number | null
  /** The protocol minor version */
  proto_minor: number | null
}

/**
 * Block Information
 * Get detailed information about a specific block
 */
export type BlockInfoResponse = IBlockInfo[]
export interface IBlockInfo {
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: number
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * Block size in bytes
   * @example
   * 79109
   */
  block_size: number
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
  /**
   * Number of transactions in the block
   * @example
   * 44
   */
  tx_count: number
  /**
   * VRF key of the block producer
   * @example
   * "vrf_vk1pmxyz8efuyj6eq6zkk373f28u47v06nwp5t59jr5fcmcusaazlmqhxu8k2"
   */
  vrf_key: string
  /**
   * Hash of the block producers' operational certificate
   * @example
   * "16bfc28a7127d11805fe02df67f8c3909ab7e2e2cd81b6954d90eeff1938614c"
   */
  op_cert: string
  /**
   * Counter value of the operational certificate used to create this block
   * @example
   * 8
   */
  op_cert_counter: number
  /**
   * Pool ID in bech32 format (null for pre-Shelley blocks)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool: string | null
  /**
   * The protocol major version
   * @example
   * 5
   */
  proto_major: number | null
  /** The protocol minor version */
  proto_minor: number | null
  /**
   * Total output of the block (in lovelace)
   * @example
   * 92384672389
   */
  total_output: string | null
  /**
   * Total fees of the block (in lovelace)
   * @example
   * 2346834
   */
  total_fees: string | null
  /**
   * Number of confirmations for the block
   * @example
   * 664275
   */
  num_confirmations: number
  /**
   * Hash of the parent of this block
   * @example
   * "16bfc28a7127d11805fe02df67f8c3909ab7e2e2cd81b6954d90eeff1938614c"
   */
  parent_hash: string
  /**
   * Hash of the child of this block (if present)
   * @example
   * "a3b525ba0747ce9daa928fa28fbc680f95e6927943a1fbd6fa5394d96c9dc2fa"
   */
  child_hash: string
}

/**
 * Block Transactions
 * Get a list of all transactions included in provided blocks
 */
export type BlockTxsResponse = IBlockTxs[]
export interface IBlockTxs {
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  block_hash: string
  tx_hashes: /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  string[]
}

/**
 * Transaction Information
 * Get detailed information about transaction(s)
 */
export type TxInfoResponse = ITxInfo[]
export interface ITxInfo {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  block_hash: string
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: number
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  absolute_slot: number
  /**
   * UNIX timestamp of the transaction
   * @example
   * 1506635091
   */
  tx_timestamp: number
  /**
   * Index of transaction within block
   * @example
   * 6
   */
  tx_block_index: number
  /**
   * Size in bytes of transaction
   * @example
   * 391
   */
  tx_size: number
  /**
   * Total sum of all transaction outputs (in lovelaces)
   * @example
   * 157832856
   */
  total_output: string
  /**
   * Total Transaction fee (in lovelaces)
   * @example
   * 172761
   */
  fee: string
  /** Total Deposits included in transaction (for example, if it is registering a pool/key) */
  deposit: string
  /** Slot before which transaction cannot be validated (if supplied, else null) */
  invalid_before: string | null
  /**
   * Slot after which transaction cannot be validated
   * @example
   * 42332172
   */
  invalid_after: string | null
  /** An array of UTxO outputs created by the transaction */
  collateral_inputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * Hash of datum (if any) connected to UTxO
     * @example
     * "30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    /** An array of assets on the UTxO */
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Quantity of assets on the UTxO
       * @example
       * 1
       */
      quantity: string
    }[]
  }[]
  collateral_output: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * Hash of datum (if any) connected to UTxO
     * @example
     * "30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    /** An array of assets on the UTxO */
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Quantity of assets on the UTxO
       * @example
       * 1
       */
      quantity: string
    }[]
  }
  /** An array of UTxO outputs created by the transaction */
  reference_inputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * Hash of datum (if any) connected to UTxO
     * @example
     * "30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    /** An array of assets on the UTxO */
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Quantity of assets on the UTxO
       * @example
       * 1
       */
      quantity: string
    }[]
  }[]
  /** An array of UTxO outputs created by the transaction */
  inputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * Hash of datum (if any) connected to UTxO
     * @example
     * "30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    /** An array of assets on the UTxO */
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Quantity of assets on the UTxO
       * @example
       * 1
       */
      quantity: string
    }[]
  }[]
  /** An array of UTxO outputs created by the transaction */
  outputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * Hash of datum (if any) connected to UTxO
     * @example
     * "30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    /** An array of assets on the UTxO */
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Quantity of assets on the UTxO
       * @example
       * 1
       */
      quantity: string
    }[]
  }[]
  /** Array of withdrawals with-in a transaction */
  withdrawals: {
    /**
     * Withdrawal amount (in lovelaces)
     * @example
     * 9845162
     */
    amount: string
    /**
     * A Cardano staking address (reward account, bech32 encoded)
     * @example
     * "stake1uxggf4shfvpghcangm67ky0q4zlc3xn7gezy0auhxczu3pslm9wrj"
     */
    stake_addr: string
  }[]
  /** Array of minted assets with-in a transaction */
  assets_minted: {
    /**
     * Asset Policy ID (hex)
     * @example
     * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
     */
    policy_id: string
    /**
     * Asset Name (hex)
     * @example
     * "444f4e545350414d"
     */
    asset_name: string | null
    /**
     * The CIP14 fingerprint of the asset
     * @example
     * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
     */
    fingerprint: string
    /**
     * Asset decimals
     * @example
     * 6
     */
    decimals: number
    /**
     * Quantity of minted assets (negative on burn)
     * @example
     * 1
     */
    quantity: string
  }[]
  /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  metadata: {} | null
  /** Certificates present with-in a transaction (if any) */
  certificates: {
    /** Certificate index */
    index: number | null
    /**
     * Type of certificate (could be delegation, stake_registration, stake_deregistraion, pool_update, pool_retire, param_proposal, reserve_MIR, treasury_MIR)
     * @example
     * "delegation"
     */
    type: string
    /**
     * A JSON array containing information from the certificate
     * @example
     * {
     *   "stake_address": "stake1uxggf4shfvpghcangm67ky0q4zlc3xn7gezy0auhxczu3pslm9wrj",
     *   "pool": "pool1k53pf4wzn263c08e3wr3gttndfecm9f4uzekgctcx947vt7fh2p"
     * }
     */
    info: {} | null
  }[]
  /** Native scripts present in a transaction (if any) */
  native_scripts: {
    /**
     * Hash of a script
     * @example
     * "d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8"
     */
    script_hash: string
    /**
     * JSON representation of the timelock script (null for other script types)
     * @example
     * {
     *   "type": "all",
     *   "scripts": [
     *     {
     *       "type": "sig",
     *       "keyHash": "a96da581c39549aeda81f539ac3940ac0cb53657e774ca7e68f15ed9"
     *     },
     *     {
     *       "type": "sig",
     *       "keyHash": "ccfcb3fed004562be1354c837a4a4b9f4b1c2b6705229efeedd12d4d"
     *     },
     *     {
     *       "type": "sig",
     *       "keyHash": "74fcd61aecebe36aa6b6cd4314027282fa4b41c3ce8af17d9b77d0d1"
     *     }
     *   ]
     * }
     */
    script_json: {}
  }[]
  /** Plutus contracts present in transaction (if any) */
  plutus_contracts: {
    /**
     * Plutus script address
     * @example
     * "addr1w999n67e86jn6xal07pzxtrmqynspgx0fwmcmpua4wc6yzsxpljz3"
     */
    address: string | null
    /**
     * Hash of a script
     * @example
     * "d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8"
     */
    script_hash: string
    /**
     * CBOR-encoded Plutus script data
     * @example
     * "5911ea010000332333222332233223322332232323332223233322232333333332222222232333222323333222232323322323332223233322232323322332232323333322222332233223322332233223322223223223232533530333330083333573466e1cd55cea8032400046460a000264646464646666ae68cdc39aab9d5004480008cccc8888cccc16c01000c008004dd71aba15004375c6ae85400cdd71aba15002375a6ae84d5d1280111a8279a982819ab9c491035054310005149926135744a00226ae8940044d55cf280089baa001357426aae79401c8d4124d4c128cd5ce2481035054310004b499263333573466e1d40112002205323333573466e1d40152000205523504a35304b335738921035054310004c49926498cccd5cd19b8735573aa004900011980599191919191919191919191999ab9a3370e6aae754029200023333333333019335027232323333573466e1cd55cea8012400046603e60746ae854008c0b0d5d09aba2500223505935305a3357389201035054310005b49926135573ca00226ea8004d5d0a80519a8138141aba150093335502e75ca05a6ae854020ccd540b9d728169aba1500733502704335742a00c66a04e66aa0a8098eb4d5d0a8029919191999ab9a3370e6aae754009200023350213232323333573466e1cd55cea80124000466a05266a084eb4d5d0a80118239aba135744a00446a0ba6a60bc66ae712401035054310005f49926135573ca00226ea8004d5d0a8011919191999ab9a3370e6aae7540092000233502733504275a6ae854008c11cd5d09aba2500223505d35305e3357389201035054310005f49926135573ca00226ea8004d5d09aba2500223505935305a3357389201035054310005b49926135573ca00226ea8004d5d0a80219a813bae35742a00666a04e66aa0a8eb88004d5d0a801181c9aba135744a00446a0aa6a60ac66ae71241035054310005749926135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135573ca00226ea8004d5d0a8011919191999ab9a3370ea00290031180f181d9aba135573ca00646666ae68cdc3a801240084603a608a6ae84d55cf280211999ab9a3370ea00690011180e98181aba135573ca00a46666ae68cdc3a80224000460406eb8d5d09aab9e50062350503530513357389201035054310005249926499264984d55cea80089baa001357426ae8940088d4124d4c128cd5ce249035054310004b49926104a1350483530493357389201035054350004a4984d55cf280089baa001135573a6ea80044dd50009109198008018011000911111111109199999999980080580500480400380300280200180110009109198008018011000891091980080180109000891091980080180109000891091980080180109000909111180200290911118018029091111801002909111180080290008919118011bac0013200135503b2233335573e0024a01c466a01a60086ae84008c00cd5d100101991919191999ab9a3370e6aae75400d200023330073232323333573466e1cd55cea8012400046601a60626ae854008cd404c0b4d5d09aba25002235036353037335738921035054310003849926135573ca00226ea8004d5d0a801999aa805bae500a35742a00466a01eeb8d5d09aba25002235032353033335738921035054310003449926135744a00226aae7940044dd50009110919980080200180110009109198008018011000899aa800bae75a224464460046eac004c8004d540d488c8cccd55cf80112804919a80419aa81898031aab9d5002300535573ca00460086ae8800c0b84d5d08008891001091091198008020018900089119191999ab9a3370ea002900011a80418029aba135573ca00646666ae68cdc3a801240044a01046a0526a605466ae712401035054310002b499264984d55cea80089baa001121223002003112200112001232323333573466e1cd55cea8012400046600c600e6ae854008dd69aba135744a00446a0466a604866ae71241035054310002549926135573ca00226ea80048848cc00400c00880048c8cccd5cd19b8735573aa002900011bae357426aae7940088d407cd4c080cd5ce24810350543100021499261375400224464646666ae68cdc3a800a40084a00e46666ae68cdc3a8012400446a014600c6ae84d55cf280211999ab9a3370ea00690001280511a8111a981199ab9c490103505431000244992649926135573aa00226ea8004484888c00c0104488800844888004480048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188d4068d4c06ccd5ce249035054310001c499264984d55ce9baa0011220021220012001232323232323333573466e1d4005200c200b23333573466e1d4009200a200d23333573466e1d400d200823300b375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c46601a6eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc048c050d5d0a8049bae357426ae8940248cccd5cd19b875006480088c050c054d5d09aab9e500b23333573466e1d401d2000230133016357426aae7940308d407cd4c080cd5ce2481035054310002149926499264992649926135573aa00826aae79400c4d55cf280109aab9e500113754002424444444600e01044244444446600c012010424444444600a010244444440082444444400644244444446600401201044244444446600201201040024646464646666ae68cdc3a800a400446660106eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d400920002300a300b357426aae7940188d4040d4c044cd5ce2490350543100012499264984d55cea80189aba25001135573ca00226ea80048488c00800c888488ccc00401401000c80048c8c8cccd5cd19b875001480088c018dd71aba135573ca00646666ae68cdc3a80124000460106eb8d5d09aab9e500423500a35300b3357389201035054310000c499264984d55cea80089baa001212230020032122300100320011122232323333573466e1cd55cea80124000466aa016600c6ae854008c014d5d09aba25002235007353008335738921035054310000949926135573ca00226ea8004498480048004448848cc00400c008448004848c0040088004888848cccc00401401000c00880044880084880048004448c8c00400488cc00cc008008004c8ccc888c8c8cc88cc88ccc888c8c8c8c8cc88c8c8cc88c8cccc8888c8c8c8c8c8c8c8c8ccc888c8ccc888ccc888cccccccc88888888cc88ccccc88888cccc8888cc88cc88cc88ccc888cc88cc88cc88cc88cc88c8c8c8cc88c8c8c8c8c8c8cc88c8c8c8c8c8c8cc888c888c8c94cd4c1240104cc0352401297369676e617475726520646f6573206e6f74206d617463682063726561746f7220696e20646174756d0033223530200022222222222533535032333553068120015027253353079333573466e3c0300041ec1e84d40d4004540d000c841ec41e54008c04540144cc054cc03524012f65787065637465642063726561746f7220746f2067657420616c6c206f66207768617420736865206f72646572656400330153350133335500e305c12001504f350481223335501b2253353070333505006353353502a3235302900122335304c0022350300012502f300e00221001132635300b335738920117696e76616c6964207075626c6963206b657920686173680000c498c05540244cc010c0340080044004004c8d4c08400488888888880254010ccd41354138c1894014c04920c08db7013350133335500e305c12001504f350481223335501b22533530703005002133004335506500d30100020011001001300d5004333504d504e30625005333504d504e533535026301a00321300a300d0011630124830236dc04cc0352401276f6e6c79206d617463686573206f66207061697273206f66206f726465727320616c6c6f77656400533535063350481223335501b225335307030050021330040020011001001300d50041306a162215335350650011306c16221533535067001107222130701623253353502732353024001222001500121333504e223530280022235302a0032232335304e0052335304f004253353077333573466e3c0080041e41e05400c41e081e08cd4c13c01081e094cd4c1dcccd5cd19b8f002001079078150031078153353502e0032153353502f00221335304c0022335304d002233530510022335305200223306d002001207b23353052002207b23306d00200122207b222335304f004207b2225335307c333573466e1c01800c1f81f454cd4c1f0ccd5cd19b8700500207e07d1333573466e1c0100041f81f441f441f441d854cd4d40b8004841d841d8c03140094cd4d40a0c07001484cd54190034c03c0045841b84c0300044d4c068004880084d4c02800480044800480048d4c0680048880088d4c06400488800c8d4c05000488888888880288d4c05400488004894cd4c184004418c4cd5ce001031089119aa8011a82600090009091800801100091a982c0009111002119a82999aa82b245003350533355056489000015054505412233355304b120013500550032353550560012233355304e120013500850062353550590012233353550490012330614800000488cc1880080048cc184005200000133040002001133500400105a22533530590021001105a123350492233353500400322002002001353500200122001122123300100300212001112232001320013550582253353504e00110032213300600230040012353003001223530070022222222222533335302600b21501b21501b21501b2133355305012001500f2353015001225335306353353063333573466e3cd4c0bc00888008d4c0bc010880081941904ccd5cd19b8735302f0022200135302f00422001065064106413501f0031501e00b13350432253353500d002210031001500c2212330010030022001222222222212333333333300100b00a009008007006005004003002200122123300100300220012221233300100400300220012212330010030022001121223002003112200112001122123300100300212001122123300100300212001122123300100300212001121222300300411222002112220011200121222230040052122223003005212222300200521222230010052001221233001003002200121222222230070082212222222330060090082122222223005008122222220041222222200322122222223300200900822122222223300100900820012122300200322212233300100500400320012122300200321223001003200112335001501d501e1220021220012001120011200113002012133500b2233300301300200150162223355300e1200123535501a00122335501d002335530111200123535501d001223355020002333535500d00123300a4800000488cc02c0080048cc028005200000133004002001223355300c1200123535501800122335501b00233353550080012335530101200123535501c00122335501f00235500f001001223335550080150020012335530101200123535501c00122335501f00235500d0010013335550030100020011112223335530041200150153355300c1200123535501800122335501b00235500b0013335530041200122353550190022253353021333553011120013500d33500f22533530230021025100102223535501c001223300a0020050061003133501900400350160013355300c120012353550180012232335501c00330010053200135502322533535019001135500b0032213535501e00222533530263300c00200813355010007001130060030023200135501c221122253353501500110022213300500233355300712001005004001112122230030041122122233002005004112122230010041120011233500722333535004003220020020013535002001220011221233001003002120013200135501422112253353500c0011500e22133500f3004002335530061200100400132001355013221122253353500c00113535006003220012213335350080052200230040023335530071200100500400112212330010030021200122333573466e3c00800404404088cdc000100088911801000919991119a80319aa80480199a80319aa804801000a803a8039a980380091110019a980380091110011a98038009111000889100109109119800802001890008891091980080180108900091110919998008028020018011000900211199ab9a3371000400200800a244004244002400222464600200244660066004004003"
     */
    bytecode: string
    /**
     * The size of the CBOR serialised script (in bytes)
     * @example
     * 234895
     */
    size: number
    /**
     * True if the contract is valid or there is no contract
     * @example
     * true
     */
    valid_contract: boolean
    input: {
      redeemer: {
        /**
         * What kind of validation this redeemer is used for
         * @example
         * "spend"
         */
        purpose: "spend" | "mint" | "cert" | "reward"
        /**
         * The budget in fees to run a script - the fees depend on the ExUnits and the current prices
         * @example
         * 45282
         */
        fee: string
        unit: {
          /**
           * The budget in Cpu steps to run a script
           * @example
           * 211535239
           */
          steps: string | number | null
          /**
           * The budget in Memory to run a script
           * @example
           * 520448
           */
          mem: string | number | null
        }
        datum: {
          /**
           * The Hash of the Plutus Data
           * @example
           * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
           */
          hash: string | null
          /**
           * The actual data in json format
           * @example
           * {
           *   "bytes": "3c33"
           * }
           */
          value: {}
        }
      }
      datum: {
        /**
         * The Hash of the Plutus Data
         * @example
         * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
         */
        hash: string | null
        /**
         * The actual data in json format
         * @example
         * {
         *   "bytes": "3c33"
         * }
         */
        value: {}
      }
    }
  }[]
}

/**
 * Transaction UTxOs
 * Get UTxO set (inputs/outputs) of transactions.
 */
export type TxUtxosResponse = ITxUtxos[]
export interface ITxUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** An array of UTxO inputs used by the transaction */
  inputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
  }[]
  /** An array of UTxO outputs created by the transaction */
  outputs: /** An array of UTxO inputs used by the transaction */

  {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
       * @example
       * "addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr:
      | /**
       * Cardano staking address (reward account) in bech32 format
       * @example
       * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
       */
      string
      | null
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
  }[]
}

/**
 * Transaction Metadata
 * Get metadata information (if any) for given transaction(s)
 */
export type TxMetadataResponse = ITxMetadata[]
export interface ITxMetadata {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  metadata: {} | null
}

/**
 * Transaction Metadata Labels
 * Get a list of all transaction metalabels
 */
export type TxMetalabelsResponse = ITxMetalabels[]
export interface ITxMetalabels {
  /**
   * A distinct known metalabel
   * @example
   * "721"
   */
  key: string
}

/**
 * Transaction Status (Block Confirmations)
 * Get the number of block confirmations for a given transaction hash list
 */
export type TxStatusResponse = ITxStatus[]
export interface ITxStatus {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Number of block confirmations
   * @example
   * 17
   */
  num_confirmations: number | null
}

/**
 * Address Information
 * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
 */
export type AddressInfoResponse = IAddressInfo[]
export interface IAddressInfo {
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  address: string
  /**
   * Sum of all UTxO values beloning to address
   * @example
   * 10723473983
   */
  balance: string
  stake_address:
    | /**
     * Cardano staking address (reward account) in bech32 format
     * @example
     * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
     */
    string
    | null
  /**
   * Signifies whether the address is a script address
   * @example
   * true
   */
  script_address: boolean
  utxo_set: {
    /**
     * Hash of transaction for UTxO
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: number
    /**
     * Block height
     * @example
     * 42325043
     */
    block_height: number | null
    /**
     * UNIX timestamp of the block
     * @example
     * 1506635091
     */
    block_time: number
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
    /**
     * The Hash of the Plutus Data
     * @example
     * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
     */
    datum_hash: string | null
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: {
      /**
       * Datum bytes (hex)
       * @example
       * "19029a"
       */
      bytes: string
      /**
       * Value (json)
       * @example
       * {
       *   "int": 666
       * }
       */
      value: {}
    } | null
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: {
      /**
       * Hash of referenced script
       * @example
       * "67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656"
       */
      hash: string
      /**
       * Size in bytes
       * @example
       * 14
       */
      size: number
      /**
       * Type of script
       * @example
       * "plutusV1"
       */
      type: string
      /**
       * Script bytes (hex)
       * @example
       * "4e4d01000033222220051200120011"
       */
      bytes: string
      /** Value (json) */
      value: {} | null
    } | null
    asset_list: {
      /**
       * Asset Policy ID (hex)
       * @example
       * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
       */
      policy_id: string
      /**
       * Asset Name (hex)
       * @example
       * "444f4e545350414d"
       */
      asset_name: string | null
      /**
       * The CIP14 fingerprint of the asset
       * @example
       * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
       */
      fingerprint: string
      /**
       * Asset decimals
       * @example
       * 6
       */
      decimals: number
      /**
       * Asset quantity owned by account
       * @example
       * 990000
       */
      quantity: string
    }[]
  }[]
}

/**
 * Address Transactions
 * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
 */
export type AddressTxsResponse = IAddressTxs[]
export interface IAddressTxs {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * UTxOs from payment credentials
 * Get a list of UTxO against input payment credential array including their balances
 */
export type CredentialUtxosResponse = ICredentialUtxos[]
export interface ICredentialUtxos {
  /**
   * Hash of transaction for UTxO
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: number
  /**
   * Total sum of ADA on the UTxO
   * @example
   * 157832856
   */
  value: string
}

/**
 * Address Assets
 * Get the list of all the assets (policy, name and quantity) for given addresses
 */
export type AddressAssetsResponse = IAddressAssets[]
export interface IAddressAssets {
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  address: string
  asset_list: {
    /**
     * Asset Policy ID (hex)
     * @example
     * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
     */
    policy_id: string
    /**
     * Asset Name (hex)
     * @example
     * "444f4e545350414d"
     */
    asset_name: string | null
    /**
     * The CIP14 fingerprint of the asset
     * @example
     * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
     */
    fingerprint: string
    /**
     * Asset decimals
     * @example
     * 6
     */
    decimals: number
    /**
     * Asset quantity owned by account
     * @example
     * 990000
     */
    quantity: string
  }[]
}

/**
 * Transactions from payment credentials
 * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
 */
export type CredentialTxsResponse = ICredentialTxs[]
export interface ICredentialTxs {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * Account List
 * Get a list of all stake addresses that have atleast 1 transaction
 */
export type AccountListResponse = IAccountList[]
export interface IAccountList {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  id: string
}

/**
 * Account Information
 * Get the account information for given stake addresses
 */
export type AccountInfoResponse = IAccountInfo[]
export interface IAccountInfo {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  /**
   * Stake address status
   * @example
   * "registered"
   */
  status: "registered" | "not registered"
  /**
   * Bech32 representation of pool ID
   * @example
   * "pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt"
   */
  delegated_pool: string | null
  /**
   * Total balance of the account including UTxO, rewards and MIRs (in lovelace)
   * @example
   * 207116800428
   */
  total_balance: string
  /**
   * Total UTxO balance of the account
   * @example
   * 162764177131
   */
  utxo: string
  /**
   * Total rewards earned by the account
   * @example
   * 56457728047
   */
  rewards: string
  /**
   * Total rewards withdrawn by the account
   * @example
   * 12105104750
   */
  withdrawals: string
  /**
   * Total rewards available for withdawal
   * @example
   * 44352623297
   */
  rewards_available: string
  /**
   * Total reserves MIR value of the account
   * @example
   * "0"
   */
  reserves: string
  /**
   * Total treasury MIR value of the account
   * @example
   * "0"
   */
  treasury: string
}

/**
 * Account UTxOs
 * Get a list of all UTxOs for a given stake address (account)
 */
export type AccountUtxosResponse = IAccountUtxos[]
export interface IAccountUtxos {
  /**
   * Hash of transaction for UTxO
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: number
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  address: string
  /**
   * Total sum of ADA on the UTxO
   * @example
   * 157832856
   */
  value: string
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * Account Information (Cached)
 * Get the cached account information for given stake addresses, effective for registered accounts
 */
export type AccountInfoCachedResponse = IAccountInfoCached[]
export interface IAccountInfoCached {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  /**
   * Stake address status
   * @example
   * "registered"
   */
  status: "registered" | "not registered"
  /**
   * Bech32 representation of pool ID
   * @example
   * "pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt"
   */
  delegated_pool: string | null
  /**
   * Total balance of the account including UTxO, rewards and MIRs (in lovelace)
   * @example
   * 207116800428
   */
  total_balance: string
  /**
   * Total UTxO balance of the account
   * @example
   * 162764177131
   */
  utxo: string
  /**
   * Total rewards earned by the account
   * @example
   * 56457728047
   */
  rewards: string
  /**
   * Total rewards withdrawn by the account
   * @example
   * 12105104750
   */
  withdrawals: string
  /**
   * Total rewards available for withdawal
   * @example
   * 44352623297
   */
  rewards_available: string
  /**
   * Total reserves MIR value of the account
   * @example
   * "0"
   */
  reserves: string
  /**
   * Total treasury MIR value of the account
   * @example
   * "0"
   */
  treasury: string
}

/**
 * Account Rewards
 * Get the full rewards history (including MIR) for given stake addresses
 */
export type AccountRewardsResponse = IAccountRewards[]
export interface IAccountRewards {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  rewards: {
    /**
     * Epoch number
     * @example
     * 294
     */
    earned_epoch: number
    /**
     * Epoch number
     * @example
     * 294
     */
    spendable_epoch: number
    /** Amount of rewards earned (in lovelace) */
    amount: string
    /**
     * The source of the rewards
     * @example
     * "member"
     */
    type: "member" | "leader" | "treasury" | "reserves"
    /**
     * Bech32 representation of pool ID
     * @example
     * "pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt"
     */
    pool_id: string | null
  }[]
}

/**
 * Account Updates
 * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
 */
export type AccountUpdatesResponse = IAccountUpdates[]
export interface IAccountUpdates {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  updates: {
    /**
     * Type of certificate submitted
     * @example
     * "registration"
     */
    action_type: "registration" | "delegation" | "withdrawal" | "deregistration"
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /**
     * Epoch number of the block
     * @example
     * 321
     */
    epoch_no: number
    /**
     * Slot number of the block in epoch
     * @example
     * 75442
     */
    epoch_slot: number
    /**
     * Absolute slot number of the block
     * @example
     * 53384242
     */
    absolute_slot: number
    /**
     * UNIX timestamp of the block
     * @example
     * 1506635091
     */
    block_time: number
  }[]
}

/**
 * Account Addresses
 * Get all addresses associated with given staking accounts
 */
export type AccountAddressesResponse = IAccountAddresses[]
export interface IAccountAddresses {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  addresses: /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  string[]
}

/**
 * Account Assets
 * Get the native asset balance for a given stake address
 */
export type AccountAssetsResponse = IAccountAssets[]
export interface IAccountAssets {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  asset_list: {
    /**
     * Asset Policy ID (hex)
     * @example
     * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
     */
    policy_id: string
    /**
     * Asset Name (hex)
     * @example
     * "444f4e545350414d"
     */
    asset_name: string | null
    /**
     * The CIP14 fingerprint of the asset
     * @example
     * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
     */
    fingerprint: string
    /**
     * Asset decimals
     * @example
     * 6
     */
    decimals: number
    /**
     * Asset quantity owned by account
     * @example
     * 990000
     */
    quantity: string
  }[]
}

/**
 * Account History
 * Get the staking history of given stake addresses (accounts)
 */
export type AccountHistoryResponse = IAccountHistory[]
export interface IAccountHistory {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  history: {
    /**
     * Bech32 representation of pool ID
     * @example
     * "pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt"
     */
    pool_id: string
    /**
     * Epoch number
     * @example
     * 301
     */
    epoch_no: number
    /**
     * Active stake amount (in lovelaces)
     * @example
     * 682334162
     */
    active_stake: string
  }[]
}

/**
 * Asset List
 * Get the list of all native assets (paginated)
 */
export type AssetListResponse = IAssetList[]
export interface IAssetList {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
}

/**
 * Asset Token Registry
 * Get a list of assets registered via token registry on github
 */
export type AssetTokenRegistryResponse = IAssetTokenRegistry[]
export interface IAssetTokenRegistry {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  ticker: string
  description: string
  url: string
  decimals: number
  /**
   * A PNG image file as a byte string
   * @example
   * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
   */
  logo: string
}

/**
 * Asset Addresses
 * Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
 */
export type AssetAddressesResponse = IAssetAddresses[]
export interface IAssetAddresses {
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  payment_address: string
  /**
   * Asset balance on the payment address
   * @example
   * 23
   */
  quantity: string
}

/**
 * Asset Address List [DEPRECATED]
 * Get the list of all addresses holding a given asset (replaced by asset_addresses)
 */
export type AssetAddressListResponse = IAssetAddressList[]
export interface IAssetAddressList {
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  payment_address: string
  /**
   * Asset balance on the payment address
   * @example
   * 23
   */
  quantity: string
}

/**
 * NFT Address
 * Get the address where specified NFT currently reside on.
 */
export type AssetNftAddressResponse = IAssetNftAddress[]
export interface IAssetNftAddress {
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  payment_address: string
}

/**
 * Asset Information
 * Get the information of an asset including first minting & token registry metadata
 */
export type AssetInfoResponse = IAssetInfo[]
export interface IAssetInfo {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Hash of the latest mint transaction
   * @example
   * "cb07b7e51b77079776c4a78f2daf8f14f9945d2b047da7bfcb71d7fbb9f86712"
   */
  minting_tx_hash: string
  /**
   * Total supply for the asset
   * @example
   * "35000"
   */
  total_supply: string
  /**
   * Count of total mint transactions
   * @example
   * 1
   */
  mint_cnt: number
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: number
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: number
  /** Latest minting transaction metadata (aligns with CIP-25) */
  minting_tx_metadata: /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  {} | null
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    /**
     * A PNG image file as a byte string
     * @example
     * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
     */
    logo: string
    decimals: number
  } | null
}

/**
 * Asset Information (Bulk)
 * Get the information of a list of assets including first minting & token registry metadata
 */
export type AssetInfoBulkResponse = IAssetInfoBulk[]
export interface IAssetInfoBulk {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Hash of the latest mint transaction
   * @example
   * "cb07b7e51b77079776c4a78f2daf8f14f9945d2b047da7bfcb71d7fbb9f86712"
   */
  minting_tx_hash: string
  /**
   * Total supply for the asset
   * @example
   * "35000"
   */
  total_supply: string
  /**
   * Count of total mint transactions
   * @example
   * 1
   */
  mint_cnt: number
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: number
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: number
  /** Latest minting transaction metadata (aligns with CIP-25) */
  minting_tx_metadata: /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  {} | null
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    /**
     * A PNG image file as a byte string
     * @example
     * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
     */
    logo: string
    decimals: number
  } | null
}

/**
 * Asset History
 * Get the mint/burn history of an asset
 */
export type AssetHistoryResponse = IAssetHistory[]
export interface IAssetHistory {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /** Array of all mint/burn transactions for an asset */
  minting_txs: {
    /**
     * Hash of minting/burning transaction
     * @example
     * "e1ecc517f95715bb87681cfde2c594dbc971739f84f8bfda16170b35d63d0ddf"
     */
    tx_hash: string
    /**
     * UNIX timestamp of the block
     * @example
     * 1506635091
     */
    block_time: number
    /**
     * Quantity minted/burned (negative numbers indicate burn transactions)
     * @example
     * "-10"
     */
    quantity: string
    /** Array of Transaction Metadata for given transaction */
    metadata: /** Latest minting transaction metadata (aligns with CIP-25) */
    /**
     * A JSON array containing details about metadata within transaction
     * @example
     * {
     *   "721": {
     *     "version": 1,
     *     "copyright": "...",
     *     "publisher": [
     *       "p...o"
     *     ],
     *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
     *   }
     * }
     */
    ({} | null)[]
  }[]
}

/**
 * Policy Asset Address List
 * Get the list of addresses with quantity for each asset on the given policy <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
 */
export type PolicyAssetAddressesResponse = IPolicyAssetAddresses[]
export interface IPolicyAssetAddresses {
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * A Cardano payment/base address (bech32 encoded) for transaction's input UTxO
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  payment_address: string
  /**
   * Asset balance on the payment address
   * @example
   * 23
   */
  quantity: string
}

/**
 * Policy Asset Information
 * Get the information for all assets under the same policy
 */
export type PolicyAssetInfoResponse = IPolicyAssetInfo[]
export interface IPolicyAssetInfo {
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Hash of the latest mint transaction
   * @example
   * "cb07b7e51b77079776c4a78f2daf8f14f9945d2b047da7bfcb71d7fbb9f86712"
   */
  minting_tx_hash: string
  /**
   * Total supply for the asset
   * @example
   * "35000"
   */
  total_supply: string
  /**
   * Count of total mint transactions
   * @example
   * 1
   */
  mint_cnt: number
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: number
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: number
  /** Latest minting transaction metadata (aligns with CIP-25) */
  minting_tx_metadata: /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  {} | null
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    /**
     * A PNG image file as a byte string
     * @example
     * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
     */
    logo: string
    decimals: number
  } | null
}

/**
 * Asset Policy Information [DEPRECATED]
 * Get the information for all assets under the same policy (replaced by asset_addresses)
 */
export type AssetPolicyInfoResponse = IAssetPolicyInfo[]
export interface IAssetPolicyInfo {
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Hash of the latest mint transaction
   * @example
   * "cb07b7e51b77079776c4a78f2daf8f14f9945d2b047da7bfcb71d7fbb9f86712"
   */
  minting_tx_hash: string
  /**
   * Total supply for the asset
   * @example
   * "35000"
   */
  total_supply: string
  /**
   * Count of total mint transactions
   * @example
   * 1
   */
  mint_cnt: number
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: number
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: number
  /** Latest minting transaction metadata (aligns with CIP-25) */
  minting_tx_metadata: /**
   * A JSON array containing details about metadata within transaction
   * @example
   * {
   *   "721": {
   *     "version": 1,
   *     "copyright": "...",
   *     "publisher": [
   *       "p...o"
   *     ],
   *     "4bf184e01e0f163296ab253edd60774e2d34367d0e7b6cbc689b567d": {}
   *   }
   * }
   */
  {} | null
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: {
    name: string
    description: string
    ticker: string
    url: string
    /**
     * A PNG image file as a byte string
     * @example
     * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
     */
    logo: string
    decimals: number
  } | null
}

/**
 * Policy Asset List
 * Get the list of asset under the given policy (including balances)
 */
export type PolicyAssetListResponse = IPolicyAssetList[]
export interface IPolicyAssetList {
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Total supply for the asset
   * @example
   * "35000"
   */
  total_supply: string
  /**
   * Asset decimals
   * @example
   * 6
   */
  decimals: number
}

/**
 * Asset Summary
 * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
 */
export type AssetSummaryResponse = IAssetSummary[]
export interface IAssetSummary {
  /**
   * Asset Policy ID (hex)
   * @example
   * "d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff"
   */
  policy_id: string
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: string | null
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /**
   * Total number of transactions including the given asset
   * @example
   * 89416
   */
  total_transactions: number
  /**
   * Total number of registered wallets holding the given asset
   * @example
   * 548
   */
  staked_wallets: number
  /**
   * Total number of payment addresses (not belonging to registered wallets) holding the given asset
   * @example
   * 245
   */
  unstaked_addresses: number
}

/**
 * Asset Transactions
 * Get the list of current or all asset transaction hashes (newest first)
 */
export type AssetTxsResponse = IAssetTxs[]
export interface IAssetTxs {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * Pool List
 * A list of all currently registered/retiring (not retired) pools
 */
export type PoolListResponse = IPoolList[]
export interface IPoolList {
  /**
   * Bech32 representation of pool ID
   * @example
   * "pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt"
   */
  pool_id_bech32: string | null
  /**
   * Pool ticker
   * @example
   * "JAZZ"
   */
  ticker: string | null
}

/**
 * Pool Information
 * Current pool statuses and details for a specified list of pool ids
 */
export type PoolInfoResponse = IPoolInfo[]
export interface IPoolInfo {
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  /**
   * Pool ID (Hex format)
   * @example
   * "a532904ca60e13e88437b58e7c6ff66b8d5e7ec8d3f4b9e4be7820ec"
   */
  pool_id_hex: string
  /**
   * Epoch number in which the update becomes active
   * @example
   * 324
   */
  active_epoch_no: number
  /**
   * Pool VRF key hash
   * @example
   * "25efdad1bc12944d38e4e3c26c43565bec84973a812737b163b289e87d0d5ed3"
   */
  vrf_key_hash: string
  /**
   * Margin (decimal format)
   * @example
   * 0.1
   */
  margin: any
  /**
   * Pool fixed cost per epoch
   * @example
   * "500000000"
   */
  fixed_cost: string
  /**
   * Pool pledge in lovelace
   * @example
   * "64000000000000"
   */
  pledge: string
  /**
   * Pool reward address
   * @example
   * "stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5"
   */
  reward_addr: string
  owners: /**
   * Pool (co)owner address
   * @example
   * "stake1u8088wvudd7dp3rxl0v9xgng8r3j50s65ge3l3jvgd94keqfm3nv3"
   */
  string[]
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: string | null
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: string | null
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: string | null
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: string | null
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any | null
  }[]
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: string | null
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: string | null
  meta_json: {
    /**
     * Pool name
     * @example
     * "Input Output Global (IOHK) - Private"
     */
    name: string
    /**
     * Pool ticker
     * @example
     * "IOGP"
     */
    ticker: string
    /**
     * Pool homepage URL
     * @example
     * "https://iohk.io"
     */
    homepage: string
    /**
     * Pool description
     * @example
     * "Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker."
     */
    description: string
  } | null
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
  /** Announced retiring epoch (nullable) */
  retiring_epoch: number | null
  /**
   * Pool latest operational certificate hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  op_cert: string | null
  /**
   * Pool latest operational certificate counter value
   * @example
   * 8
   */
  op_cert_counter: number | null
  /**
   * Pool active stake (will be null post epoch transition until dbsync calculation is complete)
   * @example
   * "64328627680963"
   */
  active_stake: string | null
  /**
   * Pool relative active stake share
   * @example
   * 0.0034839235
   */
  sigma: any | null
  /**
   * Total pool blocks on chain
   * @example
   * 4509
   */
  block_count: number | null
  /**
   * Summary of account balance for all pool owner's
   * @example
   * "64328594406327"
   */
  live_pledge: string | null
  /**
   * Pool live stake
   * @example
   * "64328627680963"
   */
  live_stake: string | null
  /**
   * Pool live delegator count
   * @example
   * 5
   */
  live_delegators: number
  /**
   * Pool live saturation (decimal format)
   * @example
   * 94.52
   */
  live_saturation: any | null
}

/**
 * Pool Stake Snapshot
 * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
 */
export type PoolStakeSnapshotResponse = IPoolStakeSnapshot[]
export interface IPoolStakeSnapshot {
  /**
   * Type of snapshot ("Mark", "Set" or "Go")
   * @example
   * "Mark"
   */
  snapshot: string
  /**
   * Epoch number for the snapshot entry
   * @example
   * 324
   */
  epoch_no: number
  /**
   * The nonce value for this epoch
   * @example
   * "01304ddf5613166be96fce27be110747f2c8fcb38776618ee79225ccb59b81e2"
   */
  nonce: string | null
  /**
   * Pool's Active Stake for the given epoch
   * @example
   * "100000000000"
   */
  pool_stake: string
  /**
   * Total Active Stake for the given epoch
   * @example
   * "103703246364020"
   */
  active_stake: string
}

/**
 * Pool Delegators List
 * Return information about live delegators for a given pool.
 */
export type PoolDelegatorsResponse = IPoolDelegators[]
export interface IPoolDelegators {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  /**
   * Current delegator live stake (in lovelace)
   * @example
   * 64328591517480
   */
  amount: string
  /**
   * Epoch number in which the delegation becomes active
   * @example
   * 324
   */
  active_epoch_no: number
  /**
   * Latest transaction hash used for delegation by the account
   * @example
   * "368d08fe86804d637649341d3aec4a9baa7dffa6d00f16de2ba9dba814f1c948"
   */
  latest_delegation_tx_hash: string
}

/**
 * Pool Delegators History
 * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
 */
export type PoolDelegatorsHistoryResponse = IPoolDelegatorsHistory[]
export interface IPoolDelegatorsHistory {
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
  /**
   * Current delegator live stake (in lovelace)
   * @example
   * 64328591517480
   */
  amount: string
  /**
   * Epoch number for the delegation history
   * @example
   * 324
   */
  epoch_no: number
}

/**
 * Pool Blocks
 * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
 */
export type PoolBlocksResponse = IPoolBlocks[]
export interface IPoolBlocks {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: number
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: number
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: number
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: number | null
  /**
   * Hash of the block
   * @example
   * "e8c6992d52cd74b577b79251e0351be25070797a0dbc486b2c284d0bf7aeea9c"
   */
  block_hash: string
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
}

/**
 * Pool Stake, Block and Reward History
 * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
 */
export type PoolHistoryResponse = IPoolHistory[]
export interface IPoolHistory {
  /**
   * Epoch for which the pool history data is shown
   * @example
   * 312
   */
  epoch_no: number
  /**
   * Amount of delegated stake to this pool at the time of epoch snapshot (in lovelaces)
   * @example
   * "31235800000"
   */
  active_stake: string
  /**
   * Active stake for the pool, expressed as a percentage of total active stake on network
   * @example
   * 13.512182543475783
   */
  active_stake_pct: any
  /**
   * Saturation percentage of a pool at the time of snapshot (2 decimals)
   * @example
   * 45.32
   */
  saturation_pct: any
  /**
   * Number of blocks pool created in that epoch
   * @example
   * 14
   */
  block_cnt: number | null
  /**
   * Number of delegators to the pool for that epoch snapshot
   * @example
   * 1432
   */
  delegator_cnt: number
  /**
   * Margin (decimal format)
   * @example
   * 0.125
   */
  margin: any
  /**
   * Pool fixed cost per epoch (in lovelaces)
   * @example
   * "340000000"
   */
  fixed_cost: string
  /**
   * Total amount of fees earned by pool owners in that epoch (in lovelaces)
   * @example
   * "123327382"
   */
  pool_fees: string
  /**
   * Total amount of rewards earned by delegators in that epoch (in lovelaces)
   * @example
   * "123456789123"
   */
  deleg_rewards: string
  /**
   * Annualized ROS (return on staking) for delegators for this epoch
   * @example
   * 3.000340466
   */
  epoch_ros: any
}

/**
 * Pool Updates (History)
 * Return all pool updates for all pools or only updates for specific pool if specified
 */
export type PoolUpdatesResponse = IPoolUpdates[]
export interface IPoolUpdates {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: number
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  /**
   * Pool ID (Hex format)
   * @example
   * "a532904ca60e13e88437b58e7c6ff66b8d5e7ec8d3f4b9e4be7820ec"
   */
  pool_id_hex: string
  /**
   * Epoch number in which the update becomes active
   * @example
   * 324
   */
  active_epoch_no: number
  /**
   * Pool VRF key hash
   * @example
   * "25efdad1bc12944d38e4e3c26c43565bec84973a812737b163b289e87d0d5ed3"
   */
  vrf_key_hash: string
  /**
   * Margin (decimal format)
   * @example
   * 0.1
   */
  margin: any
  /**
   * Pool fixed cost per epoch
   * @example
   * "500000000"
   */
  fixed_cost: string
  /**
   * Pool pledge in lovelace
   * @example
   * "64000000000000"
   */
  pledge: string
  /**
   * Pool reward address
   * @example
   * "stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5"
   */
  reward_addr: string
  owners: /**
   * Pool (co)owner address
   * @example
   * "stake1u8088wvudd7dp3rxl0v9xgng8r3j50s65ge3l3jvgd94keqfm3nv3"
   */
  string[]
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: string | null
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: string | null
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: string | null
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: string | null
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any | null
  }[]
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: string | null
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: string | null
  meta_json: {
    /**
     * Pool name
     * @example
     * "Input Output Global (IOHK) - Private"
     */
    name: string
    /**
     * Pool ticker
     * @example
     * "IOGP"
     */
    ticker: string
    /**
     * Pool homepage URL
     * @example
     * "https://iohk.io"
     */
    homepage: string
    /**
     * Pool description
     * @example
     * "Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker."
     */
    description: string
  } | null
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
  /** Announced retiring epoch (nullable) */
  retiring_epoch: number | null
}

/**
 * Pool Relays
 * A list of registered relays for all currently registered/retiring (not retired) pools
 */
export type PoolRelaysResponse = IPoolRelays[]
export interface IPoolRelays {
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: string | null
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: string | null
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: string | null
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: string | null
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any | null
  }[]
}

/**
 * Pool Metadata
 * Metadata (on & off-chain) for all currently registered/retiring (not retired) pools
 */
export type PoolMetadataResponse = IPoolMetadata[]
export interface IPoolMetadata {
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: string | null
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: string | null
  meta_json: {
    /**
     * Pool name
     * @example
     * "Input Output Global (IOHK) - Private"
     */
    name: string
    /**
     * Pool ticker
     * @example
     * "IOGP"
     */
    ticker: string
    /**
     * Pool homepage URL
     * @example
     * "https://iohk.io"
     */
    homepage: string
    /**
     * Pool description
     * @example
     * "Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker."
     */
    description: string
  } | null
}

/**
 * Native Script List
 * List of all existing native script hashes along with their creation transaction hashes
 */
export type NativeScriptListResponse = INativeScriptList[]
export interface INativeScriptList {
  /**
   * Hash of a script
   * @example
   * "d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8"
   */
  script_hash: string
  /**
   * Hash of the script creation transaction
   * @example
   * "fda6c7697009237975ffc30f36666addf4c6e2a2c6f90411a24431b700baaab1"
   */
  creation_tx_hash: string
  /**
   * Type of the script
   * @example
   * "timelock"
   */
  type: "timelock" | "multisig"
}

/**
 * Plutus Script List
 * List of all existing Plutus script hashes along with their creation transaction hashes
 */
export type PlutusScriptListResponse = IPlutusScriptList[]
export interface IPlutusScriptList {
  /**
   * Hash of a script
   * @example
   * "d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8"
   */
  script_hash: string
  /**
   * Hash of the script creation transaction
   * @example
   * "fda6c7697009237975ffc30f36666addf4c6e2a2c6f90411a24431b700baaab1"
   */
  creation_tx_hash: string
}

/**
 * Script Redeemers
 * List of all redeemers for a given script hash
 */
export type ScriptRedeemersResponse = IScriptRedeemers[]
export interface IScriptRedeemers {
  /**
   * Hash of Transaction for which details are being shown
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  script_hash: string
  redeemers: {
    /**
     * Hash of Transaction containing the redeemer
     * @example
     * "fda6c7697009237975ffc30f36666addf4c6e2a2c6f90411a24431b700baaab1"
     */
    tx_hash: string
    /** The index of the redeemer pointer in the transaction */
    tx_index: number
    /**
     * The budget in Memory to run a script
     * @example
     * 520448
     */
    unit_mem: string | number | null
    /**
     * The budget in Cpu steps to run a script
     * @example
     * 211535239
     */
    unit_steps: string | number | null
    /**
     * The budget in fees to run a script - the fees depend on the ExUnits and the current prices
     * @example
     * 45282
     */
    fee: string
    /**
     * What kind of validation this redeemer is used for
     * @example
     * "spend"
     */
    purpose: "spend" | "mint" | "cert" | "reward"
    /**
     * The Hash of the Plutus Data
     * @example
     * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
     */
    datum_hash: string | null
    /**
     * The actual data in json format
     * @example
     * {
     *   "bytes": "3c33"
     * }
     */
    datum_value: {}
  }[]
}

/**
 * Datum Information
 * List of datum information for given datum hashes
 */
export type DatumInfoResponse = IDatumInfo[]
export interface IDatumInfo {
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  hash: string | null
  /**
   * The actual data in json format
   * @example
   * {
   *   "bytes": "3c33"
   * }
   */
  value: {}
  /**
   * Datum bytes (hex)
   * @example
   * "19029a"
   */
  bytes: string
}
