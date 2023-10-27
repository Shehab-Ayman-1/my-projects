import Exercises from "../models/exercises.model.js";
import axios from "axios";
const headers = { "X-RapidAPI-Key": process.env.RAPID_KEY, "X-RapidAPI-Host": "exercisedb.p.rapidapi.com" };

export const GET_SEARCH = async (req, res) => {
	try {
		const { search } = req.params;

		const exercises = await Exercises.find();
		const keys = Object.keys(exercises[0]._doc).filter((key) => key !== "_id" && key !== "__v");

		const result = exercises.filter((item) => {
			const isExist = keys.some((key) => item[key].toLowerCase() === search.toLowerCase());
			return isExist;
		});

		res.status(200).json(result);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_EXERCISES = async (req, res) => {
	try {
		const { limit, ...query } = req.query;

		const exercises = (await Exercises.find(query).limit(limit || 999)) || [];
		const date = new Date(exercises[0]?.createdAt);

		if (date.getDate() === new Date().getDate()) return res.status(200).json(exercises);

		// Delete The Previous Exercises
		await Exercises.deleteMany();

		// Get The Source Data
		const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", { headers });

		// Add The New Exercises
		const items = response.data?.map(({ id, ...item }) => item) || [];
		const newExercises = await Exercises.create(items.slice(0, 500));

		res.status(200).json(newExercises);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_EXERCISE = async (req, res) => {
	try {
		const query = req.query;

		const exercise = await Exercises.findOne(query);
		if (!exercise) return res.status(400).json("No Exercise Found.");

		res.status(200).json(exercise);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const GET_LIST_BY_KEY = async (req, res) => {
	try {
		const { key } = req.query;
		if (!key) return res.status(400).json("Key Is Required Query.");

		const keys = await Exercises.find().distinct(key);
		const list = Array.from(new Set(keys));

		res.status(200).json(list);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const CREATE_EXERCISES = async (req, res) => {
	try {
		const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", { headers });

		// Delete The Previous Exercises
		await Exercises.deleteMany();

		// Add The New Exercises
		const items = response.data?.map(({ id, ...item }) => item) || [];
		const newExercises = await Exercises.create(items.slice(0, 500));

		res.status(200).json(newExercises);
	} catch (error) {
		res.status(404).json(`CREATE_EXERCISES: ${error.message}`);
	}
};
