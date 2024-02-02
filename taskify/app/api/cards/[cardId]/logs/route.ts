import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { prisma } from "@/utils";
import { ENTITY_TYPE } from "@prisma/client";

type Params = {
   params: { cardId: string };
};

export const GET = async (req: Request, { params }: Params) => {
   try {
      const { cardId } = params;
      if (cardId === "undefined")
         return new NextResponse(JSON.stringify({ error: "Unauthorized, Please Login First" }), { status: 400 });

      const { userId, orgId } = auth();
      if (!userId || !orgId)
         return new NextResponse(JSON.stringify({ error: "Unauthorized, Please Login First" }), { status: 400 });

      const activities = await prisma.activity.findMany({
         where: { orgId, entityId: cardId, entityType: ENTITY_TYPE.CARD },
         orderBy: { createdAt: "desc" },
         take: 3,
      });

      return NextResponse.json({ data: activities, status: 200 });
   } catch (error) {
      console.log(error);
      return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 404 });
   }
};
