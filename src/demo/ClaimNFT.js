import React, { useState } from "react"
import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

import Card from '../components/Card'
import Header from '../components/Header'
import Code from '../components/Code'

import authorization from '../services/authorization'
import claimGogoroNFT from '../transactions/claimGogoroNFT'

const SendTransaction = () => {
  const [status, setStatus] = useState("Not started")
  const [transaction, setTransaction] = useState(null)

  const sendTransaction = async (event) => {
    event.preventDefault()

    setStatus("Resolving...")

    const redeemCode = '18c133a5-268e-4e04-8b7a-07aa4f9da9a5'

    try {
      // redeemInfo
      // {
      //   isValid: is the redeem code valid?
      //   isClaimed: is the item already claimed?
      //   nftID: the corresponding NFT ID for this redeem code
      // }
      const redeemInfo = await fetch(
        `http://localhost:8702/api/gogoro/check-code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            redeemCode,
          })
        }
      )
        .then(response => response.json())

      const { nftID } = redeemInfo

      const blockResponse = await fcl.send([
        fcl.getLatestBlock(),
      ])

      const block = await fcl.decode(blockResponse)

      const { transactionId } = await fcl.send([
        fcl.transaction(claimGogoroNFT),
        fcl.args([
          fcl.arg(nftID, t.UInt64),
        ]),
        fcl.proposer(fcl.currentUser().authorization),
        fcl.authorizations([
          fcl.currentUser().authorization,
          authorization(redeemCode)
        ]),
        fcl.payer(fcl.currentUser().authorization),
        fcl.ref(block.id),
        fcl.limit(5000),
      ])

      setStatus("Transaction sent, waiting for confirmation")

      const unsub = fcl
        .tx({ transactionId })
        .subscribe(transaction => {
          setTransaction(transaction)

          if (fcl.tx.isSealed(transaction)) {
            setStatus("Transaction is Sealed")
            unsub()

            if (transaction.statusCode === 1) {
              // Deal with transaction error
              console.error(`Transaction failed: ${transactionId}`)
            }
          }
        })
    } catch (error) {
      if (error.message.includes('Unexpected token')) {
        // Deal with redeem code error
        console.error(`Redeem code failed: ${redeemCode}`)
      } else {
        // Other errors
        console.error(error);
      }

      setStatus("Transaction failed")
    }
  }

  return (
    <Card>
      <Header>領取 NFT</Header>

      <Code>{claimGogoroNFT}</Code>

      <button onClick={sendTransaction}>
        領取 NFT
      </button>

      <Code>Status: {status}</Code>

      {transaction && <Code>{JSON.stringify(transaction, null, 2)}</Code>}
    </Card>
  )
}

export default SendTransaction
