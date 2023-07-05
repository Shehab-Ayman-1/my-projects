import { catagories } from "@/constants";
import "./styles/catagories.scss";

export const Catagories = () => {
	return (
		<section className="catagories-section">
			<h1>Browse By Property Type</h1>
			<div className="widgets">
				{catagories.map((catagory, i) => (
					<div className="catagory" key={i}>
						<img src={catagory.img} alt={catagory.name} />
						<h2>{catagory.name}</h2>
						<p>{catagory.count} Hotels </p>
					</div>
				))}
			</div>
		</section>
	);
};
