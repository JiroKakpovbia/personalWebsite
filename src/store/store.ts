import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectsSlice.tsx";
import themeReducer from "./themeSlice.tsx";

export const store = configureStore({
	reducer: {
		projects: projectsReducer,
		theme: themeReducer,
	},
});

// 👇 Add these two exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
