import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UsersRoute from "./routes/users.route.js";

// Configs
const app = express();
dotenv.config();
app.use(cors());

// MiddleWars
app.use(express.urlencoded({ extended: true, limit: "100kb", parameterLimit: 10000000 }));

// Routes
app.use("/api/users", UsersRoute);

const DBconnection = async () => {
	try {
		const URL = process.env.MONGO_URL;
		await mongoose.connect(URL);
	} catch (error) {
		console.log(error);
	}
};

mongoose.connection.on("connected", () => console.log("Database Connected On [http://localhost:5000] 🚀"));
mongoose.connection.on("disconnected", () => console.log("Database Disconnected 😭"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, DBconnection);
