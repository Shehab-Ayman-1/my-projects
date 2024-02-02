"use client";
import { useState } from "react";
import { PlusIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { schema } from "@/utils/create-card/schema";
import { createCard } from "@/utils/create-card";
import { EditingTitleForm } from "@/components/form/editing-title";

type CardFormProps = {
   boardId: string;
   listId: string;
};

export const CardForm = ({ boardId, listId }: CardFormProps) => {
   const [isEditing, setIsEditing] = useState(false);

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   return (
      <div className="p-2">
         {isEditing && (
            <CardForm.CardEditingTitleForm boardId={boardId} listId={listId} disableEditing={disableEditing} />
         )}
         {!isEditing && (
            <Button
               className="h-auto w-full justify-start px-2 py-1.5 text-sm text-muted-foreground"
               size="sm"
               variant="ghost"
               onClick={enableEditing}
            >
               <PlusIcon className="mr-2 h-5 w-5" />
               Add A Card
            </Button>
         )}
      </div>
   );
};

type CardEditingTitleFormProps = {
   boardId: string;
   listId: string;
   disableEditing: () => void;
};

CardForm.CardEditingTitleForm = function CardEditingTitleForm({ boardId, listId, disableEditing }: CardEditingTitleFormProps) {
   return (
      <EditingTitleForm
         id={`${boardId}|${listId}`}
         placeholder="Enter A Title For This Card..."
         schema={schema}
         action={createCard}
         useTextareaField
         disableEditing={disableEditing}
         texts={{ button: "Add Card" }}
         styles={{
            form: "rounded-md",
            button: "text-xs w-auto w-full px-4 mt-2",
         }}
      />
   );
};
