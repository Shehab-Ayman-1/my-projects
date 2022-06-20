import React, { createContext, useEffect, useState } from "react";
import JsonData from "../util/getData";

export const Context = createContext();

export function ContextStore(props) {
	const [data, setData] = useState({});
	const [activeCard, setActiveCard] = useState({});
	useEffect(() => {
		JsonData().then((result) => setData(result));
	}, []);

	return <Context.Provider value={{ data, setData, activeCard, setActiveCard }}>{props.children}</Context.Provider>;
}
