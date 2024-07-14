import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { Separator } from "@/components/ui/separator";

import { SubscriptionBtn } from "./subscription-btn";
import { Info } from "../_components/info";

type BillingProps = {};

const Billing = async ({}: BillingProps) => {
   const isPremium = await checkSubscription();

   return (
      <div className="">
         <Info isPremium={isPremium} />
         <Separator className="my-2 h-1 bg-gray-300" />

         <SubscriptionBtn isPremium={isPremium} />
      </div>
   );
};

export default Billing;
