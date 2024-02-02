"use server";

import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const updateBoard = async ({ id: boardId, title }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      let board = await prisma?.board.update({ where: { id: boardId, orgId }, data: { title } });

      await createActivity({
         entityId: board.id,
         entityTitle: board.title,
         entityType: ENTITY_TYPE.BOARD,
         action: ACTION.UPDATE,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Board "${board.title}" Updated.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Board Wasn't Updated" };
   }
};
