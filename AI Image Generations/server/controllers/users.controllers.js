import { Users } from "../models/index.js";

export const GET_USERS = async (req, res) => {
	try {
		const users = await Users.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json(`GET_USERS: ${error.message}`);
	}
};
