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
    body: "84a40081825820c8da3848010af1728d19555c9864dd4ace97ad56972b6bb352bbdc0f8ffb0d5200018282581d617a6a5ccbaf3e6308d8c09ccfa45b34cc7cccaa242dc2dc05ba2a72201a00d2eee782583901d07f6a9dc8cba4b368d04225c4cd36ce21b1800bc54e7924e65689d9ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d7811679661b000000037d3c3680021a0002b099031a047d9ea2a0f5f6",
    headers: { "Content-Type": "application/cbor" },
  })
  expect(submittx.error).exist
})
