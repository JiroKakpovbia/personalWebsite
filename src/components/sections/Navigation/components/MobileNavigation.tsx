import { Grid, Link, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIconButton from "../../../CustomIconButton.tsx";

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
			<CustomIconButton icon={theme === "light" ? LightModeIcon : NightlightRoundIcon} aria-label="theme-toggle" onClick={toggleTheme} />
			{/* Hamburger Menu */}
			<CustomIconButton icon={MenuIcon} aria-label="Navigation" onClick={toggleMenu} />
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
