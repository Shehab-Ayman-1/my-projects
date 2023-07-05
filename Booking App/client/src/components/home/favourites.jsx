import { favourites } from "@/constants";
import "./styles/favourites.scss";

export const Favourites = () => {
	return (
		<section className="favourites-section">
			<h1>Homes Guests Love</h1>
			<div className="favourites">
				{favourites.map((fav) => (
					<div className="favourite" key={fav.name}>
						<img src={fav.img} alt={fav.name} />
						<h3>{fav.name}</h3>
						<p>{fav.city}</p>
						<h4>Starting From ${fav.price}</h4>
						<div className="rate">
							<span>{fav.rate}</span>
							<p>{fav.rate > 9 ? "Exceptional" : "Excellent"}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
