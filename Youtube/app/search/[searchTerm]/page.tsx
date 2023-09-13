"use client";
import { Fragment, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "@/components";
import { useAxios } from "@/hooks/useAxios";
import { Error, Loading, Navbar } from "@/layout";
import type { VideoProps, SearchFeedProps } from "@/types";

const SearchFeed = ({ params: { searchTerm } }: SearchFeedProps) => {
	const { loading, error, refetch } = useAxios("get", "/");
	const [videos, setVideos] = useState<VideoProps[]>([]);

	useEffect(() => {
		(async () => {
			const response = await refetch("get", `/search?part=snippet&maxResults=50&q=${searchTerm}&order=date`);
			setVideos((v) => (v = response?.data?.items || []));
		})();
	}, [searchTerm]);

	return loading ? (
		<Loading />
	) : error ? (
		<Error />
	) : (
		<Fragment>
			<Navbar noSidebar />
			<Box p={2}>
				<Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
					Search Results For{" "}
					<span className="colored-title" title={searchTerm.replaceAll("%20", " ")}>
						{searchTerm.replaceAll("%20", " ").slice(0, 30)}...
					</span>{" "}
					Videos
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Fragment>
	);
};

export default SearchFeed;
