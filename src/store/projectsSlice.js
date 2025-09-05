import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching projects
export const fetchProjects = createAsyncThunk("projects/fetchProjects", async (url, { getState }) => {
	// Check if already cached
	const { projects } = getState();
	if (projects.cache[url]) {
		return { data: projects.cache[url], url };
	}
	// Fetch from endpoint
	const response = await fetch(url);
	const data = await response.json();
	return { data, url };
});

const projectsSlice = createSlice({
	name: "projects",
	initialState: {
		cache: {},
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.cache[action.payload.url] = action.payload.data;
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default projectsSlice.reducer;
