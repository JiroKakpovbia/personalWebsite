import React, { useState, useEffect } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	const [isNavScrolled, setIsNavScrolled] = useState(false);

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
		<Navigation isNavScrolled={isNavScrolled} />
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
