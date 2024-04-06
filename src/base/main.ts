import { TypeormDatabase } from '@subsquid/typeorm-store'
import { DISPATCHER_CLIENTS, processor } from './processor'
import { mainHandler } from "../handlers";

processor.run(new TypeormDatabase({
  supportHotBlocks: true,
  stateSchema: "base_processor",
  isolationLevel: "REPEATABLE READ"
}), async (ctx) => {
  await mainHandler(ctx, DISPATCHER_CLIENTS);
});