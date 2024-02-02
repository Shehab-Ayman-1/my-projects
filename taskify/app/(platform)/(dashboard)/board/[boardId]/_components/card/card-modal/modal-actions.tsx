"use client";
import type { CardWithList } from "@/types";

import { CopyIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useCardModal } from "@/hooks/useCardModal";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { copyCard } from "@/utils/copy-card";
import { deleteCard } from "@/utils/delete-card";

type ModalActionProps = {
   card: CardWithList;
   boardId: string;
};

export const ModalActions = ({ card, boardId }: ModalActionProps) => {
   const { onClose } = useCardModal((state) => state);
   const [loading, setLoading] = useState(false);

   const handleCopy = async () => {
      setLoading(true);
      const { success, error } = await copyCard({ boardId, listId: card.listId, cardId: card.id });

      if (success) toast.success(success);
      else toast.error(error);

      setLoading(false);
      onClose();
   };

   const handleDelete = async () => {
      setLoading(true);
      const { success, error } = await deleteCard({ boardId, listId: card.listId, cardId: card.id });

      if (success) toast.success(success);
      else toast.error(error);

      setLoading(false);
      onClose();
   };

   return (
      <div className="mt-2 space-y-2">
         <p className="text-xs font-semibold">Actions</p>
         <form action={handleCopy}>
            <Button
               size="inline"
               variant="gray"
               disabled={loading}
               className="w-full justify-start"
               onClick={handleCopy}
            >
               <CopyIcon className="mr-2 h-4 w-4" />
               Copy
            </Button>
         </form>
         <form action={handleDelete}>
            <Button
               size="inline"
               variant="gray"
               disabled={loading}
               className="w-full justify-start text-rose-500"
               onClick={handleDelete}
            >
               <Trash2Icon className="mr-2 h-4 w-4" />
               Delete
            </Button>
         </form>
      </div>
   );
};

ModalActions.Loading = function Loading() {
   return (
      <div className="space-y-2">
         <Skeleton className="h-4 w-20 bg-neutral-400" />
         <Skeleton className="h-8 w-full bg-neutral-400" />
         <Skeleton className="h-8 w-full bg-neutral-400" />
      </div>
   );
};
