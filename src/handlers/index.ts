import {
  Block,
  Context,
  DISPATCHER_ADDRESS_OPTIMISM,
  DISPATCHER_ADDRESS_OPTIMISM_SIMCLIENT,
  Log
} from "../op/processor";
import * as dispatcherAbi from "../abi/dispatcher";
import { ethers } from "ethers";
import {
  Acknowledgement,
  Channel,
  ChannelStates,
  CloseIbcChannel,
  ConnectIbcChannel,
  OpenIbcChannel,
  Packet, PacketStates, RecvPacket,
  SendPacket,
  Stat, Timeout, WriteAckPacket, WriteTimeoutPacket
} from "../model";
import { Entity } from "@subsquid/typeorm-store/src/store";
import { DISPATCHER_ADDRESS_BASE, DISPATCHER_ADDRESS_BASE_SIMCLIENT } from "../base/processor";

function getDispatcherType(dispatcherAddress: string) {
  switch (dispatcherAddress.toLowerCase()) {
    case DISPATCHER_ADDRESS_OPTIMISM:
      return 'proof'
    case DISPATCHER_ADDRESS_OPTIMISM_SIMCLIENT:
      return 'sim'
    case DISPATCHER_ADDRESS_BASE:
      return 'proof'
    case DISPATCHER_ADDRESS_BASE_SIMCLIENT:
      return 'sim'
    default:
      return 'sim'
  }
}

export function processOpenIbcChannel(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.OpenIbcChannel.decode(log)
  let counterpartyPortId = event.counterpartyPortId
  let counterpartyChannelId = ethers.decodeBytes32String(event.counterpartyChannelId)
  let connectionHops = event.connectionHops
  let portAddress = event.portAddress
  let version = event.version
  let state: ChannelStates = counterpartyChannelId === '' ? ChannelStates.INIT : ChannelStates.TRY

  let entities: Entity[] = [new OpenIbcChannel({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    portAddress: portAddress,
    version: version,
    ordering: event.ordering,
    feeEnabled: event.feeEnabled,
    connectionHops: connectionHops,
    counterpartyPortId: counterpartyPortId,
    counterpartyChannelId: counterpartyChannelId,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: log.transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  let portId = `polyibc.${clientName}.${portAddress.slice(2)}`;

  entities.push(new Channel({
    id: log.id,
    channelId: '',
    portId: portId,
    connectionHops: connectionHops,
    counterpartyPortId: counterpartyPortId,
    counterpartyChannelId: counterpartyChannelId,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: log.transactionHash,
    state: state,
  }))
  return entities
}

export async function processConnectIbcChannel(ctx: Context, log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.ConnectIbcChannel.decode(log)
  let channelId = ethers.decodeBytes32String(event.channelId)
  let portAddress = event.portAddress

  let entities: Entity[] = [new ConnectIbcChannel({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    portAddress: portAddress,
    channelId: channelId,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: log.transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  return entities
}

export function processCloseIbcChannel(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.CloseIbcChannel.decode(log)
  let channelId = ethers.decodeBytes32String(event.channelId)
  let portAddress = event.portAddress

  return [new CloseIbcChannel({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    portAddress: portAddress,
    channelId: channelId,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: log.transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })]
}

export function processSendPacket(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.SendPacket.decode(log);
  let sourceChannelId = ethers.decodeBytes32String(event.sourceChannelId);
  let sequence = event.sequence;
  let transactionHash = log.transactionHash;

  let entities: Entity[] = [new SendPacket({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    sourcePortAddress: event.sourcePortAddress,
    sourceChannelId: sourceChannelId,
    packet: event.packet,
    sequence: sequence,
    timeoutTimestamp: event.timeoutTimestamp,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  return entities;
}

export function processWriteAckPacket(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.WriteAckPacket.decode(log);
  let writerChannelId = ethers.decodeBytes32String(event.writerChannelId);
  let sequence = event.sequence;
  let transactionHash = log.transactionHash;

  let entities: Entity[] = [new WriteAckPacket({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    writerPortAddress: event.writerPortAddress,
    writerChannelId: writerChannelId,
    sequence: sequence,
    ackPacketSuccess: event.ackPacket.success,
    ackPacketData: event.ackPacket.data,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  return entities;
}

export function processRecvPacket(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.RecvPacket.decode(log);
  let destChannelId = ethers.decodeBytes32String(event.destChannelId);
  let sequence = event.sequence;
  let recvTx = log.transactionHash;

  let entities: Entity[] = [new RecvPacket({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    destPortAddress: event.destPortAddress,
    destChannelId: destChannelId,
    sequence: sequence,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: recvTx,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  return entities;
}

export function processAcknowledgement(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.Acknowledgement.decode(log);
  let sourceChannelId = ethers.decodeBytes32String(event.sourceChannelId);
  let sequence = event.sequence;
  let transactionHash = log.transactionHash;

  let entities: Entity[] = [new Acknowledgement({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    sourcePortAddress: event.sourcePortAddress,
    sourceChannelId: sourceChannelId,
    sequence: sequence,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];

  return entities;
}

export function processTimeout(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.Timeout.decode(log);
  let sourceChannelId = ethers.decodeBytes32String(event.sourceChannelId);
  let sequence = event.sequence;
  let transactionHash = log.transactionHash;

  return [new Timeout({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    sourcePortAddress: event.sourcePortAddress,
    sourceChannelId: sourceChannelId,
    sequence: sequence,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];
}

export function processWriteTimeoutPacket(log: Log, header: Block, dispatcherAddress: string, clientName?: string) {
  let event = dispatcherAbi.events.WriteTimeoutPacket.decode(log);
  let writerChannelId = ethers.decodeBytes32String(event.writerChannelId);
  let sequence = event.sequence;
  let transactionHash = log.transactionHash;

  return [new WriteTimeoutPacket({
    id: log.id,
    dispatcherAddress: dispatcherAddress,
    dispatcherType: getDispatcherType(dispatcherAddress),
    dispatcherClientName: clientName,
    writerPortAddress: event.writerPortAddress,
    writerChannelId: writerChannelId,
    sequence: sequence,
    timeoutHeightRevisionNumber: event.timeoutHeight.revision_number,
    timeoutHeightRevisionHeight: event.timeoutHeight.revision_height,
    timeoutTimestamp: event.timeoutTimestamp,
    blockNumber: header.height,
    blockTimestamp: BigInt(header.timestamp),
    transactionHash: transactionHash,
    chainId: log.transaction?.chainId,
    gas: log.transaction?.gas,
    maxFeePerGas: log.transaction?.maxFeePerGas,
    maxPriorityFeePerGas: log.transaction?.maxPriorityFeePerGas,
    from: log.transaction?.from.toString(),
  })];
}

export async function processLog(ctx: Context, log: Log, header: Block, dispatcherAddress: string, dispatcherClientName?: string) {
  switch (log.topics[0]) {
    case dispatcherAbi.events.OpenIbcChannel.topic:
      return processOpenIbcChannel(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.ConnectIbcChannel.topic:
      return await processConnectIbcChannel(ctx, log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.CloseIbcChannel.topic:
      return processCloseIbcChannel(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.SendPacket.topic:
      return processSendPacket(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.WriteAckPacket.topic:
      return processWriteAckPacket(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.RecvPacket.topic:
      return processRecvPacket(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.Acknowledgement.topic:
      return processAcknowledgement(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.Timeout.topic:
      return processTimeout(log, header, dispatcherAddress, dispatcherClientName);
    case dispatcherAbi.events.WriteTimeoutPacket.topic:
      return processWriteTimeoutPacket(log, header, dispatcherAddress, dispatcherClientName);
    default:
      return [];
  }
}

export enum StatName {
  SendPackets = 'SendPackets',
  RecvPackets = 'RecvPackets',
  AckPackets = 'AckPackets',
  WriteAckPacket = 'WriteAckPacket',
  WriteTimeoutPacket = 'WriteTimeoutPacket',
  Timeout = 'Timeout',
  OpenIBCChannel = 'OpenIBCChannel',
  CloseIBCChannel = 'CloseIBCChannel',
  ConnectIbcChannel = 'ConnectIbcChannel',
}

async function updateStats(ctx: Context, statName: StatName, val: number = 1, chainId?: number) {
  if (val == 0) {
    return
  }

  const id = `${statName}:${chainId}`

  const stat = await ctx.store.findOneBy(Stat, {id})
  if (!stat) {
    await ctx.store.insert(new Stat({
      id: id,
      name: statName,
      val: 1,
      chainId: chainId,
    }))
  } else {
    stat.val += val
    await ctx.store.upsert(stat)
  }
}

export async function postBlockChannelHook(ctx: Context, connectIbcChannels: ConnectIbcChannel[]) {
  for (let connectIbcChannel of connectIbcChannels) {
    let portId = `polyibc.${connectIbcChannel.dispatcherClientName}.${connectIbcChannel.portAddress.slice(2)}`;

    let srcChannel = await ctx.store.findOne(Channel, {
      where: {portId: portId, channelId: ""}
    })

    if (srcChannel) {
      srcChannel.channelId = connectIbcChannel.channelId
      srcChannel.state = ChannelStates.OPEN
      srcChannel.blockNumber = connectIbcChannel.blockNumber
      srcChannel.blockTimestamp = connectIbcChannel.blockTimestamp
      srcChannel.transactionHash = connectIbcChannel.transactionHash
      await ctx.store.upsert(srcChannel)

      if (srcChannel.counterpartyPortId) {
        let dstChannel = await ctx.store.findOne(Channel, {
          where: {
            counterpartyPortId: srcChannel.portId,
            counterpartyChannelId: srcChannel.channelId,
            portId: srcChannel.counterpartyPortId,
          }
        })
        if (dstChannel) {
          srcChannel.counterpartyChannelId = dstChannel.channelId
          await ctx.store.upsert(srcChannel)
        }
      }

    }

    let dstChannel = await ctx.store.findOne(Channel, {
      where: {portId: portId, channelId: connectIbcChannel.channelId}
    })

    if (dstChannel) {
      dstChannel.state = ChannelStates.OPEN
      dstChannel.blockNumber = connectIbcChannel.blockNumber
      dstChannel.blockTimestamp = connectIbcChannel.blockTimestamp
      dstChannel.transactionHash = connectIbcChannel.transactionHash
      await ctx.store.upsert(dstChannel)

      if (dstChannel.counterpartyPortId) {
        let srcChannel = await ctx.store.findOne(Channel, {
          where: {
            portId: dstChannel.counterpartyPortId,
            channelId: dstChannel.counterpartyChannelId,
            counterpartyChannelId: ""
          }
        })
        if (srcChannel) {
          srcChannel.counterpartyChannelId = dstChannel.channelId
          await ctx.store.upsert(srcChannel)
        }
      }
    }
  }
}

async function postBlockPacketHook(ctx: Context, sendPackets: SendPacket[], writeAckPackets: WriteAckPacket[], recvPackets: RecvPacket[], acknowledgements: Acknowledgement[]) {
  let entities: Entity[] = []
  for (let sendPacket of sendPackets) {
    let srcPortId = `polyibc.${sendPacket.dispatcherClientName}.${sendPacket.sourcePortAddress.slice(2)}`;
    let key = `${srcPortId}-${sendPacket.sourceChannelId}-${sendPacket.sequence}`;
    let packet = await ctx.store.findOne(Packet, {where: {id: key}})
    let state = !packet ? PacketStates.SENT : packet.state

    entities.push(new Packet({
      id: key,
      state: state,
      sendPacket: sendPacket,
    }));
  }
  await ctx.store.upsert(entities)

  entities = []
  for (let recvPacket of recvPackets) {
    let destPortId = `polyibc.${recvPacket.dispatcherClientName}.${recvPacket.destPortAddress.slice(2)}`;
    const destChannel = await ctx.store.findOneOrFail(Channel, {
      where: {
        portId: destPortId,
        channelId: recvPacket.destChannelId
      }
    })
    let key = `${destChannel.counterpartyPortId}-${destChannel.counterpartyChannelId}-${recvPacket.sequence}`
    let packet = await ctx.store.findOne(Packet, {where: {id: key}})
    let state = !packet || [PacketStates.SENT].includes(packet.state) ? PacketStates.RECV : packet.state
    entities.push(new Packet({
      id: key,
      state: state,
      recvPacket: recvPacket,
    }));
  }
  await ctx.store.upsert(entities)

  entities = []
  for (let writeAckPacket of writeAckPackets) {
    let destPortId = `polyibc.${writeAckPacket.dispatcherClientName}.${writeAckPacket.writerPortAddress.slice(2)}`;
    const destChannel = await ctx.store.findOneOrFail(Channel, {
      where: {
        portId: destPortId,
        channelId: writeAckPacket.writerChannelId
      }
    })
    let key = `${destChannel.counterpartyPortId}-${destChannel.counterpartyChannelId}-${writeAckPacket.sequence}`;

    let packet = await ctx.store.findOne(Packet, {where: {id: key}})
    let state = !packet || [PacketStates.SENT, PacketStates.RECV].includes(packet.state) ? PacketStates.WRITE_ACK : packet.state
    entities.push(new Packet({
      id: key,
      state: state,
      writeAckPacket: writeAckPacket,
    }));
  }

  await ctx.store.upsert(entities)

  entities = []
  for (let ack of acknowledgements) {
    let srcPortId = `polyibc.${ack.dispatcherClientName}.${ack.sourcePortAddress.slice(2)}`;
    let key = `${srcPortId}-${ack.sourceChannelId}-${ack.sequence}`;
    let packet = await ctx.store.findOne(Packet, {where: {id: key}})
    let state = !packet || [PacketStates.SENT, PacketStates.RECV, PacketStates.WRITE_ACK].includes(packet.state) ? PacketStates.ACK : packet.state
    entities.push(new Packet({
      id: key,
      state: state,
      ackPacket: ack,
    }));
  }
  await ctx.store.upsert(entities)
}

export async function mainHandler(ctx: Context, dispatcherClients: { [key: string]: string }) {
  const openIbcChannels: OpenIbcChannel[] = [];
  const connectIbcChannels: ConnectIbcChannel[] = [];
  const closeIbcChannels: CloseIbcChannel[] = [];
  const channels: Channel[] = [];
  const sendPackets: SendPacket[] = [];
  const writeAckPackets: WriteAckPacket[] = [];
  const recvPackets: RecvPacket[] = [];
  const acknowledgements: Acknowledgement[] = [];
  const timeouts: Timeout[] = [];
  const writeTimeoutPackets: WriteTimeoutPacket[] = [];

  for (let {logs, header, transactions} of ctx.blocks) {
    for (let log of logs) {
      for (const [dispatcherAddress, dispatcherClientName] of Object.entries(dispatcherClients)) {
        if (log.address.toLowerCase() !== dispatcherAddress) continue;
        let logEntities = await processLog(ctx, log, header, dispatcherAddress, dispatcherClientName);
        logEntities.forEach((entity) => {
          if (entity instanceof OpenIbcChannel) {
            openIbcChannels.push(entity);
          } else if (entity instanceof ConnectIbcChannel) {
            connectIbcChannels.push(entity);
          } else if (entity instanceof CloseIbcChannel) {
            closeIbcChannels.push(entity);
          } else if (entity instanceof Channel) {
            channels.push(entity);
          } else if (entity instanceof SendPacket) {
            sendPackets.push(entity);
          } else if (entity instanceof WriteAckPacket) {
            writeAckPackets.push(entity);
          } else if (entity instanceof RecvPacket) {
            recvPackets.push(entity);
          } else if (entity instanceof Acknowledgement) {
            acknowledgements.push(entity);
          } else if (entity instanceof Timeout) {
            timeouts.push(entity);
          } else if (entity instanceof WriteTimeoutPacket) {
            writeTimeoutPackets.push(entity);
          }
        })
      }
    }
  }

  await ctx.store.insert(openIbcChannels);
  await ctx.store.insert(connectIbcChannels);
  await ctx.store.insert(closeIbcChannels);
  await ctx.store.insert(channels);
  await ctx.store.insert(sendPackets);
  await ctx.store.insert(writeAckPackets);
  await ctx.store.insert(recvPackets);
  await ctx.store.insert(acknowledgements);
  await ctx.store.insert(timeouts);
  await ctx.store.insert(writeTimeoutPackets);

  await postBlockChannelHook(ctx, connectIbcChannels)
  await postBlockPacketHook(ctx, sendPackets, writeAckPackets, recvPackets, acknowledgements)

  await updateStats(ctx, StatName.OpenIBCChannel, openIbcChannels.length, openIbcChannels[0]?.chainId)
  await updateStats(ctx, StatName.ConnectIbcChannel, connectIbcChannels.length, connectIbcChannels[0]?.chainId)
  await updateStats(ctx, StatName.CloseIBCChannel, closeIbcChannels.length, closeIbcChannels[0]?.chainId)
  await updateStats(ctx, StatName.SendPackets, sendPackets.length, sendPackets[0]?.chainId)
  await updateStats(ctx, StatName.WriteAckPacket, writeAckPackets.length, writeAckPackets[0]?.chainId)
  await updateStats(ctx, StatName.RecvPackets, recvPackets.length, recvPackets[0]?.chainId)
  await updateStats(ctx, StatName.AckPackets, acknowledgements.length, acknowledgements[0]?.chainId)
  await updateStats(ctx, StatName.Timeout, timeouts.length, timeouts[0]?.chainId)
  await updateStats(ctx, StatName.WriteTimeoutPacket, writeTimeoutPackets.length, writeTimeoutPackets[0]?.chainId)
}