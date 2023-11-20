"use client";
import { Fragment, useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "@/components";
import { useAxios } from "@/hooks/useAxios";
import { Error, Loading, Navbar } from "@/layout";
import type { VideoProps } from "@/types";

const Feed = () => {
	const { loading, error, refetch } = useAxios("get", "/");
	const [videos, setVideos] = useState<VideoProps[]>([]);
	const [selected, setSelected] = useState("New");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 1200) {
			setOpen((o) => (o = true));
		}
	}, []);

	useEffect(() => {
		(async () => {
			const response = await refetch("get", `/search?part=snippet&maxResults=50&q=${selected}`);
			setVideos((v) => (v = response?.data?.items || []));
		})();
	}, [selected]);

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<Fragment>
			<Navbar setOpen={setOpen} />
			<Stack sx={{ width: "100%", flexDirection: { sm: "column", md: "row" } }}>
				<Sidebar open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />

				<Box p={2}>
					<Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
						{selected} <span className="colored-title">Videos</span>
					</Typography>

					<Videos videos={videos} />
				</Box>
			</Stack>
		</Fragment>
	);
};

export default Feed;
