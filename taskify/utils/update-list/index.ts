"use server";

import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const updateList = async ({ id: listId, title }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      let list = await prisma.list.update({ where: { id: listId }, data: { title } });

      await createActivity({
         entityId: list.id,
         entityTitle: list.title,
         entityType: ENTITY_TYPE.LIST,
         action: ACTION.UPDATE,
      });

      revalidatePath(`/board/${list.boardId}`);
      return { success: `List "${list.title}" Updated.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The List Wasn't Updated" };
   }
};
