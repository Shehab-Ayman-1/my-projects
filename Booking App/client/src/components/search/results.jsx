import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { results } from "@/constants";
import { Error, Loading } from "@/layout";
import useContext from "@/context";
import "./styles/results.scss";

export const FilterResults = () => {
	const { hotelsState } = useContext(0);
	const [hotels, setHotels] = useState({ data: [], loading: true, error: false });
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			let { hotels, loading, error } = await hotelsState;
			let myHotels = hotels?.map((hotel, i) => ({ ...hotel, img: results[i].img })) || [];
			setHotels((h) => (h = { data: myHotels, loading, error }));
		})();
	}, [hotelsState]);

	return (
		<div className="right-section">
			<p className="result">Results: [{hotels?.data?.length}]</p>

			<div className="">{hotels.loading && <Loading limit={3} />}</div>

			{hotels.error && <Error message="Hotels Not Found, Please Try Again." />}

			{!hotels.loading &&
				hotels.data?.map(({ _id, img, name, type, address, city, description, distance, price, rating }, i) => (
					<div className="box" key={i}>
						<div className="img">
							<img src={img} alt={type} />
						</div>
						<div className="content">
							<div className="flex-between">
								<h1 className="title">{name}</h1>
								<span className="rate">{rating}</span>
							</div>
							<p className="address">
								{address} - {city}
							</p>
							<p className="distance">{distance}m From Center </p>
							<span className="green free">Free Airport Taxi</span>
							<h4 className="description">{description}</h4>
							<div className="flex-between">
								<p className="apartments">{type}</p>
								<h1>${price}</h1>
							</div>
							<div className="flex-between">
								<p className="green">Free Cancellation</p>
								<p className="fees">Includes Taxis And Fees</p>
							</div>
							<div className="flex-between">
								<p className="green">You Can Cancel Later, So Lock In This Great Price Today!</p>
								<button className="mybtn" data-varient="fill" onClick={() => navigate(`/hotel/${_id}`)}>
									See Availability
									<i className="fas fa-chevron-right fa-xs" />
								</button>
							</div>
						</div>
					</div>
				))}

			{!hotels.loading && !hotels.error && !hotels.data?.length && <h3>No Hotels Found.</h3>}
		</div>
	);
};
