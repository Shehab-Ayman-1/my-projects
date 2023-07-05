import { Fragment } from "react";
import { Navbar, Footer } from "@/layout";
import { Hero, Widgets, Catagories, Favourites, Testimonials } from "@/components";

export const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<Widgets />
			<Catagories />
			<Favourites />
			<Testimonials />
			<Footer />
		</Fragment>
	);
};
