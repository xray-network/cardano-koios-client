import { expect, test, vi } from "vitest"
import KoiosTinyClient from ".."

const baseUrl = "https://graph.xray.app/output/koios/mainnet/api/v1"
const headers = {}
const client = KoiosTinyClient(baseUrl, headers)

test("/tip", async () => {
  const tip = await client.GET("/tip", {})
  expect(tip.data[0]).toHaveProperty("block_no")
})

test("/credential_txs", async () => {
  const credential_txs = await client.POST("/credential_txs", {
    body: { _payment_credentials: ["025b0a8f85cb8a46e1dda3fae5d22f07e2d56abb4019a2129c5d6c52"] },
  })
  expect(credential_txs.data[0]).toHaveProperty("tx_hash")
})

test("/credential_utxos", async () => {
  const credential_utxos = await client.POST("/credential_utxos", {
    body: { _payment_credentials: ["025b0a8f85cb8a46e1dda3fae5d22f07e2d56abb4019a2129c5d6c52"], _extended: true },
  })
  expect(credential_utxos.data[0]).toHaveProperty("value")
})

test("/submittx", async () => {
  const submittx = await client.POST("/submittx", {
    body: "wrong_cbor_tx______________________________________________________",
    headers: { "Content-Type": "text/plain" },
  })
  expect(submittx.error).exist
})
