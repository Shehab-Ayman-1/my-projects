import { useState } from "react";
import "./styles/banner.scss";

export const Banner = ({ hotel: { title, description, distance, rate } }) => {
	const [open, setOpen] = useState(false);

	const openReserve = () => setOpen((o) => (o = true));
	const closeReserve = () => setOpen((o) => (o = false));

	return (
		<section className="banner-section">
			<div className="banner">
				<div className="flex-between">
					<h1 className="title">{title}</h1>
					<button className="mybtn" data-varient="fill" onClick={openReserve}>
						Reserve OR Book Now!
					</button>
				</div>
				<div className="flex-start">
					<i className="fas fa-bed text-dimWhite" />
					<p className="description">{description}</p>
				</div>
				<p className="rate">
					{rate > 9 ? "Excellent" : "Good"} Location - {distance}m From Center
				</p>
				<p className="green">Book A Stay Over $114 At This Property And Get A Free Airport Taxi</p>
			</div>
			<div className="reserve">
				<div className="head">
					<h3 className="title">Select Your Rooms</h3>
					<i className="fa fa-times-circle close-icon" />
				</div>
				<div className="body"></div>
				<div className="foot"></div>
			</div>
		</section>
	);
};
