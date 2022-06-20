import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	let addNavbar = () => {
		document.querySelector(".NaveBar").classList.toggle("Active");
		document.querySelector(".Search-Form").classList.remove("Active");
	};

	let removeNavbar = () => {
		document.querySelector(".NaveBar").classList.remove("Active");
	};

	let searchForm = () => {
		document.querySelector(".Search-Form").classList.toggle("Active");
		document.querySelector(".NaveBar").classList.remove("Active");
	};

	return (
		<header>
			<div className="logo">
				<Link to="/" className="A-Link">
					<i className="fas fa-store"></i>
					Shopie
				</Link>
			</div>
			<nav className="NaveBar">
				<NavLink to="/" onClick={removeNavbar}>
					Home
				</NavLink>
				<NavLink to="/About" onClick={removeNavbar}>
					About
				</NavLink>
				<NavLink to="/Products" onClick={removeNavbar}>
					Products
				</NavLink>
				<NavLink to="/Contact" onClick={removeNavbar}>
					Contact
				</NavLink>
				<NavLink to="/Login" onClick={removeNavbar}>
					Login
				</NavLink>
				<NavLink to="/Register" onClick={removeNavbar}>
					Register
				</NavLink>
				<NavLink to="/Cart" onClick={removeNavbar}>
					Cart
				</NavLink>
			</nav>
			<div className="Icons">
				<i className="fa fa-bars" onClick={addNavbar}></i>
				<i className="fa fa-search A-Link" onClick={searchForm}></i>
				<Link to="/Login" className="fa fa-user A-Link"></Link>
				<Link to="/Favorite" className="fa fa-heart A-Link"></Link>
				<Link to="/Cart" className="fa fa-shopping-cart A-Link"></Link>
			</div>
			<div className="Search-Form">
				<input type="text" />
				<i className="fa fa-search"></i>
			</div>
		</header>
	);
}

export default Header;
