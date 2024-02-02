"use client";
import type { CardWithList } from "@/types";
import { useForm } from "react-hook-form";
import { ElementRef, useEffect, useRef } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { FormErrors } from "@/components/form/form-errors";
import { Textarea } from "@/components/ui/textarea";
import { schema } from "@/utils/update-card/schema";
import { updateCard } from "@/utils/update-card";

type DescriptionEditingProps = {
   boardId: string;
   card: CardWithList;
   disableEditing: () => void;
};

export const DescriptionEditing = ({ boardId, card, disableEditing }: DescriptionEditingProps) => {
   const defaultValues = { id: `${boardId}|${card.listId}|${card.id}`, title: card.title, description: undefined };

   const queryClient = useQueryClient();
   const formRef = useRef<ElementRef<"form">>(null);

   const { register, handleSubmit, setError, formState } = useForm({
      defaultValues,
      resolver: zodResolver(schema),
   });

   useEffect(() => {
      const input = document.querySelector(".input-field") as HTMLInputElement;
      input?.focus();
   }, []);

   const onBlur = (event: FocusEvent) => {
      event.preventDefault();
      formRef.current?.requestSubmit();
   };

   const onTextareaKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) formRef.current?.requestSubmit();
      if (event.key === "Escape") disableEditing();
   };

   const onSubmit = async ({ id, title, description }: typeof defaultValues) => {
      if (description == card.description) return disableEditing();
      const { success, error } = await updateCard({ id, title, description });

      if (success) {
         queryClient.invalidateQueries({ queryKey: ["card", card.id] });
         queryClient.invalidateQueries({ queryKey: ["card-logs", card.id] });
         toast.success(success);
         disableEditing();
      } else {
         setError("title", { message: error });
         toast.error(error);
      }
   };

   useOnClickOutside(formRef, () => formRef.current?.requestSubmit());
   useEventListener("keydown", onTextareaKeyDown);

   return (
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="relative w-full">
         <FormErrors errors={formState.errors} />
         <Textarea
            defaultValue={card.description || ""}
            placeholder="Enter A Card Description With Minimum 15 Characters"
            className="input-field resize-none border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={formState.isSubmitting}
            {...register("description", { onBlur })}
         />
      </form>
   );
};
