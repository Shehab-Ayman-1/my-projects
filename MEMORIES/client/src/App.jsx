// React
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/_index.scss";

// Redux
import { useDispatch } from "react-redux";
import { GET_POSTS } from "./redux/reducers/posts-slice";

// Components
import Container from "./layout/container/container";
import Login from "./components/auth/auth";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GET_POSTS());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Container />} />

				<Route path="/auth" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
