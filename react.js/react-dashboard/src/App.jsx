// React
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./scss/app.scss";

// Routes
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import List from "./routes/list/list";
import Single from "./routes/single/single";
import New from "./routes/new/form";
import { addProduct, addUser } from "./routes/new/data/form-inputs";
import { productsColumns, productsRows, usersColumns, usersRows } from "./components/data-table/data/dataTable";
import { Button, ButtonGroup } from "@mui/material";

function App() {
	let addActions = {
		field: "actions",
		headerName: "Actions",
		minWidth: 180,
		renderCell: (rowData) => {
			return (
				<ButtonGroup className="btns-container" variant="outlined">
					<Link to={`/${rowData.row.product ? "products" : "users"}/${rowData.row.id}`} className="btn view">
						View
					</Link>
					<Button className="btn" color="error">
						Delete
					</Button>
				</ButtonGroup>
			);
		},
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="/users">
						<Route index element={<List row={usersRows} column={usersColumns.concat(addActions)} />} />
						<Route path=":id" element={<Single rows={usersRows} />} />
						<Route path="new" element={<New title="Add New User" link="users" inputsData={addUser} />} />
					</Route>
					<Route path="/products">
						<Route index element={<List row={productsRows} column={productsColumns.concat(addActions)} />} />
						<Route path=":id" element={<Single rows={productsRows} />} />
						<Route path="new" element={<New title="Add New Product" link="products" inputsData={addProduct} />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
