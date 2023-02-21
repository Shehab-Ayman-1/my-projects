import mongoose from "mongoose";
import postMessage from "../models/posts.model.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await postMessage.find();
		res.status(200).json(postMessages); // 200 => Is An Ajax Protocal Mean That The Request Is Success
	} catch (error) {
		res.status(404).json({ message: error.message }); // 404 => Is An Ajax Protocal Mean That The Request Is Failed
	}
};

export const createPost = async (req, res) => {
	const body = req.body;
	const newPostMessage = new postMessage(body);

	try {
		await newPostMessage.save();
		res.status(201).json(newPostMessage);
	} catch (error) {
		res.status(409).json({ CREATE_POST: error.message });
	}
};

export const deletePost = async (req, res) => {
	const { id } = req.params;

	if (mongoose.Types.ObjectId.isValid(id)) {
		await postMessage.findByIdAndRemove(id);
		return res.json({ DELETE_POST: "Post deleted successfully." });
	} else {
		return res.status(404).json({ DELETE_POST: `No post with id: ${id}` });
	}
};

export const updatePost = async (req, res) => {
	// Make The ID Route Of The Link = Mongoose _id
	const { id } = req.params;
	const post = req.body;

	if (mongoose.Types.ObjectId.isValid(id)) {
		const updatedPost = await postMessage.findByIdAndUpdate(id, { ...post, _id: id }, { new: true });
		return res.json(updatedPost);
	} else {
		return res.status(404).json({ UPDATE_POST: "No Post Has This ID" });
	}
};

export const likePost = async (req, res) => {
	// [1] Get The Post ID From The Frontend
	const { id } = req.params;
	const { token } = req.body;

	// [2] Check If The Post ID Is Defined In The Database
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ LIKE_POST: "No Post Has This ID" });

	// [3] Get The Post By The Frontend ID
	const post = await postMessage.findById(id);

	post.likes.push(token);

	const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
	return res.json(updatedPost);
};

export const disLikePost = async (req, res) => {
	const { id } = req.params;
	const { token } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ DISLIKE: `No Post Has This ID: ${id}` });

	const post = await postMessage.findById(id);

	const index = post.likes.findIndex((id) => id === token);
	post.likes.splice(index, 1);

	const updatedPost = await postMessage.findByIdAndUpdate(id, post, { new: true });
	res.json(updatedPost);
};
