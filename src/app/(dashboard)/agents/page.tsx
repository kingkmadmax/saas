import { getQueryClient, trpc } from "@/trpc/server";
import { AgentView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agent-view";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import {AgentListHeader} from  "@/modules/agents/ui/componets/agent-list-header"
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


const Page = async () => {
  const session =await auth.api.getSession({
    headers:await headers(),
  });
  if(!session){
    redirect("/auth/sign_in");
  }
  const queryClient = getQueryClient();


  void queryClient.prefetchQuery(
    trpc.agent.getMany.queryOptions()
  );

  return (
    <>    <AgentListHeader/>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading />}  >
      <ErrorBoundary fallback={<AgentsViewError/>}> <AgentView /></ErrorBoundary>
       </Suspense>
    </HydrationBoundary>
    </>

  );
};

export default Page;