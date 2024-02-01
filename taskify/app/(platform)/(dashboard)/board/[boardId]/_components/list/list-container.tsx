"use client";
import type { ListWithCards } from "@/types";
import { useEffect, useState } from "react";

import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

type ListContainerProps = {
   boardId: string;
   lists: ListWithCards[];
};

export const ListContainer = ({ boardId, lists }: ListContainerProps) => {
   const [orderedData, setOrderedData] = useState(lists);

   useEffect(() => {
      setOrderedData(lists);
   }, [lists]);

   return (
      <ol className="space-y-2">
         <div className="flex flex-wrap items-start justify-start gap-4">
            <ListForm />

            {orderedData.map((list, index) => (
               <ListItem key={list.id} index={index} list={list} />
            ))}
         </div>

         <div className="w-1 flex-shrink-0" />
      </ol>
   );
};
