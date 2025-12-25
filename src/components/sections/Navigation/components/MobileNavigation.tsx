import { Grid, IconButton, Link, Typography } from "@mui/material";
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
			<IconButton aria-label="theme-toggle" onClick={toggleTheme} className={"icon-link"}>
				{theme === "dark" && <NightlightRoundIcon fontSize={"large"} />}
				{theme === "light" && <LightModeIcon fontSize={"large"} />}
			</IconButton>
			{/* Hamburger Menu */}
			<IconButton aria-label="Navigation" onClick={toggleMenu} className={" icon-link"}>
				<MenuIcon fontSize="large" />
			</IconButton>
			{/* Page Links */}
			<Grid container className={`menu-links ${open ? "open" : ""}`}>
				{sections.map((section, idx) => (
					<Grid key={`mobile-nav-section-${idx}-container`} className="nav-links" onClick={toggleMenu}>
						<Link key={`mobile-nav-section-${idx}`} href={`#${section.toLowerCase()}`}>
							<Typography variant="h6">{section}</Typography>
						</Link>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default MobileNavigation;
