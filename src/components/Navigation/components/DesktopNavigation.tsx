import { Grid, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomIconButton from "../../CustomComponents/CustomIconButton.tsx";
import { Section } from "../../../types/";

interface DesktopNavigationProps {
	sections: Section[];
	theme: "light" | "dark";
	toggleTheme: () => void;
}

const DesktopNavigation = ({ sections, theme, toggleTheme }: DesktopNavigationProps) => {
	return (
		<Grid container spacing={3} alignItems={"center"}>
			{/* Page Links */}
			{sections.map((section, idx) => (
				<Typography key={section.title} variant="h6" component={"a"} href={`#${section.title.toLowerCase()}`}>
					{section.title}
				</Typography>
			))}
			{/* Theme Toggle */}
			<CustomIconButton icon={theme === "light" ? LightModeIcon : NightlightRoundIcon} aria-label="theme-toggle" onClick={toggleTheme} />
		</Grid>
	);
};

export default DesktopNavigation;
