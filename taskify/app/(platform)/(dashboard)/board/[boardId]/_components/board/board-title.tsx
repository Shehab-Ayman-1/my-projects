"use client";
import type { Board } from "@prisma/client";
import { useState } from "react";

import { EditingTitleForm } from "@/components/form/editing-title";
import { Button } from "@/components/ui/button";
import { updateBoard } from "@/utils/update-board";
import { schema } from "@/utils/update-board/schema";

export const BoardTitle = ({ id, title }: Board) => {
   const [isEditing, setIsEditing] = useState(false);

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   if (isEditing)
      return (
         <EditingTitleForm
            id={id}
            title={title}
            action={updateBoard}
            schema={schema}
            disableEditing={disableEditing}
         />
      );

   return (
      <div className="">
         <Button variant="transparent" className="text-base" onClick={enableEditing}>
            {title}
         </Button>
      </div>
   );
};
