import axios from "axios";

const Router = axios.create({ baseURL: "http://localhost:5000/auth" });

export const registerUser = async (newUser) => {
	try {
		const response = await Router.post(`/register`, newUser);
		return response;
	} catch (err) {
		return;
	}
};

export const signInUser = async (user) => {
	try {
		const response = await Router.post(`/login`, user);
		return response;
	} catch (err) {
		return;
	}
};

export const getUser = async (id) => {
	try {
		const response = await Router.get(`/${id}`);
		return response;
	} catch (err) {
		return;
	}
};
