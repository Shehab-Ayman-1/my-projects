import { MoreHorizontalIcon, XCircleIcon } from "lucide-react";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { CopyBoard } from "../board/copy-board";
import { DeleteBoard } from "../board/delete-board";

type NavbarOptionsProps = {
   boardId: string;
};

export const NavbarOptions = ({ boardId }: NavbarOptionsProps) => {
   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button className="h-auto w-auto p-2" size="icon" variant="transparent">
               <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
         </PopoverTrigger>

         <PopoverContent className="relative" side="bottom" align="start">
            <div className="">
               <h3 className="pb-4 text-center text-sm font-bold text-neutral-600">Board Options!</h3>

               <PopoverClose asChild className="absolute-top-right">
                  <Button variant="ghost" size="icon" className="h-auto w-auto p-2">
                     <XCircleIcon className="h-5 w-5" />
                  </Button>
               </PopoverClose>
            </div>

            <CopyBoard boardId={boardId} />
            <Separator className="bg-neutral-400" />

            <DeleteBoard boardId={boardId} />
         </PopoverContent>
      </Popover>
   );
};
