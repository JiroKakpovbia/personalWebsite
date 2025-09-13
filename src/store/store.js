import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
	reducer: {
		projects: projectsReducer,
		theme: themeReducer,
	},
});

export default store;
