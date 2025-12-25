import { useLayoutEffect, useRef, useState } from "react";
import "./Navigation.css";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import DesktopNavigation from "./components/DesktopNavigation.tsx";
import MobileNavigation from "./components/MobileNavigation.tsx";

interface NavigationProps {
	scrollProgress: number;
	showName: boolean;
	sections: string[];
	theme: any;
	toggleTheme: () => void;
}
const Navigation = ({ scrollProgress, showName, sections, theme, toggleTheme }: NavigationProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen((open) => !open);
	};

	const appBarRef = useRef<HTMLDivElement>(null);

	// Get/set the height of the navigation bar
	useLayoutEffect(() => {
		if (!appBarRef.current) return;

		const updateOffset = () => {
			document.documentElement.style.setProperty("--appbar-offset", `${appBarRef.current!.offsetHeight}px`);
		};

		updateOffset();

		const observer = new ResizeObserver(updateOffset);
		observer.observe(appBarRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<AppBar
			ref={appBarRef}
			position="fixed"
			color={scrollProgress > 0 ? "background.paper" : "background.default"}
			elevation={scrollProgress > 0 ? 4 : 0}
		>
			<Toolbar>
				<Grid container size={12} justifyContent={"space-between"} flex={1} flexDirection={"row"}>
					{/* Name */}
					<Grid container alignItems={"center"}>
						{showName && (
							<Typography variant="h4" data-aos={"fade-in"} data-aos-once={"true"}>
								Jiro Kakpovbia
							</Typography>
						)}
					</Grid>
					{/* Desktop Links */}
					<Grid display={{ xs: "none", md: "flex" }} data-aos={"fade-down"} data-aos-once={"true"}>
						<DesktopNavigation sections={sections} theme={theme} toggleTheme={toggleTheme} />
					</Grid>
					{/* Mobile Links */}
					<Grid display={{ xs: "flex", md: "none" }} data-aos={"fade-down"} data-aos-once={"true"}>
						<MobileNavigation sections={sections} theme={theme} toggleTheme={toggleTheme} open={menuOpen} toggleMenu={handleMenuToggle} />
					</Grid>
				</Grid>
			</Toolbar>
			{/* Progress Bar */}
			<Box height={2}>
				<Box width={`${scrollProgress}%`} height="100%" bgcolor="primary.main" />
			</Box>
		</AppBar>
	);
};

export default Navigation;
