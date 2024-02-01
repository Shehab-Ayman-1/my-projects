"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { prisma } from "@/utils";
import { InputType } from "./types";

export async function deleteBoard({ boardId }: InputType) {
   const { userId, orgId } = auth();
   if (!userId || !orgId) return { error: "Unauthorized, Please Login First" };

   try {
      await prisma.board.delete({ where: { id: boardId, orgId } });
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, Board Wasn't Deleted." };
   }

   revalidatePath(`/organizations/${orgId}`);
   redirect(`/organizations/${orgId}`);
}
