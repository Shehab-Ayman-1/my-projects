import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/contextStore";

export default function Card({ data }) {
	const { id } = useParams();
	const {
		data: { stream, services, TvShow, suggestion },
		setMovie,
	} = useContext(Context);

	const changeMovie = () => {
		if (stream || services || TvShow || suggestion) {
			let streamMovie = stream.find((item) => item.id === +id);
			let TvShowMovie = TvShow.find((item) => item.id === +id);
			let servicesMovie = services.find((item) => item.id === +id);
			setMovie((prev) => (prev = streamMovie || TvShowMovie || servicesMovie));
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div className="suggestion-movies">
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
				{data &&
					data.map(({ id, img, name, config }) => (
						<Link className="card" key={id} to={`/movie/${id}`} onClick={changeMovie}>
							<div className="card-img">
								<img src={`../../images/${img}`} alt={img} />
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
											<i className="far fa-star"></i>
											<span>{config.data.target}</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}
