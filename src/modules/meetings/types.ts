import { inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@/trpc/routers/_apps"

export  type MeetingGetOne=inferRouterOutputs<AppRouter>["meetings"]["getOne"]