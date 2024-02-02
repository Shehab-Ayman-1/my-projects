"use server";
import { ENTITY_TYPE, ACTION } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const copyBoard = async ({ boardId }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const board = await prisma.board.findFirst({
         where: { id: boardId, orgId },
         include: { lists: true },
      });
      if (!board) return { error: "Board Not Found." };

      const coppied = board.lists.map(({ title, order }) => ({ title, order }));
      const copyLists = board.lists.length ? { createMany: { data: coppied } } : undefined;

      const copiedBoard = await prisma?.board.create({
         data: {
            title: `${board.title}-copy-${new Date().getTime()}`,
            orgId,
            imageId: board.imageId,
            imageThumbUrl: board.imageThumbUrl,
            imageFullUrl: board.imageFullUrl,
            imageUsername: board.imageUsername,
            imageLinkHtml: board.imageLinkHtml,
            lists: copyLists,
         },
         include: { lists: true },
      });

      await createActivity({
         entityId: copiedBoard.id,
         entityTitle: copiedBoard.title,
         entityType: ENTITY_TYPE.BOARD,
         action: ACTION.COPY,
      });

      revalidatePath(`/board/${boardId}`);
      return { success: `Board "${board.title}" Copied.` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Board Wasn't Coppied" };
   }
};
