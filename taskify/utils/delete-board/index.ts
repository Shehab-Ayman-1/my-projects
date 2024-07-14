"use server";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { decAvailableCount } from "@/utils/subscriptions/org-limits";
import { createActivity } from "@/utils/create-activity";
import { prisma } from "@/utils";
import { InputType } from "./types";

export async function deleteBoard({ boardId }: InputType) {
   const { userId, orgId } = auth();
   if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

   try {
      const board = await prisma.board.delete({ where: { id: boardId, orgId } });

      const isPremium = await checkSubscription();
      if (!isPremium) await decAvailableCount();

      await createActivity({
         entityId: board.id,
         entityTitle: board.title,
         entityType: ENTITY_TYPE.BOARD,
         action: ACTION.DELETE,
      });
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, Board Wasn't Deleted." };
   }

   revalidatePath(`/organizations/${orgId}`);
   redirect(`/organizations/${orgId}`);
}
