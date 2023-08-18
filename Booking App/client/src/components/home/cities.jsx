import { useAxios } from "@/hooks";
import { Loading, Error } from "@/layout";
import { citiesImages } from "@/constants";
import "./styles/cities.scss";

export const Cities = () => {
	const { data, loading, error } = useAxios("get", "/hotels/get-count-by-city?cities=london,madrid,berlin");
	const cities = data?.map((item, i) => ({ ...item, img: citiesImages[i] }));

	return (
		<section className="widgets-section">
			{loading && <Loading limit={3} />}
			{(error || error === null) && <Error message="Catagories Not Found, Please Try Again Later" />}
			{!loading &&
				!error &&
				cities.map(({ img, city, count }, i) => (
					<div className="widget" key={i}>
						<img src={img} alt={city} />
						<h1>{city}</h1>
						<h3>{count} Properties</h3>
					</div>
				))}
		</section>
	);
};
