import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { ActivityList as BoardActivityList } from "../../../../board/[boardId]/_components/card/card-modal/_components/activity-list";
import { prisma } from "@/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const ActivityList = async () => {
   const { orgId } = auth();
   if (!orgId) return redirect("/select-org");

   const activities = await prisma?.activity.findMany({ where: { orgId }, orderBy: { createdAt: "desc" } });

   return (
      <ol className="space-y-4">
         <div className="hidden text-center text-xs last:block">No Acctivities Found Inside This Organization</div>

         {activities?.length ? <BoardActivityList activities={activities} /> : <ActivityList.Loading />}
      </ol>
   );
};

ActivityList.Loading = function Loading() {
   return (
      <div className="space-y-3">
         <Skeleton className="h-14 w-[80%] bg-neutral-400" />
         <Skeleton className="h-14 w-[50%] bg-neutral-400" />
         <Skeleton className="h-14 w-[70%] bg-neutral-400" />
         <Skeleton className="h-14 w-[80%] bg-neutral-400" />
         <Skeleton className="h-14 w-[50%] bg-neutral-400" />
         <Skeleton className="h-14 w-[70%] bg-neutral-400" />
         <Skeleton className="h-14 w-[80%] bg-neutral-400" />
         <Skeleton className="h-14 w-[50%] bg-neutral-400" />
         <Skeleton className="h-14 w-[70%] bg-neutral-400" />
         <Skeleton className="h-14 w-[80%] bg-neutral-400" />
         <Skeleton className="h-14 w-[50%] bg-neutral-400" />
         <Skeleton className="h-14 w-[70%] bg-neutral-400" />
         <Skeleton className="h-14 w-[80%] bg-neutral-400" />
      </div>
   );
};
