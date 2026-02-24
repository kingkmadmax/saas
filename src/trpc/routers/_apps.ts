import { z } from 'zod';
import {agentRouter} from "@/modules/agents/server/procedures"
import { baseProcedure, createTRPCRouter } from '../init';
import { MeetingRouter } from '@/modules/meetings/server/procsdures';
import { meetings } from '@/db/schema';
export const appRouter = createTRPCRouter({
  agent:agentRouter,
  meetings: MeetingRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;