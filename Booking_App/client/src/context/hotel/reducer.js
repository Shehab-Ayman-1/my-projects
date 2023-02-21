import { NEW_VAR, RESET_VAR } from "../../constants/hotels";
import INITIAL_STATE from "./initial-state";

const Reducer = (state, action) => {
	switch (action.type) {
		case NEW_VAR:
			return action.payload;

		case RESET_VAR:
			return INITIAL_STATE;

		default:
			return state;
	}
};

export default Reducer;
