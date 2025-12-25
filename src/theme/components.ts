import type { Components } from "@mui/material/styles";

export const components: Components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
			},
			a: {
				textDecoration: "none",
				transition: "color 0.2s ease-in-out",
			},
		},
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
