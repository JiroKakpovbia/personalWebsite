import { useState } from "react";
import "./Navigation.css";

export interface NavigationSectionProps {
	isNavScrolled: boolean;
	theme: any;
	toggleTheme: () => void;
}

export const NavigationSection = ({ isNavScrolled, theme, toggleTheme }: NavigationSectionProps) => {
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
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
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
							<li>
								<a href="#home" onClick={handleMenuToggle}>
									Home
								</a>
							</li>
							<li>
								<a href="#about" onClick={handleMenuToggle}>
									About
								</a>
							</li>
							<li>
								<a href="#projects" onClick={handleMenuToggle}>
									Projects
								</a>
							</li>
							<li>
								<a href="#skills" onClick={handleMenuToggle}>
									Skills
								</a>
							</li>
							<li>
								<a href="#experience" onClick={handleMenuToggle}>
									Experience
								</a>
							</li>
							<li>
								<a href="#contact" onClick={handleMenuToggle}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavigationSection;
