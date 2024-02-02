import { MoreHorizontalIcon, XCircleIcon } from "lucide-react";
import { List } from "@prisma/client";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { AddCardForm } from "../card/add-card";
import { CopyListForm } from "./copy-list";
import { DeleteListForm } from "./delete-list";

type ListOptionsProps = {
   list: List;
};

export const ListOptions = ({ list }: ListOptionsProps) => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button variant="ghost" className="h-auto w-auto p-2">
               <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
         </PopoverTrigger>

         <PopoverContent className="relative px-0" align="center" side="bottom">
            <h3 className="pb-4 text-center text-sm font-medium text-neutral-600">List Action</h3>

            <PopoverClose className="absolute right-2 top-2">
               <XCircleIcon className="h-5 w-5 text-neutral-600" />
            </PopoverClose>

            <AddCardForm />
            <Separator className="bg-gray-400" />

            <CopyListForm boardId={list.boardId} listId={list.id} />
            <Separator className="bg-gray-400" />

            <DeleteListForm listId={list.id} boardId={list.boardId} />
         </PopoverContent>
      </Popover>
   );
};
