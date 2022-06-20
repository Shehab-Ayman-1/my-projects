import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="footer">
				<div className="logo">
					<Link to="/" className="A-Link">
						<i className="fas fa-store"></i>
						Shopie
					</Link>
				</div>
				<nav className="nave-bar">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/About">About</NavLink>
					<NavLink to="/Products">Products</NavLink>
					<NavLink to="/Contact">Contact</NavLink>
					<NavLink to="/Login">Login</NavLink>
					<NavLink to="/Register">Register</NavLink>
					<NavLink to="/Cart">Cart</NavLink>
				</nav>
				<div className="Icons">
					<i className="fab fa-facebook-f"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-instagram"></i>
					<i className="fab fa-linkedin-in"></i>
				</div>
			</div>

			<div className="reserved">
				<h3>
					Created By <span>Mr - Shehab Ayman</span> | All Rights Reserved!
				</h3>
				<img src="./Images/card_img.png" alt="footer" />
			</div>
		</footer>
	);
}

export default Footer;
