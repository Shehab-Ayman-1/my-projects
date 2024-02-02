import type { Activity } from "@prisma/client";
import { ActivityIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { ActivityList } from "./_components/activity-list";

type ModelActivityProps = {
   activities: Activity[];
};

export const ModalActivity = ({ activities }: ModelActivityProps) => {
   return (
      <div className="flex w-full items-start gap-3">
         <ActivityIcon className="mt-0.5 h-5 w-5 text-neutral-700" />

         <div className="w-full">
            <p className="mb-2 font-semibold text-neutral-700">Activity</p>

            <ActivityList activities={activities} />
         </div>
      </div>
   );
};

ModalActivity.Loading = function Loading() {
   return (
      <div className="flex w-full items-start gap-3">
         <Skeleton className="h-6 w-6 bg-neutral-400" />
         <div className="w-full space-y-2">
            <Skeleton className="h-6 w-24 bg-neutral-400" />
            <Skeleton className="h-10 w-full bg-neutral-400" />
         </div>
      </div>
   );
};
