import UsersModel from "../models/users.model.js";

export const GET_USERS = async (req, res) => {
	try {
		const users = await UsersModel.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json(error);
	}
};
