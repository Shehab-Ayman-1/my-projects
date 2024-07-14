import { Suspense } from "react";

import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";
import { Info } from "./_components/info";

const OrganizationId = async () => {
   const isPremium = await checkSubscription();

   return (
      <section className="mb-20 w-full">
         <Info isPremium={isPremium} />

         <Separator className="my-4 bg-gray-400" />

         <div className="px-2 md:px-4">
            <Suspense fallback={<BoardList.Skeleton />}>
               <BoardList />
            </Suspense>
         </div>
      </section>
   );
};

export default OrganizationId;
