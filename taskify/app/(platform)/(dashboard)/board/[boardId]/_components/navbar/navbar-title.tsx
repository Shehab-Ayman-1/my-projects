"use client";
import type { Board } from "@prisma/client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { updateBoard } from "@/utils/update-board";
import { schema } from "@/utils/update-board/schema";
import { EditingForm } from "../edit-form";

export const NavbarTitle = ({ id, title }: Board) => {
   const [isEditing, setIsEditing] = useState(false);

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   if (isEditing)
      return (
         <EditingForm id={id} title={title} action={updateBoard} schema={schema} disableEditing={disableEditing} />
      );

   return (
      <div className="">
         <Button variant="transparent" className="text-base" onClick={enableEditing}>
            {title}
         </Button>
      </div>
   );
};
