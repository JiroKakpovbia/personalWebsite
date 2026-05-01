import type { Components, Theme } from "@mui/material/styles";

const themeTransition = "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, fill 0.4s ease";

export const components: Components<Theme> = {
	MuiAppBar: {
		styleOverrides: {
			root: {
				transition: themeTransition,
			},
		},
	},
	MuiCssBaseline: {
		styleOverrides: (theme: Theme) => ({
			"*": {
				transition: themeTransition,
			},
			html: {
				scrollBehavior: "smooth",
				overflowX: "hidden",
			},
			body: {
				overflowX: "hidden",
			},
			section: {
				scrollMarginTop: theme.layout.appBarHeight,
				width: "100%",

				[theme.breakpoints.up("md")]: {
					width: "90%",
				},
				[theme.breakpoints.up("lg")]: {
					width: "80%",
				},
				[theme.breakpoints.up("xl")]: {
					width: "70%",
				},
			},
			a: {
				color: "inherit",
				textDecoration: "none", // could remove to make underlines show up again
				"&:hover": {
					color: theme.palette.secondary.main,
				},
			},
		}),
	},
};
