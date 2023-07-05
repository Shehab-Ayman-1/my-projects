import { Schema, model } from "mongoose";

const UsersSchema = new Schema({
	fName: String,
	lName: String,
	email: String,
	password: String,
	role: { type: String, default: "user" },
});

export default model("users", UsersSchema);
