"use client";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "@/constants";
import type { SelectedCatagory, ButtonEvent, OpenCloseSidebar } from "@/types";
import { useEffect, useState } from "react";
import "./sidebar.scss";

export const Sidebar = ({ open, setOpen, selected, setSelected }: SelectedCatagory & OpenCloseSidebar) => {
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		setInnerWidth(() => window?.innerWidth || 0);
	}, []);

	const handleClick = ({ currentTarget: { name } }: ButtonEvent) => {
		setSelected((s) => (s = name));
		if (innerWidth < 1200) {
			setOpen && setOpen((o) => (o = false));
		}
	};

	return (
		<Box className={`box ${!open ? "close" : ""}`}>
			<Stack className="sidebar" direction="row" sx={{ flexDirection: { md: "column" } }} overflow="hidden">
				{categories.map(({ name, icon }) => (
					<button key={name} name={name} className={`category-btn ${name === selected ? "selected" : ""}`} onClick={handleClick}>
						<div className="icon">
							<span>{icon}</span>
						</div>
						<div className={`name ${name === selected ? "selected" : ""} ${!open ? "hidden" : ""}`}>
							<span>{name}</span>
						</div>
					</button>
				))}
			</Stack>
			{open && (
				<Typography variant="subtitle2" className="copyright" sx={{ color: "#bbb", mt: 1, textAlign: "center" }}>
					Copyright 2022 With ❤️ <br /> Shehab Ayman
				</Typography>
			)}
		</Box>
	);
};
