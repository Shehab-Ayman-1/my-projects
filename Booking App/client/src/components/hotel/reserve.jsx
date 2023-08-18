import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useContext from "@/context";
import "./styles/reserve.scss";

export const Reserve = ({ title, price }) => {
	const { hotelsState } = useContext(0);
	const [dates, setDates] = useState({ startDate: "", endDate: "" });
	const [days, setDays] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			let { dates } = await hotelsState;
			if (!dates.startDate || !dates.endDate) {
				alert("The Start Date OR End Date Is Not Exists, Please Fill The Start, And End Dates Of The Reserve.");
				setTimeout(() => navigate("/"), 500);
			}
			setDates((d) => (d = dates));
		})();
	}, [hotelsState]);

	useEffect(() => {
		let date1 = new Date(dates.startDate);
		let date2 = new Date(dates.endDate);
		let day = 1000 * 60 * 60 * 24;
		let millSecondsOfAllDays = Math.abs(date2.getTime() - date1.getTime());
		let daysCount = Math.ceil(millSecondsOfAllDays / day);
		setDays((d) => (d = daysCount));
	}, [dates]);

	return (
		<section className="reserve-section">
			<div className="description">
				<h1 className="title">{title}</h1>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit eligendi voluptas aut, nobis libero, animi quibusdam corrupti natus iusto culpa veniam enim molestiae maxime eos
					excepturi, cupiditate et ex!
				</p>
				<p className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit eligendi voluptas aut, nobis libero, animi quibusdam corrupti natus iusto culpa veniam enim molestiae maxime eos
					excepturi, cupiditate et ex!
				</p>
			</div>
			<div className="reserve">
				<h3 className="title">Perfect For {days} Nights-Stay</h3>
				<p className="desc">Located In The Real Heart Of Krakow.</p>
				<p className="desc">This Property Has An Excellent Location Score Of 9.8</p>
				<div className="flex-start">
					<h1 className="price">${price * days}</h1>
					<p className="nights">({days} Nights)</p>
				</div>
				<button className="mybtn" data-varient="fill">
					Reserve OR Book Now!
				</button>
			</div>
		</section>
	);
};
