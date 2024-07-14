"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { stripeRedirect } from "@/utils/subscriptions";
import { usePremiumModal } from "@/hooks/usePremiumModal";
import { toast } from "sonner";

type SubscriptionBtnProps = {
   isPremium: boolean;
};

export const SubscriptionBtn = ({ isPremium }: SubscriptionBtnProps) => {
   const { onOpen } = usePremiumModal((state) => state);
   const [loading, setloading] = useState(false);

   const handleSubmit = async () => {
      setloading(true);

      if (!isPremium) return onOpen();

      const { success, error, url } = await stripeRedirect();
      if (success) {
         toast.success(success, { style: { background: "green", color: "white" } });
         window.location.href = url;
      } else {
         toast.error(error, { style: { background: "red", color: "white" } });
      }

      setloading(false);
   };

   return (
      <Button disabled={loading} onClick={handleSubmit}>
         {isPremium ? "Manage Subscription" : "Upgrade To Pro"}
      </Button>
   );
};
