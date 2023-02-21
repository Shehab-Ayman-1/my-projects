/* Hints: 
	-- Why Do We Need JWT? --
	[1] To protect our API from unauthorized access.
	[2] To Send The User's Data With A Safe Encryption => If Any One try To Hacked The User Data => It Will Not Be Hacked.

	-- LOGIN --
	[1] Get The Email And Password From The Client => [ req.body ].
	[2] Check If The Client Email Is Not Exist In The Database. [ await authModel.findOne({ email: body.email }) ]
	[3] Check if the Client Password Is Correct. [ await bcrypt.compare(client.password, DB.password) ]
	[4] Create A Token With The Client Information. [ await jwt.sign({ id: DB._id, isAdmin: BD.isAdmin, email: DB.email }, process.env.JWT_SECRET) ]
	[5] Send The User To The Browser. [ res.status(200).json(newUser) ]
	
	-- REGISTER --
	[1] Get The Client Information From The Client => [ req.body ].
	[2] Check If The Client Email Is Exist In The Database. [ await authModel.findOne({ email: body.email }) ]
	[3] Check if the Client Passwords === The Confimed Password, Then Hash Them
	[4] Create A New User In The Database By The Client Information. [ await authModel.create({ name: fullName, password: hashPass, confirmedPassword: hashConfirmPass, email, imageUrl }) ]
	[5] Create A Token With The Client Information. [ await jwt.sign({ id: DB._id, isAdmin: BD.isAdmin, email: DB.email }, process.env.JWT_SECRET) ]
	[6] Send The User To The Browser. [ res.status(200).json(newUser) ]

*/

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import authModel from "../models/auth.model.js";

// LOGIN AUTH
export const loginAuth = async (req, res) => {
	try {
		// [1] Get The Client Inputs
		const body = req.body;

		// [2] Check If This Client Is Defined In The Database
		const user = await authModel.findOne({ email: body.email }); // Get The User By Email
		if (!user) return res.status(404).json({ LOGIN_AUTH: "This User Is Not Defined In The Database" });

		// [3] Compare The Client Password & The Database Password
		const isPasswordCurrect = await bcrypt.compare(body.password, user.password);
		if (!isPasswordCurrect) return res.status(401).json({ LOGIN_AUTH: "Passwords Do Not Match" });

		// [4] Now, Create The JWT Token With The Client Information
		const token = JWT.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
		res.cookie("access_token", token, { httpOnly: true });

		// [5] Send The Data To The Frontend
		const { password, confirmedPassword, isAdmin, ...otherDetails } = user._doc; // Don't Send The Password, ConfirmedPassword, isAdmin To The Frontend
		res.status(200).send({ profile: otherDetails, token });
	} catch (err) {
		console.log(err);
		res.status(404).json({ LOGIN_AUTH: err });
	}
};

// REGISTER AUTH
export const registerAuth = async (req, res) => {
	try {
		// [1] Get The User Inputs
		const { firstName, lastName, email, password, confirmedPassword, imageUrl } = req.body;

		// [2] Check If The User Is Not Existing In The Database
		const user = await authModel.findOne({ email });
		if (user) return res.status(404).json({ REGISTER_AUTH: "This User Is Already Existing In The Database" });

		// [3] Check If The Password === The ConfirmedPassword && Make Is Hash With Bcrypt
		if (password !== confirmedPassword) return res.status(400).json({ REGISTER_AUTH: "Passwords Do Not Match" });
		const hashPass = await bcrypt.hash(password, 10);
		const hashConfirmPass = await bcrypt.hash("confirmedPassword", 10); // We Make This Hashed To Mined The Dublicated Key

		// [4] Create A New User In The Database With The User Information
		const fullName = `${firstName} ${lastName}`;
		const newUser = await authModel.create({ name: fullName, password: hashPass, confirmedPassword: hashConfirmPass, email, imageUrl });

		// [5] Create A Token With The Client Information
		const token = JWT.sign({ id: newUser._id, email: newUser.email, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET);
		res.cookie("access_token", token, { httpOnly: true });

		// [6] Send The Data To The Fronend
		res.status(200).send({ profile: { id: newUser._id, name: newUser.name, email: newUser.email, imageUrl: newUser.imageUrl }, token });
	} catch (error) {
		res.status(404).json({ REGISTER_AUTH_ERROR: error });
	}

	/* Other Way 
		try {
			const body = req.body;
			const salt = bcrypt.genSaltSync(10);
			const password = bcrypt.hashSync(body.password, salt);
			let newUser = new authModel({ name: `${body.firstName} ${body.lastName}`, email: body.email, imageUrl: body.imageUrl, password, confirmedPassword: password });

			await newUser.save();
			res.status(201).send(newUser);
		} catch (err) {
			console.log(err);
			res.status(404).json({ message: err });
		} 
	*/
};

// GET ALL AUTHS
export const getAllAuths = async (req, res) => {
	try {
		const getAuths = await authModel.find();
		res.status(200).json(getAuths);
	} catch (err) {
		console.log("Get All Auths =>" + err);
		res.status(404).json({ GET_ALL_AUTHS: err });
	}
};

// GET AUTH
export const getAuth = async (req, res) => {
	try {
		const auth = await authModel.findById(req.params.id);
		console.log(auth);
		res.status(200).json(auth);
	} catch (err) {
		console.log("Get Auth => " + err);
		res.status(404).json({ GET_AUTH: err });
	}
};

// DELETE AUTH
export const deleteAuth = async (req, res) => {
	try {
		if (mongoose.Types.ObjectId.isValid(req.params.id)) {
			await authModel.findByIdAndDelete(req.params.id);
			res.status(200).json({ DELETE_AUTH: "Auth Was Deleted Successfully." });
		}
	} catch (err) {
		console.log("Delete Auth => " + err);
		res.status(404).json({ DELETE_AUTH: err });
	}
};

// UPDATE AUTH
export const updateAuth = async (req, res) => {
	try {
		const { id } = req.params;

		if (mongoose.Types.ObjectId.isValid(id)) {
			const body = req.body;
			let updatedAuth;

			if (body.firstName && body.lastName) {
				updatedAuth = await authModel.findByIdAndUpdate(id, { ...body, name: `${body.firstName} ${body.lastName}` }, { new: true });
			} else {
				updatedAuth = await authModel.findByIdAndUpdate(id, { ...body }, { new: true });
			}

			res.status(200).json(updatedAuth);
		}
	} catch (err) {
		console.log("Update Auth => " + err);
		res.status(404).json({ UPDATE_AUTH: err });
	}
};
