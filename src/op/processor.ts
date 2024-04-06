import { assertNotNull } from '@subsquid/util-internal'
import { lookupArchive } from '@subsquid/archive-registry'
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { Store } from '@subsquid/typeorm-store'
import { topics } from "../handlers/topics";


export const DISPATCHER_ADDRESS_OPTIMISM = "0x58f1863F75c9Db1c7266dC3d7b43832b58f35e83".toLowerCase();
export const DISPATCHER_ADDRESS_OPTIMISM_SIMCLIENT = "0x6C9427E8d770Ad9e5a493D201280Cc178125CEc0".toLowerCase();
export const DISPATCHER_CLIENTS = {
  [DISPATCHER_ADDRESS_OPTIMISM]: "optimism-proofs-1"!,
  [DISPATCHER_ADDRESS_OPTIMISM_SIMCLIENT]: "optimism-sim",
}

export const processor = new EvmBatchProcessor()
  // Lookup archive by the network name in Subsquid registry
  // See https://docs.subsquid.io/evm-indexing/supported-networks/
  .setGateway(lookupArchive('optimism-sepolia'))
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint({
    // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: assertNotNull(process.env.RPC_ENDPOINT_OP_SEPOLIA ?? "https://rpc.ankr.com/optimism_sepolia"),
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    rateLimit: 100,
  })
  .setRpcDataIngestionSettings({
    headPollInterval: 2000,
  })
  .setFinalityConfirmation(80 * 2)
  .setFields({
    block: {
      timestamp: true,
    },
    transaction: {
      gas: true,
      gasPrice: true,
      maxFeePerGas: true,
      maxPriorityFeePerGas: true,
      gasUsed: true,
      cumulativeGasUsed: true,
      chainId: true,
    },
    log: {
      transactionHash: true,
      address: true,
      data: true,
      topics: true
    }
  })
  .setBlockRange({
    from: 8752864,
  })

for (const [address, client] of Object.entries(DISPATCHER_CLIENTS)) {
  processor.addLog({
    address: [address],
    topic0: topics,
    transaction: true
  })
}

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
