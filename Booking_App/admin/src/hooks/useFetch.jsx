import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, sendData = null) => {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [isError, setError] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(url, sendData && sendData);
			setData(response.data);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			fetchData();
			clearInterval(interval);
		}, 500);
	}, [url]);

	const UseReFetch = () => fetchData();

	return { data, isLoading, isError, UseReFetch };
};

export default useFetch;
