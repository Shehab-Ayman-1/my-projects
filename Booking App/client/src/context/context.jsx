import { createContext, useMemo, useContext as ReactContext, useReducer } from "react";
import { usersState, initialStates2 } from "./states";
import { usersReducer } from "./users/reducer";
import { Reducer2 } from "./context-2/reducer";

let context1 = createContext(usersState);
let context2 = createContext(initialStates2);

export const ContextProvider1 = ({ children }) => {
	let [state1, dispatch1] = useReducer(usersReducer, usersState);
	let value = useMemo(() => ({ state1, dispatch1 }), [state1, dispatch1]);
	return <context1.Provider value={value}>{children}</context1.Provider>;
};

export const ContextProvider2 = ({ children }) => {
	let [state2, dispatch2] = useReducer(Reducer2, initialStates2);
	let value = useMemo(() => ({ state2, dispatch2 }), [state2, dispatch2]);
	return <context2.Provider value={value}>{children}</context2.Provider>;
};

const useContext = (flag) => {
	if (flag === 0) return ReactContext(context1); // users
	if (flag === 1) return ReactContext(context2);
	if (flag === 2) return { ...ReactContext(context1), ...ReactContext(context2) };
};
export default useContext;
