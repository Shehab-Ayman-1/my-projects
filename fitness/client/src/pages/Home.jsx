import { useState } from "react";
import { Box } from "@mui/material";

import { Exercises, SearchExercises, HeroBanner } from "@/components";

export const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setBodyPart] = useState("all");

	return (
		<Box>
			<HeroBanner />
			<SearchExercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
			<Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
		</Box>
	);
};
