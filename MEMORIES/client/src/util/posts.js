import axios from "axios";

const Router = axios.create({ baseURL: "http://localhost:5000/posts" });

Router.interceptors.request.use((req) => {
	const storage = JSON.parse(localStorage.getItem("profile"));
	if (storage) {
		req.headers.authorization = storage.token;
	}
	return req;
});

export const fetchData = async () => {
	try {
		const response = await Router.get(`/`);
		return response.data;
	} catch (error) {
		console.error(error.message);
	}
};

export const createPost = async (newPost) => {
	try {
		const response = await Router.post(`/`, newPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const deletePost = async (id) => {
	try {
		const response = await Router.delete(`/${id}`);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const updatePost = async (postId, updatedPost) => {
	try {
		const response = await Router.patch(`/${postId}`, updatedPost);
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const likePost = async (id, token) => {
	try {
		const response = await Router.patch(`/${id}/likePost`, { token });
		return response;
	} catch (error) {
		console.error(error.message);
	}
};

export const disLikePost = async (id, token) => {
	try {
		const response = await Router.patch(`/${id}/disLikePost`, { token });
		return response;
	} catch (error) {
		console.error(error.message);
	}
};
