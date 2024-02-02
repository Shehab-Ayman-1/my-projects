"use client";
import type { List } from "@prisma/client";
import { useState } from "react";

import { updateList } from "@/utils/update-list";
import { schema } from "@/utils/update-list/schema";
import { Button } from "@/components/ui/button";

import { ListWrapper } from "./list-wrapper";
import { ListOptions } from "./list-options";
import { EditingTitleForm } from "@/components/form/editing-title";

type ListHeaderProps = {
   list: List;
};

export const ListHeader = ({ list }: ListHeaderProps) => {
   const [isEditing, setIsEditing] = useState(false);

   const enableEditing = () => {
      setIsEditing(true);
   };

   const disableEditing = () => {
      setIsEditing(false);
   };

   if (isEditing) return <ListHeader.EditableForm id={list.id} title={list.title} disable={disableEditing} />;

   return (
      <div className="flex-start h-10 p-2 text-sm font-semibold">
         <Button className="w-full justify-start text-sm text-black" variant="transparent" onClick={enableEditing}>
            {list.title}
         </Button>
         <ListOptions list={list} />
      </div>
   );
};

type EditableFormProps = {
   id: string;
   title: string;
   disable: () => void;
};

ListHeader.EditableForm = function EditableForm({ id, title, disable }: EditableFormProps) {
   return (
      <ListWrapper>
         <EditingTitleForm
            id={id}
            title={title}
            placeholder="Enter A List Name"
            schema={schema}
            action={updateList}
            disableEditing={disable}
            styles={{
               form: "bg-white rounded-md",
               inputContainer: "p-1 h-10",
               input: "text-black text-sm px-1 placeholder:text-sm",
            }}
         />
      </ListWrapper>
   );
};
