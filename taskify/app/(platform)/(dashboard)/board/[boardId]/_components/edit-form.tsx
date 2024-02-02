"use client";

import { useForm } from "react-hook-form";
import { ElementRef, useEffect, useRef } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditIcon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { FormErrors } from "@/components/form/form-errors";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";

type EditingFormProps = {
   id: string;
   title?: string;
   placeholder?: string;
   useTextareaField?: boolean;

   styles?: { form?: string; input?: string; inputContainer?: string; button?: string };
   texts?: { button?: string };

   schema: any;
   action: (data: any) => Promise<any>;
   disableEditing: () => void;
};

const textareaStyle =
   "input-field resize-none outline-none border-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0";
const inputStyle =
   "input-field h-7 border-none bg-transparent px-4 text-base font-bold text-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0";

const EditingFormRef = ({
   id,
   title,
   placeholder,
   useTextareaField,
   styles,
   texts,
   schema,
   action,
   disableEditing,
}: EditingFormProps) => {
   const formRef = useRef<ElementRef<"form">>(null);

   const { register, handleSubmit, setError, formState } = useForm({
      defaultValues: { id, title: title || "" },
      resolver: zodResolver(schema),
   });

   useEffect(() => {
      const input = document.querySelector(".input-field") as HTMLInputElement;
      input?.focus();
   }, []);

   const onInputKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") disableEditing();
   };

   const onTextareaKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
         formRef.current?.requestSubmit();
      }
      if (event.key === "Escape") {
         disableEditing();
      }
   };

   const onSubmit = async ({ title }: z.infer<typeof schema>) => {
      disableEditing();
      const { error, success } = await action({ id, title });
      if (!error) return toast.success(success, { style: { background: "green", color: "white" } });

      toast.error(error, { style: { background: "red", color: "white" } });
      setError("title", { message: error });
   };

   useEventListener("keydown", onInputKeyDown);
   useEventListener("keydown", onTextareaKeyDown);
   useOnClickOutside(formRef, disableEditing);

   return (
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={cn("relative", styles?.form)}>
         <div className={cn(!useTextareaField && "flex-start", styles?.inputContainer)}>
            {useTextareaField && (
               <Textarea
                  placeholder={placeholder || ""}
                  className={cn(textareaStyle, styles?.input)}
                  {...register("title")}
               >
                  FormTextarea
               </Textarea>
            )}
            {!useTextareaField && (
               <Input
                  className={cn(inputStyle, styles?.input)}
                  placeholder={placeholder || ""}
                  {...register("title")}
               />
            )}
            <Button size="icon" className={cn("h-8 w-8", styles?.button)}>
               {texts?.button || <EditIcon className="h-4 w-4" />}
            </Button>
         </div>

         {formState.errors?.title?.message && <FormErrors errors={formState.errors} />}
      </form>
   );
};

export const EditingForm = EditingFormRef;
