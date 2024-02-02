"use client";
import type { CardWithList } from "@/types";

import { useState } from "react";
import { useParams } from "next/navigation";
import { AlignLeftIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { DescriptionEditing } from "./_components/description-editing";

type ModalDescriptionProps = {
   card: CardWithList;
};

export const ModalDescription = ({ card }: ModalDescriptionProps) => {
   const [isEditing, setIsEditing] = useState(false);
   const { boardId } = useParams();

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   return (
      <div className="flex w-full items-start gap-3">
         <AlignLeftIcon className="mt-0.5 h-5 w-5 text-neutral-700" />
         {isEditing ? (
            <DescriptionEditing boardId={boardId as string} card={card} disableEditing={disableEditing} />
         ) : (
            <div className="w-full">
               <p className="mb-2 font-semibold text-neutral-700">Description</p>
               <div
                  role="button"
                  onClick={enableEditing}
                  className="font-mediumm min-h-[78px] rounded-md bg-neutral-200 px-3.5 py-3 text-sm"
               >
                  {card.description || "Add A More Detailed Descriptions..."}
               </div>
            </div>
         )}
      </div>
   );
};

ModalDescription.Loading = function Loading() {
   return (
      <div className="flex w-full items-start gap-3">
         <Skeleton className="h-6 w-6 bg-neutral-400" />
         <div className="w-full">
            <Skeleton className="mb-2 h-6 w-24 bg-neutral-400" />
            <Skeleton className="mb-2 h-[78px] w-full bg-neutral-400" />
         </div>
      </div>
   );
};
