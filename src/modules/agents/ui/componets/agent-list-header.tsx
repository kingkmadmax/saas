"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useAgentsFilters } from "../../hooks/use-agent-filters";
import { AgentSearchFilter } from "@/modules/agents/ui/componets/agent-serch-filter";
import { DEFAULT_PAGE } from "@/constants";
import { XCircleIcon } from "lucide-react";

export const AgentListHeader = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const isAnyFilterModified = !!filters.search;

  const onClearFilters = () => {
    setFilters({
      search: "",
      page: DEFAULT_PAGE,
    });
  };

  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setDialogOpen} />

      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>

          <Button onClick={() => setDialogOpen(true)}>
            New Agent
          </Button>
        </div>

        <div className="flex items-center gap-x-2 p-1">
          <AgentSearchFilter />

          {isAnyFilterModified && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
            >
              <XCircleIcon className="mr-2 h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </>
  );
};