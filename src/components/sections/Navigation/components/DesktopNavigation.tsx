import { Grid } from "@mui/material";

interface DesktopNavigationProps {
	sections: string[];
	theme: any;
	toggleTheme: () => void;
}

const DesktopNavigation = ({ sections, theme, toggleTheme }: DesktopNavigationProps) => {
	return (
		// Page Links
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
	);
};

export default DesktopNavigation;
