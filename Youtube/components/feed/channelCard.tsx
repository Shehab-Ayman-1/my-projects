import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "@/constants";
import { CheckCircle } from "@mui/icons-material";
import type { VideoProps } from "@/types";
import Link from "next/link";

type ChannelProps = {
	channel: VideoProps;
};

export const ChannelCard = ({ channel: { id, snippet, statistics } }: ChannelProps) => {
	const subscribersCount = +(statistics?.subscriberCount || 0);
	const videoCount = +(statistics?.videoCount || 0);

	return (
		<Box sx={{ borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
			<Link href={`/channel/${id?.channelId}`}>
				<CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
					<CardMedia
						component="img"
						image={snippet?.thumbnails?.high?.url || demoProfilePicture}
						alt="channel-img"
						loading="lazy"
						sx={{ width: "180px", height: "180px", borderRadius: "50%", mb: 2, border: "1px solid #e3e3e3" }}
					/>
					<Typography variant="h6" sx={{ textAlign: "center" }}>
						{snippet?.title}
						<CheckCircle sx={{ color: "gray", fontSize: 14, ml: "5px" }} />
					</Typography>
					{subscribersCount ? (
						<Typography variant="subtitle2" color="#bbb">
							Subscribers {subscribersCount > 1000 ? `${subscribersCount / 1000}K` : subscribersCount}
						</Typography>
					) : null}
					{videoCount ? (
						<Typography variant="subtitle2" color="#bbb">
							Videos {videoCount > 1000 ? `${videoCount / 1000}K` : videoCount}
						</Typography>
					) : null}
				</CardContent>
			</Link>
		</Box>
	);
};
