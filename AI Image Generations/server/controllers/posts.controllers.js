import { Posts } from "../models/index.js";
import OpenAI from "openai";
import path from "path";
import fs from "fs";

export const GENERATE_IMAGE = async (req, res) => {
	try {
		const { prompt } = req.body;

		const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

		const result = await openAi.images.generate({
			prompt,
			n: 1,
			size: "256x256",
			response_format: "b64_json",
		});

		res.status(200).json(result.data[0]?.b64_json);
	} catch (error) {
		res.status(404).json(`GENERATE_IMAGE: ${error.message}`);
	}
};

export const GENERATE_VOICE = async (req, res) => {
	try {
		const { prompt } = req.body;

		const openAi = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
		const file = path.resolve("./speach.mp3");

		const result = await openAi.audio.speech.create({
			model: "tts-1-hd",
			voice: "alloy",
			input: prompt,
			response_format: "mp3",
		});

		const buffer = Buffer.from(await result.arrayBuffer());
		await fs.promises.writeFile(file, buffer);

		res.status(200).json(result);
	} catch (error) {
		res.status(404).json(`GENERATE_VOICE: ${error.message}`);
	}
};

export const GET_POSTS = async (req, res) => {
	try {
		const posts = await Posts.find();
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json(`GET_POSTS: ${error.message}`);
	}
};

export const CREATE_POST = async (req, res) => {
	try {
		const { name, prompt, photo } = req.body;
		if (!name || !prompt || !photo) return res.status(400).json({ error: "All Fields Are Required." });

		await Posts.create({ name, prompt, photo });

		res.status(200).json({ success: "Post Created Successfully." });
	} catch (error) {
		res.status(404).json(`CREATE_POST: ${error.message}`);
	}
};
