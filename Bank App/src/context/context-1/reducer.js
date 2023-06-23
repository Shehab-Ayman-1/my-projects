import { GET_PRODUCTS } from "@/utilities";

export const Reducer1 = async (state, action) => {
	switch (action.type) {
		case "GET_ALL":
			let res = await GET_PRODUCTS();
			state.defaultState = res.data;
			return state;
		default:
			return state;
	}
};
