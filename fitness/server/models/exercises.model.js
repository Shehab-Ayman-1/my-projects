import { Schema, model } from "mongoose";

const bodyParts = ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];

const schema = new Schema({
	name: String,
	target: String,
	bodyPart: { type: String, enum: bodyParts },
	gifUrl: String,
	equipment: String,
});

export default model("exercises", schema);

/* 
	List of bodyparts: ["back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]
	List of target muscles: ["abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"]
	List of all exercises: []
	List of equipment: ["assisted", "band", "barbell", "body weight", "bosu ball", "cable", "dumbbell", "elliptical machine", "ez barbell", "hammer", "kettlebell", "leverage machine", "medicine ball", "olympic barbell", "resistance band", "roller", "rope", "skierg machine", "sled machine", "smith machine", "stability ball", "stationary bike", "stepmill machine", "tire", "trap bar", "upper body ergometer", "weighted", "wheel roller"]
	List by body part
	Exercise by ID
	List by name
	List by target muscle
	List by equipment
*/
