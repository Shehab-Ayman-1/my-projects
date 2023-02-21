import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
	{
		avatar: { type: Object },
		fName: { type: String, required: true },
		lName: { type: String, required: true },
		age: { type: Number, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

export default mongoose.model("auths-database", usersSchema);
