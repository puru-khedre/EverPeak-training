# Blockchain Basics: Part 1

## How blockchain works?

### What is blockchain

blockchain is a distributed, decentralised, and shared immutable ledger.

- **Distributed**: The every block of the blockchain is not stored or maintained by a single entity, It is distributed over multiple computers in the world. Every computers together manage blockchain.
- **Decentralised**: The blockchain is not controlled by any centralised authority. it is work on **distributed network** so no single one can have authority.
- **Shared Immutable ledger**: Blockchain is like a database, and if any data is stored in any block. Then it is immposible to do **mutatations** in a block. It is shared among all the computers in a distributed network system.

### Working

Blockchain is distributed database that maintains the ordered list of a blocks that are linked using a **cryptography algorithms** (just like singly linked list where every node is linked with pointer of previous node).

1. Intialise a blockchain, first block of blockchain is known as **genesis block**,
2. When a new transactions happen, It is not directly added to block. Transactions are stored in different location called **Mempool or Memory pool** until a miner accepts it.
3. Any miner come and take all the transaction form the **mempool**, do some work according to **consensus protocols** (e.g. **Proof of work**). Then it create a new block.
4. When a new block is added to blockchain. every block contains transactions, previousHash and any **consensus related things**.
5. This way the basic blockchains are work.

## What are transactions?

Every blockchain have their own **token system** like currency in a real-world. For the every activity on the blockchains require some incentives in form of the **token**. The transfer of the tokens is referred as a transaction.

## Cryptography

As we know that the blockchain is shared ledger so the privacy of data is main concern. Here comes the importance of **cryptographic algorithms** to encrypt transactions.
