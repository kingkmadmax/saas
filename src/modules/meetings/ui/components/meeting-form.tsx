"use client";

import { toast } from "sonner";
import { useState } from "react";


import { useTRPC } from "@/trpc/client";
import { CommandSelect } from "@/components/command-select"
import { MeetingGetOne } from "../../types";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { meetingsInsertSchema } from "../../schema";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { NewAgentDialog } from "@/modules/agents/ui/componets/new-agent-dialog";

interface MeetingssFormProps {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: MeetingGetOne;
}

export const MeetingsForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: MeetingssFormProps) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [agentSearch, setAgentSearch] = useState("")
  const [openNewAgentDialog, setOpenNewAgentDialog] = useState(false)



  const agents = useQuery(
    trpc.agent.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  )

  const createMeetings = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );

        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({ id: initialValues.id })
          );
        }

        onSuccess?.(data.id);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  const form = useForm<z.infer<typeof meetingsInsertSchema>>({
    resolver: zodResolver(meetingsInsertSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      agentId: initialValues?.agentId ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createMeetings.isPending;

  const onSubmit = (values: z.infer<typeof meetingsInsertSchema>) => {
    if (isEdit) {
      console.log("TODO: updateMeetings");
    } else {
      createMeetings.mutate(values);
    }
  };

  return (
    <>
      <NewAgentDialog open={openNewAgentDialog} onOpenChange={setOpenNewAgentDialog} />
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>


          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="math teture" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />
          <FormField
            name="agentId"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent</FormLabel>
                <FormControl>
                  <CommandSelect
                    options={(agents.data?.items ?? []).map((agents) => ({
                      id: agents.id,
                      value: agents.id,
                      children: (
                        <div className="flex  items-center gap-x-2">
                          <GeneratedAvatar
                            seed={agents.name}
                            variant="botttsNeutral"
                            className="border  size-6"
                          />
                          <span>
                            {agents.name}
                          </span>
                        </div>
                      )


                    }))}

                    onSearch={setAgentSearch}
                    onSelect={field.onChange}
                    value={field.value}
                    placeholder="Select an agent..."
                    isLoading={agents.isLoading}

                  />


                </FormControl>
                <FormDescription>
                  Not found what you&apos;re looking for?{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline font-medium"
                    onClick={() => setOpenNewAgentDialog(true)}
                  >
                    Create one
                  </button>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}

          />



          <div className="flex justify-between gap-x-2">
            {onCancel && (
              <Button
                variant="ghost"
                disabled={isPending}
                type="button"
                onClick={() => onCancel()}
              >
                Cancel
              </Button>
            )}

            <Button disabled={isPending} type="submit">
              {isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};