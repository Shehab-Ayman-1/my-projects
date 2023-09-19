import { useState } from "react";
import { logo } from "@/assets";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./navbar.scss";

const links: string[] = ["home", "about", "works", "skills", "testimonials", "contact"];
export const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="navbar">
			<div className="logo-section">
				<img src={logo} alt="logo" className="logo" />
			</div>
			<div className="desktop-section">
				<ul className="links">
					{links.map((link) => (
						<li key={link} className={`${link}-link p-text`}>
							<a href={`#${link}-section`}>{link}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="mobile-menu">
				{!toggle && (
					<div className="menu-opener" onClick={() => setToggle(true)}>
						<HiMenuAlt4 />
					</div>
				)}
				{toggle && (
					<motion.div className="menu" whileInView={{ x: [300, 0] }} transition={{ duration: 0.5, ease: "linear" }}>
						<div className="menu-closer" onClick={() => setToggle(false)}>
							<HiX />
						</div>
						<ul className="links">
							{links.map((link) => (
								<li key={link} className={`${link}-link p-text`} onClick={() => setToggle(false)}>
									<a href={`#${link}-section`}>{link}</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};
