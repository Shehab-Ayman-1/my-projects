import { Schema, model, models, Types, InferSchemaType } from "mongoose";

const schema = new Schema({
    userId: { type: String, required: true, trim: true },
    paidId: { type: String, trim: true },
    name: { type: String, required: true, trim: true },
});

export const Accounts = models?.accounts || model("accounts", schema);
export type AccountsType = InferSchemaType<typeof schema> & { _id?: Types.ObjectId };
