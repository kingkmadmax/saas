import { MeetingsListHeader } from "@/modules/meetings/ui/components/meetings-list-header";
import { MeetingsViewLoading, MeetingsView,MeetingsViewError } from "@/modules/meetings/ui/views/meeting-view";
import { getQueryClient ,trpc} from "@/trpc/server";
import { HydrationBoundary,dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";
import  { ErrorBoundary}  from "react-error-boundary"

const Page = async() => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({})
    );

   return (<>
   <MeetingsListHeader/>
  <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<MeetingsViewLoading />}>
      <ErrorBoundary fallback={<MeetingsViewError />}>
        <MeetingsView />
      </ErrorBoundary>
    </Suspense>
  </HydrationBoundary>
  </>
);
};

export default Page;