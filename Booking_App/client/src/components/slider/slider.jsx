// React
import React from "react";
import "./slider.scss";

// Material Ui
import { Avatar } from "@mui/material";
import { ArrowCircleLeftRounded, ArrowCircleRightRounded, CancelRounded } from "@mui/icons-material";

const Slider = ({ photos, slideIndex, setSlideIndex, setOpenSlider }) => {
	const length = photos.length - 1;

	// Close Slider
	const handleClose = () => {
		setOpenSlider(false);
		document.querySelector("html").style.overflowY = "initial";
	};

	// Right Arrow
	const handleRight = () => setSlideIndex(slideIndex === length ? 0 : slideIndex + 1);

	// Left Arrow
	const handleLeft = () => setSlideIndex(slideIndex === 0 ? length : slideIndex - 1);

	return (
		<div className="slider">
			<div className="avatar-container">
				<span className="overlay" onClick={handleClose}></span>
				<Avatar className="avatar" src={photos[slideIndex].img} alt="slider-img" />
			</div>
			<div className="icons-container">
				<CancelRounded className="close-icon" onClick={handleClose} />
				<ArrowCircleRightRounded className={`right-arrow`} onClick={handleRight} />
				<ArrowCircleLeftRounded className={`left-arrow`} onClick={handleLeft} />
			</div>
		</div>
	);
};

export default Slider;
