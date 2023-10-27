import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, ExerciseDetail } from "@/pages";
import { Navbar, Footer } from "@/layout";

const App = () => {
	return (
		<Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exercise/:id" element={<ExerciseDetail />} />
			</Routes>
			<Footer />
		</Box>
	);
};
export default App;
