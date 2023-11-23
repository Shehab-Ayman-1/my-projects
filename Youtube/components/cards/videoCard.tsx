"use client";
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoChannelUrl, demoVideoTitle, demoVideoUrl } from "@/constants";
import { CheckCircle } from "@mui/icons-material";
import type { VideoProps } from "@/types";
import Link from "next/link";
import moment from "moment";

type VideoCardProps = {
	video: VideoProps;
	cardWidth?: string | number;
	cardHeight?: string | number;
};

export const VideoCard = ({ video: { id, snippet }, cardHeight = "100%", cardWidth = "auto" }: VideoCardProps) => {
	const { videoId } = id;
	const { title, channelId, channelTitle, publishedAt, thumbnails } = snippet;
	const date = moment(new Date(publishedAt)).fromNow();

	return (
		<Card sx={{ maxWidth: "400px", width: cardWidth, height: cardHeight, borderRadius: 3, boxShadow: "0px 2px 5px #a1a1a1" }}>
			<Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					component="img"
					image={thumbnails?.high?.url}
					alt={title}
					loading="lazy"
					sx={{
						height: 180,
						objectFit: "cover",
						"&:hover": { transform: "scale(1.2)", transition: "0.3s linear", transitionDelay: "0.5s" },
					}}
				/>
			</Link>
			<CardContent sx={{ background: "#000", minHeight: "106px", height: "100%", display: "flex", gap: 1.5 }}>
				<Link href={`/channel/${channelId}`}>
					<Avatar
						src={thumbnails.default.url}
						alt="channel-img"
						sx={{ width: { xs: "28px", sm: "32px" }, height: { xs: "28px", sm: "32px" }, cursor: "pointer" }}
					/>
				</Link>
				<Box>
					<Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
						<Typography variant="subtitle2" fontWeight="bold" color="white" title={title}>
							{title?.slice(0, 40) || demoVideoTitle}...
						</Typography>
					</Link>
					<Link href={channelId ? `channel/${channelId}` : demoChannelUrl}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{ whiteSpace: "nowrap" }}>
							{channelTitle}
							<CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
						</Typography>
						<Typography variant="subtitle2" color="gray">
							78k Views - {date}
						</Typography>
					</Link>
				</Box>
			</CardContent>
		</Card>
	);
};
