import React from "react";
import logo from "./logo.svg";
import { Link, NavLink } from "react-router-dom";

const scrollerAndHeader = () => {
	// Scroll Button
	let scroller = document.querySelector("header .scroller-btn");
	if (window.scrollY < 100) {
		scroller.classList.add("hide-display");
	} else {
		scroller.classList.remove("hide-display");
	}

	// Header Style
	if (window.scrollY === 0) {
		document.querySelector("header.header").classList.add("active");
	} else {
		document.querySelector("header.header").classList.remove("active");
	}
};

window.addEventListener("load", scrollerAndHeader);
window.addEventListener("scroll", scrollerAndHeader);

export default function Header() {
	let closeNavbar = () => {
		document.querySelector("nav.nav-bar").classList.remove("show-right-clip");
	};

	let openNavbar = () => {
		document.querySelector("nav.nav-bar").classList.add("show-right-clip");
	};

	let handleScroller = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<header className="header active" id="header">
			<Link to="/">
				<img className="logo" src={logo} alt="logo" />
			</Link>
			<nav className="nav-bar">
				<div className="header">
					<img src={logo} alt="logo" />
					<i className="fa fa-times" onClick={closeNavbar}></i>
				</div>
				<NavLink className="link" to="/">
					Home
				</NavLink>
				<a className="link" href="#streaming-section">
					Streaming
				</a>
				<a className="link" href="#services-section">
					Services
				</a>
				<a className="link" href="#rating-section">
					Rating
				</a>
				<a className="link" href="#tv-show-section">
					TV Show
				</a>
				<a className="link" href="#offer-section">
					Our Offer
				</a>
				<div className="footer">
					<i className="fab fa-twitter"></i>
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-pinterest-p"></i>
					<i className="fab fa-instagram"></i>
					<i className="fab fa-youtube" data-empty></i>
				</div>
				<p className="mybtn mobile-signin">Signin</p>
			</nav>
			<div className="addition">
				<i className="fa fa-search" data-empty></i>
				<i className="fas fa-globe" data-empty></i>
				<select className="select-box">
					<option value="en">EN</option>
					<option value="ar">AR</option>
					<option value="fr">FR</option>
					<option value="tu">TU</option>
				</select>
				<i className="fa fa-bars" data-empty onClick={openNavbar}></i>
				<p className="mybtn">SIGN IN</p>
			</div>
			<div className="scroll-up scroller-btn" onClick={handleScroller}>
				<i className="fa fa-chevron-up"></i>
			</div>
		</header>
	);
}
