// theme/theme.ts
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography.ts";
import { components } from "./components.ts";
import { darkModePalette, lightModePalette } from "./palette.ts";

export const getTheme = (mode: "light" | "dark") =>
	createTheme({
		palette: mode === "light" ? lightModePalette : darkModePalette,
		typography,
		components,
		layout: {
			appBarHeight: 64,
		},
	});

declare module "@mui/material/styles" {
	interface Theme {
		layout: {
			appBarHeight: number;
		};
	}
	interface ThemeOptions {
		layout?: {
			appBarHeight?: number;
		};
	}
}
