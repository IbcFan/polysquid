import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class OpenIbcChannel {
    constructor(props?: Partial<OpenIbcChannel>) {
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
    version!: string

    @Column_("int4", {nullable: false})
    ordering!: number

    @Column_("bool", {nullable: false})
    feeEnabled!: boolean

    @Column_("text", {array: true, nullable: false})
    connectionHops!: (string)[]

    @Column_("text", {nullable: false})
    counterpartyPortId!: string

    @Column_("text", {nullable: false})
    counterpartyChannelId!: string

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
