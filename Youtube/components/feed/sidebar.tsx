"use client";
import { Stack } from "@mui/material";
import { categories } from "@/constants";
import type { SelectedCatagory, ButtonEvent, OpenCloseSidebar } from "@/types";

export const Sidebar = ({ open, setOpen, selected, setSelected }: SelectedCatagory & OpenCloseSidebar) => {
	const innerWidth = window.innerWidth;
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
						background: name === selected ? "#fc1503" : "",
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
