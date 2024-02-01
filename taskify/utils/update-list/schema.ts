import { z } from "zod";

export const schema = z.object({
   id: z.string(),
   title: z
      .string({
         required_error: "Title is required",
      })
      .min(3, { message: "Title Must Be With A Minimum Length Of 3 Characters Atleast." }),
});
