"use client";
import { Fragment, useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useAxios } from "@/hooks/useAxios";
import { Error, Loading, Navbar } from "@/layout";
import { ChannelProps, VideoProps } from "@/types";
import { ChannelCard, Videos } from "@/components";

type ChannelDetailsProps = {
	params: {
		id: string;
	};
};

const ChannelDetails = ({ params: { id } }: ChannelDetailsProps) => {
	const { loading: channelLoading, error: channelError, refetch: channelRefetch } = useAxios("get", "/");
	const { loading: videosLoading, error: videosError, refetch: videosRefetch } = useAxios("get", "/");
	const [channel, setChannel] = useState<ChannelProps>();
	const [videos, setVideos] = useState<VideoProps[]>([]);

	useEffect(() => {
		(async () => {
			const channelRes = await channelRefetch("get", `/channels?part=snippet&id=${id}`);
			setChannel((c) => (c = channelRes?.data?.items[0]));

			const videosRes = await videosRefetch("get", `/search?part=snippet&order=date&maxResults=50&channelId=${id}`);
			setVideos((v) => (v = videosRes?.data?.items));
		})();
	}, [id]);

	if (channelLoading || videosLoading) return <Loading />;
	if (channelError || videosError) return <Error error={channelError || videosError} />;
	return (
		<Fragment>
			<Navbar noSidebar />
			<Stack>
				<Box sx={{ zIndex: 10, height: "200px" }}>
					<img src={channel?.brandingSettings?.image?.bannerExternalUrl} alt="bannerExternalUrl" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
					<Box sx={{ mt: -15, pointerEvents: "none" }}>
						{channel?.snippet && channel?.statistics && (
							<ChannelCard
								channel={{
									id: { channelId: channel?.id },
									snippet: channel.snippet,
									statistics: channel.statistics,
								}}
							/>
						)}
					</Box>
				</Box>
				<Box display="flex" sx={{ p: 2, mx: { sm: "50px" }, mt: 20 }}>
					<Videos videos={videos} noChannels noPlaylists />
				</Box>
			</Stack>
		</Fragment>
	);
};

export default ChannelDetails;
