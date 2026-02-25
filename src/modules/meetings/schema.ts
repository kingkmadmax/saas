import { z } from "zod";

export const meetingsInsertSchema = z.object({
    name: z.string().min(1, { message: "name is required" }),
    agentId: z.string().min(1, { message: "instruction  is required" }),
})

export const MeetingsUpdateSchema =meetingsInsertSchema.extend({
   id:  z.string().min(1, {message: "id  is required"})
})