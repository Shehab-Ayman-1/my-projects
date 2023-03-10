import { useState } from "react";
import { logo, menu, close } from "assets/images";
import { navLinks } from "constants/";

export const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={`navbar w-full py-6 flex justify-between`}>
			<img className={`w-[124px] h-[32px]`} src={logo} alt="logo" />
			<ul className={`sm:flex flex-1 hidden font-medium justify-end items-center`}>
				{navLinks.map((link, i) => (
					<li className={`text-[16px] cursor-pointer ${i === navLinks.length - 1 ? "mr-0" : "mr-10"}`} key={link.id}>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				))}
			</ul>

			<div className="mobile-navbar sm:hidden flex flex-1 justify-end items-center">
				<img
					className={`w-[28px] h-[28px] cursor-pointer object-contain`}
					src={toggle ? close : menu}
					alt="close"
					onClick={() => setToggle((toggle) => !toggle)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className={`sm:hidden flex flex-1 flex-col justify-end items-center`}>
						{navLinks.map((link) => (
							<li className={`hover:text-gradient text-[12px] my-5 cursor-pointer`} key={link.id}>
								<a className="hover:text-gradient" href={`#${link.id}`}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
