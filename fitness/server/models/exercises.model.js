import { Schema, model } from "mongoose";

const schema = new Schema({
	name: String,
	target: String,
	bodyPart: String,
	gifUrl: String,
	equipment: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

export default model("exercises", schema);
