import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOrigins } from "./configs/cors.js";
import { authsRouter, hotelsRouter, roomsRouter, usersRouter } from "./routes";

// Configs
const app = express();
dotenv.config();
app.use(cors(corsOrigins));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100kb", parameterLimit: 10000000 }));
app.use(cookieParser());

// Middleware
app.use("/api/users", usersRouter);
app.use("/api/auths", authsRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/", (req, res) => res.json({ message: "Welcome On Booking.com" }));

const DBconnection = async () => {
	try {
		const URL = process.env.MONGO_URL || process.env.MONGO_DB;
		await mongoose.connect(URL);
	} catch (error) {
		console.log(`Database Error 🤦‍♂️ \n`, error);
	}
};

mongoose.connection.on("connected", () => console.log("Database Connected On [http://localhost:5000] 🚀"));
mongoose.connection.on("disconnected", () => console.log("Database Disconnected 😭"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, DBconnection);
