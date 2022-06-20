import React, { useContext } from "react";
import { Context } from "../context/contextStore";
import Intro from "../components/intro";
import Services from "../components/services";
import Card from "../components/card";
import Offer from "../components/offer";

export default function HomePage() {
	const { data } = useContext(Context);
	return (
		<main className="home-page">
			<section className="bg-section" id="bg-section">
				<Intro />
			</section>
			<section className="streaming-section" id="streaming-section">
				{data.stream ? <Card data={data.stream} mTitle="ONLINE STREAMING" name1="Upcoming" name2="Movies" suggests={true} /> : null}
			</section>
			<section className="services-section" id="services-section">
				<Services />
			</section>
			<section className="rating-section" id="rating-section">
				{data.services ? (
					<Card data={data.services} mTitle="ONLINE STREAMING" name1="Top Rated" name2="Movies" suggests={true} />
				) : null}
			</section>
			<section className="tv-show-section" id="tv-show-section">
				{data.TvShow ? (
					<Card data={data.TvShow} mTitle="BEST TV SERIES" name1="World Best" name2="TV Series" suggests={false} />
				) : null}
			</section>
			<section className="offer-section" id="offer-section">
				<Offer />
			</section>
		</main>
	);
}
