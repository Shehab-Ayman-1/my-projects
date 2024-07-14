import { OrganizationProfile } from "@clerk/nextjs";
import { Fragment } from "react";

import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";

const Settings = async () => {
   const isPremium = await checkSubscription();

   return (
      <Fragment>
         <Info isPremium={isPremium} />

         <Separator className="mb-10 mt-4 h-1 bg-gray-300" />

         <div className="w-full overflow-x-auto">
            <OrganizationProfile
               appearance={{
                  elements: {
                     rootBox: {
                        width: "100%",
                        minWidth: "100%",
                     },
                     card: {
                        width: "100%",
                        border: "1px solid #e5e5e5",
                        boxShadow: "none",
                     },
                  },
               }}
            />
         </div>
      </Fragment>
   );
};

export default Settings;
