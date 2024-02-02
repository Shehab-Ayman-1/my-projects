import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { prisma } from "@/utils";

interface Props {
   entityId: string;
   entityType: ENTITY_TYPE;
   entityTitle: string;
   action: ACTION;
}

export const createActivity = async ({ entityId, entityType, entityTitle, action }: Props) => {
   try {
      const { orgId } = auth();
      const user = await currentUser();
      if (!user || !orgId) throw new Error("User Not Found!");

      const username = `${user.firstName} ${user.lastName}`;
      const userImage = user.imageUrl;
      const userId = user.id;

      await prisma.activity.create({
         data: { orgId, userId, username, userImage, entityId, entityType, entityTitle, action },
      });
   } catch (error) {
      console.log(`ACTIVITY: `, error);
   }
};
