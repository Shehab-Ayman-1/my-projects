import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const router = axios.create({
	baseURL: "https://youtube-v31.p.rapidapi.com",
	headers: { "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY, "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com" },
});

type Method = "get" | "post" | "put" | "delete";

export const useAxios = (method: Method, url?: string, body?: any, options?: any) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetcher = async (method: Method, url?: string, body?: any, options?: any) => {
		if (url === "/" || !url) return;

		setLoading((l) => (l = true));
		setError((e) => (e = ""));

		try {
			if (body) {
				const { data } = await router[method](url, body, options);
				setData((d) => (d = data));
				return { data, loading: false, error: "" };
			} else {
				const { data } = await router.get(url, options);
				setData((d) => (d = data));
				return { data, loading: false, error: "" };
			}
		} catch (error) {
			console.log(error);
			if (error instanceof AxiosError) {
				console.log(error);
				setError((e) => (e = (error as AxiosError)?.message));
			}
			return { data: null, loading: false, error: (error as AxiosError)?.message };
		} finally {
			setLoading((l) => (l = false));
		}
	};

	useEffect(() => {
		fetcher(method, url, body, options);
	}, [method, url, body, options]);

	const refetch = (method: Method, url?: string, body?: any, options?: any) => fetcher(method, url, body, options);

	return { data, loading, error, refetch };
};
