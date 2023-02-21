import React, { createContext, useEffect, useState } from "react";
import fetchData from "../util/getData";

export const Context = createContext();

export function ContextStore(props) {
	const [data, setData] = useState({ stream: [], services: [], TvShow: [], suggestion: [] });
	const [activeCard, setActiveCard] = useState({});
	useEffect(() => {
		fetchData().then((res) => {
			let stream = res.find((item) => item.type === "stream").branches || [];
			let services = res.find((item) => item.type === "services").branches || [];
			let TvShow = res.find((item) => item.type === "TvShow").branches || [];
			let suggestion = res.find((item) => item.type === "suggestion").branches || [];
			setData((prev) => (prev = { stream, services, TvShow, suggestion }));
		});
	}, []);

	return <Context.Provider value={{ data, setData, activeCard, setActiveCard }}>{props.children}</Context.Provider>;
}