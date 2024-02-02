import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { prisma } from "@/utils";

type Params = {
   cardId: string;
};

export const GET = async (req: Request, { params }: { params: Params }) => {
   try {
      const { cardId } = params;
      if (cardId === "undefined")
         return new NextResponse(JSON.stringify({ error: "Card Not Found.", status: 400 }));

      const { userId, orgId } = auth();
      if (!userId || !orgId)
         return new NextResponse(JSON.stringify({ error: "Not Authorized, Login First.", status: 400 }));

      const card = await prisma.card.findUnique({
         where: {
            id: cardId,
            list: { board: { orgId } },
         },
         include: { list: { select: { title: true } } },
      });

      return NextResponse.json({ data: card, status: 200 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Internal Server Error", status: 404 }, { status: 404 });
   }
};
