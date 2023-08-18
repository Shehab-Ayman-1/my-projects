import { createContext, useContext as ReactContext, useMemo, useReducer } from "react";
import { initialState } from "./state";
import { reducer } from "./configs/reducer";

const context = createContext(initialState);

export function ContextProvider({ children }) {
   const [controller, dispatch] = useReducer(reducer, initialState);
   const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

   return <context.Provider value={value}>{children}</context.Provider>;
}

export const useContext = () => ReactContext(context);
