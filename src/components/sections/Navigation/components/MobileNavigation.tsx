import { Grid } from "@mui/material";

interface MobileNavigationProps {
	id: string;
	sections: string[];
	scrolled: boolean;
	theme: any;
	toggleTheme: () => void;
	open: boolean;
	toggleMenu: () => void;
}

const MobileNavigation = ({ id, sections, scrolled, theme, toggleTheme, open, toggleMenu }: MobileNavigationProps) => {
	return (
		<Grid container size={12} id={`${id}-container`}>
			<nav id="hamburger-nav" className={scrolled ? "scrolled" : ""}>
				<Grid container size={12} padding={3} justifyContent={"space-between"}>
					{/* Name */}
					<Grid container className={"logo"} data-aos="fade-down" data-aos-once="true">
						<h2 id={`${id}-website-name`}>Jiro Kakpovbia</h2>
					</Grid>
					<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
						{/* Theme Toggle */}
						<Grid container className="theme-toggle">
							<button id={`${id}-theme-toggle`} aria-label="theme-toggle" onClick={toggleTheme}>
								<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
							</button>
						</Grid>
						{/* Hamburger Menu */}
						<Grid container className="hamburger-menu">
							<button id={`${id}-menu-toggle`} className="hamburger-icon" aria-label="Navigation" onClick={toggleMenu}>
								<span></span>
								<span></span>
								<span></span>
							</button>
							{/* Page Links */}
							<Grid container className={`menu-links ${open ? "open" : ""}`}>
								{sections.map((section, idx) => {
									return (
										<Grid container className="nav-links" onClick={toggleMenu}>
											<a id={`${id}-section-${idx}`} href={`#${section.toLowerCase()}`}>
												{section}
											</a>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</nav>
		</Grid>
	);
};

export default MobileNavigation;
