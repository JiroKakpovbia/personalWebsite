import { Grid } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

interface MobileNavigationProps {
	sections: string[];
	theme: any;
	toggleTheme: () => void;
	open: boolean;
	toggleMenu: () => void;
}

const MobileNavigation = ({ sections, theme, toggleTheme, open, toggleMenu }: MobileNavigationProps) => {
	return (
		<Grid container spacing={3} data-aos={"fade-down"} data-aos-once={"true"}>
			{/* Theme Toggle */}
			<Grid container className="theme-toggle">
				<button aria-label="theme-toggle" onClick={toggleTheme} className={"icon-link"}>
					{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
					{theme === "light" && <LightModeIcon fontSize={"large"} />}
				</button>
			</Grid>
			{/* Hamburger Menu */}
			<Grid container className="hamburger-menu">
				<button className="hamburger-icon" aria-label="Navigation" onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				{/* Page Links */}
				<Grid container className={`menu-links ${open ? "open" : ""}`}>
					{sections.map((section, idx) => (
						<Grid key={`mobile-nav-section-${idx}-container`} className="nav-links" onClick={toggleMenu}>
							<a key={`mobile-nav-section-${idx}`} href={`#${section.toLowerCase()}`}>
								{section}
							</a>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MobileNavigation;
