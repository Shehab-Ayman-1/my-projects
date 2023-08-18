import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/users.model.js";

export const LOGIN = async (req, res) => {
	try {
		const body = req.body;

		// checking validity
		const allFilled = Object.values(body).every((item) => item);
		if (!allFilled) return res.status(404).json("All Fields Must To Be Required");

		// find user
		const user = await Users.findOne({ email: body.email });
		if (!user) return res.status(404).json("Your Email Is Not Currect.");

		// bcrypt
		const compare = await bcrypt.compare(body.password, user.password);
		if (!compare) return res.status(404).json("Your Password Is Not Currect.");

		// jwt
		const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY);
		const { _id, password, isAdmin, ...rest } = user._doc;

		res.cookie("user_token", token, { httpOnly: true }).status(200).json(rest);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const REGISTER = async (req, res) => {
	try {
		const body = req.body;

		const allFilled = Object.values(body).every((item) => item);
		if (!allFilled) return res.status(404).json("All Fields Must To Be Required");

		const salt = bcrypt.genSaltSync(10);
		const password = bcrypt.hashSync(body.password, salt);

		const newUser = new Users({ ...body, password });
		await newUser.save();

		res.status(200).json("The User Was Successfully Registered");
	} catch (error) {
		res.status(404).json(error);
	}
};

export const GET_USERS = async (req, res) => {
	try {
		const users = await Users.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const GET_USER = async (req, res) => {
	try {
		let { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Valid.");

		let user = await Users.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const UPDATE_USER = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Users.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json("The User Was Updated Successfully.");
	} catch (error) {
		res.status(404).json(error);
	}
};

export const DELETE_USER = async (req, res) => {
	try {
		const { id } = req.params;
		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json("This ID Is Not Currect");

		await Users.findByIdAndDelete(id, req.body, { new: true });
		res.status(200).json("The User Was Deleted Successfully.");
	} catch (error) {
		res.status(404).json(error);
	}
};
