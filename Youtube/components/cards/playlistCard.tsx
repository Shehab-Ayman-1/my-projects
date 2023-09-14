import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "@/constants";
import { CheckCircle } from "@mui/icons-material";
import type { VideoProps } from "@/types";
import Link from "next/link";

export const PlaylistCard = ({ playlist: { snippet } }: { playlist: VideoProps }) => {
	return (
		<Box sx={{ borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
			<Link href={`/channel/${snippet?.channelId}`}>
				<CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
					<CardMedia
						component="img"
						image={snippet?.thumbnails?.high?.url || demoProfilePicture}
						alt="channel-img"
						loading="lazy"
						sx={{ width: "180px", height: "180px", borderRadius: "50%", mb: 2, border: "1px solid #e3e3e3" }}
					/>
					<Typography variant="h6">Playlist</Typography>
					<Typography variant="h6" sx={{ textAlign: "center" }}>
						{snippet?.title}
						<CheckCircle sx={{ color: "gray", fontSize: 14, ml: "5px" }} />
					</Typography>
				</CardContent>
			</Link>
		</Box>
	);
};
