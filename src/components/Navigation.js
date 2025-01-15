import React, { useState } from "react";
import "./Navigation.css";

function Navigation({ isNavScrolled }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [lightMode, setLightMode] = useState(false);

	// Toggle Hamburger Menu
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	// Toggle Light/Dark Mode
    const toggleLightMode = () => {
        setLightMode(!lightMode);
        document.body.classList.toggle("light-mode", !lightMode);
		document.getElementById("phone").classList.toggle("invert", lightMode);
		document.getElementById("email").classList.toggle("invert", lightMode);
		document.getElementById("c-linkedin").classList.toggle("invert", lightMode);
		document.getElementById("c-github").classList.toggle("invert", lightMode);
    };

	return (
		<div>
			{/* Desktop Navigation */}
			<nav id="desktop-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					Jiro Kakpovbia
				</div>
				<ul className="nav-links" data-aos="fade-down" data-aos-delay="500" data-aos-once="true">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About Me</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
				<button className="theme-toggle " data-aos="fade-down" data-aos-delay="500" data-aos-once="true" onClick={toggleLightMode}>
					<i className={`fas ${lightMode ? "fa-sun" : "fa-moon"}`}></i>
				</button>

			</nav>

			{/* Hamburger Navigation */}
			<nav id="hamburger-nav" className={isNavScrolled ? "scrolled" : ""}>
				<div className="logo" data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
					Jiro Kakpovbia
				</div>

				<div className="nav-actions" data-aos="fade-down" data-aos-delay="500" data-aos-once="true">
					<button className="theme-toggle" data-aos="fade-down" data-aos-delay="500" data-aos-once="true" onClick={toggleLightMode}>
						<i className={`fas ${lightMode ? "fa-sun" : "fa-moon"}`}></i>
					</button>
					<div className="hamburger-menu" data-aos="fade-down" data-aos-delay="500" data-aos-once="true">
						<button className="hamburger-icon" aria-label="Navigation" onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>
						<ul className={`menu-links ${menuOpen ? "open" : ""}`}>
							<li><a href="#home" onClick={toggleMenu}>Home</a></li>
							<li><a href="#about" onClick={toggleMenu}>About Me</a></li>
							<li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
							<li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
							<li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
							<li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
						</ul>
					</div>
				</div>
				
			</nav>
		</div>
	);
}
  
export default Navigation;
