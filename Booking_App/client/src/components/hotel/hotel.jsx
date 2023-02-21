import React from "react";
import "./hotel.scss";
import { Avatar, Box, Rating } from "@mui/material";

const hotel = ({ img, hotel }) => {
	const RenderRating = () => {
		const rate = hotel.rating;
		if (rate === 0) {
			return "Bad";
		}
		if (rate < 2) {
			return "Nice";
		}
		if (rate >= 2 && rate < 3) {
			return "Good";
		}
		if (rate >= 3 && rate < 4) {
			return "Very Good";
		}
		if (rate >= 4) {
			return "Excellant";
		}
	};

	return (
		<Box className="hotel-box">
			<Avatar className="avatar" src={img} alt="hotel-img" />
			<div className="box-content">
				<p className="title">{hotel?.title}</p>
				<p className="city">{hotel?.city}</p>
				<p className="price">Starting From ${hotel?.cheapestPrice}</p>
				<div className="rate">
					{hotel?.rating && <Rating name="read-only" value={hotel?.rating} />}
					<span>{RenderRating()}</span>
				</div>
			</div>
		</Box>
	);
};

export default hotel;
