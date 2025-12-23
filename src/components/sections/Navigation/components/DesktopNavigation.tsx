import { Grid, IconButton, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

interface DesktopNavigationProps {
	sections: string[];
	theme: any;
	toggleTheme: () => void;
}

const DesktopNavigation = ({ sections, theme, toggleTheme }: DesktopNavigationProps) => {
	return (
		<Grid container spacing={3} alignItems={"center"}>
			{/* Page Links */}
			{sections.map((section, idx) => (
				<Grid key={`desktop-nav-section-${idx}-container`} className="nav-links">
					<a href={`#${section.toLowerCase()}`}>
						<Typography variant="h6" color={"text"}>
							{section}
						</Typography>
					</a>
				</Grid>
			))}
			{/* Theme Toggle */}
			<Grid container className="theme-toggle">
				<IconButton aria-label="theme-toggle" color={"text"} onClick={toggleTheme} className={"icon-link"}>
					{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
					{theme === "light" && <LightModeIcon fontSize={"large"} />}
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default DesktopNavigation;
