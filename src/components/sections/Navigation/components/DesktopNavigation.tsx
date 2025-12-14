import { Grid } from "@mui/material";

interface DesktopNavigationProps {
	sections: string[];
	scrolled: boolean;
	theme: any;
	toggleTheme: () => void;
}

const DesktopNavigation = ({ sections, scrolled, theme, toggleTheme }: DesktopNavigationProps) => {
	return (
		<Grid container size={12} justifyContent={"center"}>
			<nav className={scrolled ? "scrolled" : ""}>
				<Grid container size={12} padding={3} justifyContent={"space-between"}>
					{/* Name */}
					<Grid className={"logo"} data-aos="fade-down" data-aos-once="true">
						{scrolled && <h2>Jiro Kakpovbia</h2>}
					</Grid>
					{/* Page Links */}
					<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
						{sections.map((section, idx) => (
							<Grid key={`desktop-nav-section-${idx}-container`} className="nav-links">
								<a href={`#${section.toLowerCase()}`}>{section}</a>
							</Grid>
						))}
						{/* Theme Toggle */}
						<Grid className="theme-toggle">
							<button aria-label="theme-toggle" onClick={toggleTheme}>
								<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
							</button>
						</Grid>
					</Grid>
				</Grid>
			</nav>
		</Grid>
	);
};

export default DesktopNavigation;
