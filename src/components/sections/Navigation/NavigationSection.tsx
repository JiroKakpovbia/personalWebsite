import { useState } from "react";
import "./Navigation.css";
import { Grid } from "@mui/material";
import DesktopNavigation from "./components/DesktopNavigation.tsx";
import MobileNavigation from "./components/MobileNavigation.tsx";

interface NavigationSectionProps {
	scrollProgress: number;
	showName: boolean;
	sections: string[];
	theme: any;
	toggleTheme: () => void;
}
const NavigationSection = ({ scrollProgress, showName, sections, theme, toggleTheme }: NavigationSectionProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setMenuOpen((open) => !open);
	};

	return (
		<section id="navigation">
			<Grid container size={12} justifyContent={"center"} padding={3}>
				<nav className={scrollProgress > 0 ? "scrolled" : ""}>
					<Grid container size={12} padding={3} justifyContent={"space-between"}>
						{/* Name */}
						<Grid className={"logo"}>
							{showName && (
								<h2 data-aos={"fade-in"} data-aos-once="true">
									Jiro Kakpovbia
								</h2>
							)}
						</Grid>
						{/* Desktop Links */}
						<Grid display={{ xs: "none", md: "flex" }}>
							<DesktopNavigation sections={sections} theme={theme} toggleTheme={toggleTheme} />
						</Grid>
						{/* Mobile Links */}
						<Grid display={{ xs: "flex", md: "none" }}>
							<MobileNavigation sections={sections} theme={theme} toggleTheme={toggleTheme} open={menuOpen} toggleMenu={handleMenuToggle} />
						</Grid>
					</Grid>
					{/* Progress Bar */}
					<div className="scroll-progress-container">
						<div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
					</div>
				</nav>
			</Grid>
		</section>
	);
};

export default NavigationSection;
