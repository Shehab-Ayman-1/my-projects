import { useEffect, useState } from "react";
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
		setUser((u) => (u = user));
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("user");
		navigate("/signin");
	};

	return (
		<div className="top-section">
			<Link to="/" className="logo">
				Booking.com
			</Link>
			{!user && <i className={`mobile fa fa-bars fa-xl`} onClick={openMobileSidenav} />}

			<div className="flex-between gap">
				<div className="desktop">
					<i className="far fa-question-circle fa-xl" />
					<button className="mybtn" data-varient="outline">
						List Your Property
					</button>

					{!user && (
						<div className="">
							<button className="mybtn" data-varient="fill" onClick={() => navigate("/signup")}>
								Sign Up
							</button>
							<button className="mybtn" data-varient="fill" onClick={() => navigate("/signin")}>
								Sign In
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
						<button className="mybtn" data-varient="fill" onClick={() => navigate("/signup")}>
							Sign Up
						</button>
						<button className="mybtn" data-varient="fill" onClick={() => navigate("/signin")}>
							Sign In
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
