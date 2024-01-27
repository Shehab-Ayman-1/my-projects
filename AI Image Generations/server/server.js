import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookies from "cookie-parser";
import dotenv from "dotenv";
import { corsOrigins, DBconnection } from "./configs/index.js";
import { users, posts } from "./routes/index.js";

// Configs
export const app = express();
dotenv.config();
app.use(cors(corsOrigins));
app.use(cookies());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/*", (req, res) =>
	res.status(400).json({ method: req.method, url: req.url, message: "Path Not Exist." })
);

// Mongo
DBconnection();
mongoose.connection.on("connected", () => console.log(`Server Connected 🚀`));
mongoose.connection.on("disconnected", () => console.log(`Server Disconnected 😢`));

// Server Listenning
app.listen(5000);
