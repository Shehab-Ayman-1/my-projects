// Important Notes:
// - bcrypt       => Is Used To Convert The User Password To An Excryption Password
// 	- genSaltSync(10) => Return The Crypt Salt
// 	- hashSync(user.password, salt) => Return The Hashed Password

// - jsonwebtoken => Is Used To Send The User Information To The Client Side In The Cookies
// 	- sign(payload) => The Data That Will Be Send In The Cookies
// 	- verify(token, JWT_KEY, (err, info) => {}) =>

// - cookie-parser => Is Used To Carry The Data To The Client Side
// 	-

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import usersRoute from "./routes/users.route.js";
import authsRoute from "./routes/auths.route.js";
import hotelsRoute from "./routes/hotels.route.js";
import roomsRoute from "./routes/rooms.route.js";
import cookieParser from "cookie-parser";
import { corsOrigins } from "./configs/cors.js";

// Configs
const app = express();
dotenv.config();
app.use(cors(corsOrigins));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "100kb", parameterLimit: 10000000 }));
app.use(cookieParser());

// Middleware
app.use((req, res, next) => setTimeout(next, 2000));
app.use("/api/users", usersRoute);
app.use("/api/auths", authsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/", (req, res) => res.send("Hello In The Booking.com App"));

const DBconnection = async () => {
	try {
		const URL = process.env.MONGO_URL;
		await mongoose.connect(URL);
	} catch (error) {
		console.log(`Database Error 🤦‍♂️ \n`, error);
	}
};

mongoose.connection.on("connected", () => console.log("Database Connected On [http://localhost:5000] 🚀"));
mongoose.connection.on("disconnected", () => console.log("Database Disconnected 😭"));

const PORT = process.env.PORT;
app.listen(PORT, DBconnection);
