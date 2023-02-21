// React
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

// Material Icons
import { SearchOutlined, LanguageOutlined, NotificationsActive, ChatBubbleOutlineOutlined } from "@mui/icons-material";
import { PersonAdd, Settings, Logout, FormatListBulletedOutlined } from "@mui/icons-material";

// Material UI
import { Avatar, Badge, FormControlLabel, List, ListItem, ListItemAvatar, ListItemText, Switch } from "@mui/material";
import { Menu, MenuItem, Divider, IconButton, styled } from "@mui/material";

// Context
import { Context } from "../../context/createContext";
import { TOGGLE_MODE } from "../../context/actions";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	"& .MuiSwitch-switchBase": {
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
	"& .MuiSwitch-thumb": {
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
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
		borderRadius: 10,
	},
}));

const Navbar = () => {
	useEffect(() => {
		if (localStorage.getItem("data-mode") === "dark-mode") {
			document.body.setAttribute("data-mode", "dark-mode");
		} else if (localStorage.getItem("data-mode") === "light-mode") {
			document.body.setAttribute("data-mode", "light-mode");
		}
	}, []);

	// context Api
	const context = useContext(Context);

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
	const handleOpenAccountMenu = (event) => {
		setAccountMenu(event.currentTarget);
	};
	const handleCloseAccountMenu = () => {
		setAccountMenu(null);
	};

	// Chat Dropdown Menu
	const handleOpenChatMenu = (event) => {
		setChatMenu(event.currentTarget);
	};
	const handleCloseChatMenu = () => {
		setChatMenu(null);
	};

	// Languages Dropdown Menu
	const handleOpenLanguagesMenu = (event) => {
		setLanguagesMenu(event.currentTarget);
	};
	const handleCloseLanguagesMenu = () => {
		setLanguagesMenu(null);
	};

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
	let handleSearchbar = () => {
		document.querySelector(".left-section .search-bar").classList.toggle("show");
	};

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
				<div className="item">
					<FormControlLabel sx={{ m: 0, p: 0 }} control={<MaterialUISwitch sx={{ m: 0 }} onClick={handleMode} />} />
				</div>

				<div className="item">
					<IconButton
						onClick={handleOpenLanguagesMenu}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={openLanguagesMenu ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openLanguagesMenu ? "true" : undefined}>
						<LanguageOutlined className="icon" />
					</IconButton>
					<Menu
						anchorEl={languagesMenu}
						id="languages-Menu"
						open={openLanguagesMenu}
						onClose={handleCloseLanguagesMenu}
						onClick={handleCloseLanguagesMenu}
						PaperProps={{
							elevation: 0,
							sx: {
								mt: 1.5,
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 15,
									height: 15,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<List sx={{ bgcolor: "var(--mode-bg)", width: "100%", maxWidth: 360 }}>
							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemText
									primary={
										<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--light-text)" }}>English</span>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemText
									style={{ paddingTop: 0, cursor: "pointer" }}
									primary={
										<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--light-text)" }}>Arabic</span>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemText
									style={{ paddingTop: 0, cursor: "pointer" }}
									primary={
										<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--light-text)" }}>France</span>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemText
									style={{ paddingTop: 0, cursor: "pointer" }}
									primary={
										<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--light-text)" }}>German</span>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemText
									style={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "red" } }}
									primary={
										<span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "var(--light-text)" }}>Greece</span>
									}
								/>
							</ListItem>
						</List>
					</Menu>
				</div>

				<div className="item">
					<IconButton
						onClick={handleOpenChatMenu}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={openChatMenu ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openChatMenu ? "true" : undefined}>
						<Badge color="error" badgeContent={6}>
							<NotificationsActive className="icon" />
						</Badge>
					</IconButton>
				</div>

				<div className="item">
					<IconButton
						onClick={handleOpenChatMenu}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={openChatMenu ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openChatMenu ? "true" : undefined}>
						<Badge color="error" badgeContent={100}>
							<ChatBubbleOutlineOutlined className="icon" />
						</Badge>
					</IconButton>
					<Menu
						anchorEl={chatMenu}
						id="chatBubble"
						open={openChatMenu}
						onClose={handleCloseChatMenu}
						onClick={handleCloseChatMenu}
						PaperProps={{
							elevation: 0,
							sx: {
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								mt: 1.5,
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 15,
									height: 15,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<List sx={{ bgcolor: "var(--mode-bg)", color: "var(--light-text)", maxWidth: 360 }}>
							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemAvatar>
									<Avatar
										alt="Travis Howard"
										src="https://imgs.search.brave.com/Ensqxe6vxfqepHwUg3TGpKi9t04607YcDrepP5uMDHk/rs:fit:957:1200:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vei9tYW4t/b3V0c2lkZS1ncmVh/dC1sb29raW5nLW1h/bGUtbW9kZWwtb3V0/ZG9vcnMtMzUxNzA1/OTEuanBn"
										style={{ width: "40px", height: "40px" }}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<span style={{ fontSize: "1.6rem", fontWeight: "bold", color: "var(--main-color)" }}>
											Brunch this weekend?
										</span>
									}
									secondary={
										<>
											<span style={{ color: "var(--dark-text)", fontSize: "1.3rem", fontWeight: "bold" }}>
												Ali Connors
											</span>
											<span style={{ color: "var(--light-text)", fontSize: "1.2rem" }}>
												— I'll be in your neighborhood doing errands this…
											</span>
										</>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="hr" sx={{ bgcolor: "var(--light-text)" }} />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemAvatar>
									<Avatar
										alt="Travis Howard"
										src="https://imgs.search.brave.com/eZhpmZzxroS7L5Luapy55EoND5nJc6z6qnIWSgFLSl4/rs:fit:950:633:1/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvMTEv/dGh1bWJzMzUwLzEx/ODQ0Mi5qcGc"
										style={{ width: "40px", height: "40px" }}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--main-color)" }}>
											Summer BBQ
										</span>
									}
									secondary={
										<>
											<span style={{ color: "var(--dark-text)", fontSize: "1.3rem", fontWeight: "bold" }}>
												to Scott, Alex, Jennifer
											</span>
											<span style={{ color: "var(--light-text)", fontSize: "1.2rem" }}>
												— Wish I could come, but I'm out of town this…
											</span>
										</>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="hr" sx={{ bgcolor: "var(--light-text)" }} />

							<ListItem
								alignItems="flex-start"
								sx={{ paddingTop: 0, cursor: "pointer", "&:hover": { bgcolor: "#795efd33", color: "black" } }}>
								<ListItemAvatar>
									<Avatar
										alt="Cindy Baker"
										src="https://imgs.search.brave.com/TQhcfA63o61p19guLKfr4KPMhNitJZZwocBAOPI-U0I/rs:fit:683:1024:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2hhcHB5LWF1c3Ry/YWxpYW4tbWlkLWFk/dWx0LW1hbi1waWN0/dXJlLWlkNTg4MzY4/MDIw"
										style={{ width: "40px", height: "40px" }}
									/>
								</ListItemAvatar>
								<ListItemText
									primary={
										<span style={{ color: "var(--main-color)", fontSize: "1.5rem", fontWeight: "bold" }}>Oui Oui</span>
									}
									secondary={
										<>
											<span style={{ color: "var(--dark-text)", fontSize: "1.3rem", fontWeight: "bold" }}>
												Sandra Adams
											</span>
											<span style={{ color: "var(--light-text)", fontSize: "1.2rem" }}>
												— Do you have Paris recommendations? Have you ever…
											</span>
										</>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="hr" sx={{ bgcolor: "var(--light-text)" }} />

							<ListItem
								alignItems="flex-start"
								sx={{
									cursor: "pointer",
									textAlign: "center",
									padding: 0,
									"&:hover": { textDecoration: "underline !important" },
								}}>
								<ListItemText
									primary={
										<span style={{ color: "#00a8ff", fontSize: "1.5rem", fontWeight: "bold" }}>See All Messages</span>
									}
								/>
							</ListItem>
						</List>
					</Menu>
				</div>

				<div className="item">
					<IconButton
						onClick={handleOpenAccountMenu}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={openAccountMenu ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openAccountMenu ? "true" : undefined}>
						<Avatar sx={{ bgcolor: "purple", width: 32, height: 32 }}>SH</Avatar>
					</IconButton>
					<Menu
						anchorEl={accountMenu}
						id="account-menu"
						open={openAccountMenu}
						onClose={handleCloseAccountMenu}
						onClick={handleCloseAccountMenu}
						PaperProps={{
							elevation: 0,
							sx: {
								mt: 1.5,
								overflow: "visible",
								filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
								"& .MuiAvatar-root": {
									width: 32,
									height: 32,
									ml: -0.5,
									mr: 1,
								},
								"&:before": {
									content: '""',
									display: "block",
									position: "absolute",
									top: 0,
									right: 14,
									width: 15,
									height: 15,
									bgcolor: "background.paper",
									transform: "translateY(-50%) rotate(45deg)",
									zIndex: 0,
								},
							},
						}}
						transformOrigin={{ horizontal: "right", vertical: "top" }}
						anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
						<MenuItem
							sx={{
								bgcolor: "var(--mode-bg)",
								color: "var(--light-text)",
								fontSize: "1.5rem",
								cursor: "pointer",
								"&:hover": { bgcolor: "#795efd33", color: "black" },
							}}>
							<Avatar
								src="https://imgs.search.brave.com/Ensqxe6vxfqepHwUg3TGpKi9t04607YcDrepP5uMDHk/rs:fit:957:1200:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vei9tYW4t/b3V0c2lkZS1ncmVh/dC1sb29raW5nLW1h/bGUtbW9kZWwtb3V0/ZG9vcnMtMzUxNzA1/OTEuanBn"
								alt="acount-img"
							/>
							Profile
						</MenuItem>

						<MenuItem
							sx={{
								bgcolor: "var(--mode-bg)",
								color: "var(--light-text)",
								fontSize: "1.5rem",
								cursor: "pointer",
								"&:hover": { bgcolor: "#795efd33", color: "black" },
							}}>
							<Avatar
								src="https://imgs.search.brave.com/0y9dJqouLINs2A_xPK4PXPexHJTGVTlnBesqsIJ2KQA/rs:fit:1200:800:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/L19oRWVEbHNnOHdB/NC9UVVprek4wSXZL/SS9BQUFBQUFBQURK/OC9LZUxsZjVZdkR6/ay9zMTYwMC9hZGlf/bXV0dV93YWxscGFw/ZXJfYWRyaWFuX211/dHVfbWFsZV9jZWxl/YnJpdGllc193YWxs/cGFwZXJfMTI4MF84/MDBfd2lkZXNjcmVl/bl83OTcuanBn"
								alt="profile image"
							/>
							My account
						</MenuItem>

						<Divider variant="inset" component="hr" sx={{ m: "0 !important" }} />

						<MenuItem
							sx={{
								bgcolor: "var(--mode-bg)",
								color: "var(--light-text)",
								fontSize: "1.5rem",
								cursor: "pointer",
								"&:hover": { bgcolor: "#795efd33", color: "black" },
							}}>
							<PersonAdd sx={{ fontSize: "30px", pr: "10px" }} />
							Add another account
						</MenuItem>

						<Divider variant="middle" component="hr" sx={{ m: "0 !important" }} />

						<MenuItem
							sx={{
								bgcolor: "var(--mode-bg)",
								color: "var(--light-text)",
								fontSize: "1.5rem",
								cursor: "pointer",
								"&:hover": { bgcolor: "#795efd33", color: "black" },
							}}>
							<Settings sx={{ fontSize: "30px", pr: "10px" }} />
							Settings
						</MenuItem>

						<Divider variant="middle" component="hr" sx={{ m: "0 !important" }} />

						<Link to="/">
							<MenuItem
								sx={{
									bgcolor: "var(--mode-bg)",
									color: "var(--light-text)",
									fontSize: "1.5rem",
									cursor: "pointer",
									"&:hover": { bgcolor: "#795efd33", color: "black" },
								}}>
								<Logout sx={{ fontSize: "30px", paddingRight: "10px" }} />
								Logout
							</MenuItem>
						</Link>
					</Menu>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
