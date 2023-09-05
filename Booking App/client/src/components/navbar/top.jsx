import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@/assets";
import { Menu } from "..";
import "./styles/top.scss";

export const TopSection = () => {
	const [user, setUser] = useState(null);
	const [mobileSideNav, setMobileSideNav] = useState(false);
	const navigate = useNavigate();

	const openMobileSidenav = () => setMobileSideNav((s) => (s = true));
	const closeMobileSidenav = () => setMobileSideNav((s) => (s = false));

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user"));
		setUser((u) => (u = { fName: "shehab", lName: "ayman" }));
	}, []);

	useEffect(() => {
		const getPosition = () => {
			const section = document.querySelector(".top-section");
			const menu = document.querySelector(".user-dropdown .menu");
			const sidePageSpace = window.innerWidth - document.querySelector(".top-section")?.clientWidth || 0;
			if (menu) menu.style.right = `${sidePageSpace / 2 + 20}px`;
		};
		window.addEventListener("resize", getPosition);
		getPosition();
	});

	const handleLogout = () => {
		localStorage.removeItem("user");
		navigate("/login");
	};

	return (
		<div className="top-section">
			<Link to="/" className="left-side">
				Booking.com
			</Link>
			<div className="right-side">
				<div className="desktop">
					{!user && (
						<Fragment>
							<i className="far fa-question-circle fa-xl" />
							<button className="mybtn" data-varient="outline">
								List Your Property
							</button>
							<div className="flex-between">
								<button className="mybtn" data-varient="fill" onClick={() => navigate("/register")}>
									Register
								</button>
								<button className="mybtn" data-varient="fill" onClick={() => navigate("/login")}>
									Login
								</button>
							</div>
						</Fragment>
					)}
					{user && (
						<div className="user-dropdown">
							<i className="far fa-question-circle fa-xl" />
							<button className="mybtn" data-varient="outline">
								List Your Property
							</button>
							<Menu title={<img className="avatar" src={Avatar} alt="avatar" />} useArrow={false} closeable>
								<div className="option name">
									<h3>
										{user?.fName} {user?.lName}
									</h3>
								</div>
								<div className="option">
									<i className="far fa-user text-black" /> <h3>Profile</h3>
								</div>
								<div className="option">
									<i className="fa fa-gear text-black" /> <h3>Setting</h3>
								</div>
								<div className="option" onClick={handleLogout}>
									<i className="fa fa-sign-out-alt text-black" /> <h3>Logout</h3>
								</div>
							</Menu>
						</div>
					)}
				</div>
				<div className="mobile"></div>
				<div className="desktop-mobile"></div>
			</div>
		</div>
	);
};
/* 
			{!user && <i className={`mobile fa fa-bars fa-xl`} onClick={openMobileSidenav} />}

			<div className="desktop ">
				<div className="flex-between">
					<i className="far fa-question-circle fa-xl" />
					<button className="mybtn" data-varient="outline">
						List Your Property
					</button>

					{!user && (
						<div className="flex-between">
							<button className="mybtn" data-varient="fill" onClick={() => navigate("/register")}>
								Register
							</button>
							<button className="mybtn" data-varient="fill" onClick={() => navigate("/login")}>
								Login
							</button>
						</div>
					)}
				</div>

				{user && (
					<div className="user">
						<i className={`mobile fa fa-bars fa-xl`} onClick={openMobileSidenav} />
						<Menu title={<img className="avatar" src={Avatar} alt="" />} useArrow={false} closeable>
							<h3 className="name">
								{user.fName} {user.lName}
							</h3>
							<div className="flex-between gap-1">
								<i className="far fa-user text-black" /> <h3>Profile</h3>
							</div>
							<div className="flex-between gap-1">
								<i className="fa fa-gear text-black" /> <h3>Setting</h3>
							</div>
							<div className="flex-between gap-1" onClick={handleLogout}>
								<i className="fa fa-sign-out-alt text-black" /> <h3>Logout</h3>
							</div>
						</Menu>
					</div>
				)}
			</div>

			<div className={`mobile mobile-nav ${mobileSideNav ? "" : "hide-scale"}`}>
				<i className="fa fa-times fa-xl" onClick={closeMobileSidenav} />
				<button className="mybtn" data-varient="outline">
					List Your Property
				</button>
				{!user && (
					<div className="">
						<button className="mybtn" data-varient="fill" onClick={() => navigate("/register")}>
							Register
						</button>
						<button className="mybtn" data-varient="fill" onClick={() => navigate("/login")}>
							Login
						</button>
					</div>
				)}
			</div>
*/
