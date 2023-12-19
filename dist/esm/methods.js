export default (client) => {
    return {
        /**
              * Get the tip info about the latest block seen by chain
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        Tip: (extraParams, headers, signal) => {
            return client.get(`/tip?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * Get the Genesis parameters used to start specific era on chain
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        Genesis: (extraParams, headers, signal) => {
            return client.get(`/genesis?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the circulating utxo, treasury, rewards, supply and reserves in lovelace for specified epoch, all epochs if empty
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        Totals: (params, extraParams, headers, signal) => {
            return client.get(`/totals?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * Get all parameter update proposals submitted to the chain starting Shelley era
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        ParamUpdates: (extraParams, headers, signal) => {
            return client.get(`/param_updates?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * List of all withdrawals from reserves against stake accounts
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        ReserveWithdrawals: (extraParams, headers, signal) => {
            return client.get(`/reserve_withdrawals?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * List of all withdrawals from treasury against stake accounts
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        TreasuryWithdrawals: (extraParams, headers, signal) => {
            return client.get(`/treasury_withdrawals?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the epoch information, all epochs if no epoch specified
         * @param params._epoch_no string optional
         * @param params._include_next_epoch boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        EpochInfo: (params, extraParams, headers, signal) => {
            return client.get(`/epoch_info?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${params._include_next_epoch ? "&_include_next_epoch=" + params._include_next_epoch : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the protocol parameters for specific epoch, returns information about all epochs if no epoch specified
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        EpochParams: (params, extraParams, headers, signal) => {
            return client.get(`/epoch_params?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the information about block protocol distribution in epoch
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        EpochBlockProtocols: (params, extraParams, headers, signal) => {
            return client.get(`/epoch_block_protocols?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * Get summarised details about all blocks (paginated - latest first)
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        Blocks: (extraParams, headers, signal) => {
            return client.get(`/blocks?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get detailed information about a specific block
         * @param params._block_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        BlockInfo: (params, extraParams, headers, signal) => {
            return client.post(`/block_info?${extraParams ? extraParams : ""}`, { _block_hashes: params._block_hashes }, { signal, headers });
        },
        /**
         * Get a list of all transactions included in provided blocks
         * @param params._block_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        BlockTxs: (params, extraParams, headers, signal) => {
            return client.post(`/block_txs?${extraParams ? extraParams : ""}`, { _block_hashes: params._block_hashes }, { signal, headers });
        },
        /**
         * Get UTxO set for requested UTxO references
         * @param params._utxo_refs string[]
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        UtxoInfo: (params, extraParams, headers, signal) => {
            return client.post(`/utxo_info?${extraParams ? extraParams : ""}`, { _utxo_refs: params._utxo_refs, _extended: params._extended }, { signal, headers });
        },
        /**
         * Get detailed information about transaction(s)
         * @param params._tx_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        TxInfo: (params, extraParams, headers, signal) => {
            return client.post(`/tx_info?${extraParams ? extraParams : ""}`, { _tx_hashes: params._tx_hashes }, { signal, headers });
        },
        /**
         * Get metadata information (if any) for given transaction(s)
         * @param params._tx_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        TxMetadata: (params, extraParams, headers, signal) => {
            return client.post(`/tx_metadata?${extraParams ? extraParams : ""}`, { _tx_hashes: params._tx_hashes }, { signal, headers });
        },
        /**
              * Get a list of all transaction metalabels
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        TxMetalabels: (extraParams, headers, signal) => {
            return client.get(`/tx_metalabels?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the number of block confirmations for a given transaction hash list
         * @param params._tx_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        TxStatus: (params, extraParams, headers, signal) => {
            return client.post(`/tx_status?${extraParams ? extraParams : ""}`, { _tx_hashes: params._tx_hashes }, { signal, headers });
        },
        /**
         * Get UTxO set (inputs/outputs) of transactions [DEPRECATED - Use /utxo_info instead].
         * @param params._tx_hashes string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        TxUtxos: (params, extraParams, headers, signal) => {
            return client.post(`/tx_utxos?${extraParams ? extraParams : ""}`, { _tx_hashes: params._tx_hashes }, { signal, headers });
        },
        /**
         * Get address info - balance, associated stake address (if any) and UTxO set for given addresses
         * @param params._addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AddressInfo: (params, extraParams, headers, signal) => {
            return client.post(`/address_info?${extraParams ? extraParams : ""}`, { _addresses: params._addresses }, { signal, headers });
        },
        /**
         * Get UTxO set for given addresses
         * @param params._addresses string[]
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AddressUtxos: (params, extraParams, headers, signal) => {
            return client.post(`/address_utxos?${extraParams ? extraParams : ""}`, { _addresses: params._addresses, _extended: params._extended }, { signal, headers });
        },
        /**
         * Get UTxO details for requested payment credentials
         * @param params._payment_credentials string[]
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        CredentialUtxos: (params, extraParams, headers, signal) => {
            return client.post(`/credential_utxos?${extraParams ? extraParams : ""}`, { _payment_credentials: params._payment_credentials, _extended: params._extended }, { signal, headers });
        },
        /**
         * Get the transaction hash list of input address array, optionally filtering after specified block height (inclusive)
         * @param params._addresses string[]
         * @param params._after_block_height any optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AddressTxs: (params, extraParams, headers, signal) => {
            return client.post(`/address_txs?${extraParams ? extraParams : ""}`, { _addresses: params._addresses, _after_block_height: params._after_block_height }, { signal, headers });
        },
        /**
         * Get the transaction hash list of input payment credential array, optionally filtering after specified block height (inclusive)
         * @param params._payment_credentials string[]
         * @param params._after_block_height any optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        CredentialTxs: (params, extraParams, headers, signal) => {
            return client.post(`/credential_txs?${extraParams ? extraParams : ""}`, { _payment_credentials: params._payment_credentials, _after_block_height: params._after_block_height }, { signal, headers });
        },
        /**
         * Get the list of all the assets (policy, name and quantity) for given addresses
         * @param params._addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AddressAssets: (params, extraParams, headers, signal) => {
            return client.post(`/address_assets?${extraParams ? extraParams : ""}`, { _addresses: params._addresses }, { signal, headers });
        },
        /**
              * Get a list of all stake addresses that have atleast 1 transaction
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        AccountList: (extraParams, headers, signal) => {
            return client.get(`/account_list?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the account information for given stake addresses
         * @param params._stake_addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountInfo: (params, extraParams, headers, signal) => {
            return client.post(`/account_info?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses }, { signal, headers });
        },
        /**
         * Get the cached account information for given stake addresses (effective for performance query against registered accounts)
         * @param params._stake_addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountInfoCached: (params, extraParams, headers, signal) => {
            return client.post(`/account_info_cached?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses }, { signal, headers });
        },
        /**
         * Get a list of all UTxOs for given stake addresses (account)s
         * @param params._stake_addresses string[]
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountUtxos: (params, extraParams, headers, signal) => {
            return client.post(`/account_utxos?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses, _extended: params._extended }, { signal, headers });
        },
        /**
         * Get a list of all Txs for a given stake address (account)
         * @param params._stake_address string
         * @param params._after_block_height any optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountTxs: (params, extraParams, headers, signal) => {
            return client.get(`/account_txs?${params._stake_address ? "&_stake_address=" + params._stake_address : ""}${params._after_block_height ? "&_after_block_height=" + params._after_block_height : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the full rewards history (including MIR) for given stake addresses
         * @param params._stake_addresses string[]
         * @param params._epoch_no any optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountRewards: (params, extraParams, headers, signal) => {
            return client.post(`/account_rewards?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses, _epoch_no: params._epoch_no }, { signal, headers });
        },
        /**
         * Get the account updates (registration, deregistration, delegation and withdrawals) for given stake addresses
         * @param params._stake_addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountUpdates: (params, extraParams, headers, signal) => {
            return client.post(`/account_updates?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses }, { signal, headers });
        },
        /**
         * Get all addresses associated with given staking accounts
         * @param params._stake_addresses string[]
         * @param params._first_only boolean optional
         * @param params._empty boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountAddresses: (params, extraParams, headers, signal) => {
            return client.post(`/account_addresses?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses, _first_only: params._first_only, _empty: params._empty }, { signal, headers });
        },
        /**
         * Get the native asset balance for a given stake address
         * @param params._stake_addresses string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountAssets: (params, extraParams, headers, signal) => {
            return client.post(`/account_assets?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses }, { signal, headers });
        },
        /**
         * Get the staking history of given stake addresses (accounts)
         * @param params._stake_addresses string[]
         * @param params._epoch_no any optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AccountHistory: (params, extraParams, headers, signal) => {
            return client.post(`/account_history?${extraParams ? extraParams : ""}`, { _stake_addresses: params._stake_addresses, _epoch_no: params._epoch_no }, { signal, headers });
        },
        /**
              * Get the list of all native assets (paginated)
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        AssetList: (extraParams, headers, signal) => {
            return client.get(`/asset_list?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the list of asset under the given policy (including balances)
         * @param params._asset_policy string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PolicyAssetList: (params, extraParams, headers, signal) => {
            return client.get(`/policy_asset_list?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * Get a list of assets registered via token registry on github
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        AssetTokenRegistry: (extraParams, headers, signal) => {
            return client.get(`/asset_token_registry?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the information of a list of assets including first minting & token registry metadata
         * @param params._asset_list string[][]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetInfoBulk: (params, extraParams, headers, signal) => {
            return client.post(`/asset_info?${extraParams ? extraParams : ""}`, { _asset_list: params._asset_list }, { signal, headers });
        },
        /**
         * Get the UTXO information of a list of assets including
         * @param params._asset_list string[][]
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetUtxos: (params, extraParams, headers, signal) => {
            return client.post(`/asset_utxos?${extraParams ? extraParams : ""}`, { _asset_list: params._asset_list, _extended: params._extended }, { signal, headers });
        },
        /**
         * Get the mint/burn history of an asset
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetHistory: (params, extraParams, headers, signal) => {
            return client.get(`/asset_history?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the list of all addresses holding a given asset <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetAddresses: (params, extraParams, headers, signal) => {
            return client.get(`/asset_addresses?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the address where specified NFT currently reside on.
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetNftAddress: (params, extraParams, headers, signal) => {
            return client.get(`/asset_nft_address?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the list of addresses with quantity for each asset on the given policy <br><br> `Note - Due to cardano's UTxO design and usage from projects, asset to addresses map can be infinite. Thus, for a small subset of active projects with millions of transactions, these might end up with timeouts (HTTP code 504) on free layer. Such large-scale projects are free to subscribe to query layers to have a dedicated cache table for themselves served via Koios.`
         * @param params._asset_policy string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PolicyAssetAddresses: (params, extraParams, headers, signal) => {
            return client.get(`/policy_asset_addresses?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the information for all assets under the same policy
         * @param params._asset_policy string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PolicyAssetInfo: (params, extraParams, headers, signal) => {
            return client.get(`/policy_asset_info?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the summary of an asset (total transactions exclude minting/total wallets include only wallets with asset balance)
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetSummary: (params, extraParams, headers, signal) => {
            return client.get(`/asset_summary?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the list of current or all asset transaction hashes (newest first)
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param params._after_block_height any optional
         * @param params._history boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetTxs: (params, extraParams, headers, signal) => {
            return client.get(`/asset_txs?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${params._after_block_height ? "&_after_block_height=" + params._after_block_height : ""}${params._history ? "&_history=" + params._history : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the list of all addresses holding a given asset [DEPRECATED - replaced by asset_addresses]
         * @param params._asset_policy string
         * @param params._asset_name string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetAddressList: (params, extraParams, headers, signal) => {
            return client.get(`/asset_address_list?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${params._asset_name ? "&_asset_name=" + params._asset_name : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Get the information for all assets under the same policy (DEPRECATED - replaced by policy_asset_info)
         * @param params._asset_policy string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        AssetPolicyInfo: (params, extraParams, headers, signal) => {
            return client.get(`/asset_policy_info?${params._asset_policy ? "&_asset_policy=" + params._asset_policy : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * List of brief info for all pools
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        PoolList: (extraParams, headers, signal) => {
            return client.get(`/pool_list?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Current pool statuses and details for a specified list of pool ids
         * @param params._pool_bech32_ids string[]
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolInfo: (params, extraParams, headers, signal) => {
            return client.post(`/pool_info?${extraParams ? extraParams : ""}`, { _pool_bech32_ids: params._pool_bech32_ids }, { signal, headers });
        },
        /**
         * Returns Mark, Set and Go stake snapshots for the selected pool, useful for leaderlog calculation
         * @param params._pool_bech32 string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolStakeSnapshot: (params, extraParams, headers, signal) => {
            return client.get(`/pool_stake_snapshot?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return information about live delegators for a given pool.
         * @param params._pool_bech32 string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolDelegators: (params, extraParams, headers, signal) => {
            return client.get(`/pool_delegators?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return information about active delegators (incl. history) for a given pool and epoch number (all epochs if not specified).
         * @param params._pool_bech32 string
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolDelegatorsHistory: (params, extraParams, headers, signal) => {
            return client.get(`/pool_delegators_history?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return information about blocks minted by a given pool for all epochs (or _epoch_no if provided)
         * @param params._pool_bech32 string
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolBlocks: (params, extraParams, headers, signal) => {
            return client.get(`/pool_blocks?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return information about pool stake, block and reward history in a given epoch _epoch_no (or all epochs that pool existed for, in descending order if no _epoch_no was provided)
         * @param params._pool_bech32 string
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolHistory: (params, extraParams, headers, signal) => {
            return client.get(`/pool_history?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return all pool updates for all pools or only updates for specific pool if specified
         * @param params._pool_bech32 string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolUpdates: (params, extraParams, headers, signal) => {
            return client.get(`/pool_updates?${params._pool_bech32 ? "&_pool_bech32=" + params._pool_bech32 : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return all pool registrations initiated in the requested epoch
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolRegistrations: (params, extraParams, headers, signal) => {
            return client.get(`/pool_registrations?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Return all pool retirements initiated in the requested epoch
         * @param params._epoch_no string optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolRetirements: (params, extraParams, headers, signal) => {
            return client.get(`/pool_retirements?${params._epoch_no ? "&_epoch_no=" + params._epoch_no : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * A list of registered relays for all pools
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        PoolRelays: (extraParams, headers, signal) => {
            return client.get(`/pool_relays?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * Metadata (on & off-chain) for all pools
         * @param params._pool_bech32_ids string[] optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        PoolMetadata: (params, extraParams, headers, signal) => {
            return client.post(`/pool_metadata?${extraParams ? extraParams : ""}`, { _pool_bech32_ids: params._pool_bech32_ids }, { signal, headers });
        },
        /**
         * List of script information for given script hashes
         * @param params._script_hashes string[] optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        ScriptInfo: (params, extraParams, headers, signal) => {
            return client.post(`/script_info?${extraParams ? extraParams : ""}`, { _script_hashes: params._script_hashes }, { signal, headers });
        },
        /**
              * List of all existing native script hashes along with their creation transaction hashes
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        NativeScriptList: (extraParams, headers, signal) => {
            return client.get(`/native_script_list?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
              * List of all existing Plutus script hashes along with their creation transaction hashes
              
            * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
            * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
            * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
            */
        PlutusScriptList: (extraParams, headers, signal) => {
            return client.get(`/plutus_script_list?${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * List of all redeemers for a given script hash
         * @param params._script_hash string
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        ScriptRedeemers: (params, extraParams, headers, signal) => {
            return client.get(`/script_redeemers?${params._script_hash ? "&_script_hash=" + params._script_hash : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * List of all UTXOs for a given script hash
         * @param params._script_hash string
         * @param params._extended boolean optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        ScriptUtxos: (params, extraParams, headers, signal) => {
            return client.get(`/script_utxos?${params._script_hash ? "&_script_hash=" + params._script_hash : ""}${params._extended ? "&_extended=" + params._extended : ""}${extraParams ? extraParams : ""}`, { signal, headers });
        },
        /**
         * List of datum information for given datum hashes
         * @param params._datum_hashes string[] optional
         * @param extraParams string (optional) Filtering/Sorting string, see https://api.koios.rest/#overview--api-usage
         * @param headers? object (optional) Adding extra headers, see https://axios-http.com/docs/req_config
         * @param signal? GenericAbortSignal (optional) The abort event of the AbortSignal, see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event
         */
        DatumInfo: (params, extraParams, headers, signal) => {
            return client.post(`/datum_info?${extraParams ? extraParams : ""}`, { _datum_hashes: params._datum_hashes }, { signal, headers });
        },
    };
};
