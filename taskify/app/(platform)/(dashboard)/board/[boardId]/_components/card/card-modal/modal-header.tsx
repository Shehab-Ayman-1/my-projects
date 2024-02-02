"use client";
import type { CardWithList } from "@/types";

import { ElementRef, FocusEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { LayoutIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { FormErrors } from "@/components/form/form-errors";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { updateCard } from "@/utils/update-card";
import { schema } from "@/utils/update-card/schema";

type ModalHeaderProps = {
   card: CardWithList;
};

type DataType = {
   title: string;
   description: string | undefined;
};

export const ModalHeader = ({ card }: ModalHeaderProps) => {
   const queryClient = useQueryClient();
   const params = useParams();
   const formRef = useRef<ElementRef<"form">>(null);

   const { register, handleSubmit, setError, formState } = useForm({
      defaultValues: { id: "", title: card.title, description: undefined },
      resolver: zodResolver(schema),
   });

   const onBlur = (event: FocusEvent) => {
      event.preventDefault();
      formRef.current?.requestSubmit();
   };

   const onSubmit = async ({ title, description }: DataType) => {
      if (!title || title === card.title) return;
      const id = `${params.boardId}|${card.listId}|${card.id}`;

      const data = { id, title, description };
      const { success, error } = await updateCard(data);

      if (success) {
         queryClient.invalidateQueries({ queryKey: ["card", card.id] });
         queryClient.invalidateQueries({ queryKey: ["card-logs", card.id] });
         toast.success(success);
      } else {
         setError("title", { message: error });
         toast.error(error);
      }
   };

   return (
      <div className="mb-6 flex w-full items-start gap-4">
         <LayoutIcon className="mt-1 h-5 w-5 text-neutral-700" />

         <div className="w-full">
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="relative">
               <FormErrors errors={formState.errors} />
               <Input
                  className="relative -left-1.5 mb-0.5 w-[95%] truncate border-transparent bg-transparent px-1 text-xl font-semibold text-neutral-700 focus-visible:border-input focus-visible:bg-white"
                  disabled={formState.isSubmitting}
                  {...register("title", { onBlur })}
               />
            </form>
            <p className="text-sm text-muted-foreground">
               In List <span className="underline">{card?.list?.title}</span>
            </p>
         </div>
      </div>
   );
};

ModalHeader.Loading = function Loading() {
   return (
      <div className="mb-6 flex items-start gap-3">
         <Skeleton className="mt-1 h-6 w-6 bg-neutral-400" />
         <div className="">
            <Skeleton className="mb-1 h-6 w-24 bg-neutral-400" />
            <Skeleton className="mb-1 h-4 w-12 bg-neutral-400" />
         </div>
      </div>
   );
};
