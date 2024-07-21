import { z } from "zod";

export const schema = z.object({
    name: z.string(),
});

export type FormValues = z.infer<typeof schema>;
