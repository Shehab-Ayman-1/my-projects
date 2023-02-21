const INITIAL_STATE = {
	user: JSON.parse(window.localStorage.getItem("user")) ? JSON.parse(window.localStorage.getItem("user")) : {},
	loading: false,
	error: null,
	isSignin: JSON.parse(window.localStorage.getItem("user"))?.email ? true : false,
};

export default INITIAL_STATE;
