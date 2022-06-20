import { createContext, useReducer } from "react";
import reducer from "./reducer";

const INITIAL_STATE = {
	Mode: localStorage.getItem("data-mode") ? localStorage.getItem("data-mode") : localStorage.setItem("data-mode", "dark-mode"),
	Theme: localStorage.getItem("data-theme")
		? localStorage.getItem("data-theme")
		: localStorage.setItem("data-theme", "light-yellow-theme"),
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
