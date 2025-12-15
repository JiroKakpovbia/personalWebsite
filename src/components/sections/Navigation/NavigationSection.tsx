import { useState } from "react";
import "./Navigation.css";
import { Grid } from "@mui/material";
import DesktopNavigation from "./components/DesktopNavigation.tsx";
import MobileNavigation from "./components/MobileNavigation.tsx";

interface NavigationSectionProps {
	isNavScrolled: boolean;
	theme: any;
	toggleTheme: () => void;
	sections: string[];
}
const NavigationSection = ({ isNavScrolled, theme, toggleTheme, sections }: NavigationSectionProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen((open) => !open);
	};

	return (
		<Grid container size={12}>
			{/* Desktop Navigation */}
			<Grid container size={12} display={{ xs: "none", md: "flex" }}>
				<DesktopNavigation sections={sections} scrolled={isNavScrolled} theme={theme} toggleTheme={toggleTheme} />
			</Grid>
			{/* Mobile Navigation */}
			<Grid container size={12} display={{ xs: "flex", md: "none" }}>
				<MobileNavigation
					sections={sections}
					scrolled={isNavScrolled}
					theme={theme}
					toggleTheme={toggleTheme}
					open={menuOpen}
					toggleMenu={handleMenuToggle}
				/>
			</Grid>
		</Grid>
	);
};

export default NavigationSection;
