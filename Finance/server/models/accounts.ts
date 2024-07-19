import { Schema, models, model } from "mongoose";

const schema = new Schema({
    plaidId: { type: String, trim: true },
    userId: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
});

export const Accounts = models?.accounts || model("accounts", schema);
