import Exercises from "../models/exercises.model.js";

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

		const exercises = await Exercises.find(query).limit(limit || 999);
		res.status(200).json(exercises);
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

		const allExercises = await Exercises.find().select(key);
		const values = allExercises.map((item) => item[key]);
		const list = Array.from(new Set(values));

		res.status(200).json(list);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

export const CREATE_BODY_PARTS = async (req, res) => {
	try {
		const { bodyParts } = req.body;

		const items = bodyParts.map(({ id, ...item }) => item);
		const newBodyParts = await Exercises.create(items);
		res.status(200).json(newBodyParts);
	} catch (error) {
		res.status(404).json(error.message);
	}
};
