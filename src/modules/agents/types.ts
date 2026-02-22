import { inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@/trpc/routers/_apps"

export  type AgentGetOne=inferRouterOutputs<AppRouter>["agent"]["getOne"]