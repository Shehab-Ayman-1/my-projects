"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { prisma } from "@/utils";
import { InputType } from "./types";

export const createBoard = async ({ title, image }: InputType) => {
   try {
      const { userId, orgId } = auth();
      if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

      const [imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUsername] = image.split("|");

      if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUsername)
         return { error: "Missing Image, Failed To Create The Board." };

      const exist = await prisma.board.findFirst({ where: { title } });
      if (exist) return { error: "This Board Is Already Exist." };

      let board = await prisma?.board.create({
         data: { title, orgId, imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUsername },
      });

      revalidatePath(`/board/${board?.id}`);
      return { boardId: board.id, success: `Board "${board.title} Was Created."` };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, The Board Wasn't Created" };
   }
};
