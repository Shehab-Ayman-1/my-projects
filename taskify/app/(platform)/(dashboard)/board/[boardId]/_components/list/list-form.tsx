"use client";
import { PlusIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import { EditingTitleForm } from "@/components/form/editing-title";
import { Button } from "@/components/ui/button";
import { schema } from "@/utils/create-list/schema";
import { createList } from "@/utils/create-list";

import { ListWrapper } from "./list-wrapper";

type ListFormProps = {};

export const ListForm = ({}: ListFormProps) => {
   const [isEditing, setIsEditing] = useState(false);

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   if (isEditing) return <ListForm.EditableForm disableEditing={disableEditing} />;

   return (
      <ListWrapper>
         <Button
            className="flex-start h-10 w-full justify-start rounded-md bg-secondary/70 hover:bg-secondary/80"
            variant="secondary"
            onClick={enableEditing}
         >
            <PlusIcon className="h-4 w-4" />
            Add A List
         </Button>
      </ListWrapper>
   );
};

ListForm.EditableForm = function EditableForm({ disableEditing }: { disableEditing: () => void }) {
   const { boardId } = useParams();

   return (
      <ListWrapper>
         <EditingTitleForm
            id={boardId as string}
            placeholder="Enter A List Name"
            schema={schema}
            action={createList}
            disableEditing={disableEditing}
            styles={{
               form: "bg-white rounded-md",
               inputContainer: "p-1 h-10",
               input: "text-black text-sm px-1 placeholder:text-sm",
               button: "text-xs",
            }}
         />
      </ListWrapper>
   );
};
