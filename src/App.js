import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "./store/themeSlice.tsx";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import NavigationSection from "./components/sections/Navigation/NavigationSection.tsx";
import HomeSection from "./components/sections/Home/HomeSection.tsx";
import AboutSection from "./components/sections/About/AboutSection.tsx";
import ProjectsSection from "./components/sections/Projects/ProjectsSection.tsx";
import SkillsSection from "./components/sections/Skills/SkillsSection.tsx";
import ExperienceSection from "./components/sections/Experience/ExperienceSection.tsx";
import ContactInfoSection from "./components/sections/Contact/ContactSection.tsx";
import FooterSection from "./components/sections/Footer/FooterSection.tsx";

function App() {
	const [isNavScrolled, setIsNavScrolled] = useState(false);
	const theme = useSelector((state) => state.theme.value);
	const dispatch = useDispatch();

	// Apply theme to body
	useEffect(() => {
		document.body.classList.toggle("light-mode", theme === "light");
		document.body.classList.toggle("dark-mode", theme === "dark");
	}, [theme]);

	// Listen for system theme changes
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
		const handleChange = (event) => {
			if (!localStorage.getItem("theme")) {
				dispatch(setTheme(event.matches ? "light" : "dark"));
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [dispatch]);

	const handleToggleTheme = () => {
		dispatch(toggleTheme());
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

	const websiteSections = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

	return (
		<>
			{/* Navigation */}
			<NavigationSection isNavScrolled={isNavScrolled} theme={theme} toggleTheme={handleToggleTheme} sections={websiteSections} />
			{/* Home */}
			<HomeSection />
			{/* About */}
			<AboutSection />
			{/* Projects */}
			<ProjectsSection />
			{/* Skills */}
			<SkillsSection />
			{/* Experience */}
			<ExperienceSection />
			{/* Contact */}
			<ContactInfoSection />
			{/* Footer */}
			<FooterSection />
		</>
	);
}

export default App;
