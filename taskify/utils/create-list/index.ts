"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils";

import { InputType } from "./types";

export const createList = async ({ id: boardId, title }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };
      if (!boardId) return { error: "Board Not Found" };

      const lastList = await prisma.list.findFirst({
         where: { boardId },
         orderBy: { order: "desc" },
         select: { order: true },
      });

      const order = lastList ? lastList.order + 1 : 1;
      const list = await prisma.list.create({ data: { boardId, title, order } });

      revalidatePath(`/board/${boardId}`);
      return { success: `List "${list.title}" Was Created.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, List Wasn't Created." };
   }
};
