import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils";
import { MAX_FREE_ORGLIMITS } from "@/configs";

export const incAvailableCount = async () => {
   const { orgId } = auth();
   if (!orgId) throw new Error("Unauthorized, Please Login First");

   const orgLimit = await prisma.orgLimit.findUnique({ where: { orgId } });

   if (orgLimit) {
      await prisma.orgLimit.update({ where: { orgId }, data: { count: orgLimit.count + 1 } });
   } else {
      await prisma.orgLimit.create({ data: { orgId, count: 1 } });
   }
};

export const decAvailableCount = async () => {
   const { orgId } = auth();
   if (!orgId) throw new Error("Unauthorized, Please Login First");

   const orgLimit = await prisma.orgLimit.findUnique({ where: { orgId } });

   if (orgLimit) {
      await prisma.orgLimit.update({
         where: { orgId },
         data: { count: orgLimit.count > 0 ? orgLimit.count - 1 : 0 },
      });
   } else {
      await prisma.orgLimit.create({
         data: { orgId, count: 1 },
      });
   }
};

export const hasAvailableCount = async () => {
   const { orgId } = auth();
   if (!orgId) throw new Error("Unauthorized, Please Login First");

   const orgLimit = await prisma.orgLimit.findUnique({ where: { orgId } });
   return Boolean(!orgLimit || orgLimit.count < MAX_FREE_ORGLIMITS);
};

export const getAvailableCount = async () => {
   const { orgId } = auth();
   if (!orgId) return 0;

   const orgLimit = await prisma.orgLimit.findUnique({ where: { orgId } });
   return orgLimit?.count || 0;
};
