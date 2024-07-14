import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";

import { Sidebar } from "@/app/(platform)/(dashboard)/_components/sidebar";
import { checkSubscription } from "@/utils/subscriptions/subscriptions";

export async function generateMetadata() {
   const { orgSlug } = auth();

   return {
      title: startCase(orgSlug || "Organizations"),
   };
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
   const isPremium = await checkSubscription();

   return (
      <main className="h-full px-4 pb-5 pt-20">
         <div className="flex-between h-full items-start">
            <div className="hidden h-full w-64 shrink-0 md:block">
               <Sidebar isPremium={isPremium} />
            </div>
            <div className="w-full">{children}</div>
         </div>
      </main>
   );
};

export default Layout;
