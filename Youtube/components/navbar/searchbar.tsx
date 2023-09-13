"use client";
import { Fragment, useState, useEffect, useRef, useMemo } from "react";
import { Paper, IconButton, Autocomplete, TextField, Typography, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import type { FormEvent, InputEvent, VideoProps } from "@/types";
import { useAxios } from "@/hooks/useAxios";

export const Searchbar = () => {
	const { loading, refetch } = useAxios("get", "/");
	const [search, setSearch] = useState("");
	const [options, setOptions] = useState([]);
	const router = useRouter();

	useEffect(() => {
		if (!search) return;
		(async () => {
			const response = await refetch("get", `/search?part=snippet&maxResults=10&q=${search}&order=date`);
			const newOptions = response?.data?.items?.map((item: VideoProps, index: number) => ({ label: item.snippet.title.slice(0, 30), index }));
			setOptions((o) => (o = newOptions));
		})();
	}, [search]);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (!search) return;
		router.push(`/search/${search}`);
	};

	let timeout: NodeJS.Timeout;
	const handleSearch = ({ currentTarget: { value } }: InputEvent) => {
		if (!value) return;

		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setSearch((s) => (s = value));
		}, 1500);
	};

	return (
		<Paper component="form" sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 1 } }} onSubmit={handleSubmit}>
			<div className="">
				<Autocomplete
					sx={{ width: 300 }}
					disableClearable
					noOptionsText="No Results."
					options={options}
					filterOptions={(x) => x}
					renderInput={(params) => <TextField {...params} label="Search..." variant="standard" onChange={handleSearch} sx={{ mt: -1.5 }} />}
					popupIcon={
						<IconButton type="submit" disabled={loading} sx={{ p: "10px", color: "red", mt: -1.5, zIndex: 10 }}>
							<Search />
						</IconButton>
					}
					renderOption={(props, { label, index }) => (
						<Box {...props} key={index} component="li" sx={{ borderBottom: "1px solid #bbb" }}>
							<Typography variant="subtitle2">{label}</Typography>
						</Box>
					)}
				/>
			</div>
		</Paper>
	);
};

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
	"The Shawshank Redemption",
	"The Godfather",
	"The Godfather: Part II",
	"The Dark Knight",
	"12 Angry Men",
	"Schindler's List",
	"Pulp Fiction",
	"The Lord of the Rings: The Return of the King",
	"The Good, the Bad and the Ugly",
	"Fight Club",
	"The Lord of the Rings: The Fellowship of the Ring",
	"Star Wars: Episode V - The Empire Strikes Back",
	"Forrest Gump",
	"Inception",
	"The Lord of the Rings: The Two Towers",
	"One Flew Over the Cuckoo's Nest",
	"Goodfellas",
	"The Matrix",
	"Seven Samurai",
	"Star Wars: Episode IV - A New Hope",
	"City of God",
	"Se7en",
	"The Silence of the Lambs",
	"It's a Wonderful Life",
	"Life Is Beautiful",
	"The Usual Suspects",
	"Léon: The Professional",
	"Spirited Away",
	"Saving Private Ryan",
	"Once Upon a Time in the West",
	"American History X",
	"Interstellar",
	"Casablanca",
	"City Lights",
	"Psycho",
	"The Green Mile",
	"The Intouchables",
	"Modern Times",
	"Raiders of the Lost Ark",
	"Rear Window",
	"The Pianist",
	"The Departed",
	"Terminator 2: Judgment Day",
	"Back to the Future",
	"Whiplash",
	"Gladiator",
	"Memento",
	"The Prestige",
	"The Lion King",
	"Apocalypse Now",
	"Alien",
	"Sunset Boulevard",
	"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
	"The Great Dictator",
	"Cinema Paradiso",
	"The Lives of Others",
	"Grave of the Fireflies",
	"Paths of Glory",
	"Django Unchained",
	"The Shining",
	"WALL·E",
	"American Beauty",
	"The Dark Knight Rises",
	"Princess Mononoke",
	"Aliens",
	"Oldboy",
	"Once Upon a Time in America",
	"Witness for the Prosecution",
	"Das Boot",
	"Citizen Kane",
	"North by Northwest",
	"Vertigo",
	"Star Wars: Episode VI - Return of the Jedi",
	"Reservoir Dogs",
	"Braveheart",
	"M",
	"Requiem for a Dream",
	"Amélie",
	"A Clockwork Orange",
	"Like Stars on Earth",
	"Taxi Driver",
	"Lawrence of Arabia",
	"Double Indemnity",
	"Eternal Sunshine of the Spotless Mind",
	"Amadeus",
	"To Kill a Mockingbird",
	"Toy Story 3",
	"Logan",
	"Full Metal Jacket",
	"Dangal",
	"The Sting",
	"2001: A Space Odyssey",
	"Singin' in the Rain",
	"Toy Story",
	"Bicycle Thieves",
	"The Kid",
	"Inglourious Basterds",
	"Snatch",
	"3 Idiots",
	"Monty Python and the Holy Grail",
];
