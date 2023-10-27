"use client";
import { Stack } from "@mui/material";
import { categories } from "@/constants";
import type { SelectedCatagory, ButtonEvent, OpenCloseSidebar } from "@/types";
import { useEffect, useState } from "react";

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
		<Stack direction="row" sx={{ flexDirection: { md: "column" } }} overflow="hidden">
			{categories.map(({ name, icon }) => (
				<button
					key={name}
					className={`category-btn ${open ? "open" : "close"}`}
					name={name}
					onClick={handleClick}
					style={{
						background: name === selected ? "#fc1503" : "initial",
						color: "white",
						whiteSpace: "nowrap",
					}}>
					<span style={{ paddingRight: 10 }}>{icon}</span>
					<span style={{ color: name === selected ? "white" : "#bbb", opacity: innerWidth > 900 && !open ? 0 : 1 }}>{name}</span>
				</button>
			))}
		</Stack>
	);
};
