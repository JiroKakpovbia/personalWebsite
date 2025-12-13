import { useState } from "react";
import "./Navigation.css";
import { Grid } from "@mui/material";

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
			<nav id="desktop-nav" className={isNavScrolled ? "scrolled" : ""}>
				<Grid container size={12} padding={3} justifyContent={"space-between"}>
					{/* Name */}
					<Grid container className={"logo"} data-aos="fade-down" data-aos-once="true">
						<h2>Jiro Kakpovbia</h2>
					</Grid>
					{/* Page Links */}
					<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
						{sections.map((section) => {
							return (
								<Grid container className="nav-links">
									<a href={`#${section.toLowerCase()}`}>{section}</a>
								</Grid>
							);
						})}
						<Grid container className="theme-toggle">
							<button aria-label="theme-toggle" onClick={toggleTheme}>
								<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
							</button>
						</Grid>
					</Grid>
				</Grid>
			</nav>

			{/* Hamburger Navigation */}
			<nav id="hamburger-nav" className={isNavScrolled ? "scrolled" : ""}>
				<Grid container size={12} padding={3} justifyContent={"space-between"}>
					{/* Website Name */}
					<Grid container className={"logo"} data-aos="fade-down" data-aos-once="true">
						<h2>Jiro Kakpovbia</h2>
					</Grid>
					<Grid container spacing={3} data-aos="fade-down" data-aos-once="true">
						<Grid container className="theme-toggle">
							<button aria-label="theme-toggle" onClick={toggleTheme}>
								<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
							</button>
						</Grid>
						<Grid container className="hamburger-menu">
							<button className="hamburger-icon" aria-label="Navigation" onClick={handleMenuToggle}>
								<span></span>
								<span></span>
								<span></span>
							</button>
							<Grid container className={`menu-links ${menuOpen ? "open" : ""}`}>
								{sections.map((section) => {
									return (
										<Grid container className="nav-links" onClick={handleMenuToggle}>
											<a href={`#${section.toLowerCase()}`}>{section}</a>
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

export default NavigationSection;
