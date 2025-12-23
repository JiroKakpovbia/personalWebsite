import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
	const stored = localStorage.getItem("theme");
	if (stored) return stored;
	return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		value: getInitialTheme() as "light" | "dark",
	},
	reducers: {
		toggleTheme: (state) => {
			state.value = state.value === "light" ? "dark" : "light";
			localStorage.setItem("theme", state.value);
		},
		setTheme: (state, action) => {
			state.value = action.payload;
			localStorage.setItem("theme", state.value);
		},
	},
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
