import { createContext, useMemo, useReducer, useContext as ReactContext } from "react";
import { hotelsStates, usersStates } from "./states";
import { hotelsReducer } from "./hotels/reducer";
import { usersReducer } from "./users/reducer";

let hotelsContext = createContext(hotelsStates);
let usersContext = createContext(usersStates);

export const ContextProvider1 = ({ children }) => {
	let [usersState, usersDispatch] = useReducer(usersReducer, usersStates);
	let value = useMemo(() => ({ usersState, usersDispatch }), [usersState, usersDispatch]);
	return <usersContext.Provider value={value}>{children}</usersContext.Provider>;
};

export const ContextProvider2 = ({ children }) => {
	let [hotelsState, hotelsDispatch] = useReducer(hotelsReducer, hotelsStates);
	let value = useMemo(() => ({ hotelsState, hotelsDispatch }), [hotelsState, hotelsDispatch]);
	return <hotelsContext.Provider value={value}>{children}</hotelsContext.Provider>;
};

const useContext = (flag) => {
	if (flag === 0) return ReactContext(hotelsContext);
	if (flag === 1) return ReactContext(usersContext);
	if (flag === 2) return ReactContext(hotelsContext) + ReactContext(usersContext);
};

export default useContext;
