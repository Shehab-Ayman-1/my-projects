import mongoose from "mongoose";
import Users from "../models/users.model.js";

export const GET_USERS = async (req, res) => {
	try {
		const { from, to } = req.query;
		const documentsCount = await Users.countDocuments();
		const users = await Users.find().limit(to || 5);

		if (from && to) res.status(200).json({ count: documentsCount, users: users.slice(from, to) });
		else res.status(200).json({ count: documentsCount, users });
	} catch (error) {
		res.status(404).json(`GET_USERS ${error.message}`);
	}
};

export const GET_USER = async (req, res) => {
	try {
		let { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Valid.");

		let user = await Users.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json(`GET_USER ${error.message}`);
	}
};

export const UPDATE_USER = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Users.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json("The User Was Updated Successfully.");
	} catch (error) {
		res.status(404).json(`UPDATE_USER ${error.message}`);
	}
};

export const DELETE_USER = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Users.findByIdAndDelete(id, req.body, { new: true });
		res.status(200).json("The User Was Deleted Successfully.");
	} catch (error) {
		res.status(404).json(`DELETE_USER ${error.message}`);
	}
};
