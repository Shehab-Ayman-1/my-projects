import express from "express";
import { GET_USERS } from "../controllers/index.js";

export const router = express.Router();

router.get("/get-users", GET_USERS);
