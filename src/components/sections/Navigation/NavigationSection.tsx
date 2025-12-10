import { useState } from "react";
import "./Navigation.css";

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
		<div>
			{/* Desktop Navigation */}
			<nav id="desktop-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-once="true">
					Jiro Kakpovbia
				</div>
				<div className="nav-actions" data-aos="fade-down" data-aos-once="true">
					<ul className="nav-links">
						{sections.map((section) => {
							return (
								<li>
									<a href={`#${section.toLowerCase()}`}>{section}</a>
								</li>
							);
						})}
					</ul>

					<button aria-label="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
						<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
					</button>
				</div>
			</nav>

			{/* Hamburger Navigation */}
			<nav id="hamburger-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-once="true">
					Jiro Kakpovbia
				</div>

				<div className="nav-actions" data-aos="fade-down" data-aos-once="true">
					<button aria-label="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
						<i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
					</button>
					<div className="hamburger-menu">
						<button className="hamburger-icon" aria-label="Navigation" onClick={handleMenuToggle}>
							<span></span>
							<span></span>
							<span></span>
						</button>
						<ul className={`menu-links ${menuOpen ? "open" : ""}`}>
							{sections.map((section) => {
								return (
									<li>
										<a href={`#${section.toLowerCase()}`} onClick={handleMenuToggle}>
											{section}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavigationSection;
