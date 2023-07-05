import { Routes, Route } from "react-router-dom";
import { Home, Hotel, SearchPage, Login } from "@/pages";

function App() {
	return (
		<Routes>
			<Route path="*" element="This Route Not Defined" />
			<Route path="/" element={<Home />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/hotel/:id" element={<Hotel />} />
			<Route path="/signin" element={<Login />} />
			<Route path="/signup" element={<Login />} />
		</Routes>
	);
}

export default App;
