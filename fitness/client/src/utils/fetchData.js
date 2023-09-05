import { useEffect, useState } from "react";
import { localURL, publicURL } from "@/constants";
import axios from "axios";

const router = axios.create({ baseURL: localURL });

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
		"X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_KEY,
	},
};

export const useAxios = (method, url, body, options, isPublicURL = false) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [status, setStatus] = useState(0);

	const fetcher = async (method, url, body, options, isPublicURL = false) => {
		if (url === "/") return;

		try {
			setLoading((l) => (l = true));
			setError((e) => (e = false));

			if (isPublicURL === false) {
				if (method === "get") {
					const response = await router[method](url, options);
					setData((d) => (d = response.data));
					setStatus((s) => (s = response.status));
					return { data: response.data, loading: false, error: false, status: response?.status };
				} else {
					const response = await router[method](url, body, options);
					setData((d) => (d = response.data));
					setStatus((s) => (s = response.status));
					return { data: response.data, loading: false, error: false, status: response?.status };
				}
			} else {
				if (method === "get") {
					const response = await axios[method](url, options);
					setData((d) => (d = response.data));
					setStatus((s) => (s = response.status));
					return { data: response.data, loading: false, error: false, status: response?.status };
				} else {
					const response = await axios[method](url, body, options);
					setData((d) => (d = response.data));
					setStatus((s) => (s = response.status));
					return { data: response.data, loading: false, error: false, status: response?.status };
				}
			}
		} catch (error) {
			console.log(error);
			setError((e) => (e = error?.message || "Network Error"));
			setStatus((s) => (s = error.status));
		} finally {
			setLoading((l) => (l = false));
		}
	};

	useEffect(() => {
		fetcher(method, url, body, options, isPublicURL);
	}, [method, url, body, options, isPublicURL]);

	const refetch = (method, url, body, options, isPublicURL = false) => fetcher(method, url, body, options, isPublicURL);

	return { data, loading, error, status, refetch, setLoading, setError, setStatus };
};
