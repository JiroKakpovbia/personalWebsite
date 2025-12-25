import { Grid, IconButton, Link, Typography } from "@mui/material";
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
					<Link href={`#${section.toLowerCase()}`}>
						<Typography variant="h6">{section}</Typography>
					</Link>
				</Grid>
			))}
			{/* Theme Toggle */}
			<IconButton aria-label="theme-toggle" onClick={toggleTheme} className={"icon-link"}>
				{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
				{theme === "light" && <LightModeIcon fontSize={"large"} />}
			</IconButton>
		</Grid>
	);
};

export default DesktopNavigation;
