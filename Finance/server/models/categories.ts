import { InferSchemaType, Schema, model, models } from "mongoose";

const schema = new Schema({
    userId: { type: String, required: true, trim: true },
    plaidId: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
});

export const Categories = models?.categories || model("categories", schema);
export type CategoryType = InferSchemaType<typeof schema> & { _id?: string };
