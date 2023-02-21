// React
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

// Material Ui
import { AppBar, Avatar, Button, Stack, ToggleButton, ToggleButtonGroup, Typography, Menu, MenuItem, Divider } from "@mui/material";
import { AirplanemodeActive, DirectionsCarFilled, List, Cancel, PersonAdd, Settings, Logout } from "@mui/icons-material/";
import { Style, LocalHotel, DirectionsCar } from "@mui/icons-material/";
import { blue } from "@mui/material/colors";

// Components
import { AuthContext } from "../../context/auth/context";
import { LOGOUT } from "../../context/auth/actions";

const Navbar = () => {
	// Context
	const context = useContext(AuthContext);
	const user = context?.state?.user;

	// Dropdown
	const [dropdown, setDropdown] = useState(null);
	const openDropdown = Boolean(dropdown);
	const handleOpenDrop = (event) => setDropdown(event.currentTarget);
	const handleCloseDrop = () => setDropdown(null);

	useEffect(() => {
		const bottom_header = document.querySelector("header .header-bottom");
		const header = () => {
			if (window.scrollY > 0) {
				bottom_header.classList.add("hidden");
			} else {
				bottom_header.classList.remove("hidden");
			}
		};
		window.onscroll = header;
		window.onload = header;
	}, []);

	// Toggle Buttons
	const [current, setCurrent] = useState("Stays");
	const handleToggleButtons = (event, newCurrent) => setCurrent(newCurrent);

	// Navbar && Properties
	const handleProperties = () => document.querySelector(".header .header-bottom").classList.toggle("show-display");
	const handleCloseProperties = () => document.querySelector(".header .header-bottom").classList.remove("show-display");

	// Logout
	const handleLogout = () => context.dispatch(LOGOUT());

	return (
		<AppBar className="header" position="static" sx={{ bgcolor: blue[900], p: 2, boxShadow: "none" }}>
			<Stack className="header-top" direction="row" justifyContent="space-between" alignItems="center">
				<Typography component={Link} to="/" className="left-section" variant="h4" sx={{ color: "white", cursor: "pointer" }}>
					<Style className="icon" sx={{ mr: 2, fontSize: 30 }} />
					Hotel Booking
				</Typography>

				<Stack className="right-section" direction="row" justifyContent="flex-end" alignItems="center" gap={2}>
					<div className="properties">
						<Button
							component={Link}
							to="/hotels"
							variant="outlined"
							color="primary"
							size="small"
							sx={{ color: "white", borderColor: "white", whiteSpace: "nowrap" }}>
							List Your Property
						</Button>
					</div>
					{context.state.isSignin && (
						<div className="more">
							<Avatar
								src={user?.avatar}
								alt="image-flag"
								sx={{ width: 30, height: 30, cursor: "pointer" }}
								onClick={handleOpenDrop}
							/>
						</div>
					)}

					{!context.state.isSignin && (
						<div className="auth">
							<Button className="btn" component={Link} to="/auth/register" variant="contained" size="small">
								Sign Up
							</Button>
							<Button className="btn" component={Link} to="/auth/login" variant="contained" size="small">
								Sign In
							</Button>
						</div>
					)}
					<List className="togglers" onClick={handleProperties} sx={{ cursor: "pointer" }} />
				</Stack>
			</Stack>

			<div className="header-bottom">
				<Cancel className="cross-icon" onClick={handleCloseProperties} />
				<ToggleButtonGroup color="primary" value={current} onChange={handleToggleButtons} exclusive>
					<ToggleButton className="toggle-button" value="Stays" size="small">
						<LocalHotel className="icon" sx={{ mr: 2 }} />
						Stays
					</ToggleButton>
					<ToggleButton className="toggle-button" value="Flights" size="small">
						<AirplanemodeActive className="icon" sx={{ mr: 2 }} />
						Flights
					</ToggleButton>
					<ToggleButton className="toggle-button" value="CarRentals" size="small">
						<DirectionsCar className="icon" sx={{ mr: 2 }} />
						Car Rentals
					</ToggleButton>
					<ToggleButton className="toggle-button" value="Attractions" size="small">
						<LocalHotel className="icon" sx={{ mr: 2 }} />
						Attractions
					</ToggleButton>
					<ToggleButton className="toggle-button" value="AirportTaxis" size="small">
						<DirectionsCarFilled className="icon" sx={{ mr: 2 }} />
						Airport Taxis
					</ToggleButton>
				</ToggleButtonGroup>
			</div>

			<Menu anchorEl={dropdown} open={openDropdown} onClose={handleCloseDrop}>
				<MenuItem>
					<Avatar src={user?.avatar} alt="avatar-img" sx={{ width: 32, height: 32, mr: 1 }} />
					{user?.username}
				</MenuItem>
				<MenuItem>
					<Avatar sx={{ width: 32, height: 32, mr: 1 }}>{user?.fName?.charAt(0)}</Avatar>
					{user?.email}
				</MenuItem>
				<Divider />
				<MenuItem component={Link} to="/auth/login">
					<PersonAdd fontSize="small" sx={{ color: "gray", width: 0.1, mr: 1 }} />
					Add another account
				</MenuItem>
				<MenuItem>
					<Settings fontSize="small" sx={{ color: "gray", width: 0.1, mr: 1 }} />
					Settings
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<Logout fontSize="small" sx={{ color: "gray", width: 0.1, mr: 1 }} />
					Logout
				</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
