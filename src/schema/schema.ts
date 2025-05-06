export type paths = {
    "/tip": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Query Chain Tip
         * @description Get the tip info about the latest block seen by chain
         */
        get: operations["tip"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/genesis": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Genesis info
         * @description Get the Genesis parameters used to start specific era on chain
         */
        get: operations["genesis"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/totals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get historical tokenomic stats
         * @description Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
         */
        get: operations["totals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/param_updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Param Update Proposals
         * @description Get all parameter update proposals submitted to the chain starting Shelley era
         */
        get: operations["param_updates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cli_protocol_params": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * CLI Protocol Parameters
         * @description Get Current Protocol Parameters as published by cardano-cli. Note that the output schema of this command is unfortunately fluid on cardano-node and may vary between CLI versions/era. Accordingly, the returned output for this endpoint is left as raw JSON (single row) and any filtering to output should be done on client-side
         */
        get: operations["cli_protocol_params"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reserve_withdrawals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Reserve Withdrawals
         * @description List of all withdrawals from reserves against stake accounts
         */
        get: operations["reserve_withdrawals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/treasury_withdrawals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Treasury Withdrawals
         * @description List of all withdrawals from treasury against stake accounts
         */
        get: operations["treasury_withdrawals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/epoch_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Epoch Information
         * @description Get the epoch information, all epochs if no epoch specified
         */
        get: operations["epoch_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/epoch_params": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Epoch's Protocol Parameters
         * @description Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
         */
        get: operations["epoch_params"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/epoch_block_protocols": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Epoch's Block Protocols
         * @description Get the information about block protocol distribution in epoch
         */
        get: operations["epoch_block_protocols"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Block List
         * @description Get summarised details about all blocks (paginated - latest first)
         */
        get: operations["blocks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/block_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Block Information
         * @description Get detailed information about a specific block
         */
        post: operations["block_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/block_txs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Block Transactions
         * @description Get a list of all transactions included in provided blocks
         */
        post: operations["block_txs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/block_tx_cbor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Block Transactions (Raw CBOR)
         * @description Get raw CBOR data for all transaction(s) within requested blocks
         */
        post: operations["block_tx_cbor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/block_tx_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Block Transactions (Detailed Info)
         * @deprecated
         * @description Get detailed information about transaction(s) for requested blocks
         */
        post: operations["block_tx_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/utxo_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * UTxO Info
         * @description Get UTxO set for requested UTxO references
         */
        post: operations["utxo_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_cbor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Raw Transaction (CBOR)
         * @description Get raw transaction(s) in CBOR format
         */
        post: operations["tx_cbor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transaction Information
         * @description Get detailed information about transaction(s)
         */
        post: operations["tx_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transaction Metadata
         * @description Get metadata information (if any) for given transaction(s)
         */
        post: operations["tx_metadata"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_metalabels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Transaction Metadata Labels
         * @description Get a list of all transaction metalabels
         */
        get: operations["tx_metalabels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/submittx": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit Transaction
         * @description Submit an already serialized transaction to the network.
         */
        post: operations["submittx"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transaction Status
         * @description Get the number of block confirmations for a given transaction hash list
         */
        post: operations["tx_status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tx_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transaction UTxOs
         * @deprecated
         * @description Get UTxO set (inputs/outputs) of transactions [DEPRECATED - Use /utxo_info instead].
         */
        post: operations["tx_utxos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/address_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Address Information
         * @description Get address info - balance, associated stake address (if any) and UTxO set for given addresses
         */
        post: operations["address_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/address_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Address UTXOs
         * @description Get UTxO set for given addresses
         */
        post: operations["address_utxos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/address_outputs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Address Outputs
         * @description Basic transaction output info for given addresses
         */
        post: operations["address_outputs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/credential_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * UTxOs from payment credentials
         * @description Get UTxO details for requested payment credentials
         */
        post: operations["credential_utxos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/address_txs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Address Transactions
         * @description Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
         */
        post: operations["address_txs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/credential_txs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transactions from payment credentials
         * @description Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
         */
        post: operations["credential_txs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/address_assets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Address Assets
         * @description Get the list of all the assets (policy, name and quantity) for given addresses
         */
        post: operations["address_assets"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Account List
         * @description Get a list of all stake addresses that have atleast 1 transaction
         */
        get: operations["account_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Information
         * @description Get the account information for given stake addresses
         */
        post: operations["account_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_info_cached": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Information (Cached)
         * @description Get the cached account information for given stake addresses (effective for performance query against registered accounts)
         */
        post: operations["account_info_cached"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * UTxOs for stake addresses (accounts)
         * @description Get a list of all UTxOs for given stake addresses (account)s
         */
        post: operations["account_utxos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_txs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Account Txs
         * @description Get a list of all Txs for a given stake address (account)
         */
        get: operations["account_txs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_rewards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Rewards
         * @deprecated
         * @description Get the full rewards history (including MIR) for given stake addresses
         */
        post: operations["account_rewards"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_reward_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Reward History
         * @description Get the full rewards history (including MIR) for given stake addresses
         */
        post: operations["account_reward_history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Updates
         * @description Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
         */
        post: operations["account_updates"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_update_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Update History
         * @description Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
         */
        post: operations["account_update_history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Addresses
         * @description Get all addresses associated with given staking accounts
         */
        post: operations["account_addresses"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_assets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Assets
         * @description Get the native asset balance for a given stake address
         */
        post: operations["account_assets"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account History
         * @deprecated
         * @description Get the staking history of given stake addresses (accounts)
         */
        post: operations["account_history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/account_stake_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Account Stake History
         * @description Get the staking history of given stake addresses (accounts)
         */
        post: operations["account_stake_history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset List
         * @description Get the list of all native assets (paginated)
         */
        get: operations["asset_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/policy_asset_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Policy Asset List
         * @description Get the list of asset under the given policy (including balances)
         */
        get: operations["policy_asset_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_token_registry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset Token Registry
         * @description Get a list of assets registered via token registry on github
         */
        get: operations["asset_token_registry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Asset Information (Bulk)
         * @description Get the information of a list of assets including first minting & token registry metadata
         */
        post: operations["asset_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Asset UTXOs
         * @description Get the UTXO information of a list of assets including
         */
        post: operations["asset_utxos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset History
         * @description Get the mint/burn history of an asset
         */
        get: operations["asset_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset Addresses
         * @description Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
         */
        get: operations["asset_addresses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_nft_address": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * NFT Address
         * @description Get the address where specified NFT currently reside on.
         */
        get: operations["asset_nft_address"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/policy_asset_addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Policy Asset Address List
         * @description Get the list of addresses with quantity for each asset on the given policy <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
         */
        get: operations["policy_asset_addresses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/policy_asset_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Policy Asset Information
         * @description Get the information for all assets under the same policy
         */
        get: operations["policy_asset_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/policy_asset_mints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Policy Asset Mints
         * @description Get a list of mint or burn count details for all assets minted under a policy
         */
        get: operations["policy_asset_mints"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset Summary
         * @description Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
         */
        get: operations["asset_summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/asset_txs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Asset Transactions
         * @description Get the list of current or all asset transaction hashes (newest first)
         */
        get: operations["asset_txs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_epoch_summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Epoch Summary
         * @description Summary of voting power and DRep count for each epoch
         */
        get: operations["drep_epoch_summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps List
         * @description List of all active delegated representatives (DReps)
         */
        get: operations["drep_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * DReps Info
         * @description Get detailed information about requested delegated representatives (DReps)
         */
        post: operations["drep_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * DReps Metadata
         * @description List metadata for requested delegated representatives (DReps)
         */
        post: operations["drep_metadata"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Updates
         * @description List of updates for requested (or all) delegated representatives (DReps)
         */
        get: operations["drep_updates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Voting Power History
         * @deprecated
         * @description History of DReps voting power against each (or requested) epoch
         */
        get: operations["drep_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_voting_power_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Voting Power History
         * @description History of DReps voting power against each (or requested) epoch
         */
        get: operations["drep_voting_power_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_votes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Votes
         * @deprecated
         * @description List of all votes casted by requested delegated representative (DRep)
         */
        get: operations["drep_votes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/drep_delegators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * DReps Delegators
         * @description List of all delegators to requested delegated representative (DRep).
         */
        get: operations["drep_delegators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/committee_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Committee Information
         * @description Information about active committee and its members
         */
        get: operations["committee_info"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/committee_votes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Committee Votes
         * @description List of all votes casted by given committee member or collective
         */
        get: operations["committee_votes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proposal_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Proposals List
         * @description List of all governance proposals
         */
        get: operations["proposal_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/voter_proposal_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Voter's Proposal List
         * @description List of all governance proposals for specified DRep, SPO or Committee credential
         */
        get: operations["voter_proposal_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proposal_voting_summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Proposal Voting Summary
         * @description Summary of votes for given proposal
         */
        get: operations["proposal_voting_summary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/proposal_votes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Proposal Votes
         * @description List of all votes cast on specified governance action
         */
        get: operations["proposal_votes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vote_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Vote List
         * @description List of all votes posted on-chain
         */
        get: operations["vote_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool List
         * @description List of brief info for all pools
         */
        get: operations["pool_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pool Information
         * @description Current pool statuses and details for a specified list of pool ids
         */
        post: operations["pool_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_stake_snapshot": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Stake Snapshot
         * @description Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
         */
        get: operations["pool_stake_snapshot"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_delegators": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Delegators List
         * @description Return information about live delegators for a given pool.
         */
        get: operations["pool_delegators"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_delegators_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Delegators History
         * @description Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
         */
        get: operations["pool_delegators_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_blocks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Blocks
         * @description Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
         */
        get: operations["pool_blocks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_owner_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pool Owner History
         * @description Return information about pool owner's historical stake and their promised pledge to their pools
         */
        post: operations["pool_owner_history"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Stake, Block and Reward History
         * @description Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
         */
        get: operations["pool_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Updates (History)
         * @description Return all pool updates for all pools or only updates for specific pool if specified
         */
        get: operations["pool_updates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_registrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Registrations
         * @description Return all pool registrations initiated in the requested epoch
         */
        get: operations["pool_registrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_retirements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Retirements
         * @description Return all pool retirements initiated in the requested epoch
         */
        get: operations["pool_retirements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_relays": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Relays
         * @description A list of registered relays for all pools
         */
        get: operations["pool_relays"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_voting_power_history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool's Voting Power History
         * @description History of Pool voting power against each (or requested) epoch
         */
        get: operations["pool_voting_power_history"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_votes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Votes
         * @deprecated
         * @description List of all votes casted by a pool
         */
        get: operations["pool_votes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Groups
         * @description List of all registered pool and their groups across sources from [pool_groups](https://github.com/cardano-community/pool_groups) repository. This is only relevant for mainnet
         */
        get: operations["pool_groups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pool Metadata
         * @description Metadata (on & off-chain) for all pools
         */
        post: operations["pool_metadata"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pool_calidus_keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Pool Calidus Keys
         * @description List of valid calidus keys for all pools
         */
        get: operations["pool_calidus_keys"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/script_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Script Information
         * @description List of script information for given script hashes
         */
        post: operations["script_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/native_script_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Native Script List
         * @description List of all existing native script hashes along with their creation transaction hashes
         */
        get: operations["native_script_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/plutus_script_list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Plutus Script List
         * @description List of all existing Plutus script hashes along with their creation transaction hashes
         */
        get: operations["plutus_script_list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/script_redeemers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Script Redeemers
         * @description List of all redeemers for a given script hash
         */
        get: operations["script_redeemers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/script_utxos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Script UTXOs
         * @description List of all UTXOs for a given script hash
         */
        get: operations["script_utxos"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/datum_info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Datum Information
         * @description List of datum information for given datum hashes
         */
        post: operations["datum_info"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ogmios": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Query Example
         * @description Query the current tip of the Network.
         *
         *     <br>
         *     <div style="background-color: #222; padding: 12px 0px 12px 12px;border-left: 5px solid  rgb(173, 44, 44);font-size: var(--font-size-regular);">
         *     We do support transparent forwarding for various methods from Ogmios, you can read about those <a href="#tag--Ogmios">here</a>.
         *     </div>
         *
         */
        post: operations["ogmios"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        /** @description Current tip of the chain */
        tip: {
            hash?: components["schemas"]["blocks"][number]["hash"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            abs_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            /**
             * @deprecated
             * @description DEPRECATED!! Use Block height instead
             * @example 1794506
             */
            block_no?: number;
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of genesis parameters used to start each era on chain */
        genesis: {
            /**
             * @description Unique network identifier for chain
             * @example 764824073
             */
            networkmagic?: string;
            /**
             * @description Network ID used at various CLI identification to distinguish between Mainnet and other networks
             * @example Mainnet
             */
            networkid?: string;
            /**
             * @description Number of slots in an epoch
             * @example 432000
             */
            epochlength?: string;
            /**
             * @description Duration of a single slot (in seconds)
             * @example 1
             */
            slotlength?: string;
            /**
             * @description Maximum smallest units (lovelaces) supply for the blockchain
             * @example 45000000000000000
             */
            maxlovelacesupply?: string;
            /**
             * @description UNIX timestamp of the first block (genesis) on chain
             * @example 1506203091
             */
            systemstart?: number;
            /**
             * @description Active Slot Co-Efficient (f) - determines the _probability_ of number of slots in epoch that are expected to have blocks (so mainnet, this would be: 432000 * 0.05 = 21600 estimated blocks)
             * @example 0.05
             */
            activeslotcoeff?: string;
            /**
             * @description Number of slots that represent a single KES period (a unit used for validation of KES key evolutions)
             * @example 129600
             */
            slotsperkesperiod?: string;
            /**
             * @description Number of KES key evolutions that will automatically occur before a KES (hot) key is expired. This parameter is for security of a pool, in case an operator had access to his hot(online) machine compromised
             * @example 62
             */
            maxkesrevolutions?: string;
            /**
             * @description A unit (k) used to divide epochs to determine stability window (used in security checks like ensuring atleast 1 block was created in 3*k/f period, or to finalize next epoch's nonce at 4*k/f slots before end of epoch)
             * @example 2160
             */
            securityparam?: string;
            /**
             * @description Number of BFT members that need to approve (via vote) a Protocol Update Proposal
             * @example 5
             */
            updatequorum?: string;
            /**
             * @description A JSON dump of Alonzo Genesis
             * @example {\"lovelacePerUTxOWord\":34482,\"executionPrices\":{\"prSteps\":{\"numerator\":721,\"denominator\":10000000},...
             */
            alonzogenesis?: string;
        }[];
        /** @description Array of supply/reserves/utxo/fees/treasury stats */
        totals: {
            /**
             * @description Epoch number
             * @example 294
             */
            epoch_no?: number;
            /**
             * @description Circulating UTxOs for given epoch (in numbers)
             * @example 32081169442642320
             */
            circulation?: string;
            /**
             * @description Funds in treasury for given epoch (in numbers)
             * @example 637024173474141
             */
            treasury?: string;
            /**
             * @description Rewards accumulated as of given epoch (in numbers)
             * @example 506871250479840
             */
            reward?: string;
            /**
             * @description Total Active Supply (sum of treasury funds, rewards, UTxOs, deposits and fees) for given epoch (in numbers)
             * @example 33228495612391330
             */
            supply?: string;
            /**
             * @description Total Reserves yet to be unlocked on chain
             * @example 11771504387608670
             */
            reserves?: string;
            /**
             * @description The amount (in Lovelace) in the fee pot.
             * @example 92010214941
             */
            fees?: string;
            /**
             * @description The amount (in Lovelace) in the obligation pot coming from stake key and pool deposits.
             * @example 3338702000000
             */
            deposits_stake?: string;
            /**
             * @description The amount (in Lovelace) in the obligation pot coming from drep registrations deposits.
             * @example 0
             */
            deposits_drep?: string;
            /**
             * @description The amount (in Lovelace) in the obligation pot coming from governance proposal deposits.
             * @example 0
             */
            deposits_proposal?: string;
        }[];
        /** @description Array of unique param update proposals submitted on chain */
        param_updates: {
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            /**
             * @description JSON encoded data with details about the parameter update
             * @example {
             *       "decentralisation": 0.9
             *     }
             */
            data?: string;
        }[];
        /**
         * @description Get Current Protocol Parameters from node as published by cardano-cli in JSON format
         * @example {
         *       "collateralPercentage": 150,
         *       "maxBlockBodySize": 90112,
         *       "maxBlockHeaderSize": 1100,
         *       "maxCollateralInputs": 3,
         *       "maxTxSize": 16384,
         *       "maxValueSize": 5000,
         *       "minPoolCost": 170000000,
         *       "minUTxOValue": null,
         *       "monetaryExpansion": 0.003,
         *       "poolPledgeInfluence": 0.3,
         *       "poolRetireMaxEpoch": 18,
         *       "protocolVersion": {
         *         "major": 8,
         *         "minor": 0
         *       },
         *       "...": "...",
         *       "stakeAddressDeposit": 2000000,
         *       "stakePoolDeposit": 500000000,
         *       "stakePoolTargetNum": 500,
         *       "treasuryCut": 0.2,
         *       "txFeeFixed": 155381,
         *       "txFeePerByte": 44,
         *       "utxoCostPerByte": 4310
         *     }
         */
        cli_protocol_params: Record<string, never>;
        /** @description Array of withdrawals from reserves/treasury against stake accounts */
        reserve_withdrawals: {
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            amount?: components["schemas"]["pool_delegators"][number]["amount"];
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            /** @description Epoch where amount is earned */
            earned_epoch?: components["schemas"]["epoch_info"][number]["epoch_no"];
            /** @description Epoch where the earned amount can be spent */
            spendable_epoch?: components["schemas"]["epoch_info"][number]["epoch_no"];
        }[];
        /** @description Array of pool IDs and tickers */
        pool_list: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            pool_id_hex?: components["schemas"]["pool_info"][number]["pool_id_hex"];
            active_epoch_no?: components["schemas"]["pool_info"][number]["active_epoch_no"];
            margin?: components["schemas"]["pool_info"][number]["margin"];
            fixed_cost?: components["schemas"]["pool_info"][number]["fixed_cost"];
            pledge?: components["schemas"]["pool_info"][number]["pledge"];
            deposit?: components["schemas"]["pool_info"][number]["deposit"];
            reward_addr?: components["schemas"]["pool_info"][number]["reward_addr"];
            owners?: components["schemas"]["pool_info"][number]["owners"];
            relays?: components["schemas"]["pool_info"][number]["relays"];
            /**
             * @description Pool ticker
             * @example AHL
             */
            ticker?: string | null;
            pool_group?: components["schemas"]["pool_groups"][number]["pool_group"];
            meta_url?: components["schemas"]["pool_info"][number]["meta_url"];
            meta_hash?: components["schemas"]["pool_info"][number]["meta_hash"];
            pool_status?: components["schemas"]["pool_info"][number]["pool_status"];
            active_stake?: components["schemas"]["pool_info"][number]["active_stake"];
            retiring_epoch?: components["schemas"]["pool_info"][number]["retiring_epoch"];
        }[];
        /** @description Array of pool history information */
        pool_history_info: {
            /**
             * @description Epoch for which the pool history data is shown
             * @example 312
             */
            epoch_no?: number;
            active_stake?: components["schemas"]["pool_info"][number]["active_stake"];
            /**
             * @description Active stake for the pool, expressed as a percentage of total active stake on network
             * @example 13.512182543475783
             */
            active_stake_pct?: number | null;
            /**
             * @description Saturation percentage of a pool at the time of snapshot (2 decimals)
             * @example 45.32
             */
            saturation_pct?: number;
            /**
             * @description Number of blocks pool created in that epoch
             * @example 14
             */
            block_cnt?: number | null;
            /**
             * @description Number of delegators to the pool for that epoch snapshot
             * @example 1432
             */
            delegator_cnt?: number;
            /**
             * @description Margin (decimal format)
             * @example 0.125
             */
            margin?: number;
            /**
             * @description Pool fixed cost per epoch (in numbers)
             * @example 340000000
             */
            fixed_cost?: string;
            /**
             * @description Total amount of fees earned by pool owners in that epoch (in numbers)
             * @example 123327382
             */
            pool_fees?: string;
            /**
             * @description Total amount of rewards earned by delegators in that epoch (in numbers)
             * @example 123456789123
             */
            deleg_rewards?: string;
            /**
             * @description Total amount of rewards earned by members (delegator - owner) in that epoch (in numbers)
             * @example 123456780123
             */
            member_rewards?: string | null;
            /**
             * @description Annualized ROS (return on staking) for delegators for this epoch
             * @example 3.000340466
             */
            epoch_ros?: number;
        }[];
        /** @description Array of pool owner's stake history */
        pool_owner_history: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            /**
             * @description Individual Stake account registered as (one of the) pool owner(s)
             * @example stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5
             */
            stake_address?: string;
            declared_pledge?: components["schemas"]["pool_info"][number]["pledge"];
            epoch?: components["schemas"]["pool_history_info"][number]["epoch_no"];
            active_stake?: components["schemas"]["pool_info"][number]["active_stake"];
        }[];
        /** @description Array of pool information */
        pool_info: {
            /**
             * @description Pool ID (bech32 format)
             * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
             */
            pool_id_bech32?: string;
            /**
             * @description Pool ID (Hex format)
             * @example a532904ca60e13e88437b58e7c6ff66b8d5e7ec8d3f4b9e4be7820ec
             */
            pool_id_hex?: string;
            active_epoch_no?: components["schemas"]["pool_updates"][number]["active_epoch_no"];
            /**
             * @description Pool VRF key hash
             * @example 25efdad1bc12944d38e4e3c26c43565bec84973a812737b163b289e87d0d5ed3
             */
            vrf_key_hash?: string | null;
            /**
             * @description Margin (decimal format)
             * @example 0.1
             */
            margin?: number | null;
            /**
             * @description Pool fixed cost per epoch
             * @example 500000000
             */
            fixed_cost?: string | null;
            /**
             * @description Pool pledge in number
             * @example 64000000000000
             */
            pledge?: string | null;
            /**
             * @description Pool's registration deposit in number
             * @example 500000000
             */
            deposit?: string | null;
            /**
             * @description Pool reward address
             * @example stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5
             */
            reward_addr?: string | null;
            /**
             * @description Reward address' current delegation status to DRep ID in CIP-129 Bech32 format
             * @example drep1yfhyq6tztjksqqpd5lglc3zr2tn8vylgjh9xzz7n2p4l4lgk3qam3
             */
            reward_addr_delegated_drep?: string | null;
            owners?: unknown[] | null;
            relays?: {
                /**
                 * @description DNS name of the relay (nullable)
                 * @example relays-new.cardano-mainnet.iohk.io
                 */
                dns?: string | null;
                /**
                 * @description DNS service name of the relay (nullable)
                 * @example biostakingpool3.hopto.org
                 */
                srv?: string | null;
                /**
                 * @description IPv4 address of the relay (nullable)
                 * @example 54.220.20.40
                 */
                ipv4?: string | null;
                /**
                 * @description IPv6 address of the relay (nullable)
                 * @example 2604:ed40:1000:1711:6082:78ff:fe0c:ebf
                 */
                ipv6?: string | null;
                /**
                 * @description Port number of the relay (nullable)
                 * @example 6000
                 */
                port?: number | null;
            }[];
            /**
             * @description Pool metadata URL
             * @example https://pools.iohk.io/IOGP.json
             */
            meta_url?: string | null;
            /**
             * @description Pool metadata hash
             * @example 37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0
             */
            meta_hash?: string | null;
            meta_json?: {
                /**
                 * @description Pool name
                 * @example Input Output Global (IOHK) - Private
                 */
                name?: string;
                /**
                 * @description Pool ticker
                 * @example IOGP
                 */
                ticker?: string;
                /**
                 * @description Pool homepage URL
                 * @example https://iohk.io
                 */
                homepage?: string;
                /**
                 * @description Pool description
                 * @example Our mission is to provide economic identity to the billions of people who lack it. IOHK will not use the IOHK ticker.
                 */
                description?: string;
            } | Record<string, never> | null;
            /**
             * @description Pool status
             * @example registered
             * @enum {string}
             */
            pool_status?: "registered" | "retiring" | "retired";
            /**
             * @description Announced retiring epoch (nullable)
             * @example null
             */
            retiring_epoch?: number | null;
            /**
             * @description Pool latest operational certificate hash
             * @example 37eb004c0dd8a221ac3598ca1c6d6257fb5207ae9857b7c163ae0f39259d6cc0
             */
            op_cert?: string | null;
            /**
             * @description Pool latest operational certificate counter value
             * @example 8
             */
            op_cert_counter?: number | null;
            /**
             * @description Amount of delegated stake to this pool at the time of epoch snapshot
             * @example 64328627680963
             */
            active_stake?: string | null;
            /**
             * @description Pool relative active stake share
             * @example 0.0034839235
             */
            sigma?: number | null;
            /**
             * @description Total pool blocks on chain
             * @example 4509
             */
            block_count?: number | null;
            /**
             * @description Summary of account balance for all pool owner's
             * @example 64328594406327
             */
            live_pledge?: string | null;
            /**
             * @description Pool live stake
             * @example 64328627680963
             */
            live_stake?: string | null;
            /**
             * @description Pool live delegator count
             * @example 5
             */
            live_delegators?: number;
            /**
             * @description Pool live saturation (decimal format)
             * @example 94.52
             */
            live_saturation?: number | null;
            /**
             * @description Current voting power (lovelaces) of this stake pool
             * @example 123456789
             */
            voting_power?: string | null;
        }[];
        pool_snapshot: {
            /**
             * @description Type of snapshot ("Mark", "Set" or "Go")
             * @example Mark
             */
            snapshot?: string;
            /**
             * @description Epoch number for the snapshot entry
             * @example 324
             */
            epoch_no?: number;
            nonce?: components["schemas"]["epoch_params"][number]["nonce"];
            /**
             * @description Pool's Active Stake for the given epoch
             * @example 100000000000
             */
            pool_stake?: string;
            /**
             * @description Total Active Stake for the given epoch
             * @example 103703246364020
             */
            active_stake?: string;
        }[];
        /** @description Array of live pool delegators */
        pool_delegators: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            /**
             * @description Current delegator live stake (in number)
             * @example 64328591517480
             */
            amount?: string;
            /**
             * @description Epoch number in which the delegation becomes active
             * @example 324
             */
            active_epoch_no?: number;
            /**
             * @description Latest transaction hash used for delegation by the account
             * @example 368d08fe86804d637649341d3aec4a9baa7dffa6d00f16de2ba9dba814f1c948
             */
            latest_delegation_tx_hash?: string;
        }[];
        /** @description Array of pool registrations/retirements */
        pool_registrations: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            active_epoch_no?: components["schemas"]["pool_updates"][number]["active_epoch_no"];
        }[];
        /** @description Array of pool delegators (historical) */
        pool_delegators_history: unknown[] | null;
        /** @description Array of blocks created by pool */
        pool_blocks: {
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            abs_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of historical pool updates */
        pool_updates: {
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            pool_id_hex?: components["schemas"]["pool_info"][number]["pool_id_hex"];
            /**
             * @description Epoch number in which the update becomes active
             * @example 324
             */
            active_epoch_no?: number | null;
            vrf_key_hash?: components["schemas"]["pool_info"][number]["vrf_key_hash"];
            margin?: components["schemas"]["pool_info"][number]["margin"];
            fixed_cost?: components["schemas"]["pool_info"][number]["fixed_cost"];
            pledge?: components["schemas"]["pool_info"][number]["pledge"];
            reward_addr?: components["schemas"]["pool_info"][number]["reward_addr"];
            owners?: components["schemas"]["pool_info"][number]["owners"];
            relays?: components["schemas"]["pool_info"][number]["relays"];
            meta_url?: components["schemas"]["pool_info"][number]["meta_url"];
            meta_hash?: components["schemas"]["pool_info"][number]["meta_hash"];
            meta_json?: components["schemas"]["pool_info"][number]["meta_json"];
            /**
             * @description Type of update task
             * @example registration
             * @enum {string}
             */
            update_type?: "registration" | "deregistration";
            retiring_epoch?: components["schemas"]["pool_info"][number]["retiring_epoch"];
        }[];
        /** @description Array of pool relay information */
        pool_relays: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            relays?: components["schemas"]["pool_info"][number]["relays"];
        }[];
        /** @description Array of pool metadata */
        pool_metadata: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            meta_url?: components["schemas"]["pool_info"][number]["meta_url"];
            meta_hash?: components["schemas"]["pool_info"][number]["meta_hash"];
            meta_json?: components["schemas"]["pool_info"][number]["meta_json"];
        }[];
        /** @description Array of valid calidus keys for all pools */
        pool_calidus_keys: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            pool_status?: components["schemas"]["pool_info"][number]["pool_status"];
            /**
             * @description Unique nonce for pool's calidus key registration as per CIP-88
             * @example 150720822
             */
            calidus_nonce?: number;
            /**
             * @description Calidus public key as per CIP-88
             * @example dea2d81424a285f7fd2846beb39320543ba1df27b890789b2c152b64a352e2df
             */
            calidus_pub_key?: string;
            /**
             * @description Calidus key in bech32 format as per CIP-88
             * @example calidus158w8ft8k4endw5q6m0rx2myl2ldvw5f5d8xmwyem6529fcgn575zh
             */
            calidus_id_bech32?: string;
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of pools with their corresponding group information */
        pool_groups: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            /**
             * @description A group that the pool was identified to be associated with
             * @example IOG
             */
            pool_group?: string | null;
            ticker?: NonNullable<components["schemas"]["pool_info"][number]["meta_json"]>["ticker"];
            /**
             * @description The pool's group identification as per adastat.net
             * @example iohk.io
             */
            adastat_group?: string | null;
            /**
             * @description The pool's group identification as per balanceanalytics.io
             * @example IOG
             */
            balanceanalytics_group?: string | null;
        }[];
        /** @description Array of detailed summary for each epoch */
        epoch_info: {
            /**
             * @description Epoch number
             * @example 294
             */
            epoch_no?: number;
            /**
             * @description Total output value across all transactions in epoch
             * @example 15432725054364942
             */
            out_sum?: string;
            /**
             * @description Total fees incurred by transactions in epoch
             * @example 74325855210
             */
            fees?: string;
            /**
             * @description Number of transactions submitted in epoch
             * @example 357919
             */
            tx_count?: number;
            /**
             * @description Number of blocks created in epoch
             * @example 17321
             */
            blk_count?: number;
            /**
             * @description UNIX timestamp of the epoch start
             * @example 1506203091
             */
            start_time?: number;
            /**
             * @description UNIX timestamp of the epoch end
             * @example 1506635091
             */
            end_time?: number;
            /**
             * @description UNIX timestamp of the epoch's first block
             * @example 1506635091
             */
            first_block_time?: number;
            /**
             * @description UNIX timestamp of the epoch's last block
             * @example 1506635091
             */
            last_block_time?: number;
            /**
             * @description Total active stake in epoch stake snapshot (null for pre-Shelley epochs)
             * @example 23395112387185880
             */
            active_stake?: string | null;
            /**
             * @description Total rewards earned in epoch (null for pre-Shelley epochs)
             * @example 252902897534230
             */
            total_rewards?: string | null;
            /**
             * @description Average block reward for epoch (null for pre-Shelley epochs)
             * @example 660233450
             */
            avg_blk_reward?: string | null;
        }[];
        /** @description Epoch parameters (all fields nullable for pre-Shelley/Gougen epochs except first block hash) */
        epoch_params: {
            /**
             * @description Epoch number
             * @example 294
             */
            epoch_no?: number;
            /**
             * @description The 'a' parameter to calculate the minimum transaction fee
             * @example 44
             */
            min_fee_a?: number | null;
            /**
             * @description The 'b' parameter to calculate the minimum transaction fee
             * @example 155381
             */
            min_fee_b?: number | null;
            /**
             * @description The maximum block size (in bytes)
             * @example 65536
             */
            max_block_size?: number | null;
            /**
             * @description The maximum transaction size (in bytes)
             * @example 16384
             */
            max_tx_size?: number | null;
            /**
             * @description The maximum block header size (in bytes)
             * @example 1100
             */
            max_bh_size?: number | null;
            /**
             * @description The amount (in number) required for a deposit to register a stake address
             * @example 2000000
             */
            key_deposit?: string | null;
            /**
             * @description The amount (in number) required for a deposit to register a stake pool
             * @example 500000000
             */
            pool_deposit?: string | null;
            /**
             * @description The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for
             * @example 18
             */
            max_epoch?: number | null;
            /**
             * @description The optimal number of stake pools
             * @example 500
             */
            optimal_pool_count?: number | null;
            /**
             * Format: double
             * @description The pledge influence on pool rewards
             * @example 0.3
             */
            influence?: number | null;
            /**
             * Format: double
             * @description The monetary expansion rate
             * @example 0.003
             */
            monetary_expand_rate?: number | null;
            /**
             * Format: double
             * @description The treasury growth rate
             * @example 0.2
             */
            treasury_growth_rate?: number | null;
            /**
             * Format: double
             * @description The decentralisation parameter (1 fully centralised, 0 fully decentralised)
             * @example 0.1
             */
            decentralisation?: number | null;
            /**
             * @description The hash of 32-byte string of extra random-ness added into the protocol's entropy pool
             * @example d982e06fd33e7440b43cefad529b7ecafbaa255e38178ad4189a37e4ce9bf1fa
             */
            extra_entropy?: string | null;
            /**
             * @description The protocol major version
             * @example 5
             */
            protocol_major?: number | null;
            /**
             * @description The protocol minor version
             * @example 0
             */
            protocol_minor?: number | null;
            /**
             * @description The minimum value of a UTxO entry
             * @example 34482
             */
            min_utxo_value?: string | null;
            /**
             * @description The minimum pool cost
             * @example 340000000
             */
            min_pool_cost?: string | null;
            /**
             * @description The nonce value for this epoch
             * @example 01304ddf5613166be96fce27be110747f2c8fcb38776618ee79225ccb59b81e2
             */
            nonce?: string | null;
            /**
             * @description The hash of the first block where these parameters are valid
             * @example f9dc2a2fc3a2db09a71af007a740261de585afc9e3022b8e30535592ff4dd9e5
             */
            block_hash?: string;
            /**
             * @description The per language cost model in JSON
             * @example null
             */
            cost_models?: Record<string, never> | null;
            /**
             * Format: double
             * @description The per word cost of script memory usage
             * @example 0.0577
             */
            price_mem?: number | null;
            /**
             * Format: double
             * @description The cost of script execution step usage
             * @example 0.0000721
             */
            price_step?: number | null;
            /**
             * @description The maximum number of execution memory allowed to be used in a single transaction
             * @example 10000000
             */
            max_tx_ex_mem?: number | null;
            /**
             * @description The maximum number of execution steps allowed to be used in a single transaction
             * @example 10000000000
             */
            max_tx_ex_steps?: number | null;
            /**
             * @description The maximum number of execution memory allowed to be used in a single block
             * @example 50000000
             */
            max_block_ex_mem?: number | null;
            /**
             * @description The maximum number of execution steps allowed to be used in a single block
             * @example 40000000000
             */
            max_block_ex_steps?: number | null;
            /**
             * @description The maximum Val size
             * @example 5000
             */
            max_val_size?: number | null;
            /**
             * @description The percentage of the tx fee which must be provided as collateral when including non-native scripts
             * @example 150
             */
            collateral_percent?: number | null;
            /**
             * @description The maximum number of collateral inputs allowed in a transaction
             * @example 3
             */
            max_collateral_inputs?: number | null;
            /**
             * @description The cost per UTxO size
             * @example 34482
             */
            coins_per_utxo_size?: string | null;
            /**
             * @description Pool Voting threshold for motion of no-confidence.
             * @example 0.6
             */
            pvt_motion_no_confidence?: number | null;
            /**
             * @description Pool Voting threshold for new committee/threshold (normal state).
             * @example 0.65
             */
            pvt_committee_normal?: number | null;
            /**
             * @description Pool Voting threshold for new committee/threshold (state of no-confidence).
             * @example 0.65
             */
            pvt_committee_no_confidence?: number | null;
            /**
             * @description Pool Voting threshold for hard-fork initiation.
             * @example 0.51
             */
            pvt_hard_fork_initiation?: number | null;
            /**
             * @description DRep Vote threshold for motion of no-confidence.
             * @example 0.67
             */
            dvt_motion_no_confidence?: number | null;
            /**
             * @description DRep Vote threshold for new committee/threshold (normal state).
             * @example 0.67
             */
            dvt_committee_normal?: number | null;
            /**
             * @description DRep Vote threshold for new committee/threshold (state of no-confidence).
             * @example 0.65
             */
            dvt_committee_no_confidence?: number | null;
            /**
             * @description DRep Vote threshold for update to the Constitution.
             * @example 0.75
             */
            dvt_update_to_constitution?: number | null;
            /**
             * @description DRep Vote threshold for hard-fork initiation.
             * @example 0.6
             */
            dvt_hard_fork_initiation?: number | null;
            /**
             * @description DRep Vote threshold for protocol parameter changes, network group.
             * @example 0.67
             */
            dvt_p_p_network_group?: number | null;
            /**
             * @description DRep Vote threshold for protocol parameter changes, economic group.
             * @example 0.67
             */
            dvt_p_p_economic_group?: number | null;
            /**
             * @description DRep Vote threshold for protocol parameter changes, technical group.
             * @example 0.67
             */
            dvt_p_p_technical_group?: number | null;
            /**
             * @description DRep Vote threshold for protocol parameter changes, governance group.
             * @example 0.75
             */
            dvt_p_p_gov_group?: number | null;
            /**
             * @description DRep Vote threshold for treasury withdrawal.
             * @example 0.67
             */
            dvt_treasury_withdrawal?: number | null;
            /**
             * @description Minimal constitutional committee size.
             * @example 5
             */
            committee_min_size?: number | null;
            /**
             * @description Constitutional committee term limits.
             * @example 146
             */
            committee_max_term_length?: number | null;
            /**
             * @description Governance action expiration.
             * @example 14
             */
            gov_action_lifetime?: number | null;
            /**
             * @description Governance action deposit.
             * @example 100000000000
             */
            gov_action_deposit?: string | null;
            /**
             * @description DRep deposit amount.
             * @example 500000000
             */
            drep_deposit?: string | null;
            /**
             * @description DRep activity period.
             * @example 20
             */
            drep_activity?: number | null;
            /**
             * @description Pool Voting threshold for protocol parameter changes, security group.
             * @example 0.6
             */
            pvtpp_security_group?: number | null;
            /**
             * @description Minimum Fee for Reference Script cost pre byte
             * @example 15
             */
            min_fee_ref_script_cost_per_byte?: number | null;
        }[];
        /** @description Array of distinct block protocol versions counts in epoch */
        epoch_block_protocols: {
            /**
             * @description Protocol major version
             * @example 6
             */
            proto_major?: number;
            /**
             * @description Protocol major version
             * @example 2
             */
            proto_minor?: number;
            /**
             * @description Amount of blocks with specified major and protocol combination
             * @example 2183
             */
            blocks?: number;
        }[];
        /** @description Array of block information */
        blocks: {
            /**
             * @description Hash of the block
             * @example 2fa5178c5be950c7f40d6c74efe9b3dd12c4836dc3f3dd052cd1c2a12edd477f
             */
            hash?: string;
            /**
             * @description Epoch number of the block
             * @example 117
             */
            epoch_no?: number;
            /**
             * @description Absolute slot number of the block
             * @example 49073930
             */
            abs_slot?: number;
            /**
             * @description Slot number of the block in epoch
             * @example 171530
             */
            epoch_slot?: number;
            /**
             * @description Block height
             * @example 1794506
             */
            block_height?: number;
            /**
             * @description Block size in bytes
             * @example 2433
             */
            block_size?: number;
            /**
             * @description UNIX timestamp of the block
             * @example 1704757130
             */
            block_time?: number;
            /**
             * @description Number of transactions in the block
             * @example 2
             */
            tx_count?: number;
            /**
             * @description VRF key of the block producer
             * @example vrf_vk1400ju08429se790upcvurdyqrhl8rhm7spm2jxg0lfnedqeaexfq7jsf2x
             */
            vrf_key?: string;
            /**
             * @description Pool ID in bech32 format (null for pre-Shelley blocks)
             * @example pool13m26ky08vz205232k20u8ft5nrg8u68klhn0xfsk9m4gsqsc44v
             */
            pool?: string | null;
            /**
             * @description Counter value of the operational certificate used to create this block
             * @example 5
             */
            op_cert_counter?: number;
            proto_major?: components["schemas"]["epoch_params"][number]["protocol_major"];
            proto_minor?: components["schemas"]["epoch_params"][number]["protocol_minor"];
            /**
             * @description Previous Hash of the current block
             * @example 7eb8d62f9d6a5e7cf2d9635f0b531d2693fef55a717894e3a97baf6183b8d189
             */
            parent_hash?: string;
        }[];
        /** @description Array of detailed block information */
        block_info: {
            hash?: components["schemas"]["blocks"][number]["hash"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            abs_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_size?: components["schemas"]["blocks"][number]["block_size"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            tx_count?: components["schemas"]["blocks"][number]["tx_count"];
            vrf_key?: components["schemas"]["blocks"][number]["vrf_key"];
            /**
             * @description Hash of the block producers' operational certificate
             * @example 16bfc28a7127d11805fe02df67f8c3909ab7e2e2cd81b6954d90eeff1938614c
             */
            op_cert?: string;
            op_cert_counter?: components["schemas"]["blocks"][number]["op_cert_counter"];
            pool?: components["schemas"]["blocks"][number]["pool"];
            proto_major?: components["schemas"]["epoch_params"][number]["protocol_major"];
            proto_minor?: components["schemas"]["epoch_params"][number]["protocol_minor"];
            /**
             * @description Total output of the block (in number)
             * @example 92384672389
             */
            total_output?: string | null;
            /**
             * @description Total fees of the block (in number)
             * @example 2346834
             */
            total_fees?: string | null;
            /**
             * @description Number of confirmations for the block
             * @example 664275
             */
            num_confirmations?: number;
            /**
             * @description Hash of the parent of this block
             * @example 16bfc28a7127d11805fe02df67f8c3909ab7e2e2cd81b6954d90eeff1938614c
             */
            parent_hash?: string;
            /**
             * @description Hash of the child of this block (if present)
             * @example a3b525ba0747ce9daa928fa28fbc680f95e6927943a1fbd6fa5394d96c9dc2fa
             */
            child_hash?: string;
        }[];
        /** @description Array of transactions hashes */
        block_txs: {
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of raw transaction(s) in CBOR format */
        block_tx_cbor: {
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            absolute_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            tx_timestamp?: components["schemas"]["tx_info"][number]["tx_timestamp"];
            cbor?: components["schemas"]["tx_cbor"];
        }[];
        /** @description Array of detailed information about transaction(s) */
        block_tx_info: {
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            absolute_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            tx_timestamp?: components["schemas"]["tx_info"][number]["tx_timestamp"];
            tx_block_index?: components["schemas"]["tx_info"][number]["tx_block_index"];
            tx_size?: components["schemas"]["tx_info"][number]["tx_size"];
            total_output?: components["schemas"]["tx_info"][number]["total_output"];
            fee?: components["schemas"]["tx_info"][number]["fee"];
            treasury_donation?: components["schemas"]["tx_info"][number]["treasury_donation"];
            deposit?: components["schemas"]["tx_info"][number]["deposit"];
            invalid_before?: components["schemas"]["tx_info"][number]["invalid_before"];
            invalid_after?: components["schemas"]["tx_info"][number]["invalid_after"];
            collateral_inputs?: components["schemas"]["tx_info"][number]["collateral_inputs"];
            collateral_output?: components["schemas"]["tx_info"][number]["collateral_output"];
            reference_inputs?: components["schemas"]["tx_info"][number]["reference_inputs"];
            /** @description An array of UTxO inputs spent in the transaction */
            inputs?: components["schemas"]["tx_info"][number]["outputs"] | null;
            outputs?: components["schemas"]["tx_info"][number]["outputs"];
            withdrawals?: components["schemas"]["tx_info"][number]["withdrawals"];
            assets_minted?: components["schemas"]["tx_info"][number]["assets_minted"];
            metadata?: NonNullable<components["schemas"]["tx_metadata"]>[number];
            certificates?: components["schemas"]["tx_info"][number]["certificates"];
            native_scripts?: components["schemas"]["tx_info"][number]["native_scripts"];
            plutus_contracts?: components["schemas"]["tx_info"][number]["plutus_contracts"];
        }[];
        /** @description Array of information for address(es) */
        address_info: {
            address?: components["schemas"]["utxo_infos"][number]["address"];
            /**
             * @description Sum of all UTxO values beloning to address
             * @example 10723473983
             */
            balance?: string;
            stake_address?: components["schemas"]["account_history"][number]["stake_address"] | null;
            /**
             * @description Signifies whether the address is a script address
             * @example true
             */
            script_address?: boolean;
            utxo_set?: {
                tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
                tx_index?: components["schemas"]["utxo_infos"][number]["tx_index"];
                block_height?: components["schemas"]["blocks"][number]["block_height"];
                block_time?: components["schemas"]["blocks"][number]["block_time"];
                value?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["value"];
                datum_hash?: NonNullable<components["schemas"]["script_redeemers"][number]["redeemers"]>[number]["datum_hash"];
                inline_datum?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["inline_datum"];
                reference_script?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["reference_script"];
                asset_list?: components["schemas"]["utxo_infos"][number]["asset_list"];
            }[];
        }[];
        /** @description Array of transaction hashes */
        address_txs: {
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of basic transaction output information */
        address_outputs: {
            address?: components["schemas"]["utxo_infos"][number]["address"];
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            tx_index?: components["schemas"]["utxo_infos"][number]["tx_index"];
            value?: components["schemas"]["utxo_infos"][number]["value"];
            stake_address?: components["schemas"]["utxo_infos"][number]["stake_address"];
            payment_cred?: components["schemas"]["utxo_infos"][number]["payment_cred"];
            epoch_no?: components["schemas"]["utxo_infos"][number]["epoch_no"];
            block_height?: components["schemas"]["utxo_infos"][number]["block_height"];
            block_time?: components["schemas"]["utxo_infos"][number]["block_time"];
            is_spent?: components["schemas"]["utxo_infos"][number]["is_spent"];
        }[];
        /** @description Array of address-owned assets */
        address_assets: {
            address?: components["schemas"]["utxo_infos"][number]["address"];
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            decimals?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["decimals"];
            quantity?: components["schemas"]["asset_addresses"][number]["quantity"];
        }[];
        /** @description Array of account (stake address) IDs */
        account_list: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            /**
             * @description Cardano staking address (reward account) in hex format
             * @example e1c865f10d66a2e375242b5ef9f05abc8840d413421982f62c35ce4fbf
             */
            stake_address_hex?: string;
            /**
             * @description Script hash in case the stake address is locked by a script
             * @example bf357f5de69e4aad71954bebd64357a4813ea5233df12fce4a9de582
             */
            script_hash?: string | null;
        }[];
        /** @description Array of stake account information */
        account_info: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            /**
             * @description Stake address status
             * @example registered
             * @enum {string}
             */
            status?: "registered" | "not registered";
            /**
             * @description Account's current delegation status to DRep ID in CIP-129 Bech32 format
             * @example drep1yfhyq6tztjksqqpd5lglc3zr2tn8vylgjh9xzz7n2p4l4lgk3qam3
             */
            delegated_drep?: string | null;
            delegated_pool?: components["schemas"]["pool_list"][number]["pool_id_bech32"] | null;
            /**
             * @description Total balance of the account including UTxO, rewards and MIRs (in number)
             * @example 207116800428
             */
            total_balance?: string;
            /**
             * @description Total UTxO balance of the account
             * @example 162764177131
             */
            utxo?: string;
            /**
             * @description Total rewards earned by the account
             * @example 56457728047
             */
            rewards?: string;
            /**
             * @description Total rewards withdrawn by the account
             * @example 12105104750
             */
            withdrawals?: string;
            /**
             * @description Total rewards available for withdrawal
             * @example 44352623297
             */
            rewards_available?: string;
            /**
             * @description Total deposit available for withdrawal
             * @example 2000000
             */
            deposit?: string;
            /**
             * @description Total reserves MIR value of the account
             * @example 0
             */
            reserves?: string;
            /**
             * @description Total treasury MIR value of the account
             * @example 0
             */
            treasury?: string;
            /**
             * @description Total proposal refund for this account
             * @example 0
             */
            "proposal-refund"?: string;
        }[];
        /** @description Array of complete UTxO information */
        utxo_infos: {
            /**
             * @description Hash identifier of the transaction
             * @example f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e
             */
            tx_hash?: string;
            /**
             * @description Index of UTxO in the transaction
             * @example 0
             */
            tx_index?: number;
            /**
             * @description A Cardano payment/base address (bech32 encoded)
             * @example addr1qxkfe8s6m8qt5436lec3f0320hrmpppwqgs2gah4360krvyssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqdc3cxp
             */
            address?: string;
            value?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["value"];
            stake_address?: components["schemas"]["address_info"][number]["stake_address"];
            /**
             * @description Payment credential
             * @example de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794
             */
            payment_cred?: string | null;
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            datum_hash?: NonNullable<components["schemas"]["script_redeemers"][number]["redeemers"]>[number]["datum_hash"];
            inline_datum?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["inline_datum"];
            reference_script?: NonNullable<components["schemas"]["tx_info"][number]["outputs"]>[number]["reference_script"];
            /** @description An array of assets on the UTxO */
            asset_list?: unknown[] | null;
            /**
             * @description True if the UTXO has been spent
             * @example true
             */
            is_spent?: boolean;
        }[];
        /** @description Array of reward history information */
        account_rewards: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            rewards?: {
                earned_epoch?: components["schemas"]["reserve_withdrawals"][number]["earned_epoch"];
                spendable_epoch?: components["schemas"]["reserve_withdrawals"][number]["spendable_epoch"];
                /** @description Amount of rewards earned (in number) */
                amount?: string;
                /**
                 * @description The source of the rewards
                 * @example member
                 * @enum {string}
                 */
                type?: "member" | "leader" | "treasury" | "reserves" | "refund";
                pool_id?: components["schemas"]["pool_list"][number]["pool_id_bech32"] | null;
            }[];
        }[];
        /** @description Array of reward history information */
        account_reward_history: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            earned_epoch?: components["schemas"]["reserve_withdrawals"][number]["earned_epoch"];
            spendable_epoch?: components["schemas"]["reserve_withdrawals"][number]["spendable_epoch"];
            /** @description Amount of rewards earned (in number) */
            amount?: string;
            /**
             * @description The source of the rewards
             * @example member
             * @enum {string}
             */
            type?: "member" | "leader" | "treasury" | "reserves" | "refund";
            pool_id_bech32?: components["schemas"]["pool_list"][number]["pool_id_bech32"] | null;
        }[];
        /** @description Array of account updates information */
        account_updates: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            updates?: {
                /**
                 * @description Type of certificate submitted
                 * @example registration
                 * @enum {string}
                 */
                action_type?: "registration" | "delegation_pool" | "delegation_drep" | "withdrawal" | "deregistration";
                tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
                epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
                epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
                absolute_slot?: components["schemas"]["blocks"][number]["abs_slot"];
                block_time?: components["schemas"]["blocks"][number]["block_time"];
            }[];
        }[];
        /** @description Array of account update history information */
        account_update_history: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            /**
             * @description Type of certificate submitted
             * @example registration
             * @enum {string}
             */
            action_type?: "registration" | "delegation_pool" | "delegation_drep" | "withdrawal" | "deregistration";
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            absolute_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
        }[];
        /** @description Array of payment addresses */
        account_addresses: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            addresses?: components["schemas"]["utxo_infos"][number]["address"][];
        }[];
        /** @description Array of assets owned by account */
        account_assets: {
            stake_address?: components["schemas"]["account_history"][number]["stake_address"];
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            decimals?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["decimals"];
            quantity?: components["schemas"]["asset_addresses"][number]["quantity"];
        }[];
        /** @description Array of active stake values per epoch */
        account_history: {
            /**
             * @description Cardano staking address (reward account) in bech32 format
             * @example stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz
             */
            stake_address?: string;
            history?: {
                /**
                 * @description Bech32 representation of pool ID
                 * @example pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt
                 */
                pool_id?: string;
                /**
                 * @description Epoch number
                 * @example 301
                 */
                epoch_no?: number;
                /**
                 * @description Active stake amount (in numbers)
                 * @example 682334162
                 */
                active_stake?: string;
            }[];
        }[];
        /** @description Array of active stake values per epoch */
        account_stake_history: {
            /**
             * @description Cardano staking address (reward account) in bech32 format
             * @example stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz
             */
            stake_address?: string;
            /**
             * @description Bech32 representation of pool ID
             * @example pool1z5uqdk7dzdxaae5633fqfcu2eqzy3a3rgtuvy087fdld7yws0xt
             */
            pool_id_bech32?: string;
            /**
             * @description Epoch number
             * @example 301
             */
            epoch_no?: number;
            /**
             * @description Active stake amount (in numbers)
             * @example 682334162
             */
            active_stake?: string;
        }[];
        /** @description Array of detailed information about transaction(s) */
        tx_info: {
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            block_hash?: components["schemas"]["blocks"][number]["hash"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            epoch_slot?: components["schemas"]["blocks"][number]["epoch_slot"];
            absolute_slot?: components["schemas"]["blocks"][number]["abs_slot"];
            /**
             * @description UNIX timestamp of the transaction
             * @example 1506635091
             */
            tx_timestamp?: number;
            /**
             * @description Index of transaction within block
             * @example 6
             */
            tx_block_index?: number;
            /**
             * @description Size in bytes of transaction
             * @example 391
             */
            tx_size?: number;
            /**
             * @description Total sum of all transaction outputs (in numbers)
             * @example 157832856
             */
            total_output?: string;
            /**
             * @description Total Transaction fee (in numbers)
             * @example 172761
             */
            fee?: string;
            /**
             * @description Total Donation to on-chain treasury (in numbers)
             * @example 0
             */
            treasury_donation?: string;
            /**
             * @description Total Deposits included in transaction (for example, if it is registering a pool/key)
             * @example 0
             */
            deposit?: string;
            /**
             * @description Slot before which transaction cannot be validated (if supplied, else null)
             * @example 42331172
             */
            invalid_before?: string | null;
            /**
             * @description Slot after which transaction cannot be validated
             * @example 42332172
             */
            invalid_after?: string | null;
            /** @description An array of collateral inputs needed for smart contracts in case of contract failure */
            collateral_inputs?: components["schemas"]["tx_info"][number]["outputs"] | null;
            /** @description A collateral output for change if the smart contract fails to execute and collateral inputs are spent. (CIP-40) */
            collateral_output?: unknown[] | null;
            /** @description An array of reference inputs. A reference input allows looking at an output without spending it. (CIP-31) */
            reference_inputs?: components["schemas"]["tx_info"][number]["outputs"] | null;
            inputs?: components["schemas"]["tx_info"][number]["outputs"];
            /** @description An array of UTxO outputs created by the transaction */
            outputs?: {
                payment_addr?: {
                    bech32?: components["schemas"]["utxo_infos"][number]["address"];
                    /**
                     * @description Payment credential
                     * @example de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794
                     */
                    cred?: string;
                };
                stake_addr?: components["schemas"]["address_info"][number]["stake_address"];
                tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
                tx_index?: components["schemas"]["utxo_infos"][number]["tx_index"];
                /**
                 * @description Total sum of ADA on the UTxO
                 * @example 157832856
                 */
                value?: string;
                /**
                 * @description Hash of datum (if any) connected to UTxO
                 * @example 30c16dd243324cf9d90ffcf211b9e0f2117a7dc28d17e85927dfe2af3328e5c9
                 */
                datum_hash?: string | null;
                /** @description Allows datums to be attached to UTxO (CIP-32) */
                inline_datum?: {
                    /**
                     * @description Datum bytes (hex)
                     * @example 19029a
                     */
                    bytes?: string;
                    /**
                     * @description Value (json)
                     * @example {
                     *       "int": 666
                     *     }
                     */
                    value?: Record<string, never>;
                } | Record<string, never> | null;
                /** @description Allow reference scripts to be used to satisfy script requirements during validation, rather than requiring the spending transaction to do so. (CIP-33) */
                reference_script?: {
                    /**
                     * @description Hash of referenced script
                     * @example 67f33146617a5e61936081db3b2117cbf59bd2123748f58ac9678656
                     */
                    hash?: string;
                    /**
                     * @description Size in bytes
                     * @example 14
                     */
                    size?: number;
                    /**
                     * @description Type of script
                     * @example plutusV1
                     */
                    type?: string;
                    /**
                     * @description Script bytes (hex)
                     * @example 4e4d01000033222220051200120011
                     */
                    bytes?: string;
                    /**
                     * @description Value (json)
                     * @example null
                     */
                    value?: Record<string, never> | null;
                } | Record<string, never> | null;
                asset_list?: components["schemas"]["utxo_infos"][number]["asset_list"];
            }[];
            /** @description Array of withdrawals with-in a transaction */
            withdrawals?: unknown[] | null;
            /** @description Array of minted assets with-in a transaction */
            assets_minted?: unknown[] | null;
            metadata?: NonNullable<components["schemas"]["tx_metadata"]>[number];
            /** @description Certificates present with-in a transaction (if any) */
            certificates?: unknown[] | null;
            /** @description Native scripts present in a transaction (if any) */
            native_scripts?: unknown[] | null;
            /** @description Plutus contracts present in transaction (if any) */
            plutus_contracts?: unknown[] | null;
            /** @description Governance votes in a transaction (if any) */
            voting_procedures?: unknown[] | null;
            /** @description Governance proposals in a transaction (if any) */
            proposal_procedures?: unknown[] | null;
        }[];
        /** @description Raw Transaction(s) in CBOR format */
        tx_cbor: unknown;
        /** @description Array of inputs and outputs for given transaction(s) */
        tx_utxos: {
            tx_hash?: components["schemas"]["tx_info"][number]["tx_hash"];
            /** @description An array of UTxO inputs used by the transaction */
            inputs?: {
                payment_addr?: {
                    /**
                     * @description A Cardano payment/base address (bech32 encoded) where funds were sent or change to be returned
                     * @example addr1q80rc8zj06yzdwwdyqc03rm4l3zv6n89rxuaak0t099n09yssntpwjcz303mx3h4avg7p29l3zd8u3jyglmewds9ezrqad9mkw
                     */
                    bech32?: string;
                    /**
                     * @description Payment credential
                     * @example de3c1c527e8826b9cd2030f88f75fc44cd4ce519b9ded9eb794b3794
                     */
                    cred?: string;
                };
                stake_addr?: components["schemas"]["address_info"][number]["stake_address"];
                tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
                tx_index?: components["schemas"]["utxo_infos"][number]["tx_index"];
                /**
                 * @description Total sum of ADA on the UTxO
                 * @example 157832856
                 */
                value?: string;
            }[];
            /** @description An array of UTxO outputs created by the transaction */
            outputs?: components["schemas"]["tx_utxos"][number]["inputs"];
        }[];
        /** @description Array of metadata information present in each of the transactions queried */
        tx_metadata: unknown[] | null;
        /** @description Array of transaction confirmation counts */
        tx_status: {
            tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            /**
             * @description Number of block confirmations
             * @example 17
             */
            num_confirmations?: number | null;
        }[];
        /** @description Array of known metadata labels */
        tx_metalabels: {
            /**
             * @description A distinct known metalabel
             * @example 721
             */
            key?: string;
        }[];
        /** @description Array of policy IDs and asset names */
        asset_list: {
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            asset_name_ascii?: components["schemas"]["asset_info"][number]["asset_name_ascii"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
        }[];
        /** @description An array of token registry information (registered via github) for each asset */
        asset_token_registry: {
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            asset_name_ascii?: components["schemas"]["asset_info"][number]["asset_name_ascii"];
            ticker?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["ticker"];
            description?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["description"];
            url?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["url"];
            decimals?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["decimals"];
            logo?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["logo"];
        }[];
        /** @description An array of payment addresses holding the given token (including balances) */
        asset_addresses: {
            payment_address?: components["schemas"]["utxo_infos"][number]["address"];
            stake_address?: components["schemas"]["address_info"][number]["stake_address"];
            /**
             * @description Asset balance on the payment address
             * @example 23
             */
            quantity?: string;
        }[];
        /** @description An array of payment addresses holding the given token */
        asset_nft_address: {
            payment_address?: components["schemas"]["utxo_infos"][number]["address"];
            stake_address?: components["schemas"]["address_info"][number]["stake_address"];
        }[];
        /** @description Array of asset summary information */
        asset_summary: {
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            /**
             * @description Total number of transactions including the given asset
             * @example 89416
             */
            total_transactions?: number;
            /**
             * @description Total number of registered wallets holding the given asset
             * @example 548
             */
            staked_wallets?: number;
            /**
             * @description Total number of payment addresses (not belonging to registered wallets) holding the given asset
             * @example 245
             */
            unstaked_addresses?: number;
            /**
             * @description Total number of unique addresses holding the given asset
             * @example 812
             */
            addresses?: number;
        }[];
        /** @description Array of detailed asset information */
        asset_info: {
            /**
             * @description Asset Policy ID (hex)
             * @example d3501d9531fcc25e3ca4b6429318c2cc374dbdbcf5e99c1c1e5da1ff
             */
            policy_id?: string;
            /**
             * @description Asset Name (hex)
             * @example 444f4e545350414d
             */
            asset_name?: string | null;
            /**
             * @description Asset Name (ASCII)
             * @example DONTSPAM
             */
            asset_name_ascii?: string;
            /**
             * @description The CIP14 fingerprint of the asset
             * @example asset1ua6pz3yd5mdka946z8jw2fld3f8d0mmxt75gv9
             */
            fingerprint?: string;
            /**
             * @description Hash of the latest mint transaction (with metadata if found for asset)
             * @example cb07b7e51b77079776c4a78f2daf8f14f9945d2b047da7bfcb71d7fbb9f86712
             */
            minting_tx_hash?: string;
            /**
             * @description Total supply for the asset
             * @example 35000
             */
            total_supply?: string;
            /**
             * @description Count of total mint transactions
             * @example 1
             */
            mint_cnt?: number;
            /**
             * @description Count of total burn transactions
             * @example 5
             */
            burn_cnt?: number;
            /**
             * @description UNIX timestamp of the first asset mint
             * @example 1506635091
             */
            creation_time?: number;
            /** @description Latest minting transaction metadata (aligns with CIP-25) */
            minting_tx_metadata?: NonNullable<components["schemas"]["tx_metadata"]>[number];
            /** @description Asset metadata registered on the Cardano Token Registry */
            token_registry_metadata?: {
                /** @example Rackmob */
                name?: string | null;
                /** @example Metaverse Blockchain Cryptocurrency. */
                description?: string | null;
                /** @example MOB */
                ticker?: string | null;
                /** @example https://www.rackmob.com/ */
                url?: string | null;
                /**
                 * @description A PNG image file as a byte string
                 * @example iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc
                 */
                logo?: string | null;
                /** @example 0 */
                decimals?: number;
            } | Record<string, never> | null;
            /**
             * @description CIP 68 metadata if present for asset
             * @example {
             *       "222": {
             *         "fields": [
             *           {
             *             "map": [
             *               {
             *                 "k": {
             *                   "bytes": "6e616d65"
             *                 },
             *                 "v": {
             *                   "bytes": "74657374"
             *                 }
             *               }
             *             ]
             *           }
             *         ],
             *         "constructor": 0
             *       }
             *     }
             */
            cip68_metadata?: Record<string, never> | null;
        }[];
        /** @description Array of asset mint/burn history */
        asset_history: {
            policy_id?: components["schemas"]["asset_info"][number]["policy_id"];
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            /** @description Array of all mint/burn transactions for an asset */
            minting_txs?: unknown[] | null;
        }[];
        /** @description Array of asset names and payment addresses for the given policy (including balances) */
        policy_asset_addresses: {
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            payment_address?: components["schemas"]["utxo_infos"][number]["address"];
            stake_address?: components["schemas"]["address_info"][number]["stake_address"];
            quantity?: components["schemas"]["asset_addresses"][number]["quantity"];
        }[];
        /** @description Array of detailed information of assets under requested policies */
        policy_asset_info: {
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            asset_name_ascii?: components["schemas"]["asset_info"][number]["asset_name_ascii"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            minting_tx_hash?: components["schemas"]["asset_info"][number]["minting_tx_hash"];
            total_supply?: components["schemas"]["asset_info"][number]["total_supply"];
            mint_cnt?: components["schemas"]["asset_info"][number]["mint_cnt"];
            burn_cnt?: components["schemas"]["asset_info"][number]["burn_cnt"];
            creation_time?: components["schemas"]["asset_info"][number]["creation_time"];
            minting_tx_metadata?: components["schemas"]["asset_info"][number]["minting_tx_metadata"];
            token_registry_metadata?: components["schemas"]["asset_info"][number]["token_registry_metadata"];
        }[];
        /** @description Array of mint information for assets under requested policies */
        policy_asset_mints: {
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            asset_name_ascii?: components["schemas"]["asset_info"][number]["asset_name_ascii"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            minting_tx_hash?: components["schemas"]["asset_info"][number]["minting_tx_hash"];
            total_supply?: components["schemas"]["asset_info"][number]["total_supply"];
            mint_cnt?: components["schemas"]["asset_info"][number]["mint_cnt"];
            burn_cnt?: components["schemas"]["asset_info"][number]["burn_cnt"];
            creation_time?: components["schemas"]["asset_info"][number]["creation_time"];
            minting_tx_metadata?: components["schemas"]["asset_info"][number]["minting_tx_metadata"];
            decimals?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["decimals"];
        }[];
        /** @description Array of brief information of assets under the same policy */
        policy_asset_list: {
            asset_name?: components["schemas"]["asset_info"][number]["asset_name"];
            fingerprint?: components["schemas"]["asset_info"][number]["fingerprint"];
            total_supply?: components["schemas"]["asset_info"][number]["total_supply"];
            decimals?: NonNullable<components["schemas"]["asset_info"][number]["token_registry_metadata"]>["decimals"];
        }[];
        /** @description Get detailed information about requested delegated representatives (DReps) */
        drep_info: {
            /**
             * @description DRep ID in CIP-129 bech32 format
             * @example drep1yfhyq6tztjksqqpd5lglc3zr2tn8vylgjh9xzz7n2p4l4lgk3qam3
             */
            drep_id?: string;
            /**
             * @description DRep ID in hex format
             * @example 6e4069625cad00002da7d1fc444352e67613e895ca610bd3506bfafd
             */
            hex?: string;
            /**
             * @description Flag which shows if this credential is a script hash
             * @example false
             */
            has_script?: boolean;
            /**
             * @description Flag to show if the DRep is currently registered
             * @example false
             */
            registered?: boolean;
            /**
             * @description DRep's registration deposit  in number
             * @example 500000000
             */
            deposit?: string | null;
            /**
             * @description Flag to show if the DRep is  (i.e. not expired)
             * @example true
             */
            active?: boolean;
            /**
             * @description After which epoch DRep is considered inactive.
             * @example 410
             */
            expires_epoch_no?: number | null;
            /**
             * @description The total amount of voting power this DRep is delegated.
             * @example 599496769641
             */
            amount?: string;
            /**
             * @description A URL to a JSON payload of metadata
             * @example https://hornan7.github.io/Vote_Context.jsonld
             */
            meta_url?: string | null;
            /**
             * @description A hash of the contents of the metadata URL
             * @example dc208474e195442d07a5b6d42af19bb2db02229427dfb53ab23122e6b0e2487d
             */
            meta_hash?: string | null;
        }[];
        /** @description Summary of voting power and DRep count for each epoch */
        drep_epoch_summary: {
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            /**
             * @description The total amount of voting power between all DReps including pre-defined roles for the epoch.
             * @example 599496769641
             */
            amount?: string;
            /**
             * @description The total number of DReps with vote power for the epoch.
             * @example 324
             */
            dreps?: number;
        }[];
        /** @description List of all active delegated representatives (DReps) */
        drep_list: {
            drep_id?: components["schemas"]["drep_info"][number]["drep_id"];
            hex?: components["schemas"]["drep_info"][number]["hex"];
            has_script?: components["schemas"]["drep_info"][number]["has_script"];
            registered?: components["schemas"]["drep_info"][number]["registered"];
        }[];
        /** @description List of all delegators by requested delegated representative (DRep) */
        drep_delegators: {
            stake_address?: components["schemas"]["account_list"][number]["stake_address"];
            stake_address_hex?: components["schemas"]["account_list"][number]["stake_address_hex"];
            script_hash?: components["schemas"]["account_list"][number]["script_hash"];
            /** @description Epoch when vote delegation was made */
            epoch_no?: components["schemas"]["epoch_info"][number]["epoch_no"];
            amount?: components["schemas"]["account_info"][number]["total_balance"];
        }[];
        /** @description List metadata for requested delegated representatives (DReps) */
        drep_metadata: {
            drep_id?: components["schemas"]["drep_info"][number]["drep_id"];
            hex?: components["schemas"]["drep_info"][number]["hex"];
            has_script?: components["schemas"]["drep_info"][number]["has_script"];
            meta_url?: components["schemas"]["drep_info"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_info"][number]["meta_hash"];
            /**
             * @description The payload as JSON
             * @example {
             *       "body": {
             *         "title": "...",
             *         "...": "...",
             *         "references": [
             *           {
             *             "uri": "...",
             *             "@type": "Other",
             *             "label": "Hardfork to PV10"
             *           }
             *         ]
             *       },
             *       "authors": [
             *         {
             *           "name": "...",
             *           "witness": {
             *             "publicKey": "...",
             *             "signature": "...",
             *             "witnessAlgorithm": "ed25519"
             *           }
             *         }
             *       ],
             *       "@context": {
             *         "body": {
             *           "@id": "CIP108:body",
             *           "@context": {
             *             "title": "CIP108:title",
             *             "abstract": "CIP108:abstract",
             *             "rationale": "CIP108:rationale",
             *             "motivation": "CIP108:motivation",
             *             "references": {
             *               "@id": "CIP108:references",
             *               "@context": {
             *                 "uri": "CIP100:reference-uri",
             *                 "Other": "CIP100:OtherReference",
             *                 "label": "CIP100:reference-label",
             *                 "referenceHash": {
             *                   "@id": "CIP108:referenceHash",
             *                   "@context": {
             *                     "hashDigest": "CIP108:hashDigest",
             *                     "hashAlgorithm": "CIP100:hashAlgorithm"
             *                   }
             *                 },
             *                 "GovernanceMetadata": "CIP100:GovernanceMetadataReference"
             *               },
             *               "@container": "@set"
             *             }
             *           }
             *         },
             *         "CIP100": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0100/README.md#",
             *         "CIP108": "https://github.com/cardano-foundation/CIPs/blob/master/CIP-0108/README.md#",
             *         "authors": {
             *           "@id": "CIP100:authors",
             *           "@context": {
             *             "name": "http://xmlns.com/foaf/0.1/name",
             *             "witness": {
             *               "@id": "CIP100:witness",
             *               "@context": {
             *                 "publicKey": "CIP100:publicKey",
             *                 "signature": "CIP100:signature",
             *                 "witnessAlgorithm": "CIP100:witnessAlgorithm"
             *               }
             *             }
             *           },
             *           "@container": "@set"
             *         },
             *         "@language": "en-us",
             *         "hashAlgorithm": "CIP100:hashAlgorithm"
             *       },
             *       "hashAlgorithm": "blake2b-256"
             *     }
             */
            meta_json?: Record<string, never> | null;
            /**
             * @description The raw bytes of the payload
             * @example 7b0a20202240636f6e74657874223a207b0a2020202022406c616e6775616765223a2022656e2d7573222c0a2020202022434950313030223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130302f524541444d452e6d6423222c0a2020202022434950313038223a202268747470733a2f2f6769746875622e636f6d2f63617264616e6f2d666f756e646174696f6e2f434950732f626c6f622f6d61737465722f4349502d303130382f524541444d452e6d6423222c0a202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d222c0a2020202022626f6479223a207b0a20202020202022406964223a20224349503130383a626f6479222c0a2020202020202240636f6e74657874223a207b0a2020202020202020227265666572656e636573223a207b0a2020202020202020202022406964223a20224349503130383a7265666572656e636573222c0a202020202020202020202240636f6e7461696e6572223a202240736574222c0a202020202020202020202240636f6e74657874223a207b0a20202020202020202020202022476f7665726e616e63654d65746164617461223a20224349503130303a476f7665726e616e63654d657461646174615265666572656e6365222c0a202020202020202020202020224f74686572223a20224349503130303a4f746865725265666572656e6365222c0a202020202020202020202020226c6162656c223a20224349503130303a7265666572656e63652d6c6162656c222c0a20202020202020202020202022757269223a20224349503130303a7265666572656e63652d757269222c0a202020202020202020202020227265666572656e636548617368223a207b0a202020202020202020202020202022406964223a20224349503130383a7265666572656e636548617368222c0a20202020202020202020202020202240636f6e74657874223a207b0a202020202020202020202020202020202268617368446967657374223a20224349503130383a68617368446967657374222c0a202020202020202020202020202020202268617368416c676f726974686d223a20224349503130303a68617368416c676f726974686d220a20202020202020202020202020207d0a2020202020202020202020207d0a202020202020202020207d0a20202020202020207d2c0a2020202020202020227469746c65223a20224349503130383a7469746c65222c0a2020202020202020226162737472616374223a20224349503130383a6162737472616374222c0a2020202020202020226d6f7469766174696f6e223a20224349503130383a6d6f7469766174696f6e222c0a202020202020202022726174696f6e616c65223a20224349503130383a726174696f6e616c65220a2020202020207d0a202020207d2c0a2020202022617574686f7273223a207b0a20202020202022406964223a20224349503130303a617574686f7273222c0a2020202020202240636f6e7461696e6572223a202240736574222c0a2020202020202240636f6e74657874223a207b0a2020202020202020226e616d65223a2022687474703a2f2f786d6c6e732e636f6d2f666f61662f302e312f6e616d65222c0a2020202020202020227769746e657373223a207b0a2020202020202020202022406964223a20224349503130303a7769746e657373222c0a202020202020202020202240636f6e74657874223a207b0a202020202020202020202020227769746e657373416c676f726974686d223a20224349503130303a7769746e657373416c676f726974686d222c0a202020202020202020202020227075626c69634b6579223a20224349503130303a7075626c69634b6579222c0a202020202020202020202020227369676e6174757265223a20224349503130303a7369676e6174757265220a202020202020202020207d0a20202020202020207d0a2020202020207d0a202020207d0a20207d2c0a20202268617368416c676f726974686d223a2022626c616b6532622d323536222c0a202022626f6479223a207b0a20202020227469746c65223a202248617264666f726b20746f2050726f746f636f6c2076657273696f6e203130222c0a20202020226162737472616374223a20224c6574277320686176652073616e63686f4e657420696e2066756c6c20676f7665726e616e636520617320736f6f6e20617320706f737369626c65222c0a20202020226d6f7469766174696f6e223a2022505639206973206e6f742061732066756e2061732050563130222c0a2020202022726174696f6e616c65223a20224c65742773206b6565702074657374696e67207374756666222c0a20202020227265666572656e636573223a205b0a2020202020207b0a2020202020202020224074797065223a20224f74686572222c0a2020202020202020226c6162656c223a202248617264666f726b20746f2050563130222c0a202020202020202022757269223a2022220a2020202020207d0a202020205d0a20207d2c0a202022617574686f7273223a205b0a202020207b0a202020202020226e616d65223a20224361726c6f73222c0a202020202020227769746e657373223a207b0a2020202020202020227769746e657373416c676f726974686d223a202265643235353139222c0a2020202020202020227075626c69634b6579223a202237656130396133346165626231336339383431633731333937623163616266656335646466393530343035323933646565343936636163326634333734383061222c0a2020202020202020227369676e6174757265223a20226134373639383562346363306434353766323437373937363131373939613666366138306663386362376563396463623561383232333838386430363138653330646531363566336438363963346130643931303764386135623631326164376335653432343431393037663562393137393666306437313837643634613031220a2020202020207d0a202020207d0a20205d0a7d
             */
            bytes?: string | null;
            /** @description A warning that occured while validating the metadata */
            warning?: string | null;
            /**
             * @description The language described in the context of the metadata as per CIP-100
             * @example en-us
             */
            language?: string | null;
            /** @description Comment attached to the metadata */
            comment?: string | null;
            /**
             * @description Indicate whether data is invalid (currently returns null for all as per dbsync)
             * @example null
             */
            is_valid?: boolean | null;
        }[];
        /** @description List of updates for requested (or all) delegated representatives (DReps) */
        drep_updates: {
            drep_id?: components["schemas"]["drep_info"][number]["drep_id"];
            hex?: components["schemas"]["drep_info"][number]["hex"];
            has_script?: components["schemas"]["drep_info"][number]["has_script"];
            update_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            /**
             * @description The index of this certificate within the the transaction.
             * @example 1
             */
            cert_index?: number;
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            /**
             * @description Effective action for this DRep Update certificate
             * @example registered
             * @enum {string}
             */
            action?: "updated" | "registered" | "deregistered";
            deposit?: components["schemas"]["drep_info"][number]["deposit"];
            meta_url?: components["schemas"]["drep_metadata"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_metadata"][number]["meta_hash"];
            meta_json?: components["schemas"]["drep_metadata"][number]["meta_json"];
        }[];
        /** @description History of DReps voting power against each (or requested) epoch */
        drep_voting_power_history: {
            drep_id?: components["schemas"]["drep_info"][number]["drep_id"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            /**
             * @description The voting power for the DRep
             * @example 14231445553
             */
            amount?: string | null;
        }[];
        /** @description List of all votes casted by requested delegated representative (DRep) */
        drep_votes: {
            proposal_id?: components["schemas"]["proposal_list"][number]["proposal_id"];
            proposal_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            proposal_index?: components["schemas"]["proposal_list"][number]["proposal_index"];
            vote_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            /**
             * @description Actual Vote casted
             * @example Yes
             * @enum {string}
             */
            vote?: "Yes" | "No" | "Abstain";
            meta_url?: components["schemas"]["drep_metadata"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_metadata"][number]["meta_hash"];
        }[];
        /** @description History of Pool's voting power against each (or requested) epoch */
        pool_voting_power_history: {
            pool_id_bech32?: components["schemas"]["pool_info"][number]["pool_id_bech32"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            /**
             * @description The voting power for the pool for the epoch
             * @example 11231445553
             */
            amount?: string | null;
        }[];
        /** @description List of all votes casted by requested pool */
        pool_votes: components["schemas"]["drep_votes"][number][];
        /** @description List of all votes casted by requested delegated representative (DRep) */
        committee_votes: components["schemas"]["drep_votes"][number][];
        /** @description List of all governance action proposals */
        proposal_list: {
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            /**
             * @description Proposal Action ID in accordance with CIP-129 format
             * @example gov_action17m93skslaxyd45gpr6ernkdzs852h564wsterr8l6lheu7hu7kvsqecyqdh
             */
            proposal_id?: string;
            proposal_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            /**
             * @description Index of governance proposal in transaction
             * @example 0
             */
            proposal_index?: number;
            /**
             * @description Proposal Action Type
             * @example ParameterChange
             * @enum {string}
             */
            proposal_type?: "ParameterChange" | "HardForkInitiation" | "TreasuryWithdrawals" | "NoConfidence" | "NewCommittee" | "NewConstitution" | "InfoAction";
            /**
             * @description Description for Proposal Action
             * @example {"tag": "InfoAction"}
             */
            proposal_description?: Record<string, never>;
            deposit?: components["schemas"]["drep_info"][number]["deposit"];
            /**
             * @description The StakeAddress index of the reward address to receive the deposit when it is repaid.
             * @example stake1uy6yzwsxxc28lfms0qmpxvyz9a7y770rtcqx9y96m42cttqwvp4m5
             */
            return_address?: string;
            /**
             * @description Shows the epoch at which this governance action was proposed.
             * @example 660
             */
            proposed_epoch?: number;
            /**
             * @description If not null, then this proposal has been ratified at the specfied epoch.
             * @example 670
             */
            ratified_epoch?: number | null;
            /**
             * @description If not null, then this proposal has been enacted at the specfied epoch.
             * @example 675
             */
            enacted_epoch?: number | null;
            /**
             * @description If not null, then this proposal has been dropped (expired/enacted) at the specfied epoch.
             * @example 680
             */
            dropped_epoch?: number | null;
            /**
             * @description If not null, then this proposal has been expired at the specfied epoch.
             * @example 680
             */
            expired_epoch?: number | null;
            /** @description Shows the epoch at which this governance action is expected to expire. */
            expiration?: number | null;
            meta_url?: components["schemas"]["drep_metadata"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_metadata"][number]["meta_hash"];
            meta_json?: components["schemas"]["drep_metadata"][number]["meta_json"];
            meta_comment?: components["schemas"]["drep_metadata"][number]["comment"];
            meta_language?: components["schemas"]["drep_metadata"][number]["language"];
            meta_is_valid?: components["schemas"]["drep_metadata"][number]["is_valid"];
            /** @description If not null, the amount withdrawn from treasury into stake address by this this proposal */
            withdrawal?: {
                stake_address?: components["schemas"]["account_history"][number]["stake_address"];
                /** @example 31235800000 */
                amount?: string;
            } | Record<string, never> | null;
            /**
             * @description If not null, the proposed new parameter set
             * @example {
             *       "key_deposit": 1000000
             *     }
             */
            param_proposal?: Record<string, never> | null;
        }[];
        /** @description List of all governance action proposals where specified credential(DRep, SPO or Committee member) has cast a vote */
        voter_proposal_list: components["schemas"]["proposal_list"][number][];
        /** @description Summary of votes for given proposal */
        proposal_voting_summary: {
            proposal_type?: components["schemas"]["proposal_list"][number]["proposal_type"];
            /**
             * @description Epoch for which data was collated
             * @example 441
             */
            epoch_no?: number;
            /**
             * @description Number of 'yes' votes casted by dreps
             * @example 7
             */
            drep_yes_votes_cast?: number;
            /**
             * @description Power of 'yes' votes that were explicitly cast
             * @example 31231231231
             */
            drep_active_yes_vote_power?: string;
            /**
             * @description Power of 'yes' votes from dreps (includes explicit yes and inferred via other means)
             * @example 31146839512742
             */
            drep_yes_vote_power?: string;
            /**
             * @description Percentage of 'yes' votes from dreps
             * @example 60.72
             */
            drep_yes_pct?: number;
            /**
             * @description Number of 'no' votes casted by dreps
             * @example 0
             */
            drep_no_votes_cast?: number;
            /**
             * @description Power of 'no' votes that were explicitly cast
             * @example 2012312393392
             */
            drep_active_no_vote_power?: string;
            /**
             * @description Power of 'no' votes from dreps (includes explicit no and inferred via other means)
             * @example 20148194577715
             */
            drep_no_vote_power?: string;
            /**
             * @description Percentage of 'no' votes from dreps
             * @example 39.28
             */
            drep_no_pct?: number;
            /**
             * @description Number of active 'abstain' votes from dreps
             * @example 5
             */
            drep_abstain_votes_cast?: number;
            /**
             * @description Power of 'abstain' votes that were explicitly cast
             * @example 123321123321
             */
            drep_active_abstain_vote_power?: string;
            /**
             * @description Power of votes delegated to 'always_no_confidence' predefined drep
             * @example 9999
             */
            drep_always_no_confidence_vote_power?: string;
            /**
             * @description Power of votes delegated to 'always_abstain' predefined drep
             * @example 87654321
             */
            drep_always_abstain_vote_power?: string;
            /**
             * @description Number of 'yes' votes casted by pools
             * @example 1
             */
            pool_yes_votes_cast?: number;
            /**
             * @description Power of 'yes' pool votes that were explicitly cast
             * @example 123123123
             */
            pool_active_yes_vote_power?: string;
            /**
             * @description Power of 'yes' votes from pools (includes explicit yes and inferred via other means)
             * @example 5234000000
             */
            pool_yes_vote_power?: string;
            /**
             * @description Percentage of 'yes' votes from pools
             * @example 13.12
             */
            pool_yes_pct?: number;
            /**
             * @description Number of 'no' votes casted by pools
             * @example 0
             */
            pool_no_votes_cast?: number;
            /**
             * @description Power of 'no' pool votes that were explicitly cast
             * @example 0
             */
            pool_active_no_vote_power?: string;
            /**
             * @description Power of 'no' votes from pools (includes explicit no and inferred via other means)
             * @example 0
             */
            pool_no_vote_power?: string;
            /**
             * @description Percentage of 'no' votes from pools
             * @example 0
             */
            pool_no_pct?: number;
            /**
             * @description Percentage of 'abstain' votes from pools
             * @example 0
             */
            pool_abstain_votes_cast?: number;
            /**
             * @description Power of 'abstain' pool votes that were explicitly cast
             * @example 12312312312
             */
            pool_active_abstain_vote_power?: string;
            /**
             * @description Number of non-voting SPO pool reward addresses delegating to 'always_abstain' drep
             * @example 1
             */
            pool_passive_always_abstain_votes_assigned?: number;
            /**
             * @description Combined power of non-voting SPO pool votes where reward addresses delegate to 'always_abstain'
             * @example 12312312
             */
            pool_passive_always_abstain_vote_power?: string;
            /**
             * @description Number of non-voting SPO pool reward addresses delegating to 'always_no_confidence' drep
             * @example 10
             */
            pool_passive_always_no_confidence_votes_assigned?: number;
            /**
             * @description Combined power of non-voting SPO pool votes where reward addresses delegate to 'always_no_confidence'
             * @example 321321
             */
            pool_passive_always_no_confidence_vote_power?: string;
            /**
             * @description Number of 'yes' votes casted by committee
             * @example 5
             */
            committee_yes_votes_cast?: number;
            /**
             * @description Percentage of 'yes' votes from committee
             * @example 71.43
             */
            committee_yes_pct?: number;
            /**
             * @description Number of 'no' votes casted by committee
             * @example 1
             */
            committee_no_votes_cast?: number;
            /**
             * @description Percentage of 'no' votes from committee
             * @example 28.57
             */
            committee_no_pct?: number;
            /** @description Percentage of 'abstain' votes from committee */
            committee_abstain_votes_cast?: number;
        }[];
        /** @description List of all votes cast on specified governance action */
        proposal_votes: {
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            /**
             * @description The role of the voter
             * @example DRep
             * @enum {string}
             */
            voter_role?: "ConstitutionalCommittee" | "DRep" | "SPO";
            /**
             * @description Voter's DRep ID (CIP-129 bech32 format), pool ID (bech32 format) or committee hot ID (CIP-129 bech32 format)
             * @example drep1yfhyq6tztjksqqpd5lglc3zr2tn8vylgjh9xzz7n2p4l4lgk3qam3
             */
            voter_id?: string;
            /**
             * @description Voter's DRep ID , pool ID or committee hash in hex format
             * @example 6e4069625cad00002da7d1fc444352e67613e895ca610bd3506bfafd
             */
            voter_hex?: string;
            voter_has_script?: components["schemas"]["drep_info"][number]["has_script"];
            vote?: components["schemas"]["drep_votes"][number]["vote"];
            meta_url?: components["schemas"]["drep_metadata"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_metadata"][number]["meta_hash"];
        }[];
        /** @description List of all votes cast on specified governance action */
        vote_list: {
            /**
             * @description The transaction hash where-in vote was posted
             * @example e239058473ab5ab1f5829b9058a93cbd0daaf72f9252cc16b34925cd87b37d35
             */
            vote_tx_hash?: string;
            voter_role?: components["schemas"]["proposal_votes"][number]["voter_role"];
            voter_id?: components["schemas"]["proposal_votes"][number]["voter_id"];
            proposal_id?: components["schemas"]["proposal_list"][number]["proposal_id"];
            proposal_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            proposal_index?: components["schemas"]["proposal_list"][number]["proposal_index"];
            proposal_type?: components["schemas"]["proposal_list"][number]["proposal_type"];
            epoch_no?: components["schemas"]["blocks"][number]["epoch_no"];
            block_height?: components["schemas"]["blocks"][number]["block_height"];
            block_time?: components["schemas"]["blocks"][number]["block_time"];
            vote?: components["schemas"]["drep_votes"][number]["vote"];
            meta_url?: components["schemas"]["drep_metadata"][number]["meta_url"];
            meta_hash?: components["schemas"]["drep_metadata"][number]["meta_hash"];
            meta_json?: components["schemas"]["drep_metadata"][number]["meta_json"];
        }[];
        /** @description Current governance committee */
        committee_info: {
            proposal_id?: components["schemas"]["proposal_list"][number]["proposal_id"];
            proposal_tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
            proposal_index?: components["schemas"]["proposal_list"][number]["proposal_index"];
            /** @example 67 */
            quorum_numerator?: number;
            /** @example 100 */
            quorum_denominator?: number;
            /** @description Array of all members part of active governance committee */
            members?: {
                /**
                 * @description Member authentication status
                 * @example authorized
                 * @enum {string}
                 */
                status?: "authorized" | "not_authorized" | "resigned";
                /**
                 * @description Committee member cold key hash in hex format
                 * @example 6095e643ea6f1cccb6e463ec34349026b3a48621aac5d512655ab1bf
                 */
                cc_cold_hex?: string;
                /**
                 * @description Flag which shows if this credential is a script hash
                 * @example false
                 */
                cc_cold_has_script?: boolean;
                /**
                 * @description Committee member key hash from last valid hot key authorization certificate in hex format
                 * @example 65d497b875c56ab213586a4006d4f6658970573ea8e2398893857472
                 */
                cc_hot_hex?: string | null;
                /**
                 * @description Flag which shows if this credential is a script hash
                 * @example false
                 */
                cc_hot_has_script?: boolean | null;
                /**
                 * @description Epoch number in which the committee member vote rights expire
                 * @example 324
                 */
                expiration_epoch?: number;
            }[];
        };
        script_info: {
            /**
             * @description Hash of a script
             * @example bfa7ffa9b2e164873db6ac6d0528c82e212963bc62e10fd1d81da4af
             */
            script_hash?: string | null;
            /**
             * @description Hash of the script creation transaction
             * @example 255f061502ad83230351fbcf2d9fade1b5d118d332f92c9861075010a1fe3fbe
             */
            creation_tx_hash?: string;
            /**
             * @description Type of the script
             * @example plutusV1
             * @enum {string}
             */
            type?: "plutusV1" | "plutusV2" | "timelock" | "multisig";
            /**
             * @description Data in JSON format
             * @example null
             */
            value?: Record<string, never> | null;
            /**
             * @description Script bytes (cborSeq)
             * @example 5907f4010000332323232323232323233223232323232332232323232322223232533532533533355300712001323212330012233350052200200200100235001220011233001225335002101710010142325335333573466e3cd400488008d4020880080580544ccd5cd19b873500122001350082200101601510153500122002353500122002222222222200a101413357389201115554784f206e6f7420636f6e73756d6564000133333573466e1cd55cea8012400046644246600200600464646464646464646464646666ae68cdc39aab9d500a480008cccccccccc888888888848cccccccccc00402c02802402001c01801401000c008cd40508c8c8cccd5cd19b8735573aa0049000119910919800801801180f9aba150023019357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854028cd4050054d5d0a804999aa80bbae501635742a010666aa02eeb94058d5d0a80399a80a0109aba15006335014335502402275a6ae854014c8c8c8cccd5cd19b8735573aa00490001199109198008018011919191999ab9a3370e6aae754009200023322123300100300233502575a6ae854008c098d5d09aba2500223263533573805e05c05a05826aae7940044dd50009aba150023232323333573466e1cd55cea8012400046644246600200600466a04aeb4d5d0a80118131aba135744a004464c6a66ae700bc0b80b40b04d55cf280089baa001357426ae8940088c98d4cd5ce01581501481409aab9e5001137540026ae854010cd4051d71aba15003335014335502475c40026ae854008c070d5d09aba2500223263533573804e04c04a04826ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150023232323333573466e1d400520062321222230040053019357426aae79400c8cccd5cd19b875002480108c848888c008014c06cd5d09aab9e500423333573466e1d400d20022321222230010053015357426aae7940148cccd5cd19b875004480008c848888c00c014dd71aba135573ca00c464c6a66ae7008808408007c0780740704d55cea80089baa001357426ae8940088c98d4cd5ce00d80d00c80c080c89931a99ab9c4910350543500019018135573ca00226ea8004c8004d5405888448894cd40044d400c88004884ccd401488008c010008ccd54c01c4800401401000448c88c008dd6000990009aa80b111999aab9f00125009233500830043574200460066ae880080548c8c8c8cccd5cd19b8735573aa00690001199911091998008020018011919191999ab9a3370e6aae7540092000233221233001003002301735742a00466a01c02c6ae84d5d1280111931a99ab9c01b01a019018135573ca00226ea8004d5d0a801999aa803bae500635742a00466a014eb8d5d09aba2500223263533573802e02c02a02826ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80a11191999aab9f0022500823350073355017300635573aa004600a6aae794008c010d5d100180a09aba100111220021221223300100400312232323333573466e1d4005200023212230020033005357426aae79400c8cccd5cd19b8750024800884880048c98d4cd5ce00980900880800789aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98d4cd5ce00800780700689aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6a66ae7003803403002c4dd500089119191999ab9a3370ea00290021091100091999ab9a3370ea00490011190911180180218031aba135573ca00846666ae68cdc3a801a400042444004464c6a66ae7004404003c0380340304d55cea80089baa0012323333573466e1d40052002200523333573466e1d40092000200523263533573801a01801601401226aae74dd5000891001091000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6a66ae7004c04804404003c03803403002c0284d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263533573801801601401201026aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931a99ab9c009008007006005135573aa00226ea800444888c8c8cccd5cd19b8735573aa0049000119aa80518031aba150023005357426ae8940088c98d4cd5ce00480400380309aab9e5001137540029309000a490350543100112212330010030021123230010012233003300200200133512233002489209366f09fe40eaaeb17d3cb6b0b61e087d664174c39a48a986f86b2b0ba6e2a7b00480008848cc00400c0088005
             */
            bytes?: string | null;
            /**
             * @description The size of the CBOR serialised script (in bytes)
             * @example 2039
             */
            size?: number;
        }[];
        /** @description List of script and creation tx hash pairs */
        script_list: {
            script_hash?: components["schemas"]["script_info"][number]["script_hash"];
            creation_tx_hash?: components["schemas"]["script_info"][number]["creation_tx_hash"];
            type?: components["schemas"]["script_info"][number]["type"];
            size?: components["schemas"]["script_info"][number]["size"];
        }[];
        /** @description Array of all redeemers for a given script hash */
        script_redeemers: {
            script_hash?: components["schemas"]["script_info"][number]["script_hash"];
            redeemers?: {
                tx_hash?: components["schemas"]["utxo_infos"][number]["tx_hash"];
                tx_index?: components["schemas"]["utxo_infos"][number]["tx_index"];
                /**
                 * @description The budget in Memory to run a script
                 * @example 520448
                 */
                unit_mem?: string | number | null;
                /**
                 * @description The budget in Cpu steps to run a script
                 * @example 211535239
                 */
                unit_steps?: string | number | null;
                /**
                 * @description The budget in fees to run a script - the fees depend on the ExUnits and the current prices
                 * @example 45282
                 */
                fee?: string;
                /**
                 * @description What kind of validation this redeemer is used for
                 * @example spend
                 * @enum {string}
                 */
                purpose?: "spend" | "mint" | "cert" | "reward";
                /**
                 * @description The Hash of the Plutus Data
                 * @example 5a595ce795815e81d22a1a522cf3987d546dc5bb016de61b002edd63a5413ec4
                 */
                datum_hash?: string | null;
                datum_value?: components["schemas"]["script_info"][number]["value"];
            }[];
        }[];
        /** @description Array of datum information for given datum hashes */
        datum_info: {
            datum_hash?: NonNullable<components["schemas"]["script_redeemers"][number]["redeemers"]>[number]["datum_hash"];
            creation_tx_hash?: components["schemas"]["script_info"][number]["creation_tx_hash"];
            value?: components["schemas"]["script_info"][number]["value"];
            bytes?: components["schemas"]["script_info"][number]["bytes"];
        }[];
        /** @description Current tip of the chain, identified by a slot and a block header hash. */
        ogmiostip: {
            /**
             * @description Identifier for JSON-RPC 2.0 standard
             * @example 2.0
             */
            jsonrpc?: string;
            /**
             * @description The Ogmios method that was called in the request
             * @example queryNetwork/tip
             */
            method?: string;
            /**
             * @description Result of the query
             * @example {
             *       "slot": 59886800,
             *       "id": "df5678c9774b7bc8c60a4c83b63c3676e618640ad05f7d1ee775b68939cf77d1"
             *     }
             */
            result?: {
                /**
                 * @description Absolute slot number on chain
                 * @example 59886800
                 */
                slot?: number;
                /**
                 * @description Block Hash (Blake2b 32-byte hash digest, encoded in base16)
                 * @example df5678c9774b7bc8c60a4c83b63c3676e618640ad05f7d1ee775b68939cf77d1
                 */
                id?: string;
            } | string | number | unknown[] | Record<string, never> | null;
        };
    };
    responses: {
        /** @description The server does not recognise the combination of endpoint and parameters provided */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
        /** @description Access token is missing or invalid */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
        /** @description The server cannot process the request due to invalid input */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
    };
    parameters: {
        /** @description Block height for specifying time delta */
        _after_block_height: number;
        /**
         * @description Epoch Number to fetch details for
         * @example 320
         */
        _epoch_no: string;
        /**
         * @description Cardano staking address (reward account) in bech32 format
         * @example stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz
         */
        _stake_address: string;
        /**
         * @description Transaction Hash in hexadecimal format (hex)
         * @example f144a8264acf4bdfe2e1241170969c930d64ab6b0996a4a45237b623f1dd670e
         */
        _tx_hash: string;
        /**
         * @description Asset Policy ID in hexadecimal format (hex)
         * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
         */
        _asset_policy: string;
        /**
         * @description Asset Name in hexadecimal format (hex), empty asset name returns royalties
         * @example 424f4f4b
         */
        _asset_name: string;
        /**
         * @description NFT Policy ID in hexadecimal format (hex)
         * @example f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a
         */
        _asset_policy_nft: string;
        /**
         * @description NFT Name in hexadecimal format (hex)
         * @example 68616e646c65
         */
        _asset_name_nft: string;
        /**
         * @description Voter ID (Drep, SPO, Committee Member) in Bech32 format (CIP-5 | CIP-129)
         * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
         */
        _voter_id: string;
        /**
         * @description DRep ID in bech32 format
         * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
         */
        _drep_id: string;
        /**
         * @description DRep ID in bech32 format
         * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
         */
        _drep_id_optional: string;
        /**
         * @description Committee member hot key ID in Bech32 format (CIP-5 | CIP-129)
         * @example cc_hot1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqvcdjk7
         */
        _cc_hot_id: string;
        /**
         * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
         * @example false
         */
        _extended: boolean;
        /**
         * @description Include all historical transactions, setting to false includes only the non-empty ones
         * @example false
         */
        _history: boolean;
        /**
         * @description Include information about nearing but not yet started epoch, to get access to active stake snapshot information if available
         * @example false
         */
        _include_next_epoch: boolean;
        /**
         * @description Pool ID in bech32 format
         * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
         */
        _pool_bech32: string;
        /**
         * @description Pool ID in bech32 format (optional)
         * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
         */
        _pool_bech32_optional: string;
        /**
         * @description Epoch Number to fetch details for
         * @example 320
         */
        _pool_epoch_no: string;
        /**
         * @description Script hash in hexadecimal format (hex)
         * @example d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8
         */
        _script_hash: string;
        /**
         * @description Government proposal ID in CIP-129 Bech32 format
         * @example gov_action1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpzklpgpf
         */
        _proposal_id: string;
    };
    requestBodies: {
        /** @description Array of block hashes */
        block_hashes: {
            content: {
                "application/json": {
                    _block_hashes: components["schemas"]["blocks"][number]["hash"][];
                };
            };
        };
        /** @description Array of block hashes */
        block_tx_info: {
            content: {
                "application/json": {
                    _block_hashes: components["schemas"]["blocks"][number]["hash"][];
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction inputs in the result
                     */
                    _inputs?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction metadata in the result
                     */
                    _metadata?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include assets involved within transaction the result
                     */
                    _assets?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include any stake account reward withdrawals in the result
                     */
                    _withdrawals?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction certificates in the result
                     */
                    _certs?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include any details regarding collateral/reference/datum/script objects in the result
                     */
                    _scripts?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include bytecode for associated reference/plutus scripts
                     */
                    _bytecode?: boolean;
                };
            };
        };
        /** @description Array of Cardano payment address(es) */
        payment_addresses: {
            content: {
                "application/json": {
                    /** @description Array of Cardano payment address(es) in bech32 format */
                    _addresses: string[];
                };
            };
        };
        /** @description Array of Cardano payment address(es) with extended flag to toggle additional fields */
        payment_addresses_with_extended: {
            content: {
                "application/json": {
                    /** @description Array of Cardano payment address(es) in bech32 format */
                    _addresses: string[];
                    /**
                     * Format: boolean
                     * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                     */
                    _extended?: boolean;
                };
            };
        };
        /** @description Array of Cardano payment address(es) */
        address_txs: {
            content: {
                "application/json": {
                    /** @description Array of Cardano payment address(es) in bech32 format */
                    _addresses: string[];
                    /**
                     * Format: integer
                     * @description Only fetch information after specific block height
                     */
                    _after_block_height?: number;
                };
            };
        };
        /** @description Array of Cardano stake address(es) in bech32 format with optional epoch no to filter by */
        stake_addresses_with_epoch_no: {
            content: {
                "application/json": {
                    /** @description Array of Cardano stake address(es) in bech32 format */
                    _stake_addresses: string[];
                    /**
                     * Format: integer
                     * @description Only fetch information for a specific epoch
                     */
                    _epoch_no?: number;
                };
            };
        };
        /** @description Array of Cardano stake credential(s) in bech32 format alongwith flag to return first only or used UTxOs */
        stake_addresses_with_first_only_and_empty: {
            content: {
                "application/json": {
                    /** @description Array of Cardano stake address(es) in bech32 format */
                    _stake_addresses: string[];
                    /**
                     * Format: boolean
                     * @description Only return the first result
                     */
                    _first_only?: boolean;
                    /**
                     * Format: boolean
                     * @description Include zero quantity entries
                     */
                    _empty?: boolean;
                };
            };
        };
        /** @description Array of Cardano stake credential(s) in bech32 format alongwith extended flag to return additional columns */
        stake_addresses_with_extended: {
            content: {
                "application/json": {
                    /** @description Array of Cardano stake address(es) in bech32 format */
                    _stake_addresses: string[];
                    /**
                     * Format: boolean
                     * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                     */
                    _extended?: boolean;
                };
            };
        };
        /** @description Array of Cardano stake credential(s) in bech32 format */
        stake_addresses: {
            content: {
                "application/json": {
                    /** @description Array of Cardano stake address(es) in bech32 format */
                    _stake_addresses: string[];
                };
            };
        };
        /** @description Array of Cardano payment credential(s) in hex format alongwith filtering based on blockheight */
        credential_txs: {
            content: {
                "application/json": {
                    /** @description Array of Cardano payment credential(s) in hex format */
                    _payment_credentials: string[];
                    /**
                     * Format: integer
                     * @description Only fetch information after specific block height
                     */
                    _after_block_height?: number;
                };
            };
        };
        /** @description Array of Cardano payment credential(s) in hex format */
        credential_utxos: {
            content: {
                "application/json": {
                    /** @description Array of Cardano payment credential(s) in hex format */
                    _payment_credentials: string[];
                    /**
                     * Format: boolean
                     * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                     */
                    _extended?: boolean;
                };
            };
        };
        /** @description Array of Cardano Transaction hashes */
        tx_ids: {
            content: {
                "application/json": {
                    /** @description Array of Cardano Transaction hashes */
                    _tx_hashes: string[];
                };
            };
        };
        /** @description Array of Cardano Transaction hashes */
        tx_info: {
            content: {
                "application/json": {
                    /** @description Array of Cardano Transaction hashes */
                    _tx_hashes: string[];
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction inputs in the result
                     */
                    _inputs?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction metadata in the result
                     */
                    _metadata?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include assets involved within transaction the result
                     */
                    _assets?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include any stake account reward withdrawals in the result
                     */
                    _withdrawals?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include transaction certificates in the result
                     */
                    _certs?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include any details regarding collateral/reference/datum/script objects in the result
                     */
                    _scripts?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include bytecode for associated reference/plutus scripts
                     */
                    _bytecode?: boolean;
                    /**
                     * Format: boolean
                     * @description Controls whether to include governance certificates, votes and proposals in the result
                     */
                    _governance?: boolean;
                };
            };
        };
        /** @description Serialised Cardano Transaction */
        txbin: {
            content: {
                "application/cbor": string;
            };
        };
        /** @description Array of Cardano pool IDs (bech32 format) */
        pool_ids: {
            content: {
                "application/json": {
                    /** @description Array of Cardano pool IDs (bech32 format) */
                    _pool_bech32_ids: string[];
                };
            };
        };
        /** @description Array of Cardano pool IDs (bech32 format) [Optional] */
        pool_ids_optional: {
            content: {
                "application/json": {
                    /** @description Array of Cardano pool IDs (bech32 format) */
                    _pool_bech32_ids?: string[];
                };
            };
        };
        /** @description Array of Cardano script hashes */
        script_hashes: {
            content: {
                "application/json": {
                    /** @description Array of Cardano script hashes */
                    _script_hashes?: string[];
                };
            };
        };
        /** @description Array of Cardano datum hashes */
        datum_hashes: {
            content: {
                "application/json": {
                    /** @description Array of Cardano datum hashes */
                    _datum_hashes?: string[];
                };
            };
        };
        /** @description Array of array of policyID and asset names (hex) */
        asset_list: {
            content: {
                "application/json": {
                    /** @description Array of array of policy ID and asset names (hex) */
                    _asset_list: string[][];
                };
            };
        };
        /** @description Array of array of policyID and asset names (hex) alongwith extended flag to return additional columns */
        asset_list_with_extended: {
            content: {
                "application/json": {
                    /** @description Array of array of policy ID and asset names (hex) */
                    _asset_list: string[][];
                    /**
                     * Format: boolean
                     * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                     */
                    _extended?: boolean;
                };
            };
        };
        drep_id_bulk: {
            content: {
                "application/json": {
                    _drep_ids: string[];
                };
            };
        };
        /** @description Array of Cardano UTxO references in the form "hash#index" with extended flag to toggle additional fields */
        utxo_refs_with_extended: {
            content: {
                "application/json": {
                    /** @description Array of Cardano utxo references in the form "hash#index" */
                    _utxo_refs: string[];
                    /**
                     * Format: boolean
                     * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                     */
                    _extended?: boolean;
                };
            };
        };
        /** @description JSON-RPC 2.0 standard request body */
        ogmios: {
            content: {
                "application/json": {
                    /**
                     * @description Identifier for JSON-RPC 2.0 standard
                     * @example 2.0
                     */
                    jsonrpc: string;
                    /**
                     * @description The Ogmios method to be called (see more details [here](#tag--Ogmios)) or browse examples tab
                     * @example queryNetwork/tip
                     * @enum {string}
                     */
                    method: "queryNetwork/blockHeight" | "queryNetwork/genesisConfiguration" | "queryNetwork/startTime" | "queryNetwork/tip" | "queryLedgerState/epoch" | "queryLedgerState/eraStart" | "queryLedgerState/eraSummaries" | "queryLedgerState/liveStakeDistribution" | "queryLedgerState/protocolParameters" | "queryLedgerState/proposedProtocolParameters" | "queryLedgerState/stakePools" | "submitTransaction" | "evaluateTransaction";
                    /** @description Any parameters relevant to the specific method to be called */
                    params?: Record<string, never>;
                };
            };
        };
    };
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    tip: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tip"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    genesis: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["genesis"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    totals: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["totals"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    param_updates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["param_updates"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    cli_protocol_params: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["cli_protocol_params"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    reserve_withdrawals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["reserve_withdrawals"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    treasury_withdrawals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["reserve_withdrawals"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    epoch_info: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
                /**
                 * @description Include information about nearing but not yet started epoch, to get access to active stake snapshot information if available
                 * @example false
                 */
                _include_next_epoch?: components["parameters"]["_include_next_epoch"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["epoch_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    epoch_params: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["epoch_params"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    epoch_block_protocols: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["epoch_block_protocols"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    blocks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["blocks"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    block_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["block_hashes"];
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    block_txs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["block_hashes"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block_txs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    block_tx_cbor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["block_hashes"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block_tx_cbor"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    block_tx_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["block_tx_info"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["block_tx_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    utxo_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["utxo_refs_with_extended"];
        responses: {
            /** @description Success! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    tx_cbor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["tx_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_cbor"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    tx_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["tx_info"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    tx_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["tx_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_metadata"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    tx_metalabels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_metalabels"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    submittx: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["txbin"];
        responses: {
            /** @description OK */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description An error occured while submitting transaction. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    tx_status: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["tx_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_status"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    tx_utxos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["tx_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["tx_utxos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    address_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["payment_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    address_utxos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["payment_addresses_with_extended"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    address_outputs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["address_txs"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_outputs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    credential_utxos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["credential_utxos"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    address_txs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["address_txs"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_txs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    credential_txs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["credential_txs"];
        responses: {
            /** @description Array of transaction hashes for given credential(s) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_txs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    address_assets: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["payment_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_assets"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_info_cached: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_utxos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses_with_extended"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_txs: {
        parameters: {
            query: {
                /**
                 * @description Cardano staking address (reward account) in bech32 format
                 * @example stake1u8yxtugdv63wxafy9d00nuz6hjyyp4qnggvc9a3vxh8yl0ckml2uz
                 */
                _stake_address: components["parameters"]["_stake_address"];
                /** @description Block height for specifying time delta */
                _after_block_height?: components["parameters"]["_after_block_height"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_txs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_rewards: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses_with_epoch_no"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_rewards"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_reward_history: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses_with_epoch_no"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_reward_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_updates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_updates"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_update_history: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_update_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_addresses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses_with_first_only_and_empty"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_addresses"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_assets: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_assets"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_history: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    account_stake_history: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["stake_addresses"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["account_stake_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    policy_asset_list: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of brief information of assets under the same policy */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["policy_asset_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_token_registry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_token_registry"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["asset_list"];
        responses: {
            /** @description Array of detailed asset information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_utxos: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["asset_list_with_extended"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_history: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
                /**
                 * @description Asset Name in hexadecimal format (hex), empty asset name returns royalties
                 * @example 424f4f4b
                 */
                _asset_name?: components["parameters"]["_asset_name"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of asset mint/burn history */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_addresses: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
                /**
                 * @description Asset Name in hexadecimal format (hex), empty asset name returns royalties
                 * @example 424f4f4b
                 */
                _asset_name?: components["parameters"]["_asset_name"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_addresses"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_nft_address: {
        parameters: {
            query: {
                /**
                 * @description NFT Policy ID in hexadecimal format (hex)
                 * @example f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a
                 */
                _asset_policy: components["parameters"]["_asset_policy_nft"];
                /**
                 * @description NFT Name in hexadecimal format (hex)
                 * @example 68616e646c65
                 */
                _asset_name?: components["parameters"]["_asset_name_nft"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Payment addresses currently holding the given NFT */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_nft_address"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    policy_asset_addresses: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of asset names and payment addresses for the given policy (including balances) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["policy_asset_addresses"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    policy_asset_info: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of detailed information of assets under the same policy */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["policy_asset_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    policy_asset_mints: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Get a list of mint or burn count details for all assets minted under a policy */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["policy_asset_mints"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_summary: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
                /**
                 * @description Asset Name in hexadecimal format (hex), empty asset name returns royalties
                 * @example 424f4f4b
                 */
                _asset_name?: components["parameters"]["_asset_name"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of asset summary information */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["asset_summary"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    asset_txs: {
        parameters: {
            query: {
                /**
                 * @description Asset Policy ID in hexadecimal format (hex)
                 * @example 750900e4999ebe0d58f19b634768ba25e525aaf12403bfe8fe130501
                 */
                _asset_policy: components["parameters"]["_asset_policy"];
                /**
                 * @description Asset Name in hexadecimal format (hex), empty asset name returns royalties
                 * @example 424f4f4b
                 */
                _asset_name?: components["parameters"]["_asset_name"];
                /** @description Block height for specifying time delta */
                _after_block_height?: components["parameters"]["_after_block_height"];
                /**
                 * @description Include all historical transactions, setting to false includes only the non-empty ones
                 * @example false
                 */
                _history?: components["parameters"]["_history"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description An array of Tx hashes that included the given asset (latest first) */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["address_txs"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_epoch_summary: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_epoch_summary"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["drep_id_bulk"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["drep_id_bulk"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_metadata"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_updates: {
        parameters: {
            query?: {
                /**
                 * @description DRep ID in bech32 format
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _drep_id?: components["parameters"]["_drep_id_optional"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_updates"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_history: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
                /**
                 * @description DRep ID in bech32 format
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _drep_id?: components["parameters"]["_drep_id_optional"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_voting_power_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_voting_power_history: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
                /**
                 * @description DRep ID in bech32 format
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _drep_id?: components["parameters"]["_drep_id_optional"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_voting_power_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_votes: {
        parameters: {
            query: {
                /**
                 * @description DRep ID in bech32 format
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _drep_id: components["parameters"]["_drep_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_votes"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    drep_delegators: {
        parameters: {
            query: {
                /**
                 * @description DRep ID in bech32 format
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _drep_id: components["parameters"]["_drep_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["drep_delegators"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    committee_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["committee_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    committee_votes: {
        parameters: {
            query?: {
                /**
                 * @description Committee member hot key ID in Bech32 format (CIP-5 | CIP-129)
                 * @example cc_hot1qgqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqvcdjk7
                 */
                _cc_hot_id?: components["parameters"]["_cc_hot_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["committee_votes"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    proposal_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["proposal_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    voter_proposal_list: {
        parameters: {
            query?: {
                /**
                 * @description Voter ID (Drep, SPO, Committee Member) in Bech32 format (CIP-5 | CIP-129)
                 * @example drep17l6sywnwqu9aedd6aumev42w39ln5zfl9nw7j4ak6u8swyrwvz3
                 */
                _voter_id?: components["parameters"]["_voter_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["proposal_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    proposal_voting_summary: {
        parameters: {
            query: {
                /**
                 * @description Government proposal ID in CIP-129 Bech32 format
                 * @example gov_action1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpzklpgpf
                 */
                _proposal_id: components["parameters"]["_proposal_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["proposal_voting_summary"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    proposal_votes: {
        parameters: {
            query: {
                /**
                 * @description Government proposal ID in CIP-129 Bech32 format
                 * @example gov_action1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpzklpgpf
                 */
                _proposal_id: components["parameters"]["_proposal_id"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["proposal_votes"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    vote_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["vote_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["pool_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_stake_snapshot: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_snapshot"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_delegators: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_delegators"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_delegators_history: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_delegators_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_blocks: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_blocks"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_owner_history: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["pool_ids"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_owner_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_history: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_history_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_updates: {
        parameters: {
            query?: {
                /**
                 * @description Pool ID in bech32 format (optional)
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32?: components["parameters"]["_pool_bech32_optional"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_updates"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_registrations: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_pool_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_registrations"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_retirements: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_registrations"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_relays: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_relays"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_voting_power_history: {
        parameters: {
            query?: {
                /**
                 * @description Epoch Number to fetch details for
                 * @example 320
                 */
                _epoch_no?: components["parameters"]["_epoch_no"];
                /**
                 * @description Pool ID in bech32 format (optional)
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32?: components["parameters"]["_pool_bech32_optional"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_voting_power_history"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_votes: {
        parameters: {
            query: {
                /**
                 * @description Pool ID in bech32 format
                 * @example pool155efqn9xpcf73pphkk88cmlkdwx4ulkg606tne970qswczg3asc
                 */
                _pool_bech32: components["parameters"]["_pool_bech32"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_votes"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_groups: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_groups"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_metadata: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["pool_ids_optional"];
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_metadata"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    pool_calidus_keys: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success!! */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["pool_calidus_keys"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    script_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["script_hashes"];
        responses: {
            /** @description Array of information for scripts requested */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["script_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    native_script_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of native script and creation tx hash pairs */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["script_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    plutus_script_list: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of Plutus script and creation tx hash pairs */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["script_list"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    script_redeemers: {
        parameters: {
            query: {
                /**
                 * @description Script hash in hexadecimal format (hex)
                 * @example d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8
                 */
                _script_hash: components["parameters"]["_script_hash"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of all redeemers for a given script hash */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["script_redeemers"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    script_utxos: {
        parameters: {
            query: {
                /**
                 * @description Script hash in hexadecimal format (hex)
                 * @example d8480dc869b94b80e81ec91b0abe307279311fe0e7001a9488f61ff8
                 */
                _script_hash: components["parameters"]["_script_hash"];
                /**
                 * @description Controls whether or not certain optional fields supported by a given endpoint are populated as a part of the call
                 * @example false
                 */
                _extended?: components["parameters"]["_extended"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of UTXOs for a given script hash */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["utxo_infos"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    datum_info: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["datum_hashes"];
        responses: {
            /** @description Array of datum information for given datum hashes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["datum_info"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            404: components["responses"]["NotFound"];
        };
    };
    ogmios: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: components["requestBodies"]["ogmios"];
        responses: {
            /** @description Current tip of the chain, identified by a slot and a block header hash. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ogmiostip"];
                };
            };
            400: components["responses"]["BadRequest"];
        };
    };
}
