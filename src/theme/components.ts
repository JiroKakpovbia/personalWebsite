import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
	MuiCssBaseline: {
		styleOverrides: (theme: Theme) => ({
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
		}),
	},

	MuiLink: {
		defaultProps: {
			color: "inherit",
		},
		styleOverrides: {
			root: {
				textDecoration: "none",
			},
		},
	},
};
