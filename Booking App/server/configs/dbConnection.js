import mongoose from "mongoose";

export const DBconnection = async () => {
	try {
		const URL = process.env.MONGO_URL || process.env.MONGODB_URI;
		return await mongoose.connect(URL);
	} catch (error) {
		console.log(`Database Error 🤦‍♂️ \n`, error);
	}
};
