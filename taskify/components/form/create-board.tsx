"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { usePremiumModal } from "@/hooks/usePremiumModal";
import { FormErrors } from "@/components/form/form-errors";
import { schema } from "@/utils/create-board/schema";
import { createBoard } from "@/utils/create-board";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FormPicker } from "./form-picker";

const defaultValues = { title: "", image: "" };
export const CreateBoard = () => {
   const router = useRouter();
   const { onOpen } = usePremiumModal();

   const { register, handleSubmit, setValue, setError, reset, formState } = useForm({
      defaultValues,
      resolver: zodResolver(schema),
   });
   const { errors, isSubmitting } = formState;

   const onSubmit = async (data: typeof defaultValues) => {
      const { boardId, success, error } = await createBoard(data);

      if (error) {
         toast.error(error, { style: { background: "red", color: "white" } });
         if (error.includes("Reached Your Limit Of Free Boards")) onOpen();
         return setError("title", { message: error });
      }

      toast.success(success, { style: { background: "green", color: "white" } });

      router.push(`/board/${boardId}`);
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <FormPicker setValue={setValue} />

         <div className="flex-between">
            <Input id="title" placeholder="Enter A Board Title:" {...register("title")} />
            <Button size="sm" disabled={isSubmitting}>
               Submit
            </Button>
         </div>

         <FormErrors errors={errors} />
      </form>
   );
};
