import{
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import   Link  from "next/link";


interface Props{
    agentId:string;
    agentName:string;
    inEdit:()=>void;
    onRemove:()=>void;
}

    export const AgentViewIdHeader =({
        agentId,
        agentName,
        inEdit,
        onRemove,
    }:Props)=>{
        return(
            <div className="flex items-center justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                       <BreadcrumbItem>
                             <BreadcrumbLink asChild  className="dont-medium text-xl">
                             <Link href="/agents">
                             My Agent
                             </Link>
                            </BreadcrumbLink>
                       </BreadcrumbItem>
                   </BreadcrumbList>
                </Breadcrumb>



            </div>
        )
    }

