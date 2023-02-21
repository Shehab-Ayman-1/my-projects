// Import Backend Libraries
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import myParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import hotelsRoute from "./routes/hotels.routes.js";
import roomsRoute from "./routes/rooms.routes.js";
import authsRoute from "./routes/auths.routes.js";

// App Configs
const app = express();
dotenv.config();
app.use(myParser.json({ extended: true, limit: "500mb", parameterLimit: 5000000 }));
app.use(myParser.urlencoded({ extended: true, limit: "500mb", parameterLimit: 5000000 }));
app.use(express.json());
app.use(cookieParser());

app.use(cors());

// Routing
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/auths", authsRoute);

// Connection With MongoDB
const PORT = process.env.PORT;
const DBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
	} catch (error) {
		console.log(error);
	}
};
mongoose.connection.on("connected", () => console.log(`Server Is Running On http://localhost:${PORT}`));
mongoose.connection.on("disconnected", () => console.log("MongoDB Is Disconnected"));

app.listen(PORT, DBConnection);
