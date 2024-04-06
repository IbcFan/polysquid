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

export const DISPATCHER_ADDRESS_BASE = "0xfC1d3E02e00e0077628e8Cc9edb6812F95Db05dC".toLowerCase();
export const DISPATCHER_ADDRESS_BASE_SIMCLIENT = "0x0dE926fE2001B2c96e9cA6b79089CEB276325E9F".toLowerCase();

export const DISPATCHER_CLIENTS = {
  [DISPATCHER_ADDRESS_BASE]: "base-proofs-1",
  [DISPATCHER_ADDRESS_BASE_SIMCLIENT]: "base-sim",
}

export const processor = new EvmBatchProcessor()
  // Lookup archive by the network name in Subsquid registry
  // See https://docs.subsquid.io/evm-indexing/supported-networks/
  .setGateway(lookupArchive('base-sepolia'))
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  .setRpcEndpoint({
    // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: assertNotNull(process.env.RPC_ENDPOINT_BASE_SEPOLIA ?? "https://rpc.ankr.com/base_sepolia"),
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    rateLimit: 10
  })
  .setRpcDataIngestionSettings({
    headPollInterval: 2000,
  })
  .setFinalityConfirmation(75 * 2)
  .setFields({
    block: {
      timestamp: true,
      gasLimit: true,
      baseFeePerGas: true,
      l1BlockNumber: true,
    },
    transaction: {
      gas: true,
      gasPrice: true,
      maxFeePerGas: true,
      maxPriorityFeePerGas: true,
      gasUsed: true,
      cumulativeGasUsed: true,
      chainId: true,
      from: true,
      to: true,
      hash: true,
      contractAddress: true,
      status: true,
    },
    log: {
      transactionHash: true,
      address: true,
      data: true,
      topics: true,

    }
  })
  .setBlockRange({
    from: 6768208,
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
