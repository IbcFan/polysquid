module.exports = class Data1712447070093 {
    name = 'Data1712447070093'

    async up(db) {
        await db.query(`CREATE TABLE "acknowledgement" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "source_port_address" text NOT NULL, "source_channel_id" text NOT NULL, "sequence" numeric NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_8f6e435390595b00ff0b476cac1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "close_ibc_channel" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "port_address" text NOT NULL, "channel_id" text NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_bd65f2833c624941754d2bf64b1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "connect_ibc_channel" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "port_address" text NOT NULL, "channel_id" text NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_1e06860e44384b3f791de294395" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "open_ibc_channel" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "port_address" text NOT NULL, "version" text NOT NULL, "ordering" integer NOT NULL, "fee_enabled" boolean NOT NULL, "connection_hops" text array NOT NULL, "counterparty_port_id" text NOT NULL, "counterparty_channel_id" text NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_c1a1cc849ce7f5f098c6ad9ae72" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "recv_packet" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "dest_port_address" text NOT NULL, "dest_channel_id" text NOT NULL, "sequence" numeric NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_79ecca659a764997adc8794f123" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "send_packet" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "source_port_address" text NOT NULL, "source_channel_id" text NOT NULL, "packet" text NOT NULL, "sequence" numeric NOT NULL, "timeout_timestamp" numeric NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_bc0d01e2854533c77c8b5e6260a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "timeout" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "source_port_address" text NOT NULL, "source_channel_id" text NOT NULL, "sequence" numeric NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_a24fca9f4a7e03ce67d74283613" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "write_ack_packet" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "writer_port_address" text NOT NULL, "writer_channel_id" text NOT NULL, "sequence" numeric NOT NULL, "ack_packet_success" boolean NOT NULL, "ack_packet_data" text NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_c5236bd249c16bb655e20660911" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "write_timeout_packet" ("id" character varying NOT NULL, "dispatcher_address" text NOT NULL, "dispatcher_type" text NOT NULL, "dispatcher_client_name" text NOT NULL, "writer_port_address" text NOT NULL, "writer_channel_id" text NOT NULL, "sequence" numeric NOT NULL, "timeout_height_revision_number" numeric NOT NULL, "timeout_height_revision_height" numeric NOT NULL, "timeout_timestamp" numeric NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "chain_id" integer NOT NULL, "gas" numeric NOT NULL, "max_fee_per_gas" numeric, "max_priority_fee_per_gas" numeric, "from" text NOT NULL, CONSTRAINT "PK_d2c6b017f8adebc40c10e3f6db4" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "packet" ("id" character varying NOT NULL, "state" character varying(13) NOT NULL, "send_packet_id" character varying, "recv_packet_id" character varying, "write_ack_packet_id" character varying, "ack_packet_id" character varying, CONSTRAINT "REL_2f849cd746e0708773d46af527" UNIQUE ("send_packet_id"), CONSTRAINT "REL_3aed1702c2c27f733c1c3c0460" UNIQUE ("recv_packet_id"), CONSTRAINT "REL_08ed04d8e5b3a07dbc6468b7bc" UNIQUE ("write_ack_packet_id"), CONSTRAINT "REL_2eb1a0b6e1c9967db3079d80cb" UNIQUE ("ack_packet_id"), CONSTRAINT "PK_0bef789c4d597bd0b7723f6d878" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_2f849cd746e0708773d46af527" ON "packet" ("send_packet_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_3aed1702c2c27f733c1c3c0460" ON "packet" ("recv_packet_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_08ed04d8e5b3a07dbc6468b7bc" ON "packet" ("write_ack_packet_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_2eb1a0b6e1c9967db3079d80cb" ON "packet" ("ack_packet_id") `)
        await db.query(`CREATE TABLE "channel" ("id" character varying NOT NULL, "channel_id" text NOT NULL, "port_id" text NOT NULL, "counterparty_port_id" text NOT NULL, "counterparty_channel_id" text NOT NULL, "connection_hops" text array NOT NULL, "block_number" integer NOT NULL, "block_timestamp" numeric NOT NULL, "transaction_hash" text NOT NULL, "state" character varying(6) NOT NULL, CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "stat" ("id" character varying NOT NULL, "name" text NOT NULL, "val" integer NOT NULL, "chain_id" integer NOT NULL, CONSTRAINT "PK_132de903d366f4c06cd586c43c0" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "packet" ADD CONSTRAINT "FK_2f849cd746e0708773d46af527c" FOREIGN KEY ("send_packet_id") REFERENCES "send_packet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "packet" ADD CONSTRAINT "FK_3aed1702c2c27f733c1c3c04601" FOREIGN KEY ("recv_packet_id") REFERENCES "recv_packet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "packet" ADD CONSTRAINT "FK_08ed04d8e5b3a07dbc6468b7bcb" FOREIGN KEY ("write_ack_packet_id") REFERENCES "write_ack_packet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "packet" ADD CONSTRAINT "FK_2eb1a0b6e1c9967db3079d80cb1" FOREIGN KEY ("ack_packet_id") REFERENCES "acknowledgement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "acknowledgement"`)
        await db.query(`DROP TABLE "close_ibc_channel"`)
        await db.query(`DROP TABLE "connect_ibc_channel"`)
        await db.query(`DROP TABLE "open_ibc_channel"`)
        await db.query(`DROP TABLE "recv_packet"`)
        await db.query(`DROP TABLE "send_packet"`)
        await db.query(`DROP TABLE "timeout"`)
        await db.query(`DROP TABLE "write_ack_packet"`)
        await db.query(`DROP TABLE "write_timeout_packet"`)
        await db.query(`DROP TABLE "packet"`)
        await db.query(`DROP INDEX "public"."IDX_2f849cd746e0708773d46af527"`)
        await db.query(`DROP INDEX "public"."IDX_3aed1702c2c27f733c1c3c0460"`)
        await db.query(`DROP INDEX "public"."IDX_08ed04d8e5b3a07dbc6468b7bc"`)
        await db.query(`DROP INDEX "public"."IDX_2eb1a0b6e1c9967db3079d80cb"`)
        await db.query(`DROP TABLE "channel"`)
        await db.query(`DROP TABLE "stat"`)
        await db.query(`ALTER TABLE "packet" DROP CONSTRAINT "FK_2f849cd746e0708773d46af527c"`)
        await db.query(`ALTER TABLE "packet" DROP CONSTRAINT "FK_3aed1702c2c27f733c1c3c04601"`)
        await db.query(`ALTER TABLE "packet" DROP CONSTRAINT "FK_08ed04d8e5b3a07dbc6468b7bcb"`)
        await db.query(`ALTER TABLE "packet" DROP CONSTRAINT "FK_2eb1a0b6e1c9967db3079d80cb1"`)
    }
}
