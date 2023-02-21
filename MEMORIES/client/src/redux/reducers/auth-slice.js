import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInUser, registerUser } from "../../util/auth";

export const LOGIN_AUTH = createAsyncThunk("profile/login", (user) => signInUser(user));
export const REGISTER_AUTH = createAsyncThunk("profile/register", (user) => registerUser(user));

const authSlice = createSlice({
	name: "auth",
	initialState: { auths: [], profile: {}, signinExist: true, signupExist: true },

	reducers: {
		EXIST: (state, action) => {
			state.signinExist = action.payload;
			state.signupExist = action.payload;
		},

		LOGOUT_AUTH: (state, action) => {
			window.localStorage.removeItem("profile");
			window.location.href = "/auth";
		},

		GET_ALL_AUTH: (state, action) => {},

		GET_AUTH: (state, action) => {},

		DELETE_AUTH: (state, action) => {},

		UPDATE_AUTH: (state, action) => {},
	},

	extraReducers: {
		// Login
		[LOGIN_AUTH.pending]: (state, action) => {
			window.localStorage.removeItem("profile");
			state.profile = {};
		},
		[LOGIN_AUTH.fulfilled]: (state, action) => {
			if (action.payload) {
				window.localStorage.setItem("profile", JSON.stringify(action.payload.data));
				state.signinExist = true;
				state.profile = action.payload.data;
				window.location.href = "/";
			} else {
				state.signinExist = false;
			}
		},
		[LOGIN_AUTH.rejected]: (state, action) => {
			window.localStorage.removeItem("profile");
			console.log("Failed To Login Redux => " + action.error);
			state.profile = {};
		},

		// Register
		[REGISTER_AUTH.pending]: (state, action) => {
			window.localStorage.removeItem("profile");
			state.profile = {};
			console.log("Pending Redux => " + action.type);
		},
		[REGISTER_AUTH.fulfilled]: (state, action) => {
			console.log("Success Redux => " + action.type);
			if (action.payload) {
				window.localStorage.setItem("profile", JSON.stringify(action.payload.data));
				state.profile = action.payload.data;
				state.signupExist = true;
				window.location.href = "/";
			} else {
				state.signupExist = false;
			}
		},
		[REGISTER_AUTH.rejected]: (state, action) => {
			window.localStorage.removeItem("profile");
			console.log("FROM REDUX, Failed To Regiser => " + action.error);
			state.profile = {};
		},
	},
});

export const { EXIST, LOGOUT_AUTH, GET_ALL_AUTH, GET_AUTH, DELETE_AUTH, UPDATE_AUTH } = authSlice.actions;
export default authSlice.reducer;
