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
		}, 1000);
	};

	return (
		<Paper component="form" sx={{ width: "100%", maxWidth: "300px", borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 1 }, ml: 2 }} onSubmit={handleSubmit}>
			<div className="">
				<Autocomplete
					fullWidth
					disableClearable
					noOptionsText="No Results."
					options={options}
					filterOptions={(x) => x}
					renderInput={(params) => <TextField {...params} label="Search..." variant="standard" color="error" onChange={handleSearch} sx={{ mt: -1.5 }} />}
					popupIcon={<Search sx={{ p: "10px", color: "red", mt: -1.5, zIndex: 10 }} />}
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
