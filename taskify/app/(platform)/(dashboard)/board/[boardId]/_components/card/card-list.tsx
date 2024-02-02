import type { ListWithCards } from "@/types";

import { Droppable } from "@hello-pangea/dnd";

import { cn } from "@/utils";
import { CardItem } from "./card-item";

type CardListProps = {
   list: ListWithCards;
};

export const CardList = ({ list }: CardListProps) => {
   return (
      <Droppable droppableId={list.id} type="card">
         {(provided) => (
            <ol
               className={cn("mx-1 flex flex-col gap-2 px-1 py-0.5", list?.cards?.length && "mt-2")}
               ref={provided.innerRef}
               {...provided.droppableProps}
            >
               {list?.cards.map((card, index) => <CardItem key={card.id} index={index} card={card} />)}

               {provided.placeholder}
            </ol>
         )}
      </Droppable>
   );
};
