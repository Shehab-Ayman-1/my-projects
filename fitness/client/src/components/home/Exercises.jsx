import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "@/components";
import { Loader } from "@/layout";
import { useAxios } from "@/utils";
import Pagination from "@mui/material/Pagination";

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
	const { loading, refetch } = useAxios("get", "/");
	const [currentPage, setCurrentPage] = useState(1);
	const [exercisesPerPage] = useState(6);

	useEffect(() => {
		(async () => {
			if (bodyPart === "all") {
				const { data } = await refetch("get", "/get-exercises?limit=50");
				setExercises(data);
			} else {
				const { data } = await refetch("get", `/get-exercises?bodyPart=${bodyPart}`);
				setExercises(data);
			}
		})();
	}, [bodyPart]);

	// Pagination
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises?.slice(indexOfFirstExercise, indexOfLastExercise) || [];

	const paginate = (_, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1800, behavior: "smooth" });
	};

	if (!currentExercises.length && loading) return <Loader />;

	return (
		<Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
			<Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="46px">
				Showing Results ({bodyPart})
			</Typography>
			<Stack direction="row" sx={{ gap: { lg: "107px", xs: "50px" } }} flexWrap="wrap" justifyContent="center">
				{currentExercises.map((exercise, idx) => (
					<ExerciseCard key={idx} exercise={exercise} />
				))}
				{!currentExercises.length && <h3>No Result</h3>}
			</Stack>
			<Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
				{exercises.length >= 5 && (
					<Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large" />
				)}
			</Stack>
		</Box>
	);
};
