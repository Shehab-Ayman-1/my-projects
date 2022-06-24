// React
import React, { useState } from "react";
import "./featured.scss";

// Circular Progressbar
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Material UI
import { KeyboardArrowUpOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { MoreVert, Edit, FileCopy, Archive, MoreHoriz } from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";

const Featured = () => {
	const [dropdownMenu, setDropdownMenu] = useState(null);
	const openDropdown = Boolean(dropdownMenu);

	// Dropdown Menu
	const handleOpenDropdownMenu = (event) => {
		setDropdownMenu(event.currentTarget);
	};

	const handleCloseDropdownMenu = () => {
		setDropdownMenu(null);
	};

	return (
		<div className="featured">
			<div className="featured-header">
				<h3 className="header-title">Total Revenue</h3>
				<div className="header-dropdown-icon">
					<IconButton
						onClick={handleOpenDropdownMenu}
						sx={{ color: "var(--black)" }}
						aria-controls={openDropdown ? "featured-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openDropdown ? "true" : undefined}>
						<MoreVert sx={{ fontSize: "2rem" }} />
					</IconButton>
					<Menu
						anchorEl={dropdownMenu}
						id="featured-menu"
						open={openDropdown}
						onClose={handleCloseDropdownMenu}
						onClick={handleCloseDropdownMenu}
						PaperProps={{
							elevation: 0,
							sx: {
								width: 180,
								mt: 1.5,
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2))",
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"& .MuiMenuItem-root:hover": {
									backgroundColor: "#795efd33",
									color: "black",
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 11,
									width: 15,
									height: 15,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
								},
								"& .MuiSvgIcon-root": {
									mr: 1.5,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<MenuItem
							onClick={handleCloseDropdownMenu}
							sx={{ bgcolor: "var(--mode-bg)", color: "var(--light-text)", fontSize: "1.5rem" }}>
							<Edit />
							Edit
						</MenuItem>

						<MenuItem
							onClick={handleCloseDropdownMenu}
							sx={{ bgcolor: "var(--mode-bg)", color: "var(--light-text)", fontSize: "1.5rem" }}>
							<FileCopy />
							Duplicate
						</MenuItem>

						<Divider conponent="hr" sx={{ bgcolor: "var(--light-text)", m: "0 !important", p: "0" }} />

						<MenuItem
							onClick={handleCloseDropdownMenu}
							sx={{ bgcolor: "var(--mode-bg)", color: "var(--light-text)", fontSize: "1.5rem" }}>
							<Archive />
							Archive
						</MenuItem>

						<MenuItem
							onClick={handleCloseDropdownMenu}
							sx={{ bgcolor: "var(--mode-bg)", color: "var(--light-text)", fontSize: "1.5rem" }}>
							<MoreHoriz />
							More
						</MenuItem>
					</Menu>
				</div>
			</div>
			<div className="featured-body">
				<div className="body-circular-progressbar">
					<CircularProgressbar value={70} text="70%" strokeWidth={3} className="progressbar" />
				</div>
				<div className="body-details">
					<p className="details-title">Total Sales Made Today</p>
					<p className="details-amount">$450</p>
					<p className="details-description">Previous Transactions Processings, Last Payment May Not Be Included</p>
				</div>
			</div>
			<div className="featured-footer">
				<div className="footer-target">
					<h3 className="target-name">Target</h3>
					<KeyboardArrowDownOutlined className="target-icon" />
					<span className="target-amount negative">
						<KeyboardArrowDownOutlined className="icon" />
						$12.4K
					</span>
				</div>
				<div className="footer-target">
					<h3 className="target-name">Target</h3>
					<KeyboardArrowDownOutlined className="target-icon" />
					<span className="target-amount positive">
						<KeyboardArrowUpOutlined className="icon" />
						$12.4K
					</span>
				</div>
				<div className="footer-target">
					<h3 className="target-name">Target</h3>
					<KeyboardArrowDownOutlined className="target-icon" />
					<span className="target-amount negative">
						<KeyboardArrowDownOutlined className="icon" />
						$12.4K
					</span>
				</div>
			</div>
		</div>
	);
};

export default Featured;
