import { z } from "zod";

export const schema = z.object({
   listId: z.string(),
   boardId: z.string(),
});
