import React from "react";
import { Link } from "react-router-dom";
// import images from "../assets/images/";

export default function Card({ mTitle, name1, name2, suggests, data }) {
	const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<>
			<div className="header">
				<div className="left-section">
					<p className="main-color">{mTitle}</p>
					<p className="title">
						{name1}
						<span> {name2}</span>
					</p>
				</div>
				{suggests ? (
					<div className="right-section">
						<button className="mybtn">Movies</button>
						<button className="mybtn">TV Shows</button>
						<button className="mybtn">Anime</button>
					</div>
				) : null}
			</div>

			<div className="movies">
				{data &&
					data.map(({ id, name, img, config }) => {
						return (
							<Link to={`/movie/${id}`} className="card" key={id} onClick={scrollTop}>
								<div className="card-img">
									<img src={`./images/${img}`} alt="card" />
								</div>
								<div className="card-footer">
									<div className="name">
										<h4>{name.title}</h4>
										<span className="date">{name.date}</span>
									</div>
									<div className="config">
										<p className="hd">{config.hd}</p>
										<div className="data">
											<div className="min">
												<i className="far fa-clock"></i>
												<span>{config.data.min} min</span>
											</div>
											<div className="rate">
												<i className="fas fa-star"></i>
												<span>{config.data.target}</span>
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
