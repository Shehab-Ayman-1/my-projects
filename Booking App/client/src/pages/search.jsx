import { Fragment, useState, useEffect } from "react";
import { Navbar } from "@/layout";
import { useAxios } from "@/hooks";
import { FilterOptions, FilterResults } from "@/components";
import "./styles/search.scss";

export const SearchPage = () => {
	const { data: cities } = useAxios("get", `/hotels/get-count-by-city?cities=all`);
	const [widgetNo, setWidgetNo] = useState({ from: 0, to: 5 });
	const [openFilter, setOpenFilter] = useState(false);

	const handleOpenFilter = () => setOpenFilter((o) => (o = true));

	return (
		<Fragment>
			<Navbar />
			<main className="main-section">
				<FilterOptions cities={cities} openFilter={openFilter} setOpenFilter={setOpenFilter} widgetNo={widgetNo} />
				<FilterResults widgetNo={widgetNo} setWidgetNo={setWidgetNo} />
				<button className="mybtn filter-btn" data-varient="outline" onClick={handleOpenFilter}>
					Filter
				</button>
			</main>
		</Fragment>
	);
};
