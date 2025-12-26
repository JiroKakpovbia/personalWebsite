import { PaletteOptions } from "@mui/material";

export const lightModePalette: PaletteOptions = {
	mode: "light" as const,
	background: {
		default: "#f5f5f7",
		paper: "#ffffff",
	},
	text: {
		primary: "#1e1e21",
	},
	primary: {
		main: "#7e57c2",
	},
	secondary: {
		main: "#b39ddb",
	},
};

export const darkModePalette: PaletteOptions = {
	mode: "dark" as const,
	background: {
		default: "#27272a",
		paper: "#1e1e21",
	},
	text: {
		primary: "#f9f7ff",
	},
	primary: {
		main: "#a188d8",
	},
	secondary: {
		main: "#52446f",
	},
};
