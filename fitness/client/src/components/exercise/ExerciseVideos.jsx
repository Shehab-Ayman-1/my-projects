import { Typography, Box, Stack, Grid } from "@mui/material";
import { Loader } from "@/layout";

export const ExerciseVideos = ({ exerciseVideos, name }) => {
	if (!exerciseVideos.length) return <Loader />;

	return (
		<Box sx={{ marginTop: { md: "100px", xs: "20px", padding: 20 } }}>
			<Typography sx={{ fontSize: { md: "44px", xs: "25px" } }} fontWeight={700} color="#000" mb="33px">
				Watch <span style={{ color: "#FF2625", textTransform: "capitalize" }}>{name}</span> exercise videos
			</Typography>
			<Stack flexWrap="wrap" justifyContent="space-around" alignItems="flex-start" gap={3} direction="row">
				{exerciseVideos?.slice(0, 6)?.map(({ video }, index) => (
					<Box key={index} sx={{ width: "100%", maxWidth: "350px" }}>
						<a style={{ width: "100%", height: "100%" }} className="exercise-video" href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noreferrer">
							<img style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", width: "100%", height: "100%" }} src={video.thumbnails[0].url} alt={video.title} />
							<Box>
								<Typography sx={{ fontSize: { lg: "28px", xs: "18px" } }} fontWeight={600} color="#000">
									{video.title}
								</Typography>
								<Typography fontSize="14px" color="#000">
									{video.channelName}
								</Typography>
							</Box>
						</a>
					</Box>
				))}
			</Stack>
		</Box>
	);
};
