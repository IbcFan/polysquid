import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {ChannelStates} from "./_channelStates"

@Entity_()
export class Channel {
    constructor(props?: Partial<Channel>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    channelId!: string

    @Column_("text", {nullable: false})
    portId!: string

    @Column_("text", {nullable: false})
    counterpartyPortId!: string

    @Column_("text", {nullable: false})
    counterpartyChannelId!: string

    @Column_("text", {array: true, nullable: false})
    connectionHops!: (string)[]

    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTimestamp!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("varchar", {length: 6, nullable: false})
    state!: ChannelStates
}
