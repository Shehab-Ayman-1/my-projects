import logo from "../../images/logo.png";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, createPost, deletePost, updatePost, likePost, disLikePost } from "../../util/posts";

export const GET_POSTS = createAsyncThunk("posts", fetchData);

const postsSlice = createSlice({
	name: "posts",
	initialState: { loading: true, data: [] },

	reducers: {
		CREATE_POST: (state, action) => {
			createPost(action.payload);
		},

		DELETE_POST: (state, action) => {
			state.data = state.data.filter((post) => post._id !== action.payload);
			deletePost(action.payload);
		},

		UPDATE_POST: (state, action) => {
			const post = state.data.find((post) => post._id == action.payload.currentID);
			const index = state.data.indexOf(post);
			const newPost = action.payload.postsData;

			for (let key in newPost) {
				if (key === "selectedFile") {
					if (newPost[key] != logo) post[key] = newPost[key];
				} else {
					if (newPost[key] != "") post[key] = newPost[key];
				}
			}

			state.data[index] = post;
			updatePost(action.payload.currentID, post);
		},

		LIKE_POST: (state, action) => {
			const { id, storage } = action.payload;
			const post = state.data.find((post) => post._id == id);
			const postIndex = state.data.indexOf(post);

			if (storage) {
				const isExist = state.data[postIndex].likes.findIndex((userID) => userID === storage.token);
				if (isExist === -1) {
					state.data[postIndex].likes.push(storage.token);
					likePost(id, storage.token);
				} else {
					const postLike = post.likes.findIndex((id) => id === storage.token);
					state.data[postIndex].likes.splice(postLike, 1);
					disLikePost(id, storage.token);
				}
			}
		},
	},

	extraReducers: {
		[GET_POSTS.pending]: (state, action) => {
			state.loading = true;
		},

		[GET_POSTS.fulfilled]: (state, action) => {
			state.loading = false;
			state.data = action.payload;
		},

		[GET_POSTS.rejected]: (state, action) => {
			state.loading = true;
		},
	},
});

export const { CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } = postsSlice.actions;

export default postsSlice.reducer;
