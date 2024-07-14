"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { stripeRedirect } from "@/utils/subscriptions";
import { NavItem, Organization } from "./nav-item";
import { Separator } from "@/components/ui/separator";

type SidebarProps = {
   storageKey?: string;
   isPremium: boolean;
};

export const Sidebar = ({ isPremium, storageKey = "t-sidebar-state" }: SidebarProps) => {
   const [loading, setLoading] = useState(false);

   const [expended, setExpended] = useLocalStorage<Record<string, any>>(storageKey, {});

   const { organization: activeOrganization, isLoaded: isLoadedOrg } = useOrganization();

   const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
      userMemberships: { infinite: true },
   });

   const defaultAccordionValue = Object.keys(expended).reduce((acc: string[], key) => {
      if (expended[key]) acc.push(key);
      return acc;
   }, []);

   const onExpend = useCallback(
      (id: string) => {
         setExpended((expended) => ({ ...expended, [id]: !expended[id] }));
      },
      [setExpended],
   );

   const handleSubmit = async () => {
      setLoading(true);
      const { success, error, url } = await stripeRedirect();
      if (success) {
         toast.success(success, { style: { background: "green", color: "white" } });
         window.location.href = url;
      } else {
         toast.error(error, { style: { background: "red", color: "white" } });
      }
      setLoading(false);
   };

   if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) return <Sidebar.Loading />;

   return (
      <aside className="flex-between h-full flex-col">
         <div className="w-full">
            <div className="flex-start mb-1 text-sm font-medium">
               <h3 className="text-base font-bold">Workspaces</h3>

               <Button type="button" size="sm" variant="ghost" className="ml-auto mr-1.5 p-0" asChild>
                  <Link href="/select-org">
                     <PlusIcon className="h-4 w-4" />
                  </Link>
               </Button>
            </div>

            <Separator className="mb-4 h-0.5 bg-gray-300" />

            <Accordion type="multiple" defaultValue={defaultAccordionValue} className="space-y-2">
               {userMemberships.data.map(({ organization }) => (
                  <NavItem
                     key={organization.id}
                     isActive={activeOrganization?.id === organization.id}
                     isExpended={expended[organization.id]}
                     organization={organization as Organization}
                     onExpend={onExpend}
                  />
               ))}
            </Accordion>
         </div>

         {!isPremium && (
            <Button size="lg" disabled={loading} className="w-full" onClick={handleSubmit}>
               Upgrade To Premium
            </Button>
         )}
      </aside>
   );
};

Sidebar.Loading = function Loading() {
   return (
      <div className="space-y-2">
         <div className="flex-between">
            <Skeleton className="h-10 w-1/2 bg-neutral-400" />
            <Skeleton className="h-10 w-10 bg-neutral-400" />
         </div>

         <div className="flex-between">
            <Skeleton className="h-10 w-10 shrink-0 bg-neutral-400" />
            <Skeleton className="h-10 w-full bg-neutral-400" />
         </div>

         <div className="flex-between">
            <Skeleton className="h-10 w-10 shrink-0 bg-neutral-400" />
            <Skeleton className="h-10 w-full bg-neutral-400" />
         </div>

         <div className="flex-between">
            <Skeleton className="h-10 w-10 shrink-0 bg-neutral-400" />
            <Skeleton className="h-10 w-full bg-neutral-400" />
         </div>
      </div>
   );
};
