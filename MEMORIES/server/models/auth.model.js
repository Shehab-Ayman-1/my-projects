import mongoose from "mongoose";

const authSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	confirmedPassword: String,
	imageUrl: String,
	isAdmin: { type: Boolean, default: false },
});

const authModul = mongoose.model("auths", authSchema);

export default authModul;
