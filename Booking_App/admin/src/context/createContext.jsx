// React
import { createContext, useReducer } from "react";
import reducer from "./reducer";

function storage(type, item, val = "") {
	switch (type) {
		case "get":
			return localStorage.getItem(item);
		case "set":
			return localStorage.setItem(item, val);
		default:
			return;
	}
}

const INITIAL_STATE = {
	Mode: storage("get", "data-mode") ? storage("get", "data-mode") : storage("set", "data-mode", "dark-mode"),
	Theme: storage("get", "data-theme") ? storage("get", "data-theme") : storage("set", "data-theme", "light-yellow-theme"),
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>;
};
