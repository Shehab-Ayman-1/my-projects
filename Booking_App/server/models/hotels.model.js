import mongoose from "mongoose";

const hotelsSchema = new mongoose.Schema({
	type: { type: String, required: true },
	name: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	city: { type: String, required: true },
	address: { type: String, required: true },
	distance: { type: String, required: true },
	photos: { type: [String] },
	description: { type: String, required: true },
	rating: { type: Number, min: 0, max: 5, required: true },
	rooms: { type: [String] },
	cheapestPrice: { type: Number, required: true },
	featured: { type: Boolean, default: false },
});

export default mongoose.model("Hotels-database", hotelsSchema);
