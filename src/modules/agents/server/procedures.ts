import { db } from "@/db"
import { z } from "zod"
import { agents } from "@/db/schema"
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { resolve } from "path";
import { agentsInsertSchema } from "@/modules/agents/schema"
import { eq } from "drizzle-orm";
export const agentRouter = createTRPCRouter({

    getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
        const [existingAgents] = await db
            .select()
            .from(agents)
            .where(eq(agents.id, input.id))
        //  await new Promise((resolve)=>setTimeout(resolve,5000))
        //  throw new TRPCError({code:"BAD_REQUEST"});

        return existingAgents;


    }),



    //todo change getMAny tuse "protectredProcedure"
    getMany: protectedProcedure.query(async () => {
        const data = await db
            .select()
            .from(agents)
        //  await new Promise((resolve)=>setTimeout(resolve,5000))
        //  throw new TRPCError({code:"BAD_REQUEST"});

        return data;


    }),
    create: protectedProcedure
        .input(agentsInsertSchema)
        .mutation(async ({ input, ctx }) => {
            const { name, instructions } = input;
            const [createAgent] = await db
                .insert(agents)
                .values({
                    ...input,
                    userId: ctx.auth.user.id,

                })
                .returning()

            return createAgent;
        })
}
)