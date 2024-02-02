"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { InputType } from "./types";

export const updateCardOrder = async ({ boardId, items }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const transaction = items.map((card) => {
         return prisma.card.update({
            where: { id: card.id, list: { board: { orgId } } },
            data: { order: card.order, listId: card.listId },
         });
      });

      await prisma.$transaction(transaction);

      revalidatePath(`/board/${boardId}`);
      return { success: "Card Order Was Updated." };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, Card Order Wasn't Updated." };
   }
};
