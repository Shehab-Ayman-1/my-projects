import { GET_USERS } from "@/utilities";

export const Reducer2 = async (states, action) => {
	const state = await states;

	switch (action.type) {
		case "GET_ALL":
			let res = await GET_USERS();
			state.defaultState = res.data;
			return state;
		default:
			return state;
	}
};
