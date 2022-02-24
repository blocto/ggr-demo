import React, { useState } from "react"
import * as fcl from "@onflow/fcl"

import Card from '../components/Card'
import Header from '../components/Header'
import Code from '../components/Code'

import returnGogoroNFT from '../transactions/returnGogoroNFT'

const SendTransaction = () => {
  const [status, setStatus] = useState("Not started")
  const [transaction, setTransaction] = useState(null)

  const sendTransaction = async (event) => {
    event.preventDefault()

    setStatus("Resolving...")

    try {
      const blockResponse = await fcl.send([
        fcl.getLatestBlock(),
      ])

      const block = await fcl.decode(blockResponse)

      const { transactionId } = await fcl.send([
        fcl.transaction(returnGogoroNFT),
        fcl.proposer(fcl.currentUser().authorization),
        fcl.authorizations([
          fcl.currentUser().authorization
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
          }
        })
    } catch (error) {
      console.error(error);
      setStatus("Transaction failed")
    }
  }

  return (
    <Card>
      <Header>歸還 NFT (測試用)</Header>

      <Code>{returnGogoroNFT}</Code>

      <button onClick={sendTransaction}>
        歸還 NFT
      </button>

      <Code>Status: {status}</Code>

      {transaction && <Code>{JSON.stringify(transaction, null, 2)}</Code>}
    </Card>
  )
}

export default SendTransaction
