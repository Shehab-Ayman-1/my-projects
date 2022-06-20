import axios from "axios";

export default async function getData() {
	const response = await axios.get("https://my-json-server.typicode.com/Shehab-Ayman-1/my-data/movies-website");
	const data = response.data;
	return data;
}
