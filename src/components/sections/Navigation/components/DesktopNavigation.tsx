import { Grid, Link, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomIconButton from "../../../CustomIconButton.tsx";

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
			<CustomIconButton icon={theme === "light" ? LightModeIcon : NightlightRoundIcon} aria-label="theme-toggle" onClick={toggleTheme} />
		</Grid>
	);
};

export default DesktopNavigation;
