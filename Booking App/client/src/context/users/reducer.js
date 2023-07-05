import { GET_USERS } from "@/utilities";

export const usersReducer = async (states, action) => {
	const state = await states;

	switch (action.type) {
		case "GET_ALL":
			let res = await GET_USERS();
			state.users = res.data;
			return state;

		default:
			return state;
	}
};
