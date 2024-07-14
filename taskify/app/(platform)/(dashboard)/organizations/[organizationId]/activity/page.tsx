import { checkSubscription } from "@/utils/subscriptions/subscriptions";
import { Separator } from "@/components/ui/separator";
import { ActivityList } from "./_components/activity-list";
import { Info } from "../_components/info";

type ActivityProps = {};

const Activity = async ({}: ActivityProps) => {
   const isPremium = await checkSubscription();

   return (
      <section className="h-full w-full">
         <Info isPremium={isPremium} />

         <Separator className="my-2 bg-gray-400" />

         <ActivityList />
      </section>
   );
};

export default Activity;
