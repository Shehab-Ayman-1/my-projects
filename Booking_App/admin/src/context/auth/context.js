import React, { createContext, useEffect, useReducer } from "react";
import INITIAL_STATE from "./initial-state";
import Reducer from "./reducer";

export const AuthContext = createContext(INITIAL_STATE);
const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

	useEffect(() => {
		window.localStorage.setItem("user", JSON.stringify(state.user) || {});
	}, [state.user]);

	return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
