
import { Dispatch,SetStateAction } from "react";
import {CommandResponsiveDialog, CommandDialog,CommandInput,CommandItem,CommandList } from "@/components/ui/command";

interface Props{
    open :boolean;
    setOpen:Dispatch<SetStateAction<boolean>>;

};
export const DashboardCommand =({open, setOpen}: Props  )=>{
    return (
        <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="loking for  agent"/>
            <CommandList>
                <CommandItem>
                    tests
                </CommandItem>
                 <CommandItem>
                    test2323232s
                </CommandItem>
            </CommandList>
           
        </CommandResponsiveDialog>
        
    )
}