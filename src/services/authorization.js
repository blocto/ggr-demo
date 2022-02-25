import * as fcl from "@onflow/fcl"

const authorization = (redeemCode) => async (account = {}) => {
    const addr = '8c9bbcdcd7514081';
    const keyId = 1;

    const { account: user } = await fcl.send([fcl.getAccount(addr)]);

    const key = user.keys[keyId];
    let sequenceNum;
    if (account.role.proposer) sequenceNum = key.sequenceNumber;

    const signingFunction = async data => {
        const signature = await fetch(
            `https://flow-wallet.blocto.app/api/gogoro/sign`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data,
                    redeemCode,
                })
            }
        )
            .then(response => response.json())
            .then(response => response.signature)

        return ({
            addr,
            keyId: key.index,
            signature,
        });
    };

    return {
        ...account,
        addr,
        keyId: key.index,
        sequenceNum,
        signature: account.signature || null,
        signingFunction,
        resolve: null,
        roles: account.roles,
    };
};

export default authorization
