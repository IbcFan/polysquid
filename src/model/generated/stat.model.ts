import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Stat {
    constructor(props?: Partial<Stat>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("int4", {nullable: false})
    val!: number

    @Column_("int4", {nullable: false})
    chainId!: number
}
