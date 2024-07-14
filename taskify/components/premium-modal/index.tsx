"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePremiumModal } from "@/hooks/usePremiumModal";
import { stripeRedirect } from "@/utils/subscriptions";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/images/hero.svg";

export const PremiumModal = () => {
   const { isOpen, onClose } = usePremiumModal((state) => state);
   const [loading, setLoading] = useState(false);

   const onSubmit = async () => {
      setLoading(true);
      const { success, error, url } = await stripeRedirect();

      if (success) {
         window.location.href = url;
      } else {
         toast.error(error, { style: { background: "red", color: "white" } });
      }

      setLoading(false);
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="max-w-md overflow-hidden p-0">
            <div className="flex-center relative aspect-video">
               <Image src={HeroImage.src} alt="hero image" className="object-cover" fill />
            </div>
            <div className="mx-auto space-y-6 p-6 text-neutral-700">
               <h2 className="text-xl font-semibold">Upgrade To Taskify Premium Today!</h2>
               <p className="text-xs font-semibold text-neutral-600">Explore The Best Of Taskify</p>
               <div className="pl-3">
                  <ul className="list-disc text-sm">
                     <li>Unlimited Boards</li>
                     <li>Advances Checklists</li>
                     <li>Admin And Security</li>
                     <li>And More!</li>
                  </ul>
               </div>
               <Button size="lg" className="w-full uppercase" disabled={loading} onClick={onSubmit}>
                  Upgrade
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
};
