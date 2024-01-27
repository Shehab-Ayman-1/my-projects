import { model, Schema } from "mongoose";

const schema = new Schema({
	name: { type: String, required: [true, "Name Is A Required Field."] },
	prompt: { type: String, required: [true, "Prompt Is A Required Field."] },
	photo: { type: String, required: [true, "Photo Is A Required Field."] },
});

export const Posts = model("posts", schema);
