"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { InputType } from "./types";

export const updateListOrder = async ({ boardId, items }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const transaction = items.map((list) => {
         return prisma.list.update({ where: { id: list.id, board: { orgId } }, data: { order: list.order } });
      });

      await prisma.$transaction(transaction);

      revalidatePath(`/board/${boardId}`);
      return { success: "List Order Was Updated." };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, List Order Wasn't Updated." };
   }
};
