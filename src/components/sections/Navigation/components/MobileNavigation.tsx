import { Grid } from "@mui/material";

interface MobileNavigationProps {
	sections: string[];
	scrolled: boolean;
	theme: any;
	toggleTheme: () => void;
	open: boolean;
	toggleMenu: () => void;
}

const MobileNavigation = ({ sections, scrolled, theme, toggleTheme, open, toggleMenu }: MobileNavigationProps) => {
	return (
		<Grid container size={12} justifyContent={"center"}>
			<nav className={scrolled ? "scrolled" : ""}>
				<Grid container size={12} padding={3} justifyContent={"space-between"}>
					{/* Name */}
					<Grid className={"logo"} data-aos="fade-down" data-aos-once="true">
						{scrolled && <h2>Jiro Kakpovbia</h2>}
					</Grid>
					<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
						{/* Theme Toggle */}
						<Grid className="theme-toggle">
							<button aria-label="theme-toggle" onClick={toggleTheme}>
								<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
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
				</Grid>
			</nav>
		</Grid>
	);
};

export default MobileNavigation;
