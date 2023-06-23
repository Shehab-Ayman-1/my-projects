import { useEffect } from "react";
import useContext from "@/context";

export const Home = () => {
	const context = useContext(2);

	useEffect(() => {
		console.log(context);
	}, []);

	return (
		<main>
			<h1 style={{ textAlign: "center", marginTop: "100px" }}>Vite + React</h1>
		</main>
	);
};
