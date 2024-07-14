"use server";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { absoluteUrl, prisma } from "@/utils";
import { stripe } from "./stripe";

export const stripeRedirect = async () => {
   const { userId, orgId } = auth();
   const user = await currentUser();
   if (!userId || !orgId) return { error: "Unauthorized, Please Login First." };

   const settingUrl = absoluteUrl(`/organizations/${orgId}`);

   let url = "";

   try {
      const orgSubscription = await prisma.subscription.findUnique({ where: { orgId } });

      if (orgSubscription && orgSubscription.stripeCustomerId) {
         const stripeSession = await stripe.billingPortal.sessions.create({
            customer: orgSubscription.stripeCustomerId,
            return_url: settingUrl,
         });

         url = stripeSession.url;
      } else {
         const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingUrl,
            cancel_url: settingUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user?.emailAddresses[0].emailAddress,
            line_items: [
               {
                  quantity: 1,
                  price_data: {
                     currency: "USD",
                     product_data: {
                        name: "Taskify Premium",
                        description: "Unlimited Boards For Your Organization",
                     },
                     unit_amount: 2000,
                     recurring: {
                        interval: "month",
                     },
                  },
               },
            ],
            metadata: {
               orgId,
            },
         });

         url = stripeSession.url || "";
      }

      revalidatePath(`/organizations/${orgId}`);
      return { success: "Wait A Few Of Seconds, And Will Be Redirect", url };
   } catch (error) {
      console.log(error);
      return { error: "Something Has An Error, Failed To Redirect To Payment Page" };
   }
};
