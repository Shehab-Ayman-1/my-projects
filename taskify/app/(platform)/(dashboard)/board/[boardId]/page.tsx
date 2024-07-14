import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { ListContainer } from "./_components/list/list-container";

type BoardIdProps = {
   params: { boardId: string };
};

const BoardId = async ({ params }: BoardIdProps) => {
   const { orgId } = auth();

   const lists = await prisma.list.findMany({
      where: {
         boardId: params.boardId,
         board: { orgId: orgId! },
      },
      include: {
         cards: {
            orderBy: {
               order: "asc",
            },
         },
      },
      orderBy: {
         order: "asc",
      },
   });

   return <ListContainer boardId={params.boardId} lists={lists} />;
};

export default BoardId;
