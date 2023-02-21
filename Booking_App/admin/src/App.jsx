// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/_index.scss";

// Routes
import Home from "./routes/home/home";
import Login from "./routes/auth/login";

import UsersList from "./routes/list/users-list/list";
import NewUser from "./routes/new/new-user/form";
import SingleUser from "./routes/single/single-user/single";

import HotelList from "./routes/list/hotels-list/list";
import SingleHotel from "./routes/single/single-hotel/single";
import NewHotel from "./routes/new/new-hotel/form";

import RoomsList from "./routes/list/rooms-list/list";
import SingleRoom from "./routes/single/single-room/single";
import NewRoom from "./routes/new/new-room/form";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route path="auth/login" element={<Login />} />
					<Route index element={<Home />} />

					<Route path="/users">
						<Route index element={<UsersList />} />
						<Route path=":id" element={<SingleUser />} />
						<Route path="new" element={<NewUser />} />
					</Route>

					<Route path="/hotels">
						<Route index element={<HotelList />} />
						<Route path=":id" element={<SingleHotel />} />
						<Route path="new" element={<NewHotel />} />
					</Route>

					<Route path="/rooms">
						<Route index element={<RoomsList />} />
						<Route path=":id" element={<SingleRoom />} />
						<Route path="new" element={<NewRoom />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
