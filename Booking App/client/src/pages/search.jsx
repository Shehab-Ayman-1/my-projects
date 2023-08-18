import { Fragment } from "react";
import { Navbar } from "@/layout";
import { useAxios } from "@/hooks";
import { FilterOptions, FilterResults } from "@/components";
import "./styles/search.scss";

export const SearchPage = () => {
	const { data: cities } = useAxios("get", `/hotels/get-count-by-city?cities=all`);

	return (
		<Fragment>
			<Navbar />
			<main className="main-section">
				<FilterOptions cities={cities} />
				<FilterResults />
			</main>
		</Fragment>
	);
};
