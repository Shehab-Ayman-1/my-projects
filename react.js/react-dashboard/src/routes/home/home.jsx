import React from "react";
import "./home.scss";
import { productsColumns, productsRows } from "../../components/data-table/data/dataTable";

import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";
import Wedget from "../../components/wedgets/wedgets";
import Featured from "../../components/featured/featured";
import Chart from "../../components/charts/chart";
import DataTable from "../../components/data-table/data-table";

const home = () => {
	return (
		<section className="home-page">
			<Sidebar />
			<div className="home-page-container">
				<Navbar />
				<div className="wedgets">
					<Wedget type="USERS" />
					<Wedget type="ORDER" />
					<Wedget type="EARNING" />
					<Wedget type="BALANCE" />
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="Last 6 Months ( Revenue )" />
				</div>
				<div className="data-table-container">
					<DataTable columns={productsColumns} rows={productsRows} />
				</div>
			</div>
		</section>
	);
};

export default home;
