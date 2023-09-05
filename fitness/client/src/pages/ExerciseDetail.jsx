import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Detail, ExerciseVideos, SimilarExercises } from "@/components";
import { useAxios, youtubeOptions } from "@/utils";

export const ExerciseDetail = () => {
	const { refetch: youtubeRefetch } = useAxios("get", "/");
	const { refetch: getExerciseRefetch } = useAxios("get", "/");
	const { refetch: getByTargetRefetch } = useAxios("get", "/");
	const { refetch: getByEquipmentRefetch } = useAxios("get", "/");
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });

		(async () => {
			const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

			if (!id) return alert("ID Is Not Recieved, Please Return To Home Page And Try Again.");

			// GET Exercise By ID
			const { data: exercise, loading, error } = await getExerciseRefetch("get", `/get-exercise?_id=${id}`);
			setExerciseDetail(exercise);

			if (!loading && error) return alert(error);

			// YouTube Search
			const { data: videos } = await youtubeRefetch("get", `${youtubeSearchUrl}/search?query=${exercise.name}`, null, youtubeOptions, true);
			setExerciseVideos(videos.contents);

			// get-exercise?target=???
			const { data: exerciseByTarget } = await getByTargetRefetch("get", `/get-exercises?target=${exercise.target}`);
			setTargetMuscleExercises(exerciseByTarget);

			// get-exercise?equipment=???
			const { data: exercisesByEquipment } = await getByEquipmentRefetch("get", `/get-exercises?equipment=${exercise.equipment}`);
			setEquipmentExercises(exercisesByEquipment);
		})();
	}, [id]);

	if (!exerciseDetail) return <div>No Data</div>;

	return (
		<Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
			<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
		</Box>
	);
};
