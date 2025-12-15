import "./About.css";

import headshotImage from "../../../assets/about/JiroKakpovbia.webp";
import resumePdf from "../../../assets/about/JiroKakpovbia.pdf";
import AboutInfoBlock from "./components/AboutInfoBlock.tsx";
import { Grid } from "@mui/material";

const AboutSection = () => {
	const degreeStart = new Date("September 1, 2022 00:00:00");
	const currentDate = new Date();
	const diffInDays = (Number(currentDate) - Number(degreeStart)) / (1000 * 60 * 60 * 24);

	let currentAcademicYear: string;

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

	return (
		<section id={"about"}>
			<Grid container size={12} spacing={3} padding={3}>
				<Grid container size={12} justifyContent={"center"}>
					<h1>About</h1>
				</Grid>
				<Grid container size={12} data-aos="fade-up" data-aos-once="true">
					<AboutInfoBlock headshot={headshotImage} resume={resumePdf} academicYear={currentAcademicYear} />
				</Grid>
			</Grid>
		</section>
	);
};

export default AboutSection;
