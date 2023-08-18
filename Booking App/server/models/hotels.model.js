import { Schema, model } from "mongoose";

const schema = new Schema({
	name: { type: String, required: true },
	title: { type: String, required: true },
	type: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	description: { type: String, required: true },
	distance: { type: Number, required: true },
	price: { type: Number, required: true },
	rating: { type: Number, min: 0, max: 10, default: 7 },
	photos: { type: Array },
	rooms: { type: Array },
	featured: { type: Boolean, default: false },
});

export default model("hotels", schema);
