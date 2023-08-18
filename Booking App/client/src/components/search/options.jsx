import { useCallback, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { Menu } from "@/components";
import { useAxios } from "@/hooks";
import useContext, { UPDATE_HOTELS } from "@/context";
import "./styles/options.scss";

const today = new Date();
const formData = { city: "All Locations", dates: { startDate: today, endDate: today }, options: { adults: 1, children: 1, rooms: 1 }, price: { min: 1, max: 1000 } };
export const FilterOptions = ({ cities }) => {
	const { hotelsState, hotelsDispatch } = useContext(0);
	const [data, setData] = useState(formData);
	const [calender, setCalender] = useState([{ startDate: data.dates.startDate, endDate: data.dates.endDate, key: "selection" }]);
	const { data: hotels, loading, error, Refetch } = useAxios("get", `/`);

	useEffect(() => {
		(async () => await hotelsDispatch(UPDATE_HOTELS({ hotels, loading, error })))();
	}, [hotels, loading, error]);

	useEffect(() => {
		(async () => {
			const { city, dates, options } = await hotelsState;
			setData((d) => (d = { ...d, city, dates, options }));
			Refetch("get", `hotels/get-hotels?city=${city || data.city}&min=1&max=1000`);
		})();
	}, []);

	const handleData = useCallback(
		({ target }) => {
			let id = target.getAttribute("id");
			let name = target.getAttribute("name");
			let value = target.value;
			if (id === "city") {
				setData((d) => (d = { ...d, city: name }));
			}
			if (id === "price") {
				setData((d) => (d = { ...d, price: { ...d.price, [name]: +value } }));
			}
			if (id === "options") {
				setData((d) => (d = { ...d, options: { ...d.options, [name]: +value } }));
			}
		},
		[data.city, data.price, data.options]
	);

	const handleRefetch = () => {
		Refetch("get", `/hotels/get-hotels?city=${data.city}&min=${data.price.min}&max=${data.price.max}`);
	};

	const startDate = new Date(calender[0].startDate).toLocaleDateString();
	const endDate = new Date(calender[0].endDate).toLocaleDateString();
	return (
		<div className="left-section">
			<h3>Search</h3>

			<div className="locations">
				<Menu title={`${data.city || "Where Are You Want To Reserve ?"}`} closeable>
					<h3 name="All Locations" id="city" onClick={handleData}>
						All Locations
					</h3>
					{cities.map((city, i) => (
						<h3 name={city} id="city" onClick={handleData} key={i}>
							{city}
						</h3>
					))}
				</Menu>
			</div>

			<div className="dates">
				<h3>Check In Dates</h3>
				<div className="calender">
					<Menu title={`From: ${startDate} - To: ${endDate}`}>
						<DateRange editableDateInputs={true} onChange={(item) => setCalender([item.selection])} moveRangeOnFirstSelection={false} ranges={calender} />
					</Menu>
				</div>
			</div>

			<div className="options">
				<h3>Options</h3>
				<div className="option">
					<p>Min Price Per Night</p>
					<input type="number" id="price" name="min" value={data.price.min} onChange={handleData} />
				</div>
				<div className="option">
					<p>Max Price Per Night</p>
					<input type="number" id="price" name="max" value={data.price.max} onChange={handleData} />
				</div>
				<div className="option">
					<p>Adults</p>
					<input type="number" id="options" name="adults" value={data.options.adults} onChange={handleData} />
				</div>
				<div className="option">
					<p>Children</p>
					<input type="number" id="options" name="children" value={data.options.children} onChange={handleData} />
				</div>
				<div className="option">
					<p>Rooms</p>
					<input type="number" id="options" name="rooms" value={data.options.rooms} onChange={handleData} />
				</div>
			</div>

			<button className="mybtn" data-varient="fill" onClick={handleRefetch}>
				Search
			</button>
		</div>
	);
};
