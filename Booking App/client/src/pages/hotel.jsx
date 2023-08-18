import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "@/hooks";
import { Footer, Navbar } from "@/layout";
import { Banner, Reserve, Slider, Testimonials } from "@/components";

export const Hotel = () => {
	const { id } = useParams();
	const { data, loading } = useAxios("get", `/hotels/get-hotel/${id}`);
	const [hotel, setHotel] = useState({ _id: "", name: "", title: "", rating: "", distance: "", description: "", price: "" });

	useEffect(() => {
		if (!loading) setHotel((h) => (h = data));
	}, [data]);

	return (
		<Fragment>
			<Navbar />
			<Banner hotel={hotel} />
			<Slider />
			<Reserve title={hotel.title} price={hotel.price} />
			<Testimonials />
			<Footer />
		</Fragment>
	);
};
