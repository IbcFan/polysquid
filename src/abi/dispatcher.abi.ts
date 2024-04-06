export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "initPortPrefix"
            },
            {
                "type": "address",
                "name": "_consensusStateManager"
            }
        ]
    },
    {
        "type": "error",
        "name": "ackPacketCommitmentAlreadyExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "channelNotOwnedBySender",
        "inputs": []
    },
    {
        "type": "error",
        "name": "invalidCounterParty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "invalidCounterPartyPortId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "invalidHexStringLength",
        "inputs": []
    },
    {
        "type": "error",
        "name": "invalidPacketSequence",
        "inputs": []
    },
    {
        "type": "error",
        "name": "packetCommitmentNotFound",
        "inputs": []
    },
    {
        "type": "error",
        "name": "packetNotTimedOut",
        "inputs": []
    },
    {
        "type": "error",
        "name": "packetReceiptAlreadyExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "receiverNotIndtendedPacketDestination",
        "inputs": []
    },
    {
        "type": "error",
        "name": "receiverNotOriginPacketSender",
        "inputs": []
    },
    {
        "type": "error",
        "name": "unexpectedPacketSequence",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Acknowledgement",
        "inputs": [
            {
                "type": "address",
                "name": "sourcePortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "sourceChannelId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CloseIbcChannel",
        "inputs": [
            {
                "type": "address",
                "name": "portAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "channelId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConnectIbcChannel",
        "inputs": [
            {
                "type": "address",
                "name": "portAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "channelId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OpenIbcChannel",
        "inputs": [
            {
                "type": "address",
                "name": "portAddress",
                "indexed": true
            },
            {
                "type": "string",
                "name": "version",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "ordering",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "feeEnabled",
                "indexed": false
            },
            {
                "type": "string[]",
                "name": "connectionHops"
            },
            {
                "type": "string",
                "name": "counterpartyPortId",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "counterpartyChannelId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecvPacket",
        "inputs": [
            {
                "type": "address",
                "name": "destPortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "destChannelId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SendPacket",
        "inputs": [
            {
                "type": "address",
                "name": "sourcePortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "sourceChannelId",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "packet",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "timeoutTimestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Timeout",
        "inputs": [
            {
                "type": "address",
                "name": "sourcePortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "sourceChannelId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WriteAckPacket",
        "inputs": [
            {
                "type": "address",
                "name": "writerPortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "writerChannelId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": false
            },
            {
                "type": "tuple",
                "name": "ackPacket",
                "indexed": false,
                "components": [
                    {
                        "type": "bool",
                        "name": "success"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WriteTimeoutPacket",
        "inputs": [
            {
                "type": "address",
                "name": "writerPortAddress",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "writerChannelId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "sequence",
                "indexed": false
            },
            {
                "type": "tuple",
                "name": "timeoutHeight",
                "indexed": false,
                "components": [
                    {
                        "type": "uint64",
                        "name": "revision_number"
                    },
                    {
                        "type": "uint64",
                        "name": "revision_height"
                    }
                ]
            },
            {
                "type": "uint64",
                "name": "timeoutTimestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "ackProofKey",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ackProofValue",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "ack"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "acknowledgement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            },
            {
                "type": "bytes",
                "name": "ack"
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "proof",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "path",
                                "components": [
                                    {
                                        "type": "bytes",
                                        "name": "prefix"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "suffix"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "key"
                            },
                            {
                                "type": "bytes",
                                "name": "value"
                            },
                            {
                                "type": "bytes",
                                "name": "prefix"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "height"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "channelProofKey",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "portId"
            },
            {
                "type": "bytes32",
                "name": "channelId"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "channelProofValue",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "state"
            },
            {
                "type": "uint8",
                "name": "ordering"
            },
            {
                "type": "string",
                "name": "version"
            },
            {
                "type": "string[]",
                "name": "connectionHops"
            },
            {
                "type": "tuple",
                "name": "counterparty",
                "components": [
                    {
                        "type": "string",
                        "name": "portId"
                    },
                    {
                        "type": "bytes32",
                        "name": "channelId"
                    },
                    {
                        "type": "string",
                        "name": "version"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "closeIbcChannel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "channelId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "connectIbcChannel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "portAddress"
            },
            {
                "type": "tuple",
                "name": "local",
                "components": [
                    {
                        "type": "string",
                        "name": "portId"
                    },
                    {
                        "type": "bytes32",
                        "name": "channelId"
                    },
                    {
                        "type": "string",
                        "name": "version"
                    }
                ]
            },
            {
                "type": "string[]",
                "name": "connectionHops"
            },
            {
                "type": "uint8",
                "name": "ordering"
            },
            {
                "type": "bool",
                "name": "feeEnabled"
            },
            {
                "type": "bool",
                "name": "isChanConfirm"
            },
            {
                "type": "tuple",
                "name": "counterparty",
                "components": [
                    {
                        "type": "string",
                        "name": "portId"
                    },
                    {
                        "type": "bytes32",
                        "name": "channelId"
                    },
                    {
                        "type": "string",
                        "name": "version"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "proof",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "path",
                                "components": [
                                    {
                                        "type": "bytes",
                                        "name": "prefix"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "suffix"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "key"
                            },
                            {
                                "type": "bytes",
                                "name": "value"
                            },
                            {
                                "type": "bytes",
                                "name": "prefix"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "height"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getChannel",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "portAddress"
            },
            {
                "type": "bytes32",
                "name": "channelId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "string",
                        "name": "version"
                    },
                    {
                        "type": "uint8",
                        "name": "ordering"
                    },
                    {
                        "type": "bool",
                        "name": "feeEnabled"
                    },
                    {
                        "type": "string[]",
                        "name": "connectionHops"
                    },
                    {
                        "type": "string",
                        "name": "counterpartyPortId"
                    },
                    {
                        "type": "bytes32",
                        "name": "counterpartyChannelId"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getOptimisticConsensusState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "height"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "appHash"
            },
            {
                "type": "uint256",
                "name": "fraudProofEndTime"
            },
            {
                "type": "bool",
                "name": "ended"
            }
        ]
    },
    {
        "type": "function",
        "name": "openIbcChannel",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "portAddress"
            },
            {
                "type": "tuple",
                "name": "local",
                "components": [
                    {
                        "type": "string",
                        "name": "portId"
                    },
                    {
                        "type": "bytes32",
                        "name": "channelId"
                    },
                    {
                        "type": "string",
                        "name": "version"
                    }
                ]
            },
            {
                "type": "uint8",
                "name": "ordering"
            },
            {
                "type": "bool",
                "name": "feeEnabled"
            },
            {
                "type": "string[]",
                "name": "connectionHops"
            },
            {
                "type": "tuple",
                "name": "counterparty",
                "components": [
                    {
                        "type": "string",
                        "name": "portId"
                    },
                    {
                        "type": "bytes32",
                        "name": "channelId"
                    },
                    {
                        "type": "string",
                        "name": "version"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "proof",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "path",
                                "components": [
                                    {
                                        "type": "bytes",
                                        "name": "prefix"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "suffix"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "key"
                            },
                            {
                                "type": "bytes",
                                "name": "value"
                            },
                            {
                                "type": "bytes",
                                "name": "prefix"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "height"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "packetCommitmentProofKey",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "packetCommitmentProofValue",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "parseAckData",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "ack"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "bool",
                        "name": "success"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "portChannelMap",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": "version"
            },
            {
                "type": "uint8",
                "name": "ordering"
            },
            {
                "type": "bool",
                "name": "feeEnabled"
            },
            {
                "type": "string",
                "name": "counterpartyPortId"
            },
            {
                "type": "bytes32",
                "name": "counterpartyChannelId"
            }
        ]
    },
    {
        "type": "function",
        "name": "portIdAddressMatch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            },
            {
                "type": "string",
                "name": "portId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "portPrefix",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "recvPacket",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "proof",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "path",
                                "components": [
                                    {
                                        "type": "bytes",
                                        "name": "prefix"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "suffix"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "key"
                            },
                            {
                                "type": "bytes",
                                "name": "value"
                            },
                            {
                                "type": "bytes",
                                "name": "prefix"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "height"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sendPacket",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "channelId"
            },
            {
                "type": "bytes",
                "name": "packet"
            },
            {
                "type": "uint64",
                "name": "timeoutTimestamp"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sendPacketCommitment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
            },
            {
                "type": "uint64",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setPortPrefix",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_portPrefix"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "timeout",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "proof",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "path",
                                "components": [
                                    {
                                        "type": "bytes",
                                        "name": "prefix"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "suffix"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "key"
                            },
                            {
                                "type": "bytes",
                                "name": "value"
                            },
                            {
                                "type": "bytes",
                                "name": "prefix"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "height"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "toStr",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "b"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "toStr",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_number"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateClientWithOptimisticConsensusState",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "l1header",
                "components": [
                    {
                        "type": "bytes[]",
                        "name": "header"
                    },
                    {
                        "type": "bytes32",
                        "name": "stateRoot"
                    },
                    {
                        "type": "uint64",
                        "name": "number"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "proof",
                "components": [
                    {
                        "type": "bytes[]",
                        "name": "accountProof"
                    },
                    {
                        "type": "bytes[]",
                        "name": "outputRootProof"
                    },
                    {
                        "type": "bytes32",
                        "name": "l2OutputProposalKey"
                    },
                    {
                        "type": "bytes32",
                        "name": "l2BlockHash"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "height"
            },
            {
                "type": "uint256",
                "name": "appHash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "fraudProofEndTime"
            },
            {
                "type": "bool",
                "name": "ended"
            }
        ]
    },
    {
        "type": "function",
        "name": "writeTimeoutPacket",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "tuple",
                "name": "packet",
                "components": [
                    {
                        "type": "tuple",
                        "name": "src",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "dest",
                        "components": [
                            {
                                "type": "string",
                                "name": "portId"
                            },
                            {
                                "type": "bytes32",
                                "name": "channelId"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "sequence"
                    },
                    {
                        "type": "bytes",
                        "name": "data"
                    },
                    {
                        "type": "tuple",
                        "name": "timeoutHeight",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "revision_number"
                            },
                            {
                                "type": "uint64",
                                "name": "revision_height"
                            }
                        ]
                    },
                    {
                        "type": "uint64",
                        "name": "timeoutTimestamp"
                    }
                ]
            }
        ],
        "outputs": []
    }
]
