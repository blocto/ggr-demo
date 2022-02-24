const returnGogoroNFT = `\
import NonFungibleToken from 0x1d7e57aa55817448
import GogoroCollectible from 0x8c9bbcdcd7514081

transaction {
    let collectionRef: &NonFungibleToken.Collection

    prepare(user: AuthAccount) {
        self.collectionRef = user.borrow<&NonFungibleToken.Collection>(from: GogoroCollectible.CollectionStoragePath)
            ?? panic("Could not borrow collection reference")
    }

    execute {
        let ids = self.collectionRef.getIDs()
        let adminAccount = getAccount(0x4d394f11c0ebb8bc)
        let receiverRef = adminAccount.getCapability(GogoroCollectible.CollectionPublicPath)
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not borrow receiver reference to the admin's collection")

        var index = 0
        while index < ids.length {
            receiverRef.deposit(token: <-self.collectionRef.withdraw(withdrawID: ids[index]))
            index = index + 1
        }
    }
}
`

export default returnGogoroNFT
