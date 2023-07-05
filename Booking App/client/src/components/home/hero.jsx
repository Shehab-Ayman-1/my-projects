import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { Menu } from "@/components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./styles/hero.scss";

export const Hero = () => {
	const [calender, setCalender] = useState([{ startDate: new Date(), endDate: null, key: "selection" }]);
	const [details, setDetails] = useState({ adults: 0, children: 0, rooms: 0 });
	const [city, setCity] = useState("");
	const start = new Date(calender[0].startDate).toLocaleDateString();
	const end = new Date(calender[0].endDate).toLocaleDateString();
	const navigate = useNavigate();

	const handleIncreament = ({ target }) => {
		let name = target.getAttribute("name");
		setDetails((d) => (d = { ...d, [name]: d[name] + 1 }));
	};

	const handleDecreament = ({ target }) => {
		let name = target.getAttribute("name");
		setDetails((d) => (d = { ...d, [name]: d[name] <= 0 ? d[name] : d[name] - 1 }));
	};

	const handleCity = ({ target }) => {
		setCity((c) => (c = target.getAttribute("name")));
	};

	const handleNavigate = () => {
		if (!city) return alert("Please Choose The City.");
		if (!end) return alert("Please Choose The Date.");
		if (!details.adults) return alert("Please Enter The Adults Count.");
		if (!details.children) return alert("Please Enter The Children Count.");
		if (!details.rooms) return alert("Please Enter The Rooms Count.");
		let state = { city, adults: details.adults, children: details.children, rooms: details.rooms, startDate: calender[0].startDate, endDate: calender[0].endDate };
		navigate(`/search`, { state });
	};

	return (
		<section className="hero-section">
			<div className="hero">
				<h1 className="heading">A Lifetime Of discounts? It's Genius.</h1>
				<p className="description">Get Rewarded For Your Travils - Unlock Instant Saving Of 100% Or More With A Free Booking.com Account</p>
				<button className="mybtn" data-varient="outline">
					Sign In / Sign Up
				</button>
			</div>

			<div className="search">
				<div className="locations">
					<Menu title={`${city || "Where Are You Going ?"}`} closeable>
						<h3 name="london" onClick={handleCity}>
							London
						</h3>
						<h3 name="egypt" onClick={handleCity}>
							Egypt
						</h3>
						<h3 name="hongkong" onClick={handleCity}>
							HongKong
						</h3>
						<h3 name="paris" onClick={handleCity}>
							Paris
						</h3>
					</Menu>
				</div>

				<div className="calender">
					<Menu title={`From: [ ${start} ] - To: [ ${end} ]`}>
						<DateRange editableDateInputs={true} onChange={(item) => setCalender([item.selection])} moveRangeOnFirstSelection={false} ranges={calender} />
					</Menu>
				</div>

				<div className="details">
					<Menu title={`${details.adults} Adults, ${details.children} Children, ${details.rooms} Rooms`}>
						<div className="flex">
							<p className="name"> Adults </p>
							<p className="plus" name="adults" onClick={handleIncreament}>
								+
							</p>
							<p className="minus" name="adults" onClick={handleDecreament}>
								-
							</p>
						</div>
						<div className="flex">
							<p className="name"> Children </p>
							<p className="plus" name="children" onClick={handleIncreament}>
								+
							</p>
							<p className="minus" name="children" onClick={handleDecreament}>
								-
							</p>
						</div>
						<div className="flex">
							<p className="name"> Rooms </p>
							<p className="plus" name="rooms" onClick={handleIncreament}>
								+
							</p>
							<p className="minus" name="rooms" onClick={handleDecreament}>
								-
							</p>
						</div>
					</Menu>
				</div>

				<button className="mybtn" data-varient="fill" onClick={handleNavigate}>
					Search
				</button>
			</div>
		</section>
	);
};
