const EC = require("elliptic")

const ec = new EC.ec("p192")

const sha256 = require("crypto-js/sha256.js")

const { writeFileSync, readFileSync } = require("fs")

function writeBlockchain(blockchain) {
    const blockchainString = JSON.stringify(blockchain, null, 2);
    writeFileSync('./blockchain.json', blockchainString);
}

function getBlockchain() {
    const blockchainFile = readFileSync('./blockchain.json');
    const blockchain = JSON.parse(blockchainFile);
    return blockchain;
}

function isValidChain() {
    const blockchain = getBlockchain();

    // loop through blocks
    for (let i = 1; i < blockchain.length; i++) {
        const previousBlock = blockchain[i - 1];
        const { hash, nonce, previousHash, transactions } = blockchain[i];

        // validate previous hash
        if (previousHash !== previousBlock.hash) {
            return false;
        }

        // validate block hash
        const testBlockHash = sha256(nonce + previousBlock.hash + JSON.stringify(transactions)).toString();
        if (hash != testBlockHash) {
            return false;
        }

        // loop through transactions
        for (let j = 0; j < transactions.length; j++) {
            const { hash, fromAddress, toAddress, amount, signature } = transactions[j];

            // don't validate reward transactions
            if (fromAddress !== null) {

                // validate transaction hash
                const testTransactionHash = sha256(fromAddress + toAddress + amount).toString();
                if (hash != testTransactionHash) {
                    return false;
                }

                // validate signature

                const publicKeyPair = ec.keyFromPublic(fromAddress, "hex")

                const verifiedSignature = publicKeyPair.verify(hash, signature)

                if (!verifiedSignature) {
                    return false
                }
            }
        }
    }

    return true;
}

function writeTransactions(transactions) {
    const transactionsString = JSON.stringify(transactions, null, 2);
    writeFileSync('./transactions.json', transactionsString);
}

function getTransactions() {
    const transactionsFile = readFileSync('./transactions.json');
    const transactions = JSON.parse(transactionsFile);
    return transactions;
}

function getAddressBalance(address) {
    const blockchain = getBlockchain();
    let balance = 0;

    // loop through blocks
    for (let i = 1; i < blockchain.length; i++) {
        const { transactions } = blockchain[i];

        // loop through transactions
        for (let j = 0; j < transactions.length; j++) {
            const { fromAddress, toAddress, amount } = transactions[j];

            if (fromAddress === address) {
                balance -= amount;
            }

            if (toAddress === address) {
                balance += amount;
            }
        }
    }

    return balance;
}

function getWalletAddressFromName(name) {
    const walletsFile = readFileSync("./wallets.json")

    const wallets = JSON.parse(walletsFile)

    return wallets[name]

}

module.exports = {
    writeBlockchain, getBlockchain, isValidChain, writeTransactions, getAddressBalance, getTransactions, getWalletAddressFromName
}