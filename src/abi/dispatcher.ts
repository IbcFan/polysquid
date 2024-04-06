import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './dispatcher.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Acknowledgement: new LogEvent<([sourcePortAddress: string, sourceChannelId: string, sequence: bigint] & {sourcePortAddress: string, sourceChannelId: string, sequence: bigint})>(
        abi, '0xe46f6591236abe528fe47a3b281fb002524dadd3e62b1f317ed285d07273c3b1'
    ),
    CloseIbcChannel: new LogEvent<([portAddress: string, channelId: string] & {portAddress: string, channelId: string})>(
        abi, '0xe893e4ba0e364cdc96364b1e1e0d53b0d91e5fd6aa0ee9d81a17ecd61178bf17'
    ),
    ConnectIbcChannel: new LogEvent<([portAddress: string, channelId: string] & {portAddress: string, channelId: string})>(
        abi, '0xec10e9c95bcd0a3561931a33a25adba5f809e8d25279a05da83a095e19f02add'
    ),
    OpenIbcChannel: new LogEvent<([portAddress: string, version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string] & {portAddress: string, version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string})>(
        abi, '0x302d58680222aca6b36ce7b9a42191dce3989bd867cc20f4ec54f5e563010934'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    RecvPacket: new LogEvent<([destPortAddress: string, destChannelId: string, sequence: bigint] & {destPortAddress: string, destChannelId: string, sequence: bigint})>(
        abi, '0xde5b57e6566d68a30b0979431df3d5df6db3b9aa89f8820f595b9315bf86d067'
    ),
    SendPacket: new LogEvent<([sourcePortAddress: string, sourceChannelId: string, packet: string, sequence: bigint, timeoutTimestamp: bigint] & {sourcePortAddress: string, sourceChannelId: string, packet: string, sequence: bigint, timeoutTimestamp: bigint})>(
        abi, '0xb5bff96e18da044e4e34510d16df9053b9f1920f6a960732e5aaf22fe9b80136'
    ),
    Timeout: new LogEvent<([sourcePortAddress: string, sourceChannelId: string, sequence: bigint] & {sourcePortAddress: string, sourceChannelId: string, sequence: bigint})>(
        abi, '0x19ac40c4084d9bfb5b43f819a94bf01c70789b0d579871f59e4f86def04d9344'
    ),
    WriteAckPacket: new LogEvent<([writerPortAddress: string, writerChannelId: string, sequence: bigint, ackPacket: ([success: boolean, data: string] & {success: boolean, data: string})] & {writerPortAddress: string, writerChannelId: string, sequence: bigint, ackPacket: ([success: boolean, data: string] & {success: boolean, data: string})})>(
        abi, '0xa32e6f42b1d63fb83ad73b009a6dbb9413d1da02e95b1bb08f081815eea8db20'
    ),
    WriteTimeoutPacket: new LogEvent<([writerPortAddress: string, writerChannelId: string, sequence: bigint, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {writerPortAddress: string, writerChannelId: string, sequence: bigint, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})>(
        abi, '0xedbcd9eeb09d85c3ea1b5bf002c04478059cb261cab82c903885cefccae374bc'
    ),
}

export const functions = {
    ackProofKey: new Func<[packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})], {packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})}, string>(
        abi, '0xce71fc28'
    ),
    ackProofValue: new Func<[ack: string], {ack: string}, string>(
        abi, '0x74e97045'
    ),
    acknowledgement: new Func<[receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), ack: string, proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})], {receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), ack: string, proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})}, []>(
        abi, '0x2bb016cf'
    ),
    channelProofKey: new Func<[portId: string, channelId: string], {portId: string, channelId: string}, string>(
        abi, '0x4f9b0fb3'
    ),
    channelProofValue: new Func<[state: number, ordering: number, version: string, connectionHops: Array<string>, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string})], {state: number, ordering: number, version: string, connectionHops: Array<string>, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string})}, string>(
        abi, '0x9cec0aac'
    ),
    closeIbcChannel: new Func<[channelId: string], {channelId: string}, []>(
        abi, '0x8b24b4cb'
    ),
    connectIbcChannel: new Func<[portAddress: string, local: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), connectionHops: Array<string>, ordering: number, feeEnabled: boolean, isChanConfirm: boolean, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})], {portAddress: string, local: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), connectionHops: Array<string>, ordering: number, feeEnabled: boolean, isChanConfirm: boolean, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})}, []>(
        abi, '0xdb96a0c6'
    ),
    getChannel: new Func<[portAddress: string, channelId: string], {portAddress: string, channelId: string}, ([version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string] & {version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string})>(
        abi, '0x42852d24'
    ),
    getOptimisticConsensusState: new Func<[height: bigint], {height: bigint}, ([appHash: bigint, fraudProofEndTime: bigint, ended: boolean] & {appHash: bigint, fraudProofEndTime: bigint, ended: boolean})>(
        abi, '0xeb86ffdb'
    ),
    openIbcChannel: new Func<[portAddress: string, local: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})], {portAddress: string, local: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})}, []>(
        abi, '0xa97b319d'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    packetCommitmentProofKey: new Func<[packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})], {packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})}, string>(
        abi, '0xfc4326c8'
    ),
    packetCommitmentProofValue: new Func<[packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})], {packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})}, string>(
        abi, '0x3b001b7c'
    ),
    parseAckData: new Func<[ack: string], {ack: string}, ([success: boolean, data: string] & {success: boolean, data: string})>(
        abi, '0x360b8cd7'
    ),
    portChannelMap: new Func<[_: string, _: string], {}, ([version: string, ordering: number, feeEnabled: boolean, counterpartyPortId: string, counterpartyChannelId: string] & {version: string, ordering: number, feeEnabled: boolean, counterpartyPortId: string, counterpartyChannelId: string})>(
        abi, '0xb2b1bf03'
    ),
    portIdAddressMatch: new Func<[addr: string, portId: string], {addr: string, portId: string}, boolean>(
        abi, '0xe36e013f'
    ),
    portPrefix: new Func<[], {}, string>(
        abi, '0x7774a6d3'
    ),
    recvPacket: new Func<[receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})], {receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})}, []>(
        abi, '0x959a09b0'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    sendPacket: new Func<[channelId: string, packet: string, timeoutTimestamp: bigint], {channelId: string, packet: string, timeoutTimestamp: bigint}, []>(
        abi, '0xc3e1155c'
    ),
    sendPacketCommitment: new Func<[_: string, _: string, _: bigint], {}, boolean>(
        abi, '0x91b00a63'
    ),
    setPortPrefix: new Func<[_portPrefix: string], {_portPrefix: string}, []>(
        abi, '0x9f59ae71'
    ),
    timeout: new Func<[receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})], {receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint}), proof: ([proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint] & {proof: Array<([path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string] & {path: Array<([prefix: string, suffix: string] & {prefix: string, suffix: string})>, key: string, value: string, prefix: string})>, height: bigint})}, []>(
        abi, '0x034d0314'
    ),
    'toStr(bytes32)': new Func<[b: string], {b: string}, string>(
        abi, '0x1dcd0305'
    ),
    'toStr(uint256)': new Func<[_number: bigint], {_number: bigint}, string>(
        abi, '0x91d6df7d'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    updateClientWithOptimisticConsensusState: new Func<[l1header: ([header: Array<string>, stateRoot: string, number: bigint] & {header: Array<string>, stateRoot: string, number: bigint}), proof: ([accountProof: Array<string>, outputRootProof: Array<string>, l2OutputProposalKey: string, l2BlockHash: string] & {accountProof: Array<string>, outputRootProof: Array<string>, l2OutputProposalKey: string, l2BlockHash: string}), height: bigint, appHash: bigint], {l1header: ([header: Array<string>, stateRoot: string, number: bigint] & {header: Array<string>, stateRoot: string, number: bigint}), proof: ([accountProof: Array<string>, outputRootProof: Array<string>, l2OutputProposalKey: string, l2BlockHash: string] & {accountProof: Array<string>, outputRootProof: Array<string>, l2OutputProposalKey: string, l2BlockHash: string}), height: bigint, appHash: bigint}, ([fraudProofEndTime: bigint, ended: boolean] & {fraudProofEndTime: bigint, ended: boolean})>(
        abi, '0x8919b88c'
    ),
    writeTimeoutPacket: new Func<[receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})], {receiver: string, packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})}, []>(
        abi, '0xac9c50b6'
    ),
}

export class Contract extends ContractBase {

    ackProofKey(packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})): Promise<string> {
        return this.eth_call(functions.ackProofKey, [packet])
    }

    ackProofValue(ack: string): Promise<string> {
        return this.eth_call(functions.ackProofValue, [ack])
    }

    channelProofKey(portId: string, channelId: string): Promise<string> {
        return this.eth_call(functions.channelProofKey, [portId, channelId])
    }

    channelProofValue(state: number, ordering: number, version: string, connectionHops: Array<string>, counterparty: ([portId: string, channelId: string, version: string] & {portId: string, channelId: string, version: string})): Promise<string> {
        return this.eth_call(functions.channelProofValue, [state, ordering, version, connectionHops, counterparty])
    }

    getChannel(portAddress: string, channelId: string): Promise<([version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string] & {version: string, ordering: number, feeEnabled: boolean, connectionHops: Array<string>, counterpartyPortId: string, counterpartyChannelId: string})> {
        return this.eth_call(functions.getChannel, [portAddress, channelId])
    }

    getOptimisticConsensusState(height: bigint): Promise<([appHash: bigint, fraudProofEndTime: bigint, ended: boolean] & {appHash: bigint, fraudProofEndTime: bigint, ended: boolean})> {
        return this.eth_call(functions.getOptimisticConsensusState, [height])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    packetCommitmentProofKey(packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})): Promise<string> {
        return this.eth_call(functions.packetCommitmentProofKey, [packet])
    }

    packetCommitmentProofValue(packet: ([src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint] & {src: ([portId: string, channelId: string] & {portId: string, channelId: string}), dest: ([portId: string, channelId: string] & {portId: string, channelId: string}), sequence: bigint, data: string, timeoutHeight: ([revision_number: bigint, revision_height: bigint] & {revision_number: bigint, revision_height: bigint}), timeoutTimestamp: bigint})): Promise<string> {
        return this.eth_call(functions.packetCommitmentProofValue, [packet])
    }

    parseAckData(ack: string): Promise<([success: boolean, data: string] & {success: boolean, data: string})> {
        return this.eth_call(functions.parseAckData, [ack])
    }

    portChannelMap(arg0: string, arg1: string): Promise<([version: string, ordering: number, feeEnabled: boolean, counterpartyPortId: string, counterpartyChannelId: string] & {version: string, ordering: number, feeEnabled: boolean, counterpartyPortId: string, counterpartyChannelId: string})> {
        return this.eth_call(functions.portChannelMap, [arg0, arg1])
    }

    portIdAddressMatch(addr: string, portId: string): Promise<boolean> {
        return this.eth_call(functions.portIdAddressMatch, [addr, portId])
    }

    portPrefix(): Promise<string> {
        return this.eth_call(functions.portPrefix, [])
    }

    sendPacketCommitment(arg0: string, arg1: string, arg2: bigint): Promise<boolean> {
        return this.eth_call(functions.sendPacketCommitment, [arg0, arg1, arg2])
    }

    'toStr(bytes32)'(b: string): Promise<string> {
        return this.eth_call(functions['toStr(bytes32)'], [b])
    }

    'toStr(uint256)'(_number: bigint): Promise<string> {
        return this.eth_call(functions['toStr(uint256)'], [_number])
    }
}
