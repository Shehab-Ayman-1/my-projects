import { createContext, useReducer } from "react";
import INITIAL_STATE from "./initial-state";
import Reducer from "./reducer";

export const HotelContext = createContext(INITIAL_STATE);

const HotelContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	return <HotelContext.Provider value={{ state, dispatch }}>{children}</HotelContext.Provider>;
};

export default HotelContextProvider;
