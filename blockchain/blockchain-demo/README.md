# Blockchain demo from scratch

Installing all the required dependencies

```bash
npm install
```

## Handling blockchain

### Intializing blockchain

Open [**blockchain.json**](./blockchain.json), which contained our blockchain. And run this below command to re-initialise blockchain.

```bash
node init-blockchain.js
```

### Mining blocks

Run below command to mine new block and it's added in main blockchain (in [**blockchain.json**](./blockchain.json)).

```bash
node mine-block.js
```

### Validate blockchain

```bash
node validate-chain.js
```

It logs out that chain is valid or/not.

## Handling wallets

### Create a new wallet

All the wallets with their **name** & **public key** are stored in [**wallets.json**](./wallets.json)

```bash
node generate-wallet.js <USER_NAME>
```

Don't forget to pass username. You can see new wallet is added in [**wallets.json**](./wallets.json)

### Get public address of wallet

```bash
node get-address.js <WALLET_USER_NAME>
```

This command requires `<WALLET_USER_NAME>`(username of the wallet owner) and It logs the public address of the wallet.

### Get balance amount of wallet

```bash
node get-address-balance.js <WALLET_USER_NAME>
```

This command requires `<WALLET_USER_NAME>`(username of the wallet owner) and It logs the balance amount in wallet.

## handling Transactions

### Create a transaction

```bash
node add-transactions.js <SENDER_PRIVATE_KEY> <WALLET_USER_NAME> <AMOUNT>
```

This command creates new `transaction` that sends some amount from one to another wallet.

In this project you can findout two `private keys` for **Me** and **You** in `my-private-keys.txt`

## Important files

- [**wallets.json**](./wallets.json): This file stored the public keys of all the wallets.
- [**transaction.json**](./transaction.json): This file is act as **Mempool**, Intially (before mining) new transaction are added in this file.
- [**blockchain.json**](./blockchain.json): This file contained main blockchain, new mined blocks are added to this.
- [**my-private-keys.txt**](./my-private-keys.txt): This file cantains two private keys, Which can used as personal private keys and create new transactions and sign them.
