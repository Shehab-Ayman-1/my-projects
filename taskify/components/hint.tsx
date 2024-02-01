import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type HintProps = {
   description: string;
   side?: "right" | "left" | "top" | "bottom";
   sideOffset?: number;
   children: React.ReactNode;
};

export const Hint = ({ description, side = "bottom", sideOffset = 0, children }: HintProps) => {
   return (
      <TooltipProvider>
         <Tooltip delayDuration={0}>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent
               side={side}
               sideOffset={sideOffset}
               className="max-w-[220px] whitespace-normal text-xs"
            >
               {description}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};
