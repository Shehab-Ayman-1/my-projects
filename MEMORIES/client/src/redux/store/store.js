import { configureStore } from "@reduxjs/toolkit";
import posts from "../reducers/posts-slice";
import auth from "../reducers/auth-slice";

const Store = configureStore({
	reducer: { posts, auth },
});

export default Store;
