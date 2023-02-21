import React from "react";

export default function intro() {
	return (
		<>
			<div className="intro">
				<p className="phrase">Filmlane</p>
				<h1 className="head">
					Unlimited <span className="main-color">Movie</span>, <br /> TVs Shows, & More.
				</h1>
			</div>
			<div className="additions">
				<div className="labels">
					<p>PG 18</p>
					<p>HD</p>
				</div>
				<div className="more-links">
					<a>Romance, </a>
					<a>Dreama</a>
				</div>
				<div className="date">
					<div className="calander">
						<i className="far fa-calendar-alt"></i>
						<span>2022</span>
					</div>
					<div className="length">
						<i className="far fa-clock"></i>
						<span>128 min</span>
					</div>
				</div>
			</div>
			<button className="mybtn">
				<i className="fas fa-play" data-empty></i>
				<span>WATCH NOW</span>
			</button>
		</>
	);
}
