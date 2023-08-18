import express from "express";
import { GET_USER, GET_USERS, LOGIN, REGISTER } from "../controllers/users.controller.js";
import { UPDATE_USER, DELETE_USER } from "../controllers/users.controller.js";
import { CHECK_AUTHENTICATION, CHECK_USER, CHECK_ADMIN } from "../controllers/checkers.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middlewares/verify.middleware.js";

const router = express.Router();

// CHECKERS
router.get("/check-authentication", verifyToken, CHECK_AUTHENTICATION);
router.get("/check-user/:id", verifyUser, CHECK_USER);
router.get("/check-admin", verifyAdmin, CHECK_ADMIN);

// SIGN_IN / SIGN_UP
router.post("/sign-in", LOGIN);
router.post("/sign-up", REGISTER);

// GET ALL
router.get("/get-users", verifyAdmin, GET_USERS);

// GET
router.get("/get-user/:id", verifyUser, GET_USER);

// UPDATE
router.put("/update-user/:id", verifyUser, UPDATE_USER);

// DELETE
router.delete("/delete-user/:id", verifyUser, DELETE_USER);

export default router;
