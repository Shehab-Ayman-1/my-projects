"use client";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { copyBoard } from "@/utils/copy-board";
import { useRouter } from "next/navigation";

type CopyBoardProps = {
   boardId: string;
};

export const CopyBoard = ({ boardId }: CopyBoardProps) => {
   const [loading, setLoading] = useState(false);
   const router = useRouter();
   const { orgId } = useAuth();

   const handleSubmit = async () => {
      setLoading(true);
      const { success, error } = await copyBoard({ boardId });

      if (error) return toast.error(error, { style: { background: "red", color: "white" } });
      toast.success(success, { style: { background: "green", color: "white" } });

      setLoading(false);
      router.push(`/organizations/${orgId}`);
   };

   return (
      <Button className="h-auto w-full justify-start" variant="ghost" disabled={loading} onClick={handleSubmit}>
         Copy Board.
      </Button>
   );
};
