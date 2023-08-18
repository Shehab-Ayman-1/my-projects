import { useEffect, useState } from "react";
import { routes } from "@/constants";
import axios from "axios";

const router = axios.create({ baseURL: routes.local });

export const useAxios = (process, url, body) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetcher = async (process, url, body) => {
		try {
			setLoading((l) => (l = true));
			setError((e) => (e = false));
			if (url === "/") {
				// Continue
			} else if (body) {
				const response = await router[process](url, body);
				setData((d) => (d = response.data));
			} else {
				const response = await router[process](url);
				setData((d) => (d = response.data));
			}
		} catch (error) {
			setError((e) => (e = error.message === "Network Error" ? error.message : error.response.data));
			setTimeout(() => setError((e) => (e = null)), 5000);
			console.warn(error);
		} finally {
			setLoading((l) => (l = false));
		}
	};

	useEffect(() => {
		fetcher(process, url, body);
	}, [process, url, body]);

	const Refetch = (process, url, body) => fetcher(process, url, body);

	return { data, loading, error, Refetch };
};
