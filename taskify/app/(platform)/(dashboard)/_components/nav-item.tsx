import { ActivityIcon, CreditCardIcon, LayoutIcon, SettingsIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

export type Organization = {
   id: string;
   name: string;
   imageUrl: string;
   slug: string;
};

type NavItemProps = {
   isActive: boolean;
   isExpended: boolean;
   organization: Organization;
   onExpend: (id: string) => void;
};

const NavItemFn = ({ isActive, isExpended, organization, onExpend }: NavItemProps) => {
   const router = useRouter();
   const pathname = usePathname();

   const routes = [
      {
         label: "Board",
         icon: <LayoutIcon className="mr-2 h-5 w-5" />,
         href: `/organizations/${organization.id}`,
      },
      {
         label: "Activity",
         icon: <ActivityIcon className="mr-2 h-5 w-5" />,
         href: `/organizations/${organization.id}/activity`,
      },
      {
         label: "Settings",
         icon: <SettingsIcon className="mr-2 h-5 w-5" />,
         href: `/organizations/${organization.id}/settings`,
      },
      {
         label: "Billing",
         icon: <CreditCardIcon className="mr-2 h-5 w-5" />,
         href: `/organizations/${organization.id}/billing`,
      },
   ];

   const navigate = (href: string) => {
      router.push(href);
   };

   return (
      <AccordionItem value={organization.id} className="border-none">
         <AccordionTrigger
            className={cn(
               "flex-start w-full gap-2 rounded-md p-1.5 text-neutral-700 no-underline transition hover:bg-neutral-500/10 hover:no-underline",
               isActive && !isExpended && "bg-sky-500/10 text-sky-700",
            )}
            onClick={() => onExpend(organization.id)}
         >
            <div className="flex-start">
               <div className="relative h-7 w-7">
                  <Image src={organization.imageUrl} alt="orgImg" className="rounded-sm object-cover" fill />
               </div>
               <span className="text-sm font-medium">{organization.name}</span>
            </div>
         </AccordionTrigger>

         <AccordionContent>
            {routes.map(({ label, icon, href }) => (
               <Button
                  key={label}
                  size="icon"
                  variant="ghost"
                  asChild
                  onClick={() => navigate(href)}
                  className={cn(
                     "mb-1 w-full justify-start pl-10 font-normal",
                     pathname === href && "bg-key-500/10 text-sky-700",
                  )}
               >
                  <Link href={href}>
                     {icon}
                     {label}
                  </Link>
               </Button>
            ))}
         </AccordionContent>
      </AccordionItem>
   );
};

export const NavItem = memo(NavItemFn);
