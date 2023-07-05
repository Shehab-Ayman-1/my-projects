import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { Menu } from "@/components";
import "./styles/options.scss";

export const FilterOptions = () => {
	const { city, adults, children, rooms, startDate, endDate } = useLocation().state;
	const [filterData, setFilterData] = useState({ city, adults, children, rooms, startDate, endDate, min: 0, max: 0 });
	const [calender, setCalender] = useState([{ startDate: filterData.startDate, endDate: filterData.endDate, key: "selection" }]);

	const handleCity = ({ target }) => setFilterData((f) => (f = { ...f, city: target.getAttribute("name") }));
	const handleFilterData = ({ target: { name, value } }) => setFilterData((f) => (f = { ...f, [name]: value }));

	let start = new Date(calender[0].startDate).toLocaleDateString();
	let end = new Date(calender[0].endDate).toLocaleDateString();

	return (
		<div className="left-section">
			<h3>Search</h3>
			<div className="locations">
				<Menu title={`${filterData.city || "Where Are You Going ?"}`} closeable>
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

			<div className="dates">
				<h3>Check In Dates</h3>
				<div className="calender">
					<Menu title={`From: ${start} - To: ${end}`}>
						<DateRange editableDateInputs={true} onChange={(item) => setCalender([item.selection])} moveRangeOnFirstSelection={false} ranges={calender} />
					</Menu>
				</div>
			</div>

			<div className="options">
				<h3>Options</h3>
				<div className="option">
					<p>Min Price Per Night</p>
					<input type="number" name="min" value={filterData.min} onChange={handleFilterData} placeholder="0" />
				</div>
				<div className="option">
					<p>Max Price Per Night</p>
					<input type="number" name="max" value={filterData.max} onChange={handleFilterData} placeholder="0" />
				</div>
				<div className="option">
					<p>Adults</p>
					<input type="number" name="adults" value={filterData.adults} onChange={handleFilterData} placeholder="0" />
				</div>
				<div className="option">
					<p>Children</p>
					<input type="number" name="children" value={filterData.children} onChange={handleFilterData} placeholder="0" />
				</div>
				<div className="option">
					<p>Rooms</p>
					<input type="number" name="rooms" value={filterData.rooms} onChange={handleFilterData} placeholder="0" />
				</div>
			</div>

			<button className="mybtn" data-varient="fill">
				Search
			</button>
		</div>
	);
};
