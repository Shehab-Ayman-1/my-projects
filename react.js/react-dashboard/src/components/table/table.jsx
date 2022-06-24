// React
import React from "react";
import "./table.scss";
import { Link } from "react-router-dom";

// Material UI
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/material";

const DataTable = ({ rows, columns }) => {
	let renderBtn = () => {
		if (rows[0].username) {
			return (
				<Stack direction="row" justifyContent="space-between">
					<h1 className="table-header">Latest Transactions</h1>
					<Link className="new-btn" to="/users/new" variant="contained">
						Add New User
					</Link>
				</Stack>
			);
		}

		if (rows[0].product) {
			return (
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<h1 className="table-header">Latest Transactions</h1>
					<Link className="new-btn" to="/products/new" variant="contained">
						Add New Product
					</Link>
				</Stack>
			);
		}
	};

	return (
		<div className="data-table">
			<div className="btns-container" align="right">
				{renderBtn()}
			</div>
			<DataGrid
				className="table"
				sx={{ fontSize: "1.5rem", border: "none" }}
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[1]}
				checkboxSelection
			/>
		</div>
	);
};
export default DataTable;
