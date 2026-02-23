import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAgentsFilters } from "../../hooks/use-agent-filters";

export const AgentSearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();

  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 w-[240px] pl-7 bg-white border border-gray-200 rounded-md"
        value={filters.search}
        onChange={(e) =>
          setFilters({
            search: e.target.value,
            page: 1,
          })
        }
      />

      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};