import { Suspense } from "react";
import { prisma } from "@/utils";

import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

const OrganizationId = async () => {
   const boards = await prisma.board.findMany();

   return (
      <section className="mb-20 w-full">
         <Info />

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
