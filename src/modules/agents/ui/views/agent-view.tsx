"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { ResponsivDialog } from "@/components/response-dialog"
import { Button } from "@/components/ui/button"
import { DataTable } from "../componets/data-table";
import { columns } from "../componets/columns";
import { EmptyState } from "@/components/empty-state ";
import { useAgentsFilters } from "../../hooks/use-agent-filters";
import { DataPagination } from "@/modules/agents/ui/componets/data-pagnt";



export const AgentView = () => {
    const [filters, setFilters] = useAgentsFilters();

    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.agent.getMany.queryOptions({
        ...filters,
    }));


    return (
        <div className="flex-1 pb-4 md:px-4 flex flex-col gap-y-4">
            <DataPagination
                page={filters.page}
                totalPages={data.totalPages}
                onPageChange={(page) => setFilters({ page })}

            />


            <DataTable columns={columns} data={data.items} />
            {data.items.length === 0 && (
                <EmptyState
                    title="Create your first agent"
                    description="Create an agent to join your meeting. Each agent will follow
            instruction"/>
            )}
        </div>
    )

}
export const AgentsViewLoading = () => {
    return (
        <LoadingState
            title="Loading Agent"
            description="this may  take  a  few  seconds" />
    )
}
export const AgentsViewError = () => {
    return (<ErrorState
        title="Error Loading Agent"
        description="SOmthing is wrong whit  you devise"
    />)
}
