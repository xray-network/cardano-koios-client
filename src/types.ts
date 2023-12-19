import { AxiosError } from "axios"

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
  epoch_no: any
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_no: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
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
  systemstart: any
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
  epoch_no: any
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
  tx_hash: {}
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: any
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
 * Reserve Withdrawals
 * List of all withdrawals from reserves against stake accounts
 */
export type ReserveWithdrawalsResponse = IReserveWithdrawals[]
export interface IReserveWithdrawals {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  tx_hash: {}
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
  block_height: any
  /**
   * Current delegator live stake (in lovelace)
   * @example
   * 64328591517480
   */
  amount: string
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
}

/**
 * Treasury Withdrawals
 * List of all withdrawals from treasury against stake accounts
 */
export type TreasuryWithdrawalsResponse = ITreasuryWithdrawals[]
export interface ITreasuryWithdrawals {
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  tx_hash: {}
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
  block_height: any
  /**
   * Current delegator live stake (in lovelace)
   * @example
   * 64328591517480
   */
  amount: string
  /**
   * Cardano staking address (reward account) in bech32 format
   * @example
   * "stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz"
   */
  stake_address: string
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
  epoch_no: any
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
  tx_count: any
  /**
   * Number of blocks created in epoch
   * @example
   * 17321
   */
  blk_count: any
  /**
   * UNIX timestamp of the epoch start
   * @example
   * 1506203091
   */
  start_time: any
  /**
   * UNIX timestamp of the epoch end
   * @example
   * 1506635091
   */
  end_time: any
  /**
   * UNIX timestamp of the epoch's first block
   * @example
   * 1506635091
   */
  first_block_time: any
  /**
   * UNIX timestamp of the epoch's last block
   * @example
   * 1506635091
   */
  last_block_time: any
  /**
   * Total active stake in epoch stake snapshot (null for pre-Shelley epochs)
   * @example
   * 23395112387185880
   */
  active_stake: any
  /**
   * Total rewards earned in epoch (null for pre-Shelley epochs)
   * @example
   * 252902897534230
   */
  total_rewards: any
  /**
   * Average block reward for epoch (null for pre-Shelley epochs)
   * @example
   * 660233450
   */
  avg_blk_reward: any
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
  epoch_no: any
  /**
   * The 'a' parameter to calculate the minimum transaction fee
   * @example
   * 44
   */
  min_fee_a: any
  /**
   * The 'b' parameter to calculate the minimum transaction fee
   * @example
   * 155381
   */
  min_fee_b: any
  /**
   * The maximum block size (in bytes)
   * @example
   * 65536
   */
  max_block_size: any
  /**
   * The maximum transaction size (in bytes)
   * @example
   * 16384
   */
  max_tx_size: any
  /**
   * The maximum block header size (in bytes)
   * @example
   * 1100
   */
  max_bh_size: any
  /**
   * The amount (in lovelace) required for a deposit to register a stake address
   * @example
   * 2000000
   */
  key_deposit: any
  /**
   * The amount (in lovelace) required for a deposit to register a stake pool
   * @example
   * 500000000
   */
  pool_deposit: any
  /**
   * The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for
   * @example
   * 18
   */
  max_epoch: any
  /**
   * The optimal number of stake pools
   * @example
   * 500
   */
  optimal_pool_count: any
  /**
   * The pledge influence on pool rewards
   * @example
   * 0.3
   */
  influence: any
  /**
   * The monetary expansion rate
   * @example
   * 0.003
   */
  monetary_expand_rate: any
  /**
   * The treasury growth rate
   * @example
   * 0.2
   */
  treasury_growth_rate: any
  /**
   * The decentralisation parameter (1 fully centralised, 0 fully decentralised)
   * @example
   * 0.1
   */
  decentralisation: any
  /**
   * The hash of 32-byte string of extra random-ness added into the protocol's entropy pool
   * @example
   * "d982e06fd33e7440b43cefad529b7ecafbaa255e38178ad4189a37e4ce9bf1fa"
   */
  extra_entropy: any
  /**
   * The protocol major version
   * @example
   * 5
   */
  protocol_major: any
  /** The protocol minor version */
  protocol_minor: any
  /**
   * The minimum value of a UTxO entry
   * @example
   * 34482
   */
  min_utxo_value: any
  /**
   * The minimum pool cost
   * @example
   * 340000000
   */
  min_pool_cost: any
  /**
   * The nonce value for this epoch
   * @example
   * "01304ddf5613166be96fce27be110747f2c8fcb38776618ee79225ccb59b81e2"
   */
  nonce: any
  /**
   * The hash of the first block where these parameters are valid
   * @example
   * "f9dc2a2fc3a2db09a71af007a740261de585afc9e3022b8e30535592ff4dd9e5"
   */
  block_hash: string
  /**
   * The per language cost model in JSON
   * @example
   * "null"
   */
  cost_models: any
  /**
   * The per word cost of script memory usage
   * @example
   * 0.0577
   */
  price_mem: any
  /**
   * The cost of script execution step usage
   * @example
   * 0.0000721
   */
  price_step: any
  /**
   * The maximum number of execution memory allowed to be used in a single transaction
   * @example
   * 10000000
   */
  max_tx_ex_mem: any
  /**
   * The maximum number of execution steps allowed to be used in a single transaction
   * @example
   * 10000000000
   */
  max_tx_ex_steps: any
  /**
   * The maximum number of execution memory allowed to be used in a single block
   * @example
   * 50000000
   */
  max_block_ex_mem: any
  /**
   * The maximum number of execution steps allowed to be used in a single block
   * @example
   * 40000000000
   */
  max_block_ex_steps: any
  /**
   * The maximum Val size
   * @example
   * 5000
   */
  max_val_size: any
  /**
   * The percentage of the tx fee which must be provided as collateral when including non-native scripts
   * @example
   * 150
   */
  collateral_percent: any
  /**
   * The maximum number of collateral inputs allowed in a transaction
   * @example
   * 3
   */
  max_collateral_inputs: any
  /**
   * The cost per UTxO size
   * @example
   * 34482
   */
  coins_per_utxo_size: any
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
  proto_major: any
  /**
   * Protocol major version
   * @example
   * 2
   */
  proto_minor: any
  /**
   * Amount of blocks with specified major and protocol combination
   * @example
   * 2183
   */
  blocks: any
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
  epoch_no: any
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * Block size in bytes
   * @example
   * 79109
   */
  block_size: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * Number of transactions in the block
   * @example
   * 44
   */
  tx_count: any
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
  pool: any
  /**
   * Counter value of the operational certificate used to create this block
   * @example
   * 8
   */
  op_cert_counter: any
  /**
   * The protocol major version
   * @example
   * 5
   */
  proto_major: any
  /** The protocol minor version */
  proto_minor: any
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
  epoch_no: any
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * Block size in bytes
   * @example
   * 79109
   */
  block_size: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * Number of transactions in the block
   * @example
   * 44
   */
  tx_count: any
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
  op_cert_counter: any
  /**
   * Pool ID in bech32 format (null for pre-Shelley blocks)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool: any
  /**
   * The protocol major version
   * @example
   * 5
   */
  proto_major: any
  /** The protocol minor version */
  proto_minor: any
  /**
   * Total output of the block (in lovelace)
   * @example
   * 92384672389
   */
  total_output: any
  /**
   * Total fees of the block (in lovelace)
   * @example
   * 2346834
   */
  total_fees: any
  /**
   * Number of confirmations for the block
   * @example
   * 664275
   */
  num_confirmations: any
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
  tx_hash: {}
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
}

/**
 * UTxO Info
 * Get UTxO set for requested UTxO references
 */
export type UtxoInfoResponse = IUtxoInfo[]
export interface IUtxoInfo {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
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
  block_height: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  absolute_slot: any
  /**
   * UNIX timestamp of the transaction
   * @example
   * 1506635091
   */
  tx_timestamp: any
  /**
   * Index of transaction within block
   * @example
   * 6
   */
  tx_block_index: any
  /**
   * Size in bytes of transaction
   * @example
   * 391
   */
  tx_size: any
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
  invalid_before: any
  /**
   * Slot after which transaction cannot be validated
   * @example
   * 42332172
   */
  invalid_after: any
  /** An array of collateral inputs needed for smart contracts in case of contract failure */
  collateral_inputs: {}
  /** A collateral output for change if the smart contract fails to execute and collateral inputs are spent. (CIP-40) */
  collateral_output: {}
  /** An array of reference inputs. A reference input allows looking at an output without spending it. (CIP-31) */
  reference_inputs: {}
  /** An array of UTxO outputs created by the transaction */
  inputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded)
       * @example
       * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr: {}
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
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
    datum_hash: any
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: any
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: any
    /** An array of assets on the UTxO */
    asset_list: any
  }[]
  /** An array of UTxO outputs created by the transaction */
  outputs: {
    payment_addr: {
      /**
       * A Cardano payment/base address (bech32 encoded)
       * @example
       * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
       */
      bech32: string
      /**
       * Payment credential
       * @example
       * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
       */
      cred: string
    }
    stake_addr: {}
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
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
    datum_hash: any
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: any
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: any
    /** An array of assets on the UTxO */
    asset_list: any
  }[]
  /** Array of withdrawals with-in a transaction */
  withdrawals: any
  /** Array of minted assets with-in a transaction */
  assets_minted: any
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
  metadata: any
  /** Certificates present with-in a transaction (if any) */
  certificates: any
  /** Native scripts present in a transaction (if any) */
  native_scripts: any
  /** Plutus contracts present in transaction (if any) */
  plutus_contracts: any
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
  metadata: any
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
 * Transaction Status
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
  num_confirmations: any
}

/**
 * Transaction UTxOs
 * Get UTxO set (inputs/outputs) of transactions [DEPRECATED - Use /utxo_info instead].
 */
export type TxUtxosResponse = ITxUtxos[]
export interface ITxUtxos {
  tx_hash: {}
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
    stake_addr: {}
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
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
    stake_addr: {}
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
    /**
     * Total sum of ADA on the UTxO
     * @example
     * 157832856
     */
    value: string
  }[]
}

/**
 * Address Information
 * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
 */
export type AddressInfoResponse = IAddressInfo[]
export interface IAddressInfo {
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Signifies whether the address is a script address
   * @example
   * true
   */
  script_address: boolean
  utxo_set: {
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
    /**
     * Block height
     * @example
     * 42325043
     */
    block_height: any
    /**
     * UNIX timestamp of the block
     * @example
     * 1506635091
     */
    block_time: any
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
    datum_hash: any
    /** Allows datums to be attached to UTxO (CIP-32) */
    inline_datum: any
    /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
    reference_script: any
    /** An array of assets on the UTxO */
    asset_list: any
  }[]
}

/**
 * Address UTXOs
 * Get UTxO set for given addresses
 */
export type AddressUtxosResponse = IAddressUtxos[]
export interface IAddressUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
}

/**
 * UTxOs from payment credentials
 * Get UTxO details for requested payment credentials
 */
export type CredentialUtxosResponse = ICredentialUtxos[]
export interface ICredentialUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
}

/**
 * Address Transactions
 * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
 */
export type AddressTxsResponse = IAddressTxs[]
export interface IAddressTxs {
  tx_hash: {}
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
}

/**
 * Transactions from payment credentials
 * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
 */
export type CredentialTxsResponse = ICredentialTxs[]
export interface ICredentialTxs {
  tx_hash: {}
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
}

/**
 * Address Assets
 * Get the list of all the assets (policy, name and quantity) for given addresses
 */
export type AddressAssetsResponse = IAddressAssets[]
export interface IAddressAssets {
  /**
   * A Cardano payment/base address (bech32 encoded)
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  address: string
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
  asset_name: any
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  decimals: any
  /**
   * Asset balance on the payment address
   * @example
   * 23
   */
  quantity: string
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
  delegated_pool: {}
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
 * Account Information (Cached)
 * Get the cached account information for given stake addresses (effective for performance query against registered accounts)
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
  delegated_pool: {}
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
 * UTxOs for stake addresses (accounts)
 * Get a list of all UTxOs for given stake addresses (account)s
 */
export type AccountUtxosResponse = IAccountUtxos[]
export interface IAccountUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
}

/**
 * Account Txs
 * Get a list of all Txs for a given stake address (account)
 */
export type AccountTxsResponse = IAccountTxs[]
export interface IAccountTxs {
  tx_hash: {}
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
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
    earned_epoch: any
    /**
     * Epoch number
     * @example
     * 294
     */
    spendable_epoch: any
    /** Amount of rewards earned (in lovelace) */
    amount: string
    /**
     * The source of the rewards
     * @example
     * "member"
     */
    type: "member" | "leader" | "treasury" | "reserves"
    /**
     * Pool ID (bech32 format)
     * @example
     * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
     */
    pool_id: string
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
    epoch_no: any
    /**
     * Slot number of the block in epoch
     * @example
     * 75442
     */
    epoch_slot: any
    /**
     * Absolute slot number of the block
     * @example
     * 53384242
     */
    absolute_slot: any
    /**
     * UNIX timestamp of the block
     * @example
     * 1506635091
     */
    block_time: any
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
   * A Cardano payment/base address (bech32 encoded)
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
  asset_name: any
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  decimals: any
  /**
   * Asset balance on the payment address
   * @example
   * 23
   */
  quantity: string
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
    epoch_no: any
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
  asset_name: any
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
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
  asset_name: any
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
  decimals: any
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
  asset_name: any
  /**
   * Asset Name (ASCII)
   * @example
   * "DONTSPAM"
   */
  asset_name_ascii: string
  ticker: string
  description: string
  url: string
  decimals: any
  /**
   * A PNG image file as a byte string
   * @example
   * "iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc"
   */
  logo: string
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
  asset_name: any
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
  mint_cnt: any
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: any
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: any
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
  any
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: any
  /**
   * CIP 68 metadata if present for asset
   * @example
   * {
   *   "222": {
   *     "fields": [
   *       {
   *         "map": [
   *           {
   *             "k": {
   *               "bytes": "6e616d65"
   *             },
   *             "v": {
   *               "bytes": "74657374"
   *             }
   *           }
   *         ]
   *       }
   *     ],
   *     "constructor": 0
   *   }
   * }
   */
  cip68_metadata: any
}

/**
 * Asset UTXOs
 * Get the UTXO information of a list of assets including
 */
export type AssetUtxosResponse = IAssetUtxos[]
export interface IAssetUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
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
  asset_name: any
  /**
   * The CIP14 fingerprint of the asset
   * @example
   * "asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9"
   */
  fingerprint: string
  /** Array of all mint/burn transactions for an asset */
  minting_txs: any
}

/**
 * Asset Addresses
 * Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
 */
export type AssetAddressesResponse = IAssetAddresses[]
export interface IAssetAddresses {
  /**
   * A Cardano payment/base address (bech32 encoded)
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
   * A Cardano payment/base address (bech32 encoded)
   * @example
   * "addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp"
   */
  payment_address: string
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
  asset_name: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  asset_name: any
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
  mint_cnt: any
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: any
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: any
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
  any
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: any
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
  asset_name: any
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
  total_transactions: any
  /**
   * Total number of registered wallets holding the given asset
   * @example
   * 548
   */
  staked_wallets: any
  /**
   * Total number of payment addresses (not belonging to registered wallets) holding the given asset
   * @example
   * 245
   */
  unstaked_addresses: any
}

/**
 * Asset Transactions
 * Get the list of current or all asset transaction hashes (newest first)
 */
export type AssetTxsResponse = IAssetTxs[]
export interface IAssetTxs {
  tx_hash: {}
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
}

/**
 * Asset Address List
 * Get the list of all addresses holding a given asset [DEPRECATED - replaced by asset_addresses]
 */
export type AssetAddressListResponse = IAssetAddressList[]
export interface IAssetAddressList {
  /**
   * A Cardano payment/base address (bech32 encoded)
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
 * Asset Policy Information
 * Get the information for all assets under the same policy (DEPRECATED - replaced by policy_asset_info)
 */
export type AssetPolicyInfoResponse = IAssetPolicyInfo[]
export interface IAssetPolicyInfo {
  /**
   * Asset Name (hex)
   * @example
   * "444f4e545350414d"
   */
  asset_name: any
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
  mint_cnt: any
  /**
   * Count of total burn transactions
   * @example
   * 5
   */
  burn_cnt: any
  /**
   * UNIX timestamp of the first asset mint
   * @example
   * 1506635091
   */
  creation_time: any
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
  any
  /** Asset metadata registered on the Cardano Token Registry */
  token_registry_metadata: any
}

/**
 * Pool List
 * List of brief info for all pools
 */
export type PoolListResponse = IPoolList[]
export interface IPoolList {
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
  active_epoch_no: {}
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
  fixed_cost: any
  /**
   * Pool pledge in lovelace
   * @example
   * "64000000000000"
   */
  pledge: any
  /**
   * Pool reward address
   * @example
   * "stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5"
   */
  reward_addr: any
  owners: any
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: any
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: any
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: any
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: any
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any
  }[]
  /**
   * Pool ticker
   * @example
   * "AHL"
   */
  ticker: any
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: any
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: any
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
  /**
   * Announced retiring epoch (nullable)
   * @example
   * "null"
   */
  retiring_epoch: any
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
  active_epoch_no: any
  /**
   * Pool VRF key hash
   * @example
   * "25efdad1bc12944d38e4e3c26c43565bec84973a812737b163b289e87d0d5ed3"
   */
  vrf_key_hash: any
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
  fixed_cost: any
  /**
   * Pool pledge in lovelace
   * @example
   * "64000000000000"
   */
  pledge: any
  /**
   * Pool reward address
   * @example
   * "stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5"
   */
  reward_addr: any
  owners: any
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: any
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: any
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: any
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: any
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any
  }[]
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: any
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: any
  meta_json: any
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
  /**
   * Announced retiring epoch (nullable)
   * @example
   * "null"
   */
  retiring_epoch: any
  /**
   * Pool latest operational certificate hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  op_cert: any
  /**
   * Pool latest operational certificate counter value
   * @example
   * 8
   */
  op_cert_counter: any
  /**
   * Pool active stake (will be null post epoch transition until dbsync calculation is complete)
   * @example
   * "64328627680963"
   */
  active_stake: any
  /**
   * Pool relative active stake share
   * @example
   * 0.0034839235
   */
  sigma: any
  /**
   * Total pool blocks on chain
   * @example
   * 4509
   */
  block_count: any
  /**
   * Summary of account balance for all pool owner's
   * @example
   * "64328594406327"
   */
  live_pledge: any
  /**
   * Pool live stake
   * @example
   * "64328627680963"
   */
  live_stake: any
  /**
   * Pool live delegator count
   * @example
   * 5
   */
  live_delegators: any
  /**
   * Pool live saturation (decimal format)
   * @example
   * 94.52
   */
  live_saturation: any
}

/**
 * Pool Stake Snapshot
 * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
 */
export type PoolStakeSnapshotResponse = IPoolStakeSnapshot[]
export interface IPoolStakeSnapshot {
  /** Array of pool stake information for 3 snapshots */
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
  epoch_no: any
  /**
   * The nonce value for this epoch
   * @example
   * "01304ddf5613166be96fce27be110747f2c8fcb38776618ee79225ccb59b81e2"
   */
  nonce: any
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
  active_epoch_no: any
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
  epoch_no: any
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
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Absolute slot number of the block
   * @example
   * 53384242
   */
  abs_slot: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
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
  block_time: any
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
  epoch_no: any
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
  block_cnt: any
  /**
   * Number of delegators to the pool for that epoch snapshot
   * @example
   * 1432
   */
  delegator_cnt: any
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
   * Total amount of rewards earned by members (delegator - owner) in that epoch (in lovelaces)
   * @example
   * "123456780123"
   */
  member_rewards: string
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
  tx_hash: {}
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
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
  active_epoch_no: any
  /**
   * Pool VRF key hash
   * @example
   * "25efdad1bc12944d38e4e3c26c43565bec84973a812737b163b289e87d0d5ed3"
   */
  vrf_key_hash: any
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
  fixed_cost: any
  /**
   * Pool pledge in lovelace
   * @example
   * "64000000000000"
   */
  pledge: any
  /**
   * Pool reward address
   * @example
   * "stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5"
   */
  reward_addr: any
  owners: any
  relays: {
    /**
     * DNS name of the relay (nullable)
     * @example
     * "relays-new.cardano-mainnet.iohk.io"
     */
    dns: any
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: any
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: any
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: any
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any
  }[]
  /**
   * Pool metadata URL
   * @example
   * "https://pools.iohk.io/IOGP.json"
   */
  meta_url: any
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: any
  meta_json: any
  /**
   * Type of update task
   * @example
   * "registered"
   */
  update_type: "registration" | "deregistration"
  /**
   * Announced retiring epoch (nullable)
   * @example
   * "null"
   */
  retiring_epoch: any
}

/**
 * Pool Registrations
 * Return all pool registrations initiated in the requested epoch
 */
export type PoolRegistrationsResponse = IPoolRegistrations[]
export interface IPoolRegistrations {
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  tx_hash: {}
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
  block_height: any
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Epoch number in which the update becomes active
   * @example
   * 324
   */
  active_epoch_no: any
}

/**
 * Pool Retirements
 * Return all pool retirements initiated in the requested epoch
 */
export type PoolRetirementsResponse = IPoolRetirements[]
export interface IPoolRetirements {
  /**
   * Pool ID (bech32 format)
   * @example
   * "pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc"
   */
  pool_id_bech32: string
  tx_hash: {}
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
  block_height: any
  /**
   * Epoch number
   * @example
   * 294
   */
  epoch_no: any
  /**
   * Slot number of the block in epoch
   * @example
   * 75442
   */
  epoch_slot: any
  /**
   * Epoch number in which the update becomes active
   * @example
   * 324
   */
  active_epoch_no: any
}

/**
 * Pool Relays
 * A list of registered relays for all pools
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
    dns: any
    /**
     * DNS service name of the relay (nullable)
     * @example
     * "biostakingpool3.hopto.org"
     */
    srv: any
    /**
     * IPv4 address of the relay (nullable)
     * @example
     * "54.220.20.40"
     */
    ipv4: any
    /**
     * IPv6 address of the relay (nullable)
     * @example
     * "2604:ed40:1000:1711:6082:78ff:fe0c:ebf"
     */
    ipv6: any
    /**
     * Port number of the relay (nullable)
     * @example
     * 6000
     */
    port: any
  }[]
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
}

/**
 * Pool Metadata
 * Metadata (on & off-chain) for all pools
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
  meta_url: any
  /**
   * Pool metadata hash
   * @example
   * "37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0"
   */
  meta_hash: any
  meta_json: any
  /**
   * Pool status
   * @example
   * "registered"
   */
  pool_status: "registered" | "retiring" | "retired"
}

/**
 * Script Information
 * List of script information for given script hashes
 */
export type ScriptInfoResponse = IScriptInfo[]
export interface IScriptInfo {
  /** Array of information for scripts */
  /**
   * Hash of a script
   * @example
   * "bfa7ffa9b2e164873db6ac6d0528c82e212963bc62e10fd1d81da4af"
   */
  script_hash: string
  /**
   * Hash of the script creation transaction
   * @example
   * "255f061502ad83230351fbcf2d9fade1b5d118d332f92c9861075010a1fe3fbe"
   */
  creation_tx_hash: string
  /**
   * Type of the script
   * @example
   * "plutusV1"
   */
  type: "plutusV1" | "plutusV2" | "timelock" | "multisig"
  /**
   * Data in JSON format
   * @example
   * "null"
   */
  value: any
  /**
   * Script bytes (cborSeq)
   * @example
   * "5907f4010000332323232323232323233223232323232332232323232322223232533532533533355300712001323212330012233350052200200200100235001220011233001225335002101710010142325335333573466e3cd400488008d4020880080580544ccd5cd19b873500122001350082200101601510153500122002353500122002222222222200a101413357389201115554784f206e6f7420636f6e73756d6564000133333573466e1cd55cea8012400046644246600200600464646464646464646464646666ae68cdc39aab9d500a480008cccccccccc888888888848cccccccccc00402c02802402001c01801401000c008cd40508c8c8cccd5cd19b8735573aa0049000119910919800801801180f9aba150023019357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854028cd4050054d5d0a804999aa80bbae501635742a010666aa02eeb94058d5d0a80399a80a0109aba15006335014335502402275a6ae854014c8c8c8cccd5cd19b8735573aa00490001199109198008018011919191999ab9a3370e6aae754009200023322123300100300233502575a6ae854008c098d5d09aba2500223263533573805e05c05a05826aae7940044dd50009aba150023232323333573466e1cd55cea8012400046644246600200600466a04aeb4d5d0a80118131aba135744a004464c6a66ae700bc0b80b40b04d55cf280089baa001357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854010cd4051d71aba15003335014335502475c40026ae854008c070d5d09aba2500223263533573804e04c04a04826ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150023232323333573466e1d400520062321222230040053019357426aae79400c8cccd5cd19b875002480108c848888c008014c06cd5d09aab9e500423333573466e1d400d20022321222230010053015357426aae7940148cccd5cd19b875004480008c848888c00c014dd71aba135573ca00c464c6a66ae7008808408007c0780740704d55cea80089baa001357426ae8940088c98d4cd5ce00d80d00c80c080c89931a99ab9c4910350543500019018135573ca00226ea8004c8004d5405888448894cd40044d400c88004884ccd401488008c010008ccd54c01c4800401401000448c88c008dd6000990009aa80b111999aab9f00125009233500830043574200460066ae880080548c8c8c8cccd5cd19b8735573aa00690001199911091998008020018011919191999ab9a3370e6aae7540092000233221233001003002301735742a00466a01c02c6ae84d5d1280111931a99ab9c01b01a019018135573ca00226ea8004d5d0a801999aa803bae500635742a00466a014eb8d5d09aba2500223263533573802e02c02a02826ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80a11191999aab9f0022500823350073355017300635573aa004600a6aae794008c010d5d100180a09aba100111220021221223300100400312232323333573466e1d4005200023212230020033005357426aae79400c8cccd5cd19b8750024800884880048c98d4cd5ce00980900880800789aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98d4cd5ce00800780700689aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6a66ae7003803403002c4dd500089119191999ab9a3370ea00290021091100091999ab9a3370ea00490011190911180180218031aba135573ca00846666ae68cdc3a801a400042444004464c6a66ae7004404003c0380340304d55cea80089baa0012323333573466e1d40052002200523333573466e1d40092000200523263533573801a01801601401226aae74dd5000891001091000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6a66ae7004c04804404003c03803403002c0284d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263533573801801601401201026aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931a99ab9c009008007006005135573aa00226ea800444888c8c8cccd5cd19b8735573aa0049000119aa80518031aba150023005357426ae8940088c98d4cd5ce00480400380309aab9e5001137540029309000a490350543100112212330010030021123230010012233003300200200133512233002489209366f09fe40eaaeb17d3cb6b0b61e087d664174c39a48a986f86b2b0ba6e2a7b00480008848cc00400c0088005"
   */
  bytes: string
  /**
   * The size of the CBOR serialised script (in bytes)
   * @example
   * 2039
   */
  size: any
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
   * "bfa7ffa9b2e164873db6ac6d0528c82e212963bc62e10fd1d81da4af"
   */
  script_hash: string
  /**
   * Hash of the script creation transaction
   * @example
   * "255f061502ad83230351fbcf2d9fade1b5d118d332f92c9861075010a1fe3fbe"
   */
  creation_tx_hash: string
  /**
   * Type of the script
   * @example
   * "plutusV1"
   */
  type: "plutusV1" | "plutusV2" | "timelock" | "multisig"
  /**
   * The size of the CBOR serialised script (in bytes)
   * @example
   * 2039
   */
  size: any
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
   * "bfa7ffa9b2e164873db6ac6d0528c82e212963bc62e10fd1d81da4af"
   */
  script_hash: string
  /**
   * Hash of the script creation transaction
   * @example
   * "255f061502ad83230351fbcf2d9fade1b5d118d332f92c9861075010a1fe3fbe"
   */
  creation_tx_hash: string
  /**
   * Type of the script
   * @example
   * "plutusV1"
   */
  type: "plutusV1" | "plutusV2" | "timelock" | "multisig"
  /**
   * The size of the CBOR serialised script (in bytes)
   * @example
   * 2039
   */
  size: any
}

/**
 * Script Redeemers
 * List of all redeemers for a given script hash
 */
export type ScriptRedeemersResponse = IScriptRedeemers[]
export interface IScriptRedeemers {
  /**
   * Hash of a script
   * @example
   * "bfa7ffa9b2e164873db6ac6d0528c82e212963bc62e10fd1d81da4af"
   */
  script_hash: string
  redeemers: {
    /**
     * Hash identifier of the transaction
     * @example
     * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
     */
    tx_hash: string
    /** Index of UTxO in the transaction */
    tx_index: any
    /**
     * The budget in Memory to run a script
     * @example
     * 520448
     */
    unit_mem: any
    /**
     * The budget in Cpu steps to run a script
     * @example
     * 211535239
     */
    unit_steps: any
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
    datum_hash: any
    /**
     * Data in JSON format
     * @example
     * "null"
     */
    datum_value: any
  }[]
}

/**
 * Script UTXOs
 * List of all UTXOs for a given script hash
 */
export type ScriptUtxosResponse = IScriptUtxos[]
export interface IScriptUtxos {
  /**
   * Hash identifier of the transaction
   * @example
   * "f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e"
   */
  tx_hash: string
  /** Index of UTxO in the transaction */
  tx_index: any
  /**
   * A Cardano payment/base address (bech32 encoded)
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
  stake_address: {}
  /**
   * Payment credential
   * @example
   * "de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794"
   */
  payment_cred: any
  /**
   * Epoch number of the block
   * @example
   * 321
   */
  epoch_no: any
  /**
   * Block height
   * @example
   * 42325043
   */
  block_height: any
  /**
   * UNIX timestamp of the block
   * @example
   * 1506635091
   */
  block_time: any
  /**
   * The Hash of the Plutus Data
   * @example
   * "5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4"
   */
  datum_hash: any
  /** Allows datums to be attached to UTxO (CIP-32) */
  inline_datum: any
  /** Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
  reference_script: any
  /** An array of assets on the UTxO */
  asset_list: any
  /**
   * True if the UTXO has been spent
   * @example
   * true
   */
  is_spent: boolean
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
  datum_hash: any
  /**
   * Hash of the script creation transaction
   * @example
   * "255f061502ad83230351fbcf2d9fade1b5d118d332f92c9861075010a1fe3fbe"
   */
  creation_tx_hash: string
  /**
   * Data in JSON format
   * @example
   * "null"
   */
  value: any
  /**
   * Script bytes (cborSeq)
   * @example
   * "5907f4010000332323232323232323233223232323232332232323232322223232533532533533355300712001323212330012233350052200200200100235001220011233001225335002101710010142325335333573466e3cd400488008d4020880080580544ccd5cd19b873500122001350082200101601510153500122002353500122002222222222200a101413357389201115554784f206e6f7420636f6e73756d6564000133333573466e1cd55cea8012400046644246600200600464646464646464646464646666ae68cdc39aab9d500a480008cccccccccc888888888848cccccccccc00402c02802402001c01801401000c008cd40508c8c8cccd5cd19b8735573aa0049000119910919800801801180f9aba150023019357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854028cd4050054d5d0a804999aa80bbae501635742a010666aa02eeb94058d5d0a80399a80a0109aba15006335014335502402275a6ae854014c8c8c8cccd5cd19b8735573aa00490001199109198008018011919191999ab9a3370e6aae754009200023322123300100300233502575a6ae854008c098d5d09aba2500223263533573805e05c05a05826aae7940044dd50009aba150023232323333573466e1cd55cea8012400046644246600200600466a04aeb4d5d0a80118131aba135744a004464c6a66ae700bc0b80b40b04d55cf280089baa001357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854010cd4051d71aba15003335014335502475c40026ae854008c070d5d09aba2500223263533573804e04c04a04826ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150023232323333573466e1d400520062321222230040053019357426aae79400c8cccd5cd19b875002480108c848888c008014c06cd5d09aab9e500423333573466e1d400d20022321222230010053015357426aae7940148cccd5cd19b875004480008c848888c00c014dd71aba135573ca00c464c6a66ae7008808408007c0780740704d55cea80089baa001357426ae8940088c98d4cd5ce00d80d00c80c080c89931a99ab9c4910350543500019018135573ca00226ea8004c8004d5405888448894cd40044d400c88004884ccd401488008c010008ccd54c01c4800401401000448c88c008dd6000990009aa80b111999aab9f00125009233500830043574200460066ae880080548c8c8c8cccd5cd19b8735573aa00690001199911091998008020018011919191999ab9a3370e6aae7540092000233221233001003002301735742a00466a01c02c6ae84d5d1280111931a99ab9c01b01a019018135573ca00226ea8004d5d0a801999aa803bae500635742a00466a014eb8d5d09aba2500223263533573802e02c02a02826ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80a11191999aab9f0022500823350073355017300635573aa004600a6aae794008c010d5d100180a09aba100111220021221223300100400312232323333573466e1d4005200023212230020033005357426aae79400c8cccd5cd19b8750024800884880048c98d4cd5ce00980900880800789aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98d4cd5ce00800780700689aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6a66ae7003803403002c4dd500089119191999ab9a3370ea00290021091100091999ab9a3370ea00490011190911180180218031aba135573ca00846666ae68cdc3a801a400042444004464c6a66ae7004404003c0380340304d55cea80089baa0012323333573466e1d40052002200523333573466e1d40092000200523263533573801a01801601401226aae74dd5000891001091000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6a66ae7004c04804404003c03803403002c0284d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263533573801801601401201026aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931a99ab9c009008007006005135573aa00226ea800444888c8c8cccd5cd19b8735573aa0049000119aa80518031aba150023005357426ae8940088c98d4cd5ce00480400380309aab9e5001137540029309000a490350543100112212330010030021123230010012233003300200200133512233002489209366f09fe40eaaeb17d3cb6b0b61e087d664174c39a48a986f86b2b0ba6e2a7b00480008848cc00400c0088005"
   */
  bytes: string
}
