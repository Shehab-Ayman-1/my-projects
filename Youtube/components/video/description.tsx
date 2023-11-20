"use client";
import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { VideoDetailsProps } from "@/types";
import moment from "moment";

type DescriptionProps = {
	video?: VideoDetailsProps;
	bgGradient: string;
};

export const Description = ({ video, bgGradient }: DescriptionProps) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen((o) => (o = !o));
	};

	const handleClose = () => {
		if (!open) return;
		setOpen((o) => (o = false));
	};

	if (!video?.snippet || !video?.statistics) return;

	const viewsCount = +(video?.statistics.viewCount || 0);
	const createdAt = new Date(video?.snippet.publishedAt || "");

	return (
		<Box
			sx={{
				background: bgGradient,
				height: open ? "auto" : "100px",
				padding: 2,
				cursor: "pointer",
				overflow: "hidden",
				borderRadius: 5,
				"&:hover": { filter: "brightness(1.5)" },
			}}
			onClick={handleOpen}>
			<Stack direction="row" flexWrap="wrap">
				<Typography variant="body1" color="white" fontWeight="bold">
					{viewsCount > 10 ** 6 ? `${(viewsCount / 10 ** 6).toFixed(2)}m` : viewsCount > 10 ** 3 ? `${(viewsCount / 10 ** 3).toFixed(2)} K` : viewsCount} Views -
				</Typography>

				<Typography variant="body1" color="white" fontWeight="bold">
					{moment(createdAt).fromNow()} -
				</Typography>

				<Typography variant="body1" color="#bbb" fontWeight="bold">
					#{video?.snippet?.tags?.slice(0, 3).join(" - #")}
				</Typography>
			</Stack>

			<Typography variant="body2" color="white" sx={{ whiteSpace: "pre-line", textWrap: "balance" }}>
				{video?.snippet?.description}
			</Typography>

			{!open && (
				<Button variant="text" color="inherit" sx={{ color: "white", mt: 2, fontWeight: "bold", "&:hover": { color: "#bbb" } }} onClick={handleClose}>
					Show Less
				</Button>
			)}
		</Box>
	);
};
