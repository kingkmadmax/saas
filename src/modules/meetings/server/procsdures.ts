import { db } from "@/db"
import { z } from "zod"


import { meetingsInsertSchema } from "@/modules/meetings/schema"
import { createTRPCRouter, baseProcedure, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { resolve } from "path";
import { MeetingsUpdateSchema } from "@/modules/meetings/schema"


// import { MeetingsInsertSchema } from "@/modules/Meetings/schema"
import { eq, getTableColumns, sql, and, ilike, desc, count } from "drizzle-orm";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE, MIN_PAGE_SIZE } from "@/constants";
import { drizzle } from "drizzle-orm/neon-http";
import { agents, meetings } from "@/db/schema";
import { MeetingStatus } from "../types";
export const MeetingRouter = createTRPCRouter({

  update: protectedProcedure
    .input(MeetingsUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const [updatedMeeting] = await db
        .update(meetings)
        .set(input)
        .where(
          and(
            eq(meetings.id, input.id),
            eq(meetings.userId, ctx.auth.user.id),
          )
        )
        .returning();

      if (!updatedMeeting) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Meeting not found",
        });
      }

      return updatedMeeting;
    }),

  create: protectedProcedure
    .input(meetingsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const [createdMeeting] = await db
        .insert(meetings)
        .values({
          ...input,
          userId: ctx.auth.user.id,
        })
        .returning();

      return createdMeeting;
    }),


  getOne: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ input, ctx }) => {
    const [existingMeeting] = await db
      .select({

        ...getTableColumns(meetings),
        agent: agents,
        duration: sql<number>`EXTRACT(EPOCH  FROM(ended_at  -started_at  ))`.as("duration")


      })

      .from(meetings)
      .innerJoin(agents, eq(meetings.agentId, agents.id))
      .where(and(
        eq(meetings
          .id, input.id),
        eq(meetings.userId, ctx.auth.user.id)
      ));
    if (!existingMeeting) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "meeting not found"
      });
    }
    //  await new Promise((resolve)=>setTimeout(resolve,5000))
    //  throw new TRPCError({code:"BAD_REQUEST"});

    return existingMeeting;


  }),



  //todo change getMAny tuse "protectredProcedure"
  getMany: protectedProcedure
    .input(z.object({
      page: z.number().default(DEFAULT_PAGE),
      pageSize: z
        .number()
        .max(MAX_PAGE_SIZE)
        .min(MIN_PAGE_SIZE)
        .default(DEFAULT_PAGE_SIZE),
      search: z.string().nullish(),
      status: z
        .enum([
          MeetingStatus.Upcoming,
          MeetingStatus.Active,
          MeetingStatus.Completed,
          MeetingStatus.Processing,
          MeetingStatus.Cancelled

        ]).nullish(),
      agentId: z.string().nullish(),
    }))
    .query(async ({ ctx, input }) => {
      const { search, page, pageSize, status, agentId } = input;
      const data = await db
        .select({
          ...getTableColumns(meetings),
          agent: agents,
          duration: sql<number>`EXTRACT(EPOCH  FROM(ended_at  -started_at  ))`.as("duration")
        })
        .from(meetings)
        .innerJoin(agents, eq(meetings.agentId, agents.id))
        .where(
          and(
            eq(meetings.userId, ctx.auth.user.id),
            search ? ilike(meetings.name, `%${search}%`) : undefined,
            status ? eq(meetings.status, status) : undefined,
            agentId ? eq(meetings.agentId, agentId) : undefined,
          )
        ).orderBy(desc(meetings.createdAt), desc(meetings.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize)

      const [total] = await db
        .select({ count: count() })

        .from(meetings)
        .innerJoin(agents, eq(meetings.agentId, agents.id))
        .where(
          and(
            eq(meetings.userId, ctx.auth.user.id),
            search ? ilike(meetings.name, `%${search}%`) : undefined,
            status ? eq(meetings.status, status) : undefined,
            agentId ? eq(meetings.agentId, agentId) : undefined,
          )
        );
      const totalPages = Math.ceil(total.count / pageSize);
      return {
        items: data,
        total: total.count,
        totalPages,
      }
    }),

}
)