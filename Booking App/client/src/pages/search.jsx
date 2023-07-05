import { Fragment } from "react";
import { Navbar } from "@/layout";
import { FilterOptions, FilterResults } from "@/components";
import "./styles/search.scss";

export const SearchPage = () => {
	return (
		<Fragment>
			<Navbar />
			<main className="main-section">
				<FilterOptions />
				<FilterResults />
			</main>
		</Fragment>
	);
};
