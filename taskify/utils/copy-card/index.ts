"use server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const copyCard = async ({ boardId, listId, cardId }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const cardToCopy = await prisma.card.findUnique({
         where: { id: cardId, list: { id: listId, board: { id: boardId, orgId } } },
      });
      if (!cardToCopy) return { error: "Card Not Found" };

      const lastCard = await prisma.card.findFirst({
         where: { listId: cardToCopy.listId },
         orderBy: { order: "desc" },
         select: { order: true },
      });

      const copiedCard = await prisma.card.create({
         data: {
            title: `${cardToCopy.title} - Copy`,
            description: cardToCopy.description,
            order: lastCard?.order ? lastCard.order + 1 : 1,
            listId: cardToCopy.listId,
         },
      });

      await createActivity({
         entityId: copiedCard.id,
         entityTitle: copiedCard.title,
         entityType: ENTITY_TYPE.CARD,
         action: ACTION.COPY,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Card "${cardToCopy.title}" Copied.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Card Wasn't Coppied" };
   }
};
