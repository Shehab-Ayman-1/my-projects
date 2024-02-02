import type { Board } from "@prisma/client";
import { HelpCircleIcon, User2Icon } from "lucide-react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";
import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { prisma } from "@/utils";
import { BoardCard } from "./board";

export const BoardList = async () => {
   const { orgId } = auth();
   if (!orgId) return redirect("/select-org");

   const boards = await prisma?.board.findMany({ where: { orgId }, orderBy: { createdAt: "desc" } });

   return (
      <div className="space-y-4">
         <div className="flex-start text-lg font-semibold text-neutral-700">
            <User2Icon className="h-6 w-6" />
            Your Boards
         </div>

         <div className="md:grid-cols:4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <FormPopover sideOffset={10} side="right">
               <div
                  role="button"
                  className="flex-center relative aspect-video h-full w-full flex-col gap-y-1 rounded-md bg-muted-foreground/10 text-slate-500 shadow-sm transition hover:bg-muted-foreground/15"
               >
                  <p>Create New Board</p>
                  <span className="text-xs text-slate-500">5 Remaining</span>
                  <Hint description="Free Workspaces Can Have Up To 5 Open Boards. For Unlimited Boards Upgrade This Wordspace.">
                     <HelpCircleIcon className="absolute bottom-2 right-2 h-4 w-4" />
                  </Hint>
               </div>
            </FormPopover>

            {boards?.map((board: Board) => <BoardCard key={board.id} {...board} />)}
         </div>
      </div>
   );
};

BoardList.Skeleton = function BoardListSkeleton() {
   return (
      <div className="md:grid-cols:4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
         <Skeleton className="aspect-video h-full w-full bg-neutral-400 p-2" />
      </div>
   );
};
