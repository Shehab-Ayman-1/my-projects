import { createStore } from "redux";
import Reducer from "./Reducer";

const initialState = {
	Cart: [],
};

let Store = createStore(Reducer, initialState);

export default Store;
