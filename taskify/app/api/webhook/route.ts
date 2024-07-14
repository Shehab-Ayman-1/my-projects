import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

import { prisma } from "@/utils";
import { stripe } from "@/utils/subscriptions/stripe";

export async function POST(req: Request) {
   try {
      const body = await req.text();
      const signature = headers().get("stripe-signature") as string;

      const event: Stripe.Event = stripe.webhooks.constructEvent(
         body,
         signature,
         process.env.STRIPE_WEBHOOK_SECRET!,
      );

      if (!event)
         return new NextResponse(JSON.stringify({ error: "Payment Has An Error", status: 400 }), { status: 400 });

      const session = event.data.object as Stripe.Checkout.Session;

      if (event.type === "checkout.session.completed") {
         const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

         if (!session?.metadata?.orgId)
            return new NextResponse(JSON.stringify({ error: "Organization ID Is required", status: 400 }), {
               status: 400,
            });

         await prisma.subscription.create({
            data: {
               orgId: session?.metadata?.orgId,
               stripeSubscriptionId: subscription.id,
               stripeCustomerId: subscription.customer as string,
               stripePriceId: subscription.items.data[0].price.id,
               stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
         });
      }

      if (event.type === "invoice.payment_succeeded") {
         const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

         await prisma.subscription.update({
            where: {
               stripeSubscriptionId: subscription.id,
            },
            data: {
               stripePriceId: subscription.items.data[0].price.id,
               stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
         });
      }

      return new NextResponse(null, { status: 200 });
   } catch (error) {
      return new NextResponse(JSON.stringify({ error: "Webhook Error", status: 404 }));
   }
}
