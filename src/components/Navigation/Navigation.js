import { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation({ isNavScrolled }) {
	// Check and set the initial theme
	const initialTheme = (() => {
		const storedPreference = localStorage.getItem("theme");
		if (storedPreference) {
			return storedPreference === "light";
		}
		return window.matchMedia("(prefers-color-scheme: light)").matches;
	})();

	// Apply initial theme
	if (initialTheme) {
		document.body.classList.remove("dark-mode");
		document.body.classList.add("light-mode");
	} else {
		document.body.classList.remove("light-mode");
		document.body.classList.add("dark-mode");
	}

	const [lightMode, setLightMode] = useState(initialTheme);

	// Toggle Light/Dark Mode
	const toggleLightMode = () => {
		const newLightMode = !lightMode;
		setLightMode(newLightMode);
		document.body.classList.toggle("light-mode", newLightMode);
		document.body.classList.toggle("dark-mode", !newLightMode);

		// Save user preference
		localStorage.setItem("theme", newLightMode ? "light" : "dark");
	};

	// Listen for changes to system theme preference
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

		const handleChange = (event) => {
			if (!localStorage.getItem("theme")) {
				setLightMode(event.matches);
				document.body.classList.toggle("light-mode", event.matches);
				document.body.classList.toggle("dark-mode", !event.matches);
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// Toggle Hamburger Menu
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div>
			{/* Desktop Navigation */}
			<nav id="desktop-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					Jiro Kakpovbia
				</div>
				<div className="nav-actions" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					<ul className="nav-links">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About Me</a>
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
					<button aria-label="theme-toggle" className="theme-toggle" onClick={toggleLightMode}>
						<i className={`fas ${lightMode ? "fa-sun" : "fa-moon"}`}></i>
					</button>
				</div>
			</nav>

			{/* Hamburger Navigation */}
			<nav id="hamburger-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					Jiro Kakpovbia
				</div>

				<div className="nav-actions" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					<button aria-label="theme-toggle" className="theme-toggle" onClick={toggleLightMode}>
						<i className={`fas ${lightMode ? "fa-sun" : "fa-moon"}`}></i>
					</button>
					<div className="hamburger-menu">
						<button className="hamburger-icon" aria-label="Navigation" onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>
						<ul className={`menu-links ${menuOpen ? "open" : ""}`}>
							<li>
								<a href="#home" onClick={toggleMenu}>
									Home
								</a>
							</li>
							<li>
								<a href="#about" onClick={toggleMenu}>
									About Me
								</a>
							</li>
							<li>
								<a href="#projects" onClick={toggleMenu}>
									Projects
								</a>
							</li>
							<li>
								<a href="#skills" onClick={toggleMenu}>
									Skills
								</a>
							</li>
							<li>
								<a href="#experience" onClick={toggleMenu}>
									Experience
								</a>
							</li>
							<li>
								<a href="#contact" onClick={toggleMenu}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
