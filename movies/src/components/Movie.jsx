import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../context/contextStore";

export default function Movie() {
	const { id } = useParams();
	const {
		data: { stream, services, TvShow },
		movie,
		setMovie,
	} = useContext(Context);

	useEffect(() => {
		if (stream || services || TvShow)
			setMovie(
				(prev) =>
					(prev =
						stream.find((item) => item.id === +id) ||
						TvShow.find((item) => item.id === +id) ||
						services.find((item) => item.id === +id))
			);
	}, [id, stream, services, TvShow, movie, setMovie]);

	return (
		movie && (
			<div className="movie-info">
				<img className="movie-banner" src={`../images/${movie.img}`} alt={movie.img} />
				<div className="left-section">
					<img className="movie-img" src={`../images/${movie.img}`} alt={movie.img} />
					<i className="far fa-play-circle play-icon" data-empty></i>
				</div>
				<div className="mid-section">
					<div className="info-title">
						<h2 className="info-sub-title">New Episodes</h2>
						<h1 className="info-main-title">{movie.name?.title}</h1>
					</div>
					<div className="info-labels">
						<p className="pg label">PG 12</p>
						<p className="hd label">{movie.config?.hd}</p>
						<div className="bread-crumbs">
							<a href="#" className="crumb" rel="norefrence">
								Comedy,
							</a>
							<a href="#" className="crumb" rel="norefrence">
								Action,
							</a>
							<a href="#" className="crumb" rel="norefrence">
								Adventure,
							</a>
							<a href="#" className="crumb" rel="norefrence">
								Science Fiction
							</a>
							<a href="#" className="crumb" rel="norefrence">
								<i className="far fa-calendar-alt"></i> {movie.name?.date}
							</a>
							<a href="#" className="crumb" rel="norefrence">
								<i className="far fa-clock"></i> {movie.config?.data.min}min
							</a>
						</div>
					</div>
					<p className="info-content">
						A bank teller called Guy realizes he is a background character in an open world video game called Free City that
						will soon go offline.
					</p>
					<div className="info-addition">
						<div className="left-part">
							<i className="fas fa-share-alt share-icon" data-empty></i>
							<p className="share-name">Share</p>
						</div>
						<div className="mid-part">
							<h4 className="video-prime">Prime Video</h4>
							<p className="video-type">Streaming Channels</p>
						</div>
						<div className="right-part">
							<button className="mybtn">
								<i className="fas fa-play"></i>
								Watch Now
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
