// React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import Store from "./Redux/Store";

// Components
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

// Signin
import Login from "./Pages/signin/Login";
import Register from "./Pages/signin/Register";

// Css
import "./scss/style/cssStyle.css";

function App() {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Products" element={<Products />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Cart" element={<Cart />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
