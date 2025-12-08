import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// ---------- Types ----------
export interface ProjectsState {
	cache: Record<string, any>;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

interface FetchResult {
	data: any; // Replace with your actual type
	url: string;
}

// ---------- Async Thunk ----------
export const fetchProjects = createAsyncThunk<
	FetchResult, // return type
	string, // argument type (url)
	{ state: RootState }
>("projects/fetchProjects", async (url, { getState }) => {
	const { projects } = getState();

	// Cached?
	if (projects.cache[url]) {
		return { data: projects.cache[url], url };
	}

	// Fetch fresh
	const response = await fetch(url);
	const data = await response.json();
	return { data, url };
});

// ---------- Initial State ----------
const initialState: ProjectsState = {
	cache: {},
	status: "idle",
	error: null,
};

// ---------- Slice ----------
const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchProjects.fulfilled, (state, action: PayloadAction<FetchResult>) => {
				state.status = "succeeded";
				state.cache[action.payload.url] = action.payload.data;
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? "Unknown error";
			});
	},
});

export default projectsSlice.reducer;
