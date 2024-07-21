import { z } from "zod";

export const schema = z.object({
    _id: z.string().optional(),
    userId: z.string().optional(),
    paidId: z.string().optional(),
    name: z.string(),
});
