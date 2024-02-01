import { z } from "zod";
import { schema } from "./schema";

export type InputType = z.infer<typeof schema>;
