import "./Navigation.css";
import { AppBar, Box, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import DesktopNavigation from "./components/DesktopNavigation.tsx";
import MobileNavigation from "./components/MobileNavigation.tsx";
import { Section } from "../../types/";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import DialpadIcon from "@mui/icons-material/Dialpad";

interface NavigationProps {
	scrollProgress: number;
	showName: boolean;
	theme: "light" | "dark";
	toggleTheme: () => void;
}
const Navigation = ({ scrollProgress, showName, theme, toggleTheme }: NavigationProps) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	const muiTheme = useTheme();
	const appBarHeight = muiTheme.layout.appBarHeight;

	const websiteSections: Section[] = [
		{ title: "Home", icon: HomeIcon },
		{ title: "About", icon: PersonIcon },
		{ title: "Projects", icon: DeviceHubIcon },
		{ title: "Skills", icon: ComputerIcon },
		{ title: "Experience", icon: WorkIcon },
		{ title: "Contact", icon: DialpadIcon },
	];

	return (
		<AppBar
			position="fixed"
			color="transparent"
			elevation={scrollProgress > 0 ? 4 : 0}
			sx={{
				height: appBarHeight,
				bgcolor: scrollProgress > 0 ? "background.paper" : "background.default",
				color: "text.primary",
			}}
		>
			<Toolbar
				sx={{
					minHeight: appBarHeight,
					height: appBarHeight,
				}}
			>
				<Grid container size={12} justifyContent={"space-between"} flex={1} flexDirection={"row"}>
					{/* Name */}
					<Grid container alignItems={"center"}>
						{showName && (
							<Typography variant="h4" sx={{ cursor: "default" }} data-aos={"fade-in"} data-aos-once={"true"}>
								{isSmall ? "Jiro Kakpovbia" : "Jiro K."}
							</Typography>
						)}
					</Grid>
					{/* Desktop Links */}
					<Grid display={{ xs: "none", md: "flex" }} data-aos={"fade-down"} data-aos-once={"true"}>
						<DesktopNavigation sections={websiteSections} theme={theme} toggleTheme={toggleTheme} />
					</Grid>
					{/* Mobile Links */}
					<Grid display={{ xs: "flex", md: "none" }} data-aos={"fade-down"} data-aos-once={"true"}>
						<MobileNavigation sections={websiteSections} theme={theme} toggleTheme={toggleTheme} />
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
