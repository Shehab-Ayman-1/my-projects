"use client";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/utils/delete-board";

type DeleteBoardProps = {
   boardId: string;
};

export const DeleteBoard = ({ boardId }: DeleteBoardProps) => {
   const [loading, setLoading] = useState(false);

   const handleSubmit = async () => {
      setLoading(true);
      const response = await deleteBoard({ boardId });

      if (response?.error) return toast.error(response?.error, { style: { background: "red", color: "white" } });
      toast.success("Board Was Deleted.", { style: { background: "green", color: "white" } });

      setLoading(false);
   };

   return (
      <Button
         className="h-auto w-full justify-start text-rose-400 hover:bg-rose-100 hover:text-rose-600"
         variant="ghost"
         disabled={loading}
         onClick={handleSubmit}
      >
         Delete This Board.
      </Button>
   );
};
