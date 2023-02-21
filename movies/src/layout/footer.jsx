import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import footerImage from "./footer-bottom-img.png";

export default function Footer() {
	return (
		<footer className="footer-section" id="footer-section">
			<div className="footer-header">
				<img className="logo" src={logo} alt="logo" />
				<nav className="nav-bar">
					<NavLink className="link main-color" to="/">
						Home
					</NavLink>
					<p className="link">Movies</p>
					<p className="link">TV Show</p>
					<p className="link">Web Series</p>
					<p className="link">Pricing</p>
				</nav>
			</div>
			<div className="footer-body">
				<div className="left-section">
					<p>FAQ</p>
					<p>Help Center</p>
					<p>Teams Of Use</p>
					<p>Privacy</p>
				</div>
				<div className="right-section">
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-pinterest-p"></i>
					<i className="fab fa-linkedin-in"></i>
				</div>
			</div>
			<div className="footer-footer">
				<p> © 2022 Shehab Ayman. All Rights Reserved</p>
				<img src={footerImage} alt="footer-bottom-img" />
			</div>
		</footer>
	);
}
