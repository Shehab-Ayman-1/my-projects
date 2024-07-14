"use server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { hasAvailableCount, incAvailableCount } from "@/utils/subscriptions/org-limits";
import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export const createBoard = async ({ title, image }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      // Check If Available To Create New Board
      const canCreate = await hasAvailableCount();
      const isPremium = await checkSubscription();
      if (!canCreate && !isPremium)
         return { error: "You Have Reached Your Limit Of Free Boards, Please Upgrade To A Premium Plan." };

      // Create A New Board Now
      const [imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUsername] = image.split("|");

      if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUsername)
         return { error: "Missing Image, Failed To Create The Board." };

      const exist = await prisma.board.findFirst({ where: { title } });
      if (exist) return { error: "This Board Is Already Exist." };

      let board = await prisma?.board.create({
         data: { title, orgId, imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUsername },
      });

      // Increament The AvailableCount And Create New Activity
      if (!isPremium) await incAvailableCount();

      await createActivity({
         entityId: board.id,
         entityTitle: board.title,
         entityType: ENTITY_TYPE.BOARD,
         action: ACTION.CREATE,
      });

      revalidatePath(`/board/${board?.id}`);
      return { boardId: board.id, success: `Board "${board.title} Was Created."` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Board Wasn't Created" };
   }
};
