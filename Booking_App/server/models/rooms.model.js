import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		price: Number,
		maxPeople: Number,
		roomNumbers: [{ number: { type: Number }, unavailableDates: { type: [Date], default: [] } }],
	},
	{ timestamps: true }
);

export default mongoose.model("Available-Room", roomsSchema);
