"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import { CreditCardIcon } from "lucide-react";
import Image from "next/image";

type InfoProps = {
   isPremium: boolean;
};

export const Info = ({ isPremium }: InfoProps) => {
   const { organization, isLoaded } = useOrganization();

   if (!isLoaded) return <Info.Loading />;

   return (
      <div className="flex-start">
         <div className="relative h-16 w-16">
            <Image src={organization?.imageUrl!} alt="organization" fill className="rounded-md object-cover" />
         </div>
         <div className="space-y-1">
            <div className="">
               <p className="text-xl font-semibold">{organization?.name}</p>
               <div className="flex items-center text-xs text-muted-foreground">
                  <CreditCardIcon className="mr-1 h-3 w-3" />
                  {isPremium ? "Premium" : "Free"}
               </div>
            </div>
         </div>
      </div>
   );
};

Info.Loading = function Loading() {
   return (
      <div className="flex-start">
         <div className="relative h-16 w-16">
            <Skeleton className="absolute h-full w-full bg-neutral-400" />
         </div>
         <div className="space-y-2">
            <Skeleton className="h-10 w-[200px] bg-neutral-400" />
            <div className="flex items-center">
               <Skeleton className="mr-2 h-4 w-4 bg-neutral-400" />
               <Skeleton className="h-4 w-[100px] bg-neutral-400" />
            </div>
         </div>
      </div>
   );
};
