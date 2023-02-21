import { PENDING_VAR, SUCCESS_VAR, FAILURE_VAR, LOGOUT_VAR } from "../../constants/auth";

export const LOGIN_PENDING = () => {
	return { type: PENDING_VAR };
};

export const LOGIN_SUCCESS = (payload) => {
	return { type: SUCCESS_VAR, payload };
};

export const LOGIN_FAILURE = (payload) => {
	return { type: FAILURE_VAR, payload };
};

export const LOGOUT = () => {
	return { type: LOGOUT_VAR };
};
