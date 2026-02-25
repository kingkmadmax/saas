"use client";


import { toast } from "sonner";

import { useTRPC } from "@/trpc/client";
import { AgentGetOne } from "../../types";
import { useRouter } from "next/navigation"; // ✅ FIXED
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { agentsInsertSchema } from "../../schema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GeneratedAvatar } from "@/components/genrated-avater";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export const AgentForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: AgentFormProps) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient(); // ✅ fixed typo

  const createAgent = useMutation(
    trpc.agent.create.mutationOptions({
      onSuccess:async () => {
       await queryClient.invalidateQueries(
            trpc.agent.getMany.queryOptions({}),
        );
        if(initialValues?.id){
            queryClient.invalidateQueries(
                trpc.agent.getOne.queryOptions({id:initialValues.id})
            );
        }onSuccess?.();
      },
      onError: (error) => {
        toast .error(error.message);
        // todo checkif  error code  is "forbiden"
      },
    })
  );

  const form = useForm<z.infer<typeof agentsInsertSchema>>({
    resolver: zodResolver(agentsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      instructions: initialValues?.instructions ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent.isPending;

  const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
    if (isEdit) {
      console.log("TODO: updateAgent");
    } else {
      createAgent.mutate(values);
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <GeneratedAvatar
          seed={form.watch("name")}
          variant="botttsNeutral"
          className="border size-16"
        />

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="abebe"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="instructions"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="i am good  at programings"  />
              </FormControl>
          <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-x-2">
            {onCancel &&(
                <Button 
                variant={"ghost"}
                disabled={isPending}
                type="button"
                onClick={()=>onCancel()}
                >
                    Cancel

                </Button>
            )}
            <Button  disabled={isPending} type="submit" >
                {isEdit ?  "Update":"Create"}
            </Button>
        </div>
      </form>
    </Form>
  );
};