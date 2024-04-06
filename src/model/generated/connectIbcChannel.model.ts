import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ConnectIbcChannel {
    constructor(props?: Partial<ConnectIbcChannel>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    dispatcherAddress!: string

    @Column_("text", {nullable: false})
    dispatcherType!: string

    @Column_("text", {nullable: false})
    dispatcherClientName!: string

    @Column_("text", {nullable: false})
    portAddress!: string

    @Column_("text", {nullable: false})
    channelId!: string

    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    blockTimestamp!: bigint

    @Column_("text", {nullable: false})
    transactionHash!: string

    @Column_("int4", {nullable: false})
    chainId!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    gas!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    maxFeePerGas!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    maxPriorityFeePerGas!: bigint | undefined | null

    @Column_("text", {nullable: false})
    from!: string
}
