import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils";
import { DAY_IN_MS } from "@/configs";

export const checkSubscription = async () => {
   const { orgId } = auth();
   if (!orgId) return false;

   const orgSubscription = await prisma.subscription.findUnique({
      where: { orgId },
      select: {
         stripeSubscriptionId: true,
         stripeCurrentPeriodEnd: true,
         stripeCustomerId: true,
         stripePriceId: true,
      },
   });

   if (!orgSubscription) return false;

   const isValidPrice = orgSubscription.stripePriceId;
   const isValidPeriod = orgSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();
   const isValid = isValidPrice && isValidPeriod;

   return !!isValid;
};
