import { Router } from "express";
import { GET_EXERCISES, GET_EXERCISE, GET_LIST_BY_KEY, GET_SEARCH, CREATE_EXERCISES } from "../controllers/exercises.controller.js";

const router = Router();

// GET
router.get("/get-exercises", GET_EXERCISES);
router.get("/get-exercise", GET_EXERCISE);
router.get("/get-list-by-key", GET_LIST_BY_KEY);
router.get("/get-search/:search", GET_SEARCH);

// POST
router.get("/create-exercises", CREATE_EXERCISES);

// PUT

// DELETE

export default router;
