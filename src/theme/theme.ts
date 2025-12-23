// theme/theme.ts
import { createTheme } from "@mui/material/styles";
import { lightModePalette, darkModePalette } from "./palette.ts";
import { typography } from "./typography.ts";
import { components } from "./components.ts";

export const getTheme = (mode: "light" | "dark") =>
	createTheme({
		palette: mode === "light" ? lightModePalette : darkModePalette,
		typography,
		components,
	});
