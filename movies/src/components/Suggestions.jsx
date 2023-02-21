import React from "react";
import { Link } from "react-router-dom";

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
					<p className="main-color">BEST TV SERIES</p>
					<p className="title">
						World Best
						<span>TV Series</span>
					</p>
				</div>
			</div>
			<div className="movies">
				{props.data.map((card, index) => {
					return (
						<Link className="card" key={index} to={`/movie/${card.id}`} onClick={scrollTop}>
							<div className="card-img">
								<img src={`../../images/${card.img}`} alt={card.img} />
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
											<i className="far fa-star"></i>
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
