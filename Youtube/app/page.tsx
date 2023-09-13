"use client";
import { Fragment, useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "@/components";
import { useAxios } from "@/hooks/useAxios";
import { Navbar } from "@/layout";
import type { VideoProps } from "@/types";

const Feed = () => {
	const { refetch } = useAxios("get", "/");
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

	return (
		<Fragment>
			<Navbar setOpen={setOpen} />
			<Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
				<Box sx={{ borderRight: "1px solid #3d3d3d", px: { sm: 0, md: 2 }, width: { xs: "100%", md: open ? "300px" : "40px" }, overflowX: "hidden" }}>
					<Sidebar open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
					{open && (
						<Typography variant="subtitle2" className="copyright" sx={{ color: "#bbb", mt: 1, textAlign: "center" }}>
							Copyright 2023 With ❤️ By <br /> Shehab Ayman
						</Typography>
					)}
				</Box>

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
