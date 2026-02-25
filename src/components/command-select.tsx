import { ReactNode, useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList,
    CommandResponsiveDialog,
} from "@/components/ui/command"
import { string } from "zod"

interface Props {
    options: Array<{
        id: string;
        value: string;
        children: ReactNode;

    }>;
    onSelect: (vulue: string) => void;
    onSearch?: (value: string) => void;
    value: string;
    placeholder?: string;
    isSearchable?: boolean;
    className?: string;
    isLoading?: boolean;
}
export const CommandSelect = ({
    options,
    onSelect,
    value,
    onSearch,
    placeholder,
    isSearchable,
    isLoading,

    className,
}: Props) => {
    const [open, setOpen] = useState(false);
    const selectedOption = options.find((options) => options.value === value);

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                type="button"
                variant="outline"
                className={cn("h-8 justify-between font-normal px-2")}>
                <div>
                    {selectedOption?.children ?? placeholder}
                </div>
                <ChevronDownIcon

                />

            </Button>
            <CommandResponsiveDialog

                open={open}
                shouldFilter={!onSearch}
                onOpenChange={setOpen}>
                <CommandInput
                    placeholder="Search..."
                    onValueChange={onSearch}
                />
                <CommandList>
                    <CommandEmpty>
                        <span className="text-muted-foreground text-sm">
                            {isLoading ? "Loading..." : "No option found"}
                        </span>

                    </CommandEmpty>
                    {options.map((option) => (
                        <CommandItem
                            key={option.id}
                            onSelect={() => {
                                onSelect(option.value)
                                setOpen(false);
                            }}
                        >
                            {option.children}
                        </CommandItem>
                    ))}
                </CommandList>
            </CommandResponsiveDialog>
        </>
    )
}