// React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextStore } from "./context/contextStore";
import "./scss/style.css";

// Layout
import Header from "./layout/header";
import Footer from "./layout/footer";

// Pages
import Home from "./pages/home-page";
import Movie from "./pages/movie-page";

function App() {
	return (
		<div className="home-page">
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<Movie />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

function contextProvider() {
	return (
		<ContextStore>
			<App />
		</ContextStore>
	);
}

export default contextProvider;
