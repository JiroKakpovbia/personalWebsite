export const components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
			},
			a: {
				textDecorationColor: "inherit",
				transition: "color 0.2s ease-in-out",
			},
		},
	},

	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: "0.5rem",
				padding: "1rem",
				textTransform: "none" as const,
				transition: "all 0.2s ease-in-out",
			},
		},
	},
};
