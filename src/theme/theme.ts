// theme/theme.ts
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography.ts";
import { components } from "./components.ts";
import { darkModePalette, lightModePalette } from "./palette.ts";

export const getTheme = (mode: "light" | "dark") =>
	createTheme({
		palette:
			mode === "light"
				? {
						mode: "light" as const,
						background: {
							default: "#f9f7ff",
							paper: "#e9e6f2",
						},
						text: {
							primary: "#6D6C70",
						},
						primary: {
							main: "#7255af",
						},
						secondary: {
							main: "#a188d8",
						},
				  }
				: {
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
				  },
		typography,
		components,
	});
