"use client";
import type { ListWithCards } from "@/types";

import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { updateListOrder } from "@/utils/update-order-list";
import { updateCardOrder } from "@/utils/update-order-card";

import { ListForm } from "./list-form";
import { ListItem } from "./list-item";
import { toast } from "sonner";

type ListContainerProps = {
   boardId: string;
   lists: ListWithCards[];
};

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
   const result = Array.from(list);
   const [removed] = result.splice(startIndex, 1);
   result.splice(endIndex, 0, removed);
   return result;
}

export const ListContainer = ({ boardId, lists }: ListContainerProps) => {
   const [orderedData, setOrderedData] = useState(lists);

   useEffect(() => {
      setOrderedData(lists);
   }, [lists]);

   const onDragEnd = async ({ destination, source, type }: any) => {
      if (!destination) return;

      // Dropped In The Same Position
      if (destination.droppableId === source.droppableId && destination.index === source.index) return;

      // User Moves A List
      if (type === "list") {
         const reorderItems = reorder(orderedData, source.index, destination.index);
         const items = reorderItems.map((item, index) => ({ ...item, order: index }));

         setOrderedData(items);
         const { success, error } = await updateListOrder({ boardId, items });
         if (success) toast.success(success);
         else toast.error(error);
      }

      if (type === "card") {
         const newOrderedData = [...orderedData];

         // Source And Destination List
         const sourceList = newOrderedData.find((list) => list.id === source.droppableId);
         const destList = newOrderedData.find((list) => list.id === destination.droppableId);

         if (!sourceList || !destList) return;

         // Check If Cards Exists On The Source List
         if (!sourceList.cards) sourceList.cards = [];

         // Check If Cards Exists On The DestList
         if (!destList.cards) destList.cards = [];

         // Moving The Card In The Same List
         if (source.droppableId === destination.droppableId) {
            const reorderedCards = reorder(sourceList.cards, source.index, destination.index);
            sourceList.cards = reorderedCards.map((card, index) => ({ ...card, order: index }));

            setOrderedData(newOrderedData);
            const { success, error } = await updateCardOrder({ boardId, items: reorderedCards });

            if (success) toast.success(success);
            else toast.error(error);
         } else {
            // Remove Card From The Source List
            const [movedCard] = sourceList.cards.splice(source.index, 1);

            // Assign The New ListId To The Moved Card
            movedCard.listId = destination.droppableId;

            // Add Card To Destination List
            destList.cards.splice(destination.index, 0, movedCard);
            sourceList.cards.forEach((card: any, index: number) => (card.order = index));

            // Update The Order For Each Card In The Destination List
            destList.cards.forEach((card: any, index: number) => (card.order = index));
            setOrderedData(newOrderedData);

            const { success, error } = await updateCardOrder({ boardId, items: destList.cards });
            if (success) toast.success(success);
            else toast.error(error);
         }
      }
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId="lists" type="list" direction="horizontal">
            {(provided) => (
               <ol {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                  <div className="flex flex-wrap items-start justify-center gap-4 lg:justify-start">
                     <ListForm />

                     {orderedData.map((list, index) => (
                        <ListItem key={list.id} index={index} list={list} />
                     ))}

                     {provided.placeholder}
                  </div>

                  <div className="w-1 flex-shrink-0" />
               </ol>
            )}
         </Droppable>
      </DragDropContext>
   );
};
