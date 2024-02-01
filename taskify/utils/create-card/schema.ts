import { z } from "zod";

export const schema = z.object({
   id: z.string(),
   title: z
      .string({ required_error: "Card Title Is Required." })
      .min(10, { message: "Card Title Must Be With A Minimum Length Of 10 Characters Atleast." }),
});
