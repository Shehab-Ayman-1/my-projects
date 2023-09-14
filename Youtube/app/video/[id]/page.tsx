"use client";
import { Box, Stack, Typography } from "@mui/material";
import { Fragment, useState, useEffect } from "react";
import { Error, Loading, Navbar } from "@/layout";
import { useAxios } from "@/hooks/useAxios";
import { Description, VideoContent, Suggestions } from "@/components";
import type { VideoIdParams, VideoDetailsProps } from "@/types";
import ReactPlayer from "react-player";

const VideoDetails = ({ params: { id } }: VideoIdParams) => {
	const { loading, error, refetch } = useAxios("get", "/");
	const [video, setVideo] = useState<VideoDetailsProps>();

	useEffect(() => {
		if (video) return;
		(async () => {
			const response = await refetch("get", `videos?part=snippet,statistics&order=date&id=${id}`);
			setVideo((v) => (v = response?.data.items[0]));
		})();
	}, []);

	const bgGradient = `linear-gradient(90deg, rgba(28,28,28,1) 0%, rgba(43,43,43,1) 49%, rgba(28,28,28,1) 98%)`;

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<Fragment>
			<Navbar noSidebar />
			<Stack sx={{ flexDirection: { xs: "column", md: "row" }, p: { xs: 2, sx: 3, md: 4 } }} gap={4}>
				<Box flex={2.5}>
					<Box sx={{ width: "100%" }}>
						<ReactPlayer controls className="react-player" url={`https://www.youtube.com/watch?v=${id}`} />

						<VideoContent video={video} bgGradient={bgGradient} />

						<Description video={video} bgGradient={bgGradient} />

						<Typography variant="subtitle1" color="white" sx={{ textAlign: "center", my: 3 }}>
							Comments are turned off. <span style={{ color: "#3ea6ff", fontWeight: "bold" }}>Learn More</span>
						</Typography>
					</Box>
				</Box>
				<Box flex={1}>
					<Suggestions videoId={video?.id} />
				</Box>
			</Stack>
		</Fragment>
	);
};

export default VideoDetails;
