import React, { useState, useEffect } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/pages/Navigation/Navigation";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Skills from "./components/pages/Skills/Skills";
import Experience from "./components/pages/Experience/Experience";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/pages/Footer/Footer";

function App() {
	const [isNavScrolled, setIsNavScrolled] = useState(false);

	// Determine the theme of the website (dark/light)
	const [theme, setTheme] = useState(localStorage.getItem("theme"));

	// Apply theme to body
	useEffect(() => {
		document.body.classList.toggle("light-mode", theme === "light");
		document.body.classList.toggle("dark-mode", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
		const handleChange = (event) => {
			if (!localStorage.getItem("theme")) {
				setTheme(event.matches ? "light" : "dark");
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	// Handle scroll event to change nav colour
	const handleScroll = () => {
		setIsNavScrolled(window.scrollY > 50);
	};

	// Initialize AOS, handle scroll
	useEffect(() => {
		// Initialize AOS
		AOS.init({ duration: 750, easing: "ease-in-out" });

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup scroll event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Navigation isNavScrolled={isNavScrolled} theme={theme} toggleTheme={toggleTheme} />
			<Home />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
