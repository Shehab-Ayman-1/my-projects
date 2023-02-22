import React, { useContext } from "react";
import { Context } from "../context/contextStore";
import Suggestions from "../components/Suggestions";
import Movie from "../components/Movie";

export default function MoviesPage() {
	const { data } = useContext(Context);

	return (
		<section className="movie-section">
			{<Movie />}
			{<Suggestions data={data.suggestion} />}
		</section>
	);
}
