import React from "react";

export default function services() {
	return (
		<>
			<div className="left-section">
				<img src="./images/service-banner.jpg" alt="service-banner" />
			</div>
			<div className="right-section">
				<div className="card-header">
					<span className="sub-title">OUR SERVICES</span>
					<h1 className="head-title">Download Your Shows Watch Offline.</h1>
					<p className="head-description">
						Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of
						lorem Ipsum available, but the majority have suffered alteration in some injected humour.
					</p>
				</div>
				<div className="card-body">
					<div className="serve">
						<div className="left-side">
							<i className="fas fa-desktop"></i>
						</div>
						<div className="right-side">
							<h3 className="serve-title">Enjoy on Your TV.</h3>
							<span className="serve-content">
								Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
							</span>
						</div>
					</div>
					<div className="serve">
						<div className="left-side">
							<i className="fas fa-video"></i>
						</div>
						<div className="right-side">
							<h3 className="serve-title">Enjoy on Your TV.</h3>
							<span className="serve-content">
								Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
