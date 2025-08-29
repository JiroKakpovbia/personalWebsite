import "./About.css";

import headshotImage from "../../assets/about/Jiro Kakpovbia - Headshot.jpeg";
import resumePdf from "../../assets/about/Jiro Kakpovbia.pdf";

const degreeStart = new Date("September 1, 2022 00:00:00");
const currentDate = new Date();
const diffInDays = (currentDate - degreeStart) / (1000 * 60 * 60 * 24);

var currentAcademicYear;

if (diffInDays < 1 * 365) {
	currentAcademicYear = "first-year Computer Science (BCS) student at the University of Waterloo, graduating in August 2027";
} else if (diffInDays >= 1 * 365 && diffInDays < 2 * 365) {
	currentAcademicYear = "second-year Computer Science (BCS) student at the University of Waterloo, graduating in August 2027";
} else if (diffInDays >= 2 * 365 && diffInDays < 3 * 365) {
	currentAcademicYear = "third-year Computer Science (BCS) student at the University of Waterloo, graduating in August 2027";
} else if (diffInDays >= 3 * 365 && diffInDays < 4 * 365) {
	currentAcademicYear = "fourth-year Computer Science (BCS) student at the University of Waterloo, graduating in August 2027";
} else if (diffInDays >= 4 * 365 && diffInDays < 5 * 365) {
	currentAcademicYear = "fifth-year Computer Science (BCS) student at the University of Waterloo, graduating in August 2027";
} else {
	currentAcademicYear = "Computer Science (BCS) graduate from the University of Waterloo";
}

function About() {
	return (
		<section id="about">
			<h1>About Me</h1>
			<div id="about-container" className="about" data-aos="fade-up" data-aos-once="true">
				<img id="headshot" alt="Headshot of Jiro Kakpovbia" src={headshotImage}></img>

				{/* Description */}
				<div className="text-content">
					<p>
						Hey! My name is Jiro Kakpovbia, and I'm a {currentAcademicYear}. I'm a versatile developer with experience across front-end,
						back-end, full-stack, and AI projects. I've worked with technologies like C#, Python, React, Node.js, and Docker, and
						contributed to scalable enterprise applications, OCR-powered automation, and retail system integrations.
					</p>
					<br></br>
					<p>
						As a former student-athlete, I bring discipline, focus, and a team-first mindset to every challenge. Whether I'm optimizing
						data pipelines, refactoring legacy code, or experimenting with AI, I'm always driven by curiosity and a desire to create
						meaningful solutions. Let's connect — I'm always open to new ideas, collaborations, and conversations!
					</p>
					<br></br>
					<p>Please feel free to reach out — I'm always open to meeting new people!</p>
					<br></br>

					{/* Resume Button */}
					<button className="button" onClick={() => window.open(resumePdf, "_blank")}>
						Resume
					</button>
				</div>
			</div>
		</section>
	);
}

export default About;
