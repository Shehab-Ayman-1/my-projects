import React from "react";

export default function Offer() {
	return (
		<>
			<div className="left-section">
				<h1 className="offer-title">TRIAL START FIRST 30 DAYS.</h1>
				<p className="offer-description">Enter your email to create or restart your membership.</p>
			</div>
			<div className="right-section">
				<input type="text" placeholder="Enter Your Email" />
				<button className="offer-btn">Get Started</button>
			</div>
		</>
	);
}
