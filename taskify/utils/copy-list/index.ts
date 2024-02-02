"use server";
import { ENTITY_TYPE, ACTION } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const copyList = async ({ boardId, listId }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const list = await prisma.list.findFirst({ where: { id: listId, boardId }, include: { cards: true } });
      if (!list) return { error: "List Not Found." };

      const lastList = await prisma.list.findFirst({
         where: { boardId },
         orderBy: { order: "desc" },
         select: { order: true },
      });

      const coppied = list.cards.map(({ title, description, order }) => ({ title, description, order }));
      const copyCards = list.cards.length ? { createMany: { data: coppied } } : undefined;

      const copiedList = await prisma.list.create({
         data: {
            boardId,
            title: `${list.title} - Copy`,
            order: lastList ? lastList.order + 1 : 1,
            cards: copyCards,
         },
         include: { cards: true },
      });

      await createActivity({
         entityId: copiedList.id,
         entityTitle: copiedList.title,
         entityType: ENTITY_TYPE.LIST,
         action: ACTION.COPY,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `List "${list.title} Coppied."` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The List Wasn't Coppied" };
   }
};
