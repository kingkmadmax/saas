"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import {ResponsivDialog}from "@/components/response-dialog"
import  {Button} from "@/components/ui/button"
import { DataTable } from "../componets/data-table";
import { columns } from "../componets/columns";
import { EmptyState } from "@/components/empty-state ";



export const AgentView = () => {
   
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.agent.getMany.queryOptions());
    return (
        <div className="flex-1 pb-4 md:px-4flex  flex-col  gap-y-4">
           
           <DataTable columns={columns} data={data}/>
           {data.length ===0 && (
            <EmptyState
            title="Create your first agent"
            description="Create an  agentto join you meeting.each agent will follow
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
export const AgentsViewError  =()=>{
    return  ( <ErrorState 
        title="Error Loading Agent"
        description="SOmthing is wrong whit  you devise"
        />)
}
