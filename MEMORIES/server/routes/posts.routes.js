// Import Express Frameword
import express from "express";

// Import Routers Controllers
import { getPosts, createPost, deletePost, updatePost, likePost, disLikePost } from "../controllers/posts.controller.js";
import { verifyUser } from "../middleware/verify.middleware.js";

// Post Router
const postsRouter = express.Router();
postsRouter.get("/", getPosts);
postsRouter.post("/", verifyUser, createPost);
postsRouter.delete("/:id", verifyUser, deletePost);
postsRouter.patch("/:id", verifyUser, updatePost);
postsRouter.patch("/:id/likePost", verifyUser, likePost);
postsRouter.patch("/:id/disLikePost", verifyUser, disLikePost);

export default postsRouter;
