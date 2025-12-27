import { useState, useEffect } from "react";
import { toggleTheme } from "./store/themeSlice.tsx";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/Navigation/Navigation.tsx";
import HomeSection from "./components/PageSections/Home/HomeSection.tsx";
import AboutSection from "./components/PageSections/About/AboutSection.tsx";
import ProjectsSection from "./components/PageSections/Projects/ProjectsSection.tsx";
import SkillsSection from "./components/PageSections/Skills/SkillsSection.tsx";
import ExperienceSection from "./components/PageSections/Experience/ExperienceSection.tsx";
import ContactInfoSection from "./components/PageSections/Contact/ContactSection.tsx";
import Footer from "./components/Footer/Footer.tsx";

import { Grid, CssBaseline, ThemeProvider } from "@mui/material";
import { RootState } from "./store/store.ts";
import { useAppSelector, useAppDispatch } from "./store/hooks.ts";
import { useMemo } from "react";
import { getTheme } from "./theme/theme.ts";

const App = () => {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showName, setShowName] = useState(false);
	const themeMode = useAppSelector((state: RootState) => state.theme.value);
	const dispatch = useAppDispatch();

	const muiTheme = useMemo(() => getTheme(themeMode), [themeMode]);

	const handleToggleTheme = () => {
		dispatch(toggleTheme());
	};

	// Handle scroll events in navigation
	const handleScroll = () => {
		// Handle progress bar
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
		setScrollProgress(progress);

		// Handle name
		const homeSection = document.getElementById("home");

		if (homeSection) {
			const homeBottom = homeSection.getBoundingClientRect().bottom;
			setShowName(homeBottom < 25);
		}
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
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			{/* Navigation */}
			<Navigation scrollProgress={scrollProgress} showName={showName} theme={themeMode} toggleTheme={handleToggleTheme} />
			<Grid container size={12} spacing={8} justifyContent={"center"} component="main">
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
			</Grid>
			{/* Footer */}
			<Footer />
		</ThemeProvider>
	);
};

export default App;
