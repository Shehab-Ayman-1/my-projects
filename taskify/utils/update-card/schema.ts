import { z } from "zod";

export const schema = z.object({
   id: z.string(),
   title: z
      .string({ required_error: "Title is required" })
      .min(3, { message: "Title Must Be With A Minimum Length Of 3 Characters Atleast." }),
   description: z.optional(
      z.string().min(5, { message: "Description Must Be With A Minimum Length Of 5 Characters Atleast." }),
   ),
});
