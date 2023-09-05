import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { HorizontalScrollbar } from "@/components";
import { useAxios } from "@/utils";

export const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
	const { refetch: bodyPartsRefetch } = useAxios("get", "/");
	const { refetch: searchRefetch } = useAxios("get", "/");
	const [search, setSearch] = useState("");
	const [oldSearch, setOldSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		(async () => {
			const { data, loading, error } = await bodyPartsRefetch("get", "/get-list-by-key?key=bodyPart");
			if (!loading && error) return alert(error);
			setBodyParts(["all", ...data]);
		})();
	}, []);

	const handleSearch = async () => {
		if (!search || search.toLowerCase() === oldSearch.toLowerCase()) return;

		const { data: searchResult, loading, error } = await searchRefetch("get", `/get-search/${search}`);
		if (!loading && error) return alert(error);

		window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
		setOldSearch((s) => (s = search));
		setSearch((s) => (s = ""));
		setExercises((e) => (e = searchResult));
	};

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="49px" textAlign="center">
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					type="text"
					height="76px"
					sx={{ input: { fontWeight: "700", border: "none", borderRadius: "4px" }, width: { lg: "1170px", xs: "350px" }, backgroundColor: "#fff", borderRadius: "40px" }}
					value={search}
					onChange={({ target: { value } }) => setSearch(value.toLowerCase())}
					placeholder="Search Exercises"
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "173px", xs: "80px" },
						height: "56px",
						position: "absolute",
						right: "0px",
						fontSize: { lg: "20px", xs: "14px" },
					}}
					onClick={handleSearch}>
					Search
				</Button>
			</Box>
			<Box sx={{ position: "relative", width: "100%", p: "20px" }}>
				<HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
			</Box>
		</Stack>
	);
};
