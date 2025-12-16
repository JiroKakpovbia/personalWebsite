import { Grid } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

interface DesktopNavigationProps {
	sections: string[];
	theme: any;
	toggleTheme: () => void;
}

const DesktopNavigation = ({ sections, theme, toggleTheme }: DesktopNavigationProps) => {
	return (
		// Page Links
		<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
			{sections.map((section, idx) => (
				<Grid key={`desktop-nav-section-${idx}-container`} className="nav-links">
					<a href={`#${section.toLowerCase()}`}>{section}</a>
				</Grid>
			))}
			{/* Theme Toggle */}
			<Grid container className="theme-toggle">
				<button aria-label="theme-toggle" onClick={toggleTheme} className={"icon-link"}>
					{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
					{theme === "light" && <LightModeIcon fontSize={"large"} />}
				</button>
			</Grid>
		</Grid>
	);
};

export default DesktopNavigation;
