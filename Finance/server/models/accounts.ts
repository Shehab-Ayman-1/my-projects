import { Schema, model, models, InferSchemaType } from "mongoose";

const schema = new Schema({
    userId: { type: String, required: true, trim: true },
    plaidId: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
});

export const Accounts = models?.accounts || model("accounts", schema);
export type AccountType = InferSchemaType<typeof schema> & { _id?: string };
