import { z } from "zod";

export const schema = z.object({
   boardId: z.string(),
   listId: z.string(),
   cardId: z.string(),
});
