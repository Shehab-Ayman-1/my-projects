"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { InputType } from "./types";
import { createActivity } from "../create-activity";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

export const deleteCard = async ({ boardId, listId, cardId }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      let card = await prisma.card.delete({ where: { id: cardId, list: { id: listId, board: { id: boardId } } } });

      await createActivity({
         entityId: card.id,
         entityTitle: card.title,
         entityType: ENTITY_TYPE.CARD,
         action: ACTION.DELETE,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Card "${card.title}" Deleted.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Card Wasn't Deleted" };
   }
};
