import type { Activity } from "@prisma/client";
import { ActivityItem } from "./activity-item";

type ActivityListProps = {
   activities: Activity[];
};

export const ActivityList = ({ activities }: ActivityListProps) => {
   return (
      <ol className="mt-2 space-y-4">
         {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
         ))}
      </ol>
   );
};
