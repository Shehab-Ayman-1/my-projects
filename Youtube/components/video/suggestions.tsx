"use client";

import { useAxios } from "@/hooks/useAxios";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { VideoCard } from "@/components";
import { VideoProps } from "@/types";

export const Suggestions = ({ videoId }: { videoId?: string }) => {
	const [suggests, setSuggests] = useState<VideoProps[]>();
	const { refetch } = useAxios("get", "/");

	useEffect(() => {
		(async () => {
			if (!videoId) return;
			const response = await refetch("get", `/search?relatedToVideoId=${videoId}&part=snippet&type=videos&maxResults=20`);
			setSuggests((s) => (s = response?.data.items));
		})();
	}, []);

	return (
		<Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", flexDirection: "column", gap: 4 }}>
			{suggests?.map((video, i) => (
				<VideoCard video={video} cardWidth="100%" cardHeight="auto" key={i} />
			))}
		</Box>
	);
};
