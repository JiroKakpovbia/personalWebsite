import { Grid, IconButton, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileNavigationProps {
	sections: string[];
	theme: any;
	toggleTheme: () => void;
	open: boolean;
	toggleMenu: () => void;
}

const MobileNavigation = ({ sections, theme, toggleTheme, open, toggleMenu }: MobileNavigationProps) => {
	return (
		<Grid container>
			{/* Theme Toggle */}
			<Grid container className="theme-toggle">
				<IconButton aria-label="theme-toggle" color={"text"} onClick={toggleTheme} className={"icon-link"}>
					{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
					{theme === "light" && <LightModeIcon fontSize={"large"} />}
				</IconButton>
			</Grid>
			{/* Hamburger Menu */}
			<Grid container className="hamburger-menu">
				<IconButton aria-label="Navigation" color={"text"} onClick={toggleMenu}>
					<MenuIcon fontSize="large" />
				</IconButton>
				{/* Page Links */}
				<Grid container className={`menu-links ${open ? "open" : ""}`}>
					{sections.map((section, idx) => (
						<Grid key={`mobile-nav-section-${idx}-container`} className="nav-links" onClick={toggleMenu}>
							<a key={`mobile-nav-section-${idx}`} href={`#${section.toLowerCase()}`}>
								<Typography variant="h6" color={"text"}>
									{section}
								</Typography>
							</a>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MobileNavigation;
