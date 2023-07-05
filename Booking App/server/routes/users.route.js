import express from "express";
import { GET_USERS } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", GET_USERS);

export default router;
