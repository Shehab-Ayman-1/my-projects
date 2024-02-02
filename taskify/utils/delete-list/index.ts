"use server";

import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const deleteList = async ({ boardId, listId }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      let list = await prisma.list.delete({ where: { boardId, id: listId } });

      await createActivity({
         entityId: list.id,
         entityTitle: list.title,
         entityType: ENTITY_TYPE.LIST,
         action: ACTION.DELETE,
      });

      revalidatePath(`/board/${list.boardId}`);
      return { success: `List "${list.title}" Deleted.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The List Wasn't Deleted" };
   }
};
