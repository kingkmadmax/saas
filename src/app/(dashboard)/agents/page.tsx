import { getQueryClient, trpc } from "@/trpc/server";
import { AgentView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agent-view";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


const Page = async () => {
  const queryClient = getQueryClient();


  void queryClient.prefetchQuery(
    trpc.agent.getMany.queryOptions()
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading />}  >
      <ErrorBoundary fallback={<AgentsViewError/>}> <AgentView /></ErrorBoundary>
       </Suspense>
    </HydrationBoundary>
  );
};

export default Page;