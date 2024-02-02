"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@radix-ui/react-accordion";
import { NavItem, Organization } from "./nav-item";
import { useCallback } from "react";

type SidebarProps = {
   storageKey?: string;
};

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
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

   if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading)
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

   return (
      <aside className="">
         <div className="flex-start mb-1 text-sm font-medium">
            <h3 className="text-base font-bold">Workspaces</h3>

            <Button type="button" size="icon" variant="ghost" className="ml-auto" asChild>
               <Link href="/select-org">
                  <PlusIcon className="h-4 w-4" />
               </Link>
            </Button>
         </div>

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
      </aside>
   );
};
