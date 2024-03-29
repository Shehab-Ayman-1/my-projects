"use client";
import { useEffect, useState } from "react";
import { Badge, Stack, Typography } from "@mui/material";
import { logo } from "@/constants";
import { Searchbar } from "@/components";
import { Menu } from "@mui/icons-material";
import type { OpenCloseSidebar } from "@/types";
import Link from "next/link";

export const Navbar = ({ setOpen, noSidebar }: OpenCloseSidebar) => {
	const handleOpenSidebar = () => setOpen && setOpen((o) => (o = !o));
	const [innerWidth, setInnerWidth] = useState(0);

	useEffect(() => {
		setInnerWidth(() => window?.innerWidth || 0);
	}, []);

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
			<Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
				{!noSidebar && <Menu sx={{ color: "white", width: "32px", display: { xs: "none", md: "block" } }} onClick={handleOpenSidebar} />}

				<img src={logo} alt="logo-img" height={45} />

				{innerWidth > 700 && (
					<Badge color="error" badgeContent="EN" sx={{ color: "white" }}>
						<Typography variant="h5" color="#ccc" fontWeight="bold">
							You<span style={{ fontSize: 26 }}>T</span>ube
						</Typography>
					</Badge>
				)}
			</Link>
			<Searchbar />
		</Stack>
	);
};
