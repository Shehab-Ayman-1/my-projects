import type { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";

import { useCardModal } from "@/hooks/useCardModal";
import { Hint } from "@/components/hint";

type CardItemProps = {
   index: number;
   card: Card;
};

export const CardItem = ({ card, index }: CardItemProps) => {
   const { onOpen } = useCardModal();

   const handleOpenDialogModal = () => {
      onOpen(card.id);
   };

   return (
      <Draggable draggableId={card.id} index={index}>
         {(provided) => (
            <li
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
               role="button"
               onClick={handleOpenDialogModal}
               className="w-full truncate rounded-md border-2 border-transparent bg-white px-3 py-2 text-sm shadow-sm hover:border-black"
            >
               <Hint description={card.title} side="bottom" className="">
                  {card.title}
               </Hint>
            </li>
         )}
      </Draggable>
   );
};
