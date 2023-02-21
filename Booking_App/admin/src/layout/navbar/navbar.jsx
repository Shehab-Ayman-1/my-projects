// React
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

// Material Icons
import { SearchOutlined, LanguageOutlined, NotificationsActive, ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { PersonAdd, Settings, Logout, FormatListBulletedOutlined } from "@mui/icons-material";

// Material UI
import { Avatar, Badge, Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { Menu, MenuItem, Divider, IconButton, styled } from "@mui/material";

// Context
import { Context } from "../../context/createContext";
import { AuthContext } from "../../context/auth/context";
import { TOGGLE_MODE } from "../../context/actions";
import { LOGOUT } from "../../context/auth/actions";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	".MuiSwitch-switchBase": {
		margin: 1,
		padding: 0,
		transform: "translateX(6px)",
		"&.Mui-checked": {
			color: "#fff",
			transform: "translateX(22px)",
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					"#fff"
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
			},
		},
	},
	".MuiSwitch-thumb": {
		backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
		width: 32,
		height: 32,
		"&:before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"#fff"
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
	},
	".MuiSwitch-track": {
		opacity: 1,
		backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
		borderRadius: 10,
	},
}));

const Navbar = () => {
	// context Api
	const context = useContext(Context);
	const { state, dispatch } = useContext(AuthContext);

	useEffect(() => {
		if (localStorage.getItem("data-mode") === "dark-mode") {
			document.body.setAttribute("data-mode", "dark-mode");
		} else if (localStorage.getItem("data-mode") === "light-mode") {
			document.body.setAttribute("data-mode", "light-mode");
		}
	}, []);

	// Acount Settings
	const [accountMenu, setAccountMenu] = useState(null);
	const openAccountMenu = Boolean(accountMenu);

	// Chat Menu
	const [chatMenu, setChatMenu] = useState(null);
	const openChatMenu = Boolean(chatMenu);

	// Languages Menu
	const [languagesMenu, setLanguagesMenu] = useState(null);
	const openLanguagesMenu = Boolean(languagesMenu);

	// Account Dropdown Menu
	const handleOpenAccountMenu = (event) => setAccountMenu(event.currentTarget);

	const handleCloseAccountMenu = () => setAccountMenu(null);

	// Chat Dropdown Menu
	const handleOpenChatMenu = (event) => setChatMenu(event.currentTarget);

	const handleCloseChatMenu = () => setChatMenu(null);

	// Languages Dropdown Menu
	const handleOpenLanguagesMenu = (event) => setLanguagesMenu(event.currentTarget);

	const handleCloseLanguagesMenu = () => setLanguagesMenu(null);

	// Dark Mode Switch
	const handleMode = () => {
		context.dispatch(TOGGLE_MODE());
		if (localStorage.getItem("data-mode") !== "dark-mode") {
			document.body.setAttribute("data-mode", "dark-mode");
		} else {
			document.body.setAttribute("data-mode", "light-mode");
		}
	};

	// handle Search Bar
	let handleSearchbar = () => document.querySelector(".left-section .search-bar").classList.toggle("show");

	// handle Sidebar
	let handleSidebar = () => {
		document.querySelector("section.sidebar").classList.remove("hide-left-clip");
		document.querySelector("section.sidebar").classList.toggle("show-left-clip");
	};

	return (
		<nav className="navbar">
			<div className="left-section">
				<FormatListBulletedOutlined className="icon bars" onClick={handleSidebar} />
				<SearchOutlined className="icon search" onClick={handleSearchbar} />
				<div className="search-bar">
					<input className="input-field" type="search" placeholder="Search Here ...." />
					<SearchOutlined className="icon" />
				</div>
			</div>

			<div className="right-section">
				<IconButton className="item">
					<FormControlLabel sx={{ m: 0, p: 0 }} control={<MaterialUISwitch onClick={handleMode} />} />
				</IconButton>

				<IconButton className="item" size="small" onClick={handleOpenLanguagesMenu}>
					<LanguageOutlined className="icon" />
				</IconButton>

				<IconButton className="item" size="small" onClick={handleOpenChatMenu}>
					<Badge color="error" badgeContent={6} sx={{ ".MuiBadge-badge": { fontSize: "1.25em !important" } }}>
						<NotificationsActive className="icon" />
					</Badge>
				</IconButton>

				<IconButton className="item" size="small" onClick={handleOpenChatMenu}>
					<Badge color="error" badgeContent="+99" sx={{ ".MuiBadge-badge": { fontSize: "1.25em !important" } }}>
						<ChatBubbleOutlineOutlined className="icon" />
					</Badge>
				</IconButton>

				<IconButton className="item user" size="small" onClick={handleOpenAccountMenu}>
					{state?.user?.avatar ? (
						<Avatar className="avatar" src={state?.user?.avatar} alt="user-img" sx={{ m: "0 10px" }} />
					) : (
						<Avatar className="avatar" sx={{ bgcolor: "purple", width: 32, height: 32 }}>
							{state?.user?.fName?.charAt(0).toUpperCase()}
							{state?.user?.lName?.charAt(0).toUpperCase()}
						</Avatar>
					)}
					<span className="username">{state?.user?.username}</span>
				</IconButton>

				{/*  ================================== Menus ===============================  */}
				{/* languages Menu */}
				<Menu anchorEl={languagesMenu} open={openLanguagesMenu} onClose={handleCloseLanguagesMenu}>
					<MenuItem>English</MenuItem>
					<Divider />
					<MenuItem>Arabic</MenuItem>
					<Divider />
					<MenuItem>France</MenuItem>
					<Divider />
					<MenuItem>German</MenuItem>
					<Divider />
					<MenuItem>Greece</MenuItem>
					<Divider />
					<MenuItem>English</MenuItem>
				</Menu>

				{/* chate Menu */}
				<Menu anchorEl={chatMenu} open={openChatMenu} onClose={handleCloseChatMenu} sx={{ p: "15px 10px" }}>
					<MenuItem>
						<Avatar
							src="https://imgs.search.brave.com/Ensqxe6vxfqepHwUg3TGpKi9t04607YcDrepP5uMDHk/rs:fit:957:1200:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vei9tYW4t/b3V0c2lkZS1ncmVh/dC1sb29raW5nLW1h/bGUtbW9kZWwtb3V0/ZG9vcnMtMzUxNzA1/OTEuanBn"
							alt="Travis Howard"
						/>
						<Box sx={{ ml: 1 }}>
							<Typography className="menu-title" variant="h5" color="var(--main-color)" fontWeight="bold">
								Brunch this weekend?
							</Typography>
							<Typography variant="subtitle1" color="var(--light-text)" fontSize="12px" fontWeight="bold">
								Ali Connors
							</Typography>
							<Typography variant="subtitle2" color="GrayText" sx={{ whiteSpace: "normal", fontSize: "10px" }}>
								I'll be in your neighborhood doing errands this…
							</Typography>
						</Box>
					</MenuItem>

					<Divider />

					<MenuItem>
						<Avatar
							src="https://imgs.search.brave.com/eZhpmZzxroS7L5Luapy55EoND5nJc6z6qnIWSgFLSl4/rs:fit:950:633:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMTEv/dGh1bWJzMzUwLzEx/ODQ0Mi5qcGc"
							alt="Travis Howard"
						/>
						<Box sx={{ ml: 1 }}>
							<Typography className="menu-title" variant="h5" color="var(--main-color)" fontWeight="bold">
								Smile ! ☺
							</Typography>
							<Typography variant="subtitle" color="var(--light-text)" fontSize="12px" fontWeight="bold">
								to Scott, Alex, Jennifer
							</Typography>
							<Typography variant="subtitle2" color="GrayText" sx={{ whiteSpace: "normal", fontSize: "10px" }}>
								Wish I could come, but I'm out of town this…
							</Typography>
						</Box>
					</MenuItem>

					<Divider />

					<MenuItem>
						<Avatar
							src="https://imgs.search.brave.com/TQhcfA63o61p19guLKfr4KPMhNitJZZwocBAOPI-U0I/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2hhcHB5LWF1c3Ry/YWxpYW4tbWlkLWFk/dWx0LW1hbi1waWN0/dXJlLWlkNTg4MzY4/MDIw"
							alt="Travis Howard"
						/>
						<Box sx={{ ml: 1 }}>
							<Typography className="menu-title" variant="h5" color="var(--main-color)" fontWeight="bold">
								Oui Oui
							</Typography>
							<Typography variant="subtitle" color="var(--light-text)" fontSize="12px" fontWeight="bold">
								Sandra Adams
							</Typography>
							<Typography variant="subtitle2" color="GrayText" sx={{ whiteSpace: "normal", fontSize: "10px" }}>
								Do you have Paris recommendations? Have you ever…
							</Typography>
						</Box>
					</MenuItem>
					<Divider />
				</Menu>

				{/* Account Menu */}
				<Menu anchorEl={accountMenu} open={openAccountMenu} onClose={handleCloseAccountMenu}>
					<MenuItem>
						{state?.user?.avatar ? (
							<Avatar src={state?.user?.avatar} alt="user-img" sx={{ width: 32, height: 32, mr: 1 }} />
						) : (
							<Avatar sx={{ bgcolor: "purple", width: 32, height: 32, mr: 1 }}>
								{state?.user?.fName?.charAt(0).toUpperCase()}
								{state?.user?.lName?.charAt(0).toUpperCase()}
							</Avatar>
						)}
						{state?.user?.email}
					</MenuItem>

					<Divider />

					<MenuItem component={Link} to="/auth/login">
						<PersonAdd sx={{ fontSize: "30px", pr: "10px" }} />
						Add another account
					</MenuItem>

					<MenuItem>
						<Settings sx={{ fontSize: "30px", pr: "10px" }} />
						Settings
					</MenuItem>

					<MenuItem onClick={() => dispatch(LOGOUT())}>
						<Logout sx={{ fontSize: "30px", paddingRight: "10px" }} />
						Logout
					</MenuItem>
				</Menu>
			</div>
		</nav>
	);
};

export default Navbar;
