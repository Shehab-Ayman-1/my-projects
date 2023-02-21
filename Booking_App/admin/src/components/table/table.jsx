// React
import React from "react";
import "./table.scss";
import { Link } from "react-router-dom";

// Material UI
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";

const DataTable = ({ rows, columns, title }) => {
	return (
		<div className="data-table">
			<Stack className="btns-container" direction="row" justifyContent="space-between" alignItems="center">
				<h1 className="table-header">Booking.com {title}s</h1>
				<Button className="new-btn" variant="contained" component={Link} to={`/${title}s/new`}>
					Add New {title}
				</Button>
			</Stack>

			<DataGrid
				sx={{ fontSize: "1.5rem", border: "none" }}
				className="table"
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[8]}
				checkboxSelection
				getRowId={(row) => row._id}
			/>
		</div>
	);
};
export default DataTable;
