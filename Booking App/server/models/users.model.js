import { Schema, model } from "mongoose";

const schema = new Schema(
	{
		fName: { type: String, required: true },
		lName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

export default model("users", schema);
