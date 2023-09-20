import mongoose from "mongoose";

export const DBconnection = async () => {
	try {
		const URL = process.env.MONGO_URL || process.env.MONGO_DB;
		await mongoose.connect(URL);
	} catch (error) {
		console.log(`Database Error 🤦‍♂️ \n`, error);
	}
};
