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
	const handleOpenDropdownMenu = (event) => setDropdownMenu(event.currentTarget);
	const handleCloseDropdownMenu = () => setDropdownMenu(null);

	return (
		<div className="featured">
			<div className="featured-header">
				<h3 className="header-title">Total Revenue</h3>
				<IconButton onClick={handleOpenDropdownMenu} sx={{ color: "var(--black)" }}>
					<MoreVert sx={{ fontSize: "2rem" }} />
				</IconButton>
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

			{/* =================================== Menu =================================== */}
			<Menu anchorEl={dropdownMenu} open={openDropdown} onClose={handleCloseDropdownMenu}>
				<MenuItem>
					<Edit sx={{ mr: 1 }} />
					Edit
				</MenuItem>

				<MenuItem>
					<FileCopy sx={{ mr: 1 }} />
					Duplicate
				</MenuItem>

				<MenuItem>
					<Archive sx={{ mr: 1 }} />
					Archive
				</MenuItem>

				<MenuItem>
					<MoreHoriz sx={{ mr: 1 }} />
					More
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Featured;
