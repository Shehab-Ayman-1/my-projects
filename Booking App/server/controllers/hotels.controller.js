import mongoose from "mongoose";
import { Hotels, Rooms } from "../models/index.js";
import { defaultHotels, defaultPhotos } from "../data/index.js";

export const GET_DEFAULT_HOTELS = async (req, res) => {
	try {
		// GET Rooms Ids
		const roomsIds = await Rooms.find().select("_id");
		const rooms = roomsIds.reduce((prev, cur) => prev.concat(cur._id), []);

		// GET Default Hotels
		const result = defaultHotels.map((hotel) => {
			// GET Random Photos
			let photos = [];
			defaultPhotos.forEach(() => {
				while (photos.length !== defaultPhotos.length) {
					let randInt = Math.floor(Math.random() * defaultPhotos.length);
					let photo = defaultPhotos[randInt];
					!photos.includes(photo) && photos.push(photo);
				}
			});
			return { ...hotel, rooms, photos: photos.slice(0, 6) };
		});
		const createDefaultHotels = await Hotels.create(result);
		res.status(200).json(createDefaultHotels);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_LIMITED_HOTELS = async (req, res) => {
	try {
		const { from, to } = req.query;
		const documentsCount = await Hotels.countDocuments();
		const hotels = await Hotels.find().limit(to || 5);

		if (from && to) res.status(200).json({ count: documentsCount, hotels: hotels.slice(from, to) });
		else res.status(200).json({ count: documentsCount, hotels });
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_HOTELS = async (req, res) => {
	try {
		const { limit, min, max, city, from, to, ...query } = req.query;
		const price = { $gt: min || 0, $lt: max || 999 };

		if (city === "All Locations") {
			if (from && to) {
				const hotels = await Hotels.find({ ...query, price }).limit(to || 5);
				res.status(200).json(hotels.slice(from, to));
			} else {
				const hotels = await Hotels.find({ ...query, price }).limit(limit || 10);
				res.status(200).json(hotels);
			}
		} else {
			if (from && to) {
				const hotels = await Hotels.find({ ...query, city, price }).limit(to || 5);
				res.status(200).json(hotels.slice(from, to));
			} else {
				const hotels = await Hotels.find({ ...query, city, price }).limit(limit || 10);
				res.status(200).json(hotels);
			}
		}
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "This ID Is Not Currect", id, Hotels });

		const hotel = await Hotels.findById(id);
		if (!hotel) return res.status(404).json("This Hotel Is Not Defined");

		res.status(200).json(hotel);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_HOTEL_ROOMS = async (req, res) => {
	try {
		const { hotelID } = req.params;
		if (!mongoose.Types.ObjectId.isValid(hotelID)) return res.status(404).json("This ID Is Not Valid.");

		const hotel = await Hotels.findById(hotelID);
		const rooms = await Rooms.find({ _id: hotel.rooms });

		res.status(200).json(rooms);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_COUNT_BY_CITY = async (req, res) => {
	try {
		const cities = req.query.cities.split(",");

		if (cities[0] === "all") {
			let cities = await Hotels.find().select("city");
			let allCities = cities.map(({ city }) => city);
			let filterCities = Array.from(new Set(allCities));
			res.status(200).json(filterCities);
		} else {
			const listOfCities = cities.map(async (city) => ({ city, count: await Hotels.countDocuments({ city }) }));
			const counts = await Promise.all(listOfCities);
			res.status(200).json(counts);
		}
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_COUNT_BY_TYPE = async (req, res) => {
	try {
		let types = ["hotels", "apartments", "resorts", "villas", "cabins"];
		let listOfTypes = types.map(async (type) => ({ type, count: await Hotels.countDocuments({ type }) }));

		let counts = await Promise.all(listOfTypes);
		res.status(200).json(counts);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_HOTELS_COUNT = async (req, res) => {
	try {
		const { city } = req.query;

		if (city === "All Locations") {
			const count = await Hotels.countDocuments();
			res.status(200).json(count);
		} else {
			const count = await Hotels.find({ city }).countDocuments();
			res.status(200).json(count);
		}
	} catch (error) {
		res.status(404).json(error);
	}
};

export const CREATE_HOTEL = async (req, res) => {
	try {
		let body = req.body;

		let allFilled = Object.values(body).every((item) => item);
		if (!allFilled) return res.status(404).json("All Hotel Fields Are Required.");

		const newHotel = await Hotels.create(req.body);
		res.status(202).json(newHotel);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const UPDATE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Hotels.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json("The Hotel Was Successfully Updated.");
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const DELETE_HOTEL = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Hotels.findByIdAndDelete(id);
		res.status(200).json("The Hotel Was Successfully Deleted.");
	} catch (error) {
		res.status(404).json(error.message);
	}
};
