import mongoose from "mongoose";
import hotelModel from "../models/hotels.model.js";
import roomModel from "../models/rooms.model.js";

// GET
export const GET_HOTELS = async (req, res) => {
	try {
		// hint: If The Hotel Featured === true => show This Hotel [ req.query ]
		// hint: $gt => Greater Than | $lt => Less Than
		const { min, max, limit, ...Queries } = req.query;

		const conditions = { ...Queries, cheapestPrice: { $gt: min || 1, $lt: max || 999999 } };
		const allHotels = await hotelModel.find(conditions).limit(limit || 999);
		res.status(200).json(allHotels);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_HOTELS: "SERVER ERROR", error });
	}
};

export const GET_QUERY_HOTELS = async (req, res) => {
	try {
		// [1] Get The Query Key
		const queryKey = Object.keys(req.query)[0];
		const query = req.query[queryKey].split(","); // Get From URL [ "query 1", "query 2", "query 3", "query 4" ]

		// [2] Check If The Query Is Existing In The URL
		if (!query) return res.status(404).json({ GET_QUERY_HOTELS: "Query Is Missing.!" });

		// [3] Get The Length Of The Query Key In The Database
		const queryLength = query.map((queryName) => hotelModel.countDocuments({ [queryKey]: queryName.toLowerCase() }));
		const listOfLengths = await Promise.all(queryLength);

		// [4] Get List Of the Queries
		let Queries = [];
		for (let i in listOfLengths) Queries.push({ type: query[i], count: listOfLengths[i] });

		// [5] Send The Queries To The Frontend Now
		res.status(201).json(Queries);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_HOTELS: "SERVER ERROR", error });
	}
};

export const GET_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ GET_HOTEL_ID: "This ID Is Not Defined.!" });

		const hotel = await hotelModel.findById(id);
		res.status(201).json(hotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_HOTEL: "SERVER ERROR", error });
	}
};

// POST
export const CREATE_HOTEL = async (req, res) => {
	try {
		const { city, name, ...body } = req.body;

		const myHotel = await hotelModel.findOne({ name });

		if (myHotel) return res.status(404).json({ CREATE_HOTEL: "Dublicated Hotel Name, Please Choose Other One" });

		const newHotel = new hotelModel({ ...body, name, city: city.toLowerCase() });
		const saveHotel = await newHotel.save();
		res.status(201).json(saveHotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ CREATE_HOTEL: "SERVER ERROR", error });
	}
};

// UPDATE
export const UPDATE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(401).json({ UPDATE_HOTEL: "This ID Is Not Defined.!" });

		const updatedHotel = await hotelModel.findByIdAndUpdate(id, body, { new: true });
		res.status(201).json(updatedHotel);
	} catch (error) {
		console.log(error);
		res.status(404).json({ UPDATE_HOTEL: "SERVER ERROR", error });
	}
};

// DELETE
export const DELETE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ DELETE_HOTEL: "This ID Is Not Defined.!" });

		await hotelModel.findByIdAndRemove(id);
		res.status(201).json({ DELETE_HOTEL: "Success Deleting User." });
	} catch (error) {
		console.log(error);
		res.status(404).json({ DELETE_HOTEL: "SERVER ERROR", error });
	}
};
