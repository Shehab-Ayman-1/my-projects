import axios from "axios";
export default async function fetchData() {
	try {
		const Response = await axios.get("./api/data.json");
		const data = Response.data;
		return data;
	} catch (err) {
		console.error(err);
	}
}
