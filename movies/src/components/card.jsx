import React from "react";
import { Link } from "react-router-dom";
// import images from "../assets/images/";

export default function Card(props) {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="header">
				<div className="left-section">
					<p className="main-color">{props.mTitle}</p>
					<p className="title">
						{props.name1}
						<span> {props.name2}</span>
					</p>
				</div>
				{props.suggests ? (
					<div className="right-section">
						<button className="mybtn">Movies</button>
						<button className="mybtn">TV Shows</button>
						<button className="mybtn">Anime</button>
					</div>
				) : null}
			</div>

			<div className="movies">
				{props.data.map((card, index) => {
					return (
						<Link className="card" key={index} to={`/movie/${card.id}`} onClick={scrollTop}>
							<div className="card-img">
								<img src={`./images/${card.img}`} alt="card-1" />
							</div>
							<div className="card-footer">
								<div className="name">
									<h4>{card.name.title}</h4>
									<span className="date">{card.name.date}</span>
								</div>
								<div className="config">
									<p className="hd">{card.config.hd}</p>
									<div className="data">
										<div className="min">
											<i className="far fa-clock"></i>
											<span>{card.config.data.min} min</span>
										</div>
										<div className="rate">
											<i className="fas fa-star"></i>
											<span>{card.config.data.target}</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}
