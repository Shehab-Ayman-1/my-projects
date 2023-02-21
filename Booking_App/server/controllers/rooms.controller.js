import mongoose from "mongoose";
import hotelModel from "../models/hotels.model.js";
import roomModel from "../models/rooms.model.js";

export const GET_ROOM = async (req, res) => {
	try {
		// [1] Get The Hotel
		const { roomID: id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ GET_ROOMS: "Hotel ID Is Not Current.!" });
		const myHotel = await hotelModel.findById(id);

		// [2] Get Promise Of Hotel Rooms
		const myRooms = myHotel.rooms.map((roomID) => roomModel.findById(roomID));

		// [3] Get List Of Hotel Rooms By Promise
		const listOfRooms = await Promise.all(myRooms);

		// [4] Send The Rooms To The Frontend
		res.status(201).json(listOfRooms);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_ROOM: error });
	}
};

export const GET_ROOMS = async (req, res) => {
	try {
		const rooms = await roomModel.find();
		res.status(201).json(rooms);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_ROOMS: error });
	}
};

export const CREATE_ROOM = async (req, res) => {
	try {
		// [1] Get The Hotel ID
		const { hotelID } = req.params;
		const body = req.body;

		// [2] Create New Room By The ID
		const newRoom = new roomModel(body);
		const savedRoom = await newRoom.save();

		// [3] Push The Room ID In The Hotel Rooms
		if (!mongoose.Types.ObjectId.isValid(hotelID)) return res.status(404).json({ CREATE_ROOM: "Hotel ID Is Not Defined.!" });
		await hotelModel.findByIdAndUpdate(hotelID, { $push: { rooms: savedRoom._id } }, { new: true });

		// [4] Send The New Room To The Frontend
		res.status(201).json(savedRoom);
	} catch (error) {
		console.log(error);
		res.status(404).json({ CREATE_ROOM: "SERVER ERROR", error });
	}
};

export const UPDATE_ROOM = async (req, res) => {
	try {
		// [1] Get The Room ID
		const { roomID } = req.params;
		const body = req.body;

		// [2] Check If The Room ID Is Valid
		if (!mongoose.Types.ObjectId.isValid(roomID)) return res.status(404).json({ UPDATE_ROOM: "Room ID Is Not Defined.!" });

		// [3] Update The Room By RoomID
		// const updatedRoom = await roomModel.findByIdAndUpdate(roomID, { $set: body }, { new: true });
		const updatedRoom = await roomModel.findByIdAndUpdate(roomID, body, { new: true });

		// [4] Send The UpdetedRoom To The Frontend
		res.status(201).json(updatedRoom);
	} catch (error) {
		console.log(error);
		res.status(404).json({ UPDATE_ROOM: "SERVER ERROR", error });
	}
};

export const UPDATE_AVAILABLE_ROOMS = async (req, res) => {
	try {
		// [1] Get The Room ID
		const { roomID } = req.params;
		const { dates } = req.body;

		// [2] Check If The Room ID Is Valid
		if (!mongoose.Types.ObjectId.isValid(roomID)) return res.status(404).json({ UPDATE_ROOM_AVAILABILITY: "Room ID Is Not Defined.!" });

		// [3] Update The UnAvailableRooms
		await roomModel.updateOne({ "roomNumbers._id": roomID }, { $push: { "roomNumbers.$.unavailableDates": dates } });

		// [4] Send The UnAvailableRooms To The Frontend
		res.status(201).json("Reserved Dates Was Added.");
	} catch (error) {
		console.log(error);
		res.status(404).json({ UPDATE_ROOM_AVAILABILITY: "SERVER ERROR", error });
	}
};

export const DELETE_ROOM = async (req, res) => {
	try {
		// [1] Get The Room And Hotel IDs
		const { roomID, hotelID } = req.params;

		// [2] Check If The RoomID Is Valid, Then Delete Room
		if (!mongoose.Types.ObjectId.isValid(roomID)) return res.status(404).json({ DELETE_ROOM: "Room ID Is Not Currect.!" });
		await roomModel.findByIdAndRemove(roomID);

		// [3] Check If The HotelID Is Valid, Then Delete Hotel's Room ID
		if (!mongoose.Types.ObjectId.isValid(hotelID)) return res.status(404).json({ DELETE_ROOM: "Hotel ID Is Not Currect.!" });
		await hotelModel.findByIdAndUpdate(hotelID, { $pull: { rooms: hotelID } }, { new: true });

		// [4] Send Success Message
		res.status(201).json({ DELETE_ROOM: "Successfully, Room Has Been Deleted." });
	} catch (error) {
		console.log(error);
		res.status(404).json({ DELETE_ROOM: "SERVER ERROR", error });
	}
};
