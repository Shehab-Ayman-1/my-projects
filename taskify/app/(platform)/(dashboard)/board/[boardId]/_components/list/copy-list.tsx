"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { copyList } from "@/utils/copy-list";
import { toast } from "sonner";

type CopyListFormProps = {
   boardId: string;
   listId: string;
};

export const CopyListForm = ({ boardId, listId }: CopyListFormProps) => {
   const [loading, setLoading] = useState(false);

   const handleSubmit = async () => {
      setLoading(true);
      const { success, error } = await copyList({ boardId, listId });

      if (error) return toast.error(error, { style: { background: "red", color: "white" } });
      toast.success(success, { style: { background: "green", color: "white" } });

      setLoading(false);
   };

   return (
      <Button
         variant="ghost"
         disabled={loading}
         className="flex-start h-auto w-full justify-start rounded-none text-sm"
         onClick={handleSubmit}
      >
         Copy This List.
      </Button>
   );
};
