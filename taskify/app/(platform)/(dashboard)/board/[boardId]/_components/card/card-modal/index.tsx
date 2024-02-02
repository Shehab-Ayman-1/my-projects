"use client";
import type { CardWithList } from "@/types";
import type { Activity } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/useCardModal";
import { fetcher } from "@/utils";

import { ModalDescription } from "./modal-description";
import { ModalHeader } from "./modal-header";
import { ModalActions } from "./modal-actions";
import { ModalActivity } from "./modal-activity";

type QueryProps = {
   data: CardWithList;
   status: number;
};

type ActivitiesProps = {
   data: Activity[];
   status: number;
};

export const CardModal = () => {
   const { cardId, isOpen, onClose } = useCardModal((state) => state);
   const params = useParams();

   const { data: card } = useQuery<QueryProps>({
      queryKey: ["card", cardId],
      queryFn: () => fetcher(`/api/cards/${cardId}`),
   });

   const { data: activities } = useQuery<ActivitiesProps>({
      queryKey: ["card-logs", cardId],
      queryFn: () => fetcher(`/api/cards/${cardId}/logs`),
   });

   return (
      <Dialog open={isOpen} onOpenChange={onClose} modal>
         <DialogContent>
            {card?.status === 200 ? <ModalHeader card={card?.data} /> : <ModalHeader.Loading />}

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
               <div className="col-span-3">
                  <div className="w-full space-y-6">
                     {card?.status === 200 ? <ModalDescription card={card?.data} /> : <ModalDescription.Loading />}
                     {activities?.status === 200 ? (
                        <ModalActivity activities={activities?.data} />
                     ) : (
                        <ModalActivity.Loading />
                     )}
                  </div>
               </div>

               {card?.status === 200 ? (
                  <ModalActions card={card?.data} boardId={params.boardId as string} />
               ) : (
                  <ModalActions.Loading />
               )}
            </div>
         </DialogContent>
      </Dialog>
   );
};
