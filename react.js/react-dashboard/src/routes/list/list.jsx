import React from "react";
import "./list.scss";

import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";
import DataTable from "../../components/data-table/data-table";

const list = ({ row, column }) => {
	return (
		<div className="list-page">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<div className="list-data-table">
					<DataTable rows={row} columns={column} />
				</div>
			</div>
		</div>
	);
};

export default list;
