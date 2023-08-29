const EC = require("elliptic")
const ec = new EC.ec("p192")

const sha256 = require("crypto-js/sha256.js")

const { writeTransactions, getTransactions, getAddressBalance, getWalletAddressFromName } = require('./blockchain-helpers.js');

const fromPrivateKey = process.argv[2];
const toAddressName = process.argv[3];
const amount = parseInt(process.argv[4]);

const toAddress = getWalletAddressFromName(toAddressName)


const fromKeyPair = ec.keyFromPrivate(fromPrivateKey, "hex")

const fromAddress = fromKeyPair.getPublic("hex")

const hash = sha256(fromAddress + toAddress + amount).toString();

const signature = fromKeyPair.sign(hash).toDER("hex")

const newTransaction = {
    hash,
    fromAddress,
    toAddress,
    amount,
    signature
}

const transactions = getTransactions();
const addressBalance = getAddressBalance(fromAddress);

if (addressBalance >= amount) {
    transactions.push(newTransaction);
    writeTransactions(transactions);
} else {
    console.log('You do not have enough funds to make that transaction')
}