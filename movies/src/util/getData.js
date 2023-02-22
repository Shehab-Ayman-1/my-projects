import axios from "axios";

const getData = async () => {
	const response = await axios.get("/db.json");
	const data = response.data;
	return data;
};

export default getData;
