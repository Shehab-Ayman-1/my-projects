import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "@/hooks";
import useContext from "@/context";
import axios from "axios";
import "./styles/reserve-model.scss";

export const ReserveModel = ({ hotelID, open, setOpen }) => {
	const { data: rooms, loading } = useAxios("get", `/hotels/get-hotel-rooms/${hotelID}`);
	const [selectedRooms, setSelectedRooms] = useState([]);
	const [reserveLoading, setReserveLoading] = useState(false);
	const [dates, setDates] = useState({ startDate: "", endDate: "", rangeDates: [] });
	const { hotelsState } = useContext(0);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const { dates } = await hotelsState;
			setDates((d) => (d = { ...d, startDate: dates.startDate, endDate: dates.endDate }));
		})();
	}, [hotelsState]);

	const getRangeDates = () => {
		if (!dates.startDate || !dates.endDate) return;
		let current = new Date(dates.startDate.getTime());
		let end = new Date(dates.endDate);
		let list = [];

		while (current <= end) {
			list.push(new Date(current).getTime());
			current.setDate(current.getDate() + 1);
		}
		return list;
	};

	const isAvailableDate = (unAvailableDates) => {
		const allDates = getRangeDates() || [];
		const isValide = unAvailableDates.some((date) => allDates.includes(new Date(date).getTime()));
		return isValide;
	};

	const closeReserve = () => {
		setOpen((o) => (o = false));
	};

	const handleSelectedRooms = ({ target: { value, checked } }) => {
		setSelectedRooms((s) => (checked ? [...s, value] : s.filter((date) => date !== value)));
	};

	const handleReseve = async () => {
		setReserveLoading((r) => (r = true));
		try {
			const promises = selectedRooms.map((roomID) => {
				const response = axios.put(`http://localhost:5000/api/rooms/update-un-available-rooms/${roomID}`, { unAvailableDates: getRangeDates() });
				return response.data;
			});
			await Promise.all(promises);
		} catch (error) {
			console.log(error);
		} finally {
			setReserveLoading((r) => (r = false));
			alert("The Rooms Was Reserved, We Will Contact You As Soon As Possible.");
			navigate("/search");
		}
	};

	return (
		<div className={`reserve-model ${open ? "" : "hide-display"}`}>
			<div className="head">
				<h3 className="title">Select Your Rooms:</h3>
				<i className="fa fa-times-circle close-icon" onClick={closeReserve} />
			</div>
			<div className="body">
				{!loading &&
					rooms?.map(({ title, description, maxPeople, price, roomNumbers }, i) => (
						<div className="flex-between" key={i}>
							<div className="left">
								<h3 className="title">{title}</h3>
								<p className="description">{description}</p>
								<p className="max-people">
									max people: <span>{maxPeople}</span>
								</p>
								<p className="price">
									Cost: <span>${price}</span>
								</p>
							</div>
							<div className="right">
								{roomNumbers.map(({ _id, number, unAvailableDates }, i) => (
									<div key={i}>
										<label className="number" htmlFor={_id}>
											{number}
										</label>
										<input type="checkbox" id={_id} value={_id} disabled={isAvailableDate(unAvailableDates)} onChange={handleSelectedRooms} />
									</div>
								))}
							</div>
						</div>
					))}
			</div>
			<div className="foot">
				<button className="mybtn w-full" disabled={reserveLoading} data-varient="fill" onClick={handleReseve}>
					Reserve Now
				</button>
			</div>
		</div>
	);
};
