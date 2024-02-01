import { XCircleIcon } from "lucide-react";

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CreateBoard } from "./create-board";

type FormPopoverProps = {
   side?: "top" | "bottom" | "left" | "right";
   align?: "start" | "center" | "end";
   sideOffset?: number;
   children: React.ReactNode;
};

export const FormPopover = ({ side = "bottom", align, sideOffset = 0, children }: FormPopoverProps) => {
   return (
      <Popover>
         <PopoverTrigger asChild>{children}</PopoverTrigger>

         <PopoverContent align={align} side={side} sideOffset={sideOffset} className="w-80 pt-3">
            <p className="pb-4 text-center text-sm font-bold text-neutral-900">Create Board</p>

            <PopoverClose className="absolute right-2 top-2" asChild>
               <Button className="h-auto w-auto border-none p-2 text-neutral-600" variant="ghost" size="icon">
                  <XCircleIcon className="h-4 w-4" />
               </Button>
            </PopoverClose>

            <CreateBoard />
         </PopoverContent>
      </Popover>
   );
};
