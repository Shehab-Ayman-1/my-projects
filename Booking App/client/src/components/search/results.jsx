import { useNavigate } from "react-router-dom";
import { results } from "@/constants";
import "./styles/results.scss";

export const FilterResults = () => {
	const navigate = useNavigate();

	return (
		<div className="right-section">
			{results.map((reserve, i) => (
				<div className="box" key={i}>
					<div className="img">
						<img src={reserve.img} alt={reserve.title} />
					</div>
					<div className="content">
						<div className="flex-between">
							<h1 className="title">{reserve.title}</h1>
							<span className="rate">{reserve.rate}</span>
						</div>
						<p className="distance">{reserve.distance}m From Center </p>
						<span className="green free">Free Airport Taxi</span>
						<h3 className="description">{reserve.description}</h3>
						<div className="flex-between">
							<p className="apartments">{reserve.apartments}</p>
							<h1>${reserve.price}</h1>
						</div>
						<div className="flex-between">
							<p className="green">Free Cancellation</p>
							<p className="fees">Includes Taxis And Fees</p>
						</div>
						<div className="flex-between">
							<p className="green">You Can Cancel Later, So Lock In This Great Price Today!</p>
							<button className="mybtn" data-varient="fill" onClick={() => navigate(`/hotel/${reserve.id}`)}>
								See Availability
								<i className="fas fa-chevron-right fa-xs" />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
