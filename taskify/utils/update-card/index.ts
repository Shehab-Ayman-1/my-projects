"use server";

import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const updateCard = async ({ id, title, description }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const [boardId, listId, cardId] = id.split("|");
      let card = await prisma?.card.update({
         where: {
            id: cardId,
            list: { id: listId, board: { id: boardId, orgId } },
         },
         data: { title, description },
      });

      await createActivity({
         entityId: card.id,
         entityTitle: card.title,
         entityType: ENTITY_TYPE.CARD,
         action: ACTION.UPDATE,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Card "${card.title}" Updated.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Card Wasn't Updated" };
   }
};
