export const DBURL = () => {
	if (import.meta.env.MODE === "development") return "http://localhost:5000/api/exercises";
	else return "https://fitness-gem-server.vercel.app/api/exercises";
};
