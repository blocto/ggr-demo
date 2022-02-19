const claimGogoroNFT = `\
transaction {
    prepare(acct: AuthAccount, admin: AuthAccount) {
    }

    execute {
        log("A transaction happened")
    }
}
`

export default claimGogoroNFT
