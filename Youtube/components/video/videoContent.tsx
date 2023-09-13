"use client";
import { CheckCircle, ShareOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import type { ChannelProps, CommentsProps, VideoDetailsProps } from "@/types";
import Link from "next/link";

type VideoContentProps = {
	video?: VideoDetailsProps;
	bgGradient: string;
};

export const VideoContent = ({ video, bgGradient }: VideoContentProps) => {
	const [likes, setLikes] = useState({ like: false, dislike: false });
	const [channel, setChannel] = useState<ChannelProps>();
	const { refetch } = useAxios("get", "/");

	useEffect(() => {
		if (!video?.snippet.channelId) return;
		(async () => {
			const channelRes = await refetch("get", `/channels?part=snippet&id=${video?.snippet.channelId}`);
			setChannel((c) => (c = channelRes?.data.items[0]));
		})();
	}, []);

	const handleLikes = () => {
		setLikes((l) => (l = { like: !l.like, dislike: false }));
	};

	const handleDisLikes = () => {
		setLikes((d) => (d = { dislike: !d.dislike, like: false }));
	};

	const subscribersCount = +(channel?.statistics.subscriberCount || 0);
	const likesCount = +(video?.statistics.likeCount || 0);

	return (
		<Fragment>
			<Typography variant="h5" fontWeight="bold" color="white" px={2} pt={2}>
				{video?.snippet.title}
			</Typography>
			<Stack direction="row" justifyContent="space-between" alignItems="center" color="#bbb" flexWrap="wrap" gap={4} p={2}>
				<Stack direction="row" alignItems="center" gap={2}>
					<Avatar src={channel?.snippet.thumbnails.high.url} alt="channel-img" />
					<Box>
						<Link href={`/channel/${video?.snippet.channelId}`}>
							<Typography variant="h5" color="white" fontWeight="bold" fontSize="18px" title={video?.snippet.channelTitle}>
								{video?.snippet.channelTitle.slice(0, 25)}
								<CheckCircle sx={{ fontSize: "14px", ml: 1 }} />
							</Typography>
						</Link>
						<Typography variant="body2" color="#bbb">
							{subscribersCount > 1000000 ? `${(subscribersCount / 1000000).toFixed(2)}M` : subscribersCount > 1000 ? `${(subscribersCount / 1000).toFixed(2)}K` : subscribersCount}{" "}
							Subscribers
						</Typography>
					</Box>
				</Stack>
				<Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
					<Stack direction="row" sx={{ background: bgGradient, borderRadius: 10, p: "5px" }}>
						<Button variant="text" color="inherit" sx={{ color: "#bbb", pr: 2.5, display: "flex", alignItems: "center", borderRight: "1px solid #e3e3e3" }} onClick={handleLikes}>
							<ThumbUpAltOutlined className={`likes-thumb ${likes.like ? "active" : ""}`} />
							<span style={{ color: "white", paddingLeft: 5 }}>{likesCount > 1000 ? `${(likesCount / 1000).toFixed(2)}K` : likesCount}</span>
						</Button>
						<Button variant="text" color="inherit" sx={{ color: "#bbb", width: "10px", padding: 0, margin: 0 }} onClick={handleDisLikes}>
							<ThumbDownAltOutlined className={`likes-thumb ${likes.dislike ? "active" : ""}`} />
						</Button>
					</Stack>
					<Button
						variant="text"
						color="inherit"
						sx={{ color: "white", background: bgGradient, borderRadius: 10, p: "10px 20px", display: "flex", alignItems: "center" }}
						onClick={handleLikes}>
						<ShareOutlined />
						<span style={{ paddingLeft: 5, marginTop: 2 }}>Share</span>
					</Button>
				</Stack>
			</Stack>
		</Fragment>
	);
};
