"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils";

import { InputType } from "./types";

export const createCard = async ({ id, title }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };
      if (!id) return { error: "Board OR List Not Found" };

      const [boardId, listId] = id.split("|");

      const list = await prisma.list.findUnique({ where: { id: listId } });
      if (!list) return { error: "List Not Found." };

      const lastCard = await prisma.card.findFirst({
         where: { listId },
         orderBy: { order: "desc" },
         select: { order: true },
      });

      const card = await prisma.card.create({
         data: { title, listId, order: lastCard?.order ? lastCard.order + 1 : 1 },
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Card "${card.title.slice(0, 10)}" Was Created.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, Card Wasn't Created." };
   }
};
