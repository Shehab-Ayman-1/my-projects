import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Navbar } from "@/layout";
import { results } from "@/constants";
import { Banner, Reserve, Slider, Testimonials } from "@/components";

export const Hotel = () => {
	let [hotel, setHotel] = useState({ id: "", img: "", title: "", rate: "", distance: "", description: "", apartments: "", price: "" });
	let { id } = useParams();

	useEffect(() => {
		let hotel = results.find((item) => item.id === id);
		setHotel((h) => (h = hotel));
	}, []);

	return (
		<Fragment>
			<Navbar />
			<Banner hotel={hotel} />
			<Slider />
			<Reserve price={hotel.price} />
			<Testimonials />
			<Footer />
		</Fragment>
	);
};
