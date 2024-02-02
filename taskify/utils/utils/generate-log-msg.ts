import { ACTION, Activity } from "@prisma/client";

export const generateLogMessage = ({ entityTitle, entityType, action }: Activity) => {
   switch (action) {
      case ACTION.COPY:
         return `COPY ${entityType.toLowerCase()} "${entityTitle}"`;

      case ACTION.CREATE:
         return `CREATED ${entityType.toLowerCase()} "${entityTitle}"`;

      case ACTION.UPDATE:
         return `UPDATED ${entityType.toLowerCase()} "${entityTitle}"`;

      case ACTION.DELETE:
         return `DELETED ${entityType.toLowerCase()} "${entityTitle}"`;

      default:
         return "Unknown Action";
   }
};
