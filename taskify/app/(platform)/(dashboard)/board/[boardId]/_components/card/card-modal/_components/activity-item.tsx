import type { Activity } from "@prisma/client";
import { format } from "date-fns";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { generateLogMessage } from "@/utils";

type ActivityItemProps = {
   activity: Activity;
};

export const ActivityItem = ({ activity }: ActivityItemProps) => {
   const message = generateLogMessage(activity);

   return (
      <li className="flex-start gap-2">
         <Avatar className="h-8 w-8">
            <AvatarImage src={activity.userImage} alt="user-img" />
         </Avatar>
         <div className="5 flex flex-col space-y-0">
            <p className="text-sm text-muted-foreground">
               <span className="mr-2 font-semibold lowercase text-neutral-700">{activity.username}</span>
               {message}
            </p>

            <p className="text-xs text-muted-foreground">
               {format(new Date(activity.createdAt), "MMM d, yyyy p 'at' h:mm a")}
            </p>
         </div>
      </li>
   );
};
