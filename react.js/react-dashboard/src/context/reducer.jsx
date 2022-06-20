const reducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_DARK_MODE":
			let newStateMode = { ...state, Mode: state.Mode === "dark-mode" ? "light-mode" : "dark-mode" };
			localStorage.setItem("data-mode", newStateMode.Mode);
			return newStateMode;

		case "RED":
			let RED_THEME = { ...state, Theme: "light-red-theme" };
			localStorage.setItem("data-theme", RED_THEME.Theme);
			document.body.setAttribute("data-theme", RED_THEME.Theme);
			return RED_THEME;

		case "BLUE":
			let BLUE_THEME = { ...state, Theme: "light-blue-theme" };
			localStorage.setItem("data-theme", BLUE_THEME.Theme);
			document.body.setAttribute("data-theme", BLUE_THEME.Theme);
			return BLUE_THEME;

		case "PURPLE":
			let PURPLE_THEME = { ...state, Theme: "light-purple-theme" };
			localStorage.setItem("data-theme", PURPLE_THEME.Theme);
			document.body.setAttribute("data-theme", PURPLE_THEME.Theme);
			return PURPLE_THEME;

		case "YELLOW":
			let YELLOW_THEME = { ...state, Theme: "light-yellow-theme" };
			localStorage.setItem("data-theme", YELLOW_THEME.Theme);
			document.body.setAttribute("data-theme", YELLOW_THEME.Theme);
			return YELLOW_THEME;

		case "GREEN":
			let GREEN_THEME = { ...state, Theme: "light-green-theme" };
			localStorage.setItem("data-theme", GREEN_THEME.Theme);
			document.body.setAttribute("data-theme", GREEN_THEME.Theme);
			return GREEN_THEME;

		case "SILVER":
			let SILVER_THEME = { ...state, Theme: "light-silver-theme" };
			localStorage.setItem("data-theme", SILVER_THEME.Theme);
			document.body.setAttribute("data-theme", SILVER_THEME.Theme);
			return SILVER_THEME;

		case "DARK_BLUE":
			let DARK_BLUE_THEME = { ...state, Theme: "light-darkBlue-theme" };
			localStorage.setItem("data-theme", DARK_BLUE_THEME.Theme);
			document.body.setAttribute("data-theme", DARK_BLUE_THEME.Theme);
			return DARK_BLUE_THEME;

		default:
			return state;
	}
};

export default reducer;
