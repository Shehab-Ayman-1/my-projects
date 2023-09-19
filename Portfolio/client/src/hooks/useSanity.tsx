import { useState } from "react";
import { client } from "@/client";
import { ErrorProps } from "@sanity/client";

export const useSanity = <T,>(method: string): [T, boolean, string, (q: any) => Promise<any>] => {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetcher = async (query: string) => {
		setLoading(() => true);
		setError(() => "");
		try {
			const response = await client.fetch(`*[_type == "${query}"]`);
			setData(() => response || []);
			return response;
		} catch (error: any) {
			setError(() => error);
		} finally {
			setLoading(() => false);
		}
	};

	const creator = async (body: any) => {
		try {
			await client.create(body);
			return "";
		} catch (err) {
			const { response, message } = err as ErrorProps;
			const error = response?.body?.error?.items[0]?.error?.description || message;

			setError(() => error);
			return error;
		}
	};

	if (method === "create") {
		return [data as T, loading, error, creator]; // create
	} else {
		return [data as T, loading, error, fetcher]; // get
	}
};
