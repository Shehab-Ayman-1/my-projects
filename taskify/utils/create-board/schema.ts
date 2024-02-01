import { z } from "zod";

export const schema = z.object({
   image: z.string({ required_error: "Image is required" }),
   title: z
      .string({ required_error: "Title is required" })
      .min(3, { message: "Title Must Be With A Minimum Length Of 3 Characters Atleast." }),
});
