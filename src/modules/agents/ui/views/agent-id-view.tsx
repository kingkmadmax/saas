"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { AgentViewIdHeader } from "@/modules/agents/ui/componets/agent-id-view-header";

interface Props {
  agentId: string;
}

export const  AgentIdView = ({ agentId }: Props) => {
  const trpc = useTRPC();

  const { data } = useSuspenseQuery(
    trpc.agent.getOne.queryOptions({ id: agentId })
  );

  return (
    <div>
      <AgentViewIdHeader
        agentId={agentId} // fixed typo
        agentName={data.name} // safe access
        inEdit={() => {}}
        onRemove={() => {}}
      />
    </div>
  );
};

export const AgentsIdLoading = () => {
  return (
    <LoadingState
      title="Loading Agent"
      description="This may take a few seconds"
    />
  );
};

export const AgentsIdError  = () => {
  return (
    <ErrorState
      title="Error Loading Agent"
      description="Something is wrong with your device"
    />
  );
};