import { NEW_VAR, RESET_VAR } from "../../constants/hotels";

export const NEW_SEARCH = (payload) => {
	return { type: NEW_VAR, payload: payload };
};

export const RESET_SEARCH = () => {
	return { type: RESET_VAR };
};
