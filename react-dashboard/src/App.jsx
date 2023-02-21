// React
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./scss/app.scss";
import { Button, ButtonGroup } from "@mui/material";

// Routes
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import List from "./routes/list/list";
import Single from "./routes/single/single";
import New from "./routes/new/form";

// my Data
import { addProduct_Form, addUser_Form } from "./data/new-form";
import { productsColumns, productsRows } from "./data/products-tables";
import { usersColumns, usersRows } from "./data/users-tables";

function App() {
	let addActions = {
		field: "actions",
		headerName: "Actions",
		minWidth: 180,
		renderCell: (rowData) => {
			return (
				<ButtonGroup className="actions-btns" variant="contained">
					<Link to={`/${rowData.row.product ? "products" : "users"}/${rowData.row.id}`}>
						<Button className="btn" color="secondary">
							View
						</Button>
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
					<Route index element={<Login />} />
					<Route path="home-page" element={<Home rows={productsRows} columns={productsColumns} />} />
					<Route path="/users">
						<Route index element={<List row={usersRows} column={usersColumns.concat(addActions)} />} />
						<Route path=":id" element={<Single rows={usersRows} />} />
						<Route path="new" element={<New title="Add New User" link="users" inputsData={addUser_Form} />} />
					</Route>
					<Route path="/products">
						<Route index element={<List row={productsRows} column={productsColumns.concat(addActions)} />} />
						<Route path=":id" element={<Single rows={productsRows} />} />
						<Route path="new" element={<New title="Add New Product" link="products" inputsData={addProduct_Form} />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
