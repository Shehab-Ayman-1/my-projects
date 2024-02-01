import { startCase } from "lodash";
import { auth } from "@clerk/nextjs";
import { Sidebar } from "@/app/(platform)/(dashboard)/_components/sidebar";

export async function generateMetadata() {
   const { orgSlug } = auth();

   return {
      title: startCase(orgSlug || "Organizations"),
   };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className="px-4 pt-20">
         <div className="flex-around items-start">
            <div className="hidden h-full w-64 shrink-0 md:block">
               <Sidebar />
            </div>
            <div className="w-full">{children}</div>
         </div>
      </main>
   );
};

export default Layout;
