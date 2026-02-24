// app/agent/[agentId]/page.tsx
import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AgentsIdLoading } from "@/modules/agents/ui/views/agent-id-view";
import { AgentsIdError } from "@/modules/agents/ui/views/agent-id-view";
import { AgentIdView } from "@/modules/agents/ui/views/agent-id-view";

interface Props {
  params: { agentId: string };
}

const Page = async ({ params }: Props) => {
  const { agentId } = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    trpc.agent.getOne.queryOptions({ id: agentId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsIdLoading
      />}>
        <ErrorBoundary fallback={<AgentsIdError />}>
          <AgentIdView agentId={agentId} />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;