import { Box } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "..";
import type { VideoProps } from "@/types";

type VideosProps = {
	videos: VideoProps[];
	noVideos?: boolean;
	noChannels?: boolean;
	noPlaylists?: boolean;
};

export const Videos = ({ videos, noVideos, noChannels, noPlaylists }: VideosProps) => {
	return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
			{videos.map((item, i) => (
				<Box key={i} sx={{ gridColumn: { xs: "span 12", sm: "span 6", md: "span 4", lg: "span 3", xl: "span 2" } }}>
					{!noVideos && item.id?.videoId && <VideoCard video={item} />}
					{!noChannels && item.id?.channelId && <ChannelCard channel={item} />}
					{!noPlaylists && item.id?.playlistId && <PlaylistCard playlist={item} />}
				</Box>
			))}
		</Box>
	);
};
