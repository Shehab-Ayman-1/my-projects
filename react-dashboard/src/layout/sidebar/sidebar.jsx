import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

import { AccountCircleOutlined, NotificationsActive, MedicationLiquid } from "@mui/icons-material/";
import { LoginOutlined, AddBusiness, Psychology, Settings } from "@mui/icons-material/";
import { Close, Dashboard, BarChart, PeopleOutlined } from "@mui/icons-material";

import { Context } from "../../context/createContext";
import { RED, BLUE, GREEN, PURPLE, SILVER, YELLOW, DARK_BLUE } from "../../context/actions";
import logo from "./logo.png";

const Sidebar = () => {
	const context = useContext(Context);

	useEffect(() => {
		document.body.setAttribute("data-theme", localStorage.getItem("data-theme"));
	}, []);

	const handleTheme = (event) => {
		const element = event.currentTarget.closest(".theme-option");

		switch (element.dataset.theme) {
			case "BLUE":
				context.dispatch(BLUE());
				break;

			case "RED":
				context.dispatch(RED());
				break;

			case "GREEN":
				context.dispatch(GREEN());
				break;

			case "PURPLE":
				context.dispatch(PURPLE());
				break;

			case "SILVER":
				context.dispatch(SILVER());
				break;

			case "YELLOW":
				context.dispatch(YELLOW());
				break;

			case "DARK_BLUE":
				context.dispatch(DARK_BLUE());
				break;

			default:
				break;
		}
	};

	let handleSidebar = () => {
		document.querySelector(".sidebar").classList.remove("show-left-clip");
		document.querySelector(".sidebar").classList.add("hide-left-clip");
	};

	return (
		<section className="sidebar">
			<div className="header-sidebar">
				<Close className="icon cross" onClick={handleSidebar} />
				<Link to="/home-page" className="title">
					<img src={logo} alt="logo" />
					<span>Dashboard</span>
				</Link>
			</div>

			<div className="body-sidebar">
				<ul className="main-list">
					<h4 className="link-title">Main</h4>
					<li>
						<Link to="/home-page" className="link-content">
							<Dashboard className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>

					<h4 className="link-title">Lists</h4>
					<li>
						<Link to="/users" className="link-content">
							<PeopleOutlined className="icon" />
							<span>Users</span>
						</Link>
					</li>
					<li>
						<Link className="link-content" to="/products">
							<AddBusiness className="icon" />
							<span>Products</span>
						</Link>
					</li>

					<h4 className="link-title">UseFull</h4>
					<li>
						<div className="link-content">
							<BarChart className="icon" />
							<span>Stats</span>
						</div>
					</li>
					<li>
						<div className="link-content">
							<NotificationsActive className="icon" />
							<span>Notifications</span>
						</div>
					</li>

					<h4 className="link-title">Services</h4>
					<li>
						<div className="link-content">
							<MedicationLiquid className="icon" />
							<span>System Health</span>
						</div>
					</li>
					<li>
						<div className="link-content">
							<Psychology className="icon" />
							<span>Logs</span>
						</div>
					</li>
					<li>
						<div className="link-content">
							<Settings className="icon" />
							<span>Settings</span>
						</div>
					</li>

					<h4 className="link-title">User</h4>
					<li>
						<div className="link-content">
							<AccountCircleOutlined className="icon" />
							<span>Profile</span>
						</div>
					</li>
					<li>
						<Link to="/" className="link-content">
							<LoginOutlined className="icon" />
							<span>Logout</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="footer-sidebar">
				<div className="theme-option" data-theme="BLUE" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="RED" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="GREEN" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="PURPLE" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="SILVER" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="YELLOW" onClick={handleTheme}></div>
				<div className="theme-option" data-theme="DARK_BLUE" onClick={handleTheme}></div>
			</div>
		</section>
	);
};

export default Sidebar;
