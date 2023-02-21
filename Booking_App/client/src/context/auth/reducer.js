import { PENDING_VAR, SUCCESS_VAR, FAILURE_VAR, LOGOUT_VAR } from "../../constants/auth";

const Reducer = (state, action) => {
	switch (action.type) {
		case PENDING_VAR:
			return { user: {}, loading: true, error: null };

		case SUCCESS_VAR:
			return { user: action.payload, loading: false, error: null, isSignin: true };

		case FAILURE_VAR:
			return { user: {}, loading: false, error: action.payload, isSignin: false };

		case LOGOUT_VAR:
			window.localStorage.removeItem("user");
			return { user: {}, loading: false, error: null, isSignin: false };

		default:
			return state;
	}
};

export default Reducer;
