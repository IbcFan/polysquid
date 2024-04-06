# Polymer events squid

This [squid](https://docs.subsquid.io/) captures Polymer events on Optimism and Base, stores them in the same database and serves the data over a common GraphQL API.

The Optimism processor is located in `src/op` and similarly the Base processor can be found in `src/base`. The scripts file `commands.json` was updated with the commands `process:op` and `process:base` to run the processors. 

Dependencies: Node.js, Docker, Git.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Clone the repo
git clone https://github.com/IbcFan/polysquid
cd polysquid

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Apply the migration
sqd migration:apply

# 5. Build the squid
sqd build

# 6. Run all services at once
sqd run .
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

You can also run individual services separately:
```bash
sqd process:op # OP processor
sqd process:base # Base processor
sqd serve       # GraphQL server
```

## Query Examples

### 10 most recent packets
```
query Query {
  packets(limit: 10, orderBy: sendPacket_blockTimestamp_DESC, where: {sendPacket_isNull: false, }) {
    state
    sendPacket {
      transactionHash
      blockTimestamp
      sourcePortAddress
    }
    recvPacket {
      transactionHash
      blockTimestamp
      destPortAddress
    }
    ackPacket{
      transactionHash
      blockTimestamp
      sourcePortAddress
    }
  }
}
```
