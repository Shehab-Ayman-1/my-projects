import express from "express";
import { GENERATE_IMAGE, GENERATE_VOICE, GET_POSTS, CREATE_POST } from "../controllers/index.js";

export const router = express.Router();

// GET
router.get("/get-posts", GET_POSTS);

// CREATE
router.post("/generate", GENERATE_IMAGE);
router.post("/text-to-speech", GENERATE_VOICE);
router.post("/create-post", CREATE_POST);
