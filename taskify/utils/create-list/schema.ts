import { z } from "zod";

export const schema = z.object({
   id: z.string(),
   title: z
      .string({ required_error: "List Name Is Required." })
      .min(3, { message: "List Name Must Be With A Minimum Length Of 3 Characters Atleast." }),
});
