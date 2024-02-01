"use client";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { deleteList } from "@/utils/delete-list";

type DeleteListFormProps = {
   boardId: string;
   listId: string;
};

export const DeleteListForm = ({ boardId, listId }: DeleteListFormProps) => {
   const [loading, setLoading] = useState(false);

   const handleSubmit = async () => {
      setLoading(true);

      const { success, error } = await deleteList({ boardId, listId });
      if (error) return toast.error(error, { style: { background: "red", color: "white" } });

      toast.success(success, { style: { background: "green", color: "white" } });
      setLoading(false);
   };

   return (
      <Button
         className="flex-start h-auto w-full justify-start rounded-none text-sm text-rose-400 hover:text-rose-500"
         variant="ghost"
         disabled={loading}
         onClick={handleSubmit}
      >
         Delete This List.
      </Button>
   );
};
