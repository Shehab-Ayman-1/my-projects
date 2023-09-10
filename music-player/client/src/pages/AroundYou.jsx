import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SongCard } from "@/components";
import { Error, Loader } from "@/layout";
import { useGetSongsByCountryQuery } from "@/redux";
import { useAxios } from "@/hooks";

export const AroundYou = () => {
	const { loading, refetch } = useAxios("get", "/");
	const [country, setCountry] = useState("");
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetSongsByCountryQuery(country);

	useEffect(() => {
		(async () => {
			const { data, loading, error } = await refetch("get", `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`, null, null, true);
			if (!loading && error) return alert(error);
			setCountry((c) => (c = data?.location.country));
		})();
	}, [country]);

	if (isFetching && loading) return <Loader title="Loading Songs around you..." />;
	if (error && country) return <Error />;

	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
				Around you <span className="font-black">{country}</span>
			</h2>

			<div className="flex flex-wrap sm:justify-start justify-center gap-8">
				{data?.map((song, i) => (
					<SongCard data={data} i={i} key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} />
				))}
			</div>
		</div>
	);
};
