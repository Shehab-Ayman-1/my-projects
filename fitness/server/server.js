import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ExercisesRoute from "./routes/exercises.route.js";

// Configs
const app = express();
dotenv.config();
app.use(express.json());

// Middlewares
app.use(cors());
app.use("/exercises", ExercisesRoute);

// DB Connection
const DBconnection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL || process.env.MONGODB_URI);
	} catch (error) {
		console.log(error);
	}
};

DBconnection();
mongoose.connection.on("connection", () => console.log(`DB Connected. 🚀`));
mongoose.connection.on("disconnection", () => console.log(`DB Dis Connected. 😔`));

app.listen(process.env.PORT, () => console.log(`Server Running On [http://localhost:${process.env.PORT}] 🚀`));
