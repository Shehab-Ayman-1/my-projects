import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import authModel from "../models/auths.model.js";

export const REGISTER_AUTH = async (req, res) => {
	try {
		const { avatar, fName, lName, age, username, email, password, confirmedPassword } = req.body;

		// [1] Check If The User Not Exist
		const auth = await authModel.findOne({ email });
		if (auth) return res.status(404).json({ REGISTER_AUTH: "This Email Is Already Existing !" });

		// [2] Check If The Passwords Are Matching
		if (password !== confirmedPassword) return res.status(404).json({ REGISTER_AUTH: "Passwords Don't Match" });
		const hash = await bcrypt.hash(password, 10);

		// [3] Create The New User
		const newAuth = new authModel({ avatar, fName, lName, age, username, email, password: hash });
		const saved = await newAuth.save();

		// [4] Send The User Details To The Frontend
		const { password: p, isAdmin, ...other } = saved._doc;
		res.status(200).json(other);
	} catch (error) {
		console.log(error);
		res.status(404).json({ REGISTER_AUTH: "SERVER ERROR", error });
	}
};

export const SIGNIN_AUTH = async (req, res) => {
	try {
		const { email, password } = req.body;

		// [1] Check If The User In The Database
		const auth = await authModel.findOne({ email });
		if (!auth) return res.status(404).json({ SIGNIN_AUTH: "Wronge Username OR Username Is Not Authonticated.!" });

		// [2] Check If The User Password Password && The Database Password Are Matching
		const checkPasswords = await bcrypt.compare(password, auth.password);
		if (!checkPasswords) return res.status(404).json({ SIGNIN_AUTH: "Wronge Password.!" });

		// [3] Create The JWT Token And Send Is To The Frontend
		const token = JWT.sign({ id: auth._id, isAdmin: auth.isAdmin }, process.env.JWT_SECRET);

		// [4] Send The Token In The Cookie
		const cookie = res.cookie("access_token", token, { httpOnly: true });

		// [5] Send The User With The Token To The Frontend
		const { password: pass, isAdmin, ...other } = auth._doc;
		cookie.status(201).json({ other, isAdmin });
	} catch (error) {
		console.log(error);
		res.status(404).json({ SIGNIN_AUTH: "SERVER ERROR", error });
	}
};

export const GET_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ GET_AUTH: "This ID Is Not Defined.!" });

		const auth = await authModel.findById(id);
		res.status(201).json(auth);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_AUTH: "SERVER ERROR", error });
	}
};

export const GET_AUTHS = async (req, res) => {
	try {
		const Auths = await authModel.find();
		res.status(201).json(Auths);
	} catch (error) {
		console.log(error);
		res.status(404).json({ GET_AUTHS: "SERVER ERROR", error });
	}
};

export const UPDATE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ UPDATE_AUTH: "This ID Is Not Defined.!" });

		const updatedAuth = await authModel.findByIdAndUpdate(id, body, { new: true });
		res.status(201).json(updatedAuth);
	} catch (error) {
		console.log(error);
		res.status(404).json({ UPDATE_AUTH: "SERVER ERROR", error });
	}
};

export const DELETE_AUTH = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ UPDATE_AUTH: "This ID Is Not Defined.!" });

		await authModel.findByIdAndDelete(id);

		res.status(201).json({ DELETE_AUTH: "Successfully Deleting This User.!" });
	} catch (error) {
		console.log(error);
		res.status(404).json({ DELETE_AUTH: "SERVER ERROR", error });
	}
};
