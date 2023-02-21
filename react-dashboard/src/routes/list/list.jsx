// React
import React from "react";
import "./list.scss";

// Components
import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";
import DataTable from "../../components/table/table";

const List = ({ row, column }) => {
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

export default List;
