import * as aboutAssets from "../../../assets/about/index.ts";

import AboutInfoBlock from "./components/AboutInfoBlock.tsx";
import { Grid, Typography } from "@mui/material";

const AboutSection = () => {
	const degreeStart = new Date("September 1, 2022 00:00:00");
	const currentDate = new Date();
	const diffInDays = (Number(currentDate) - Number(degreeStart)) / (1000 * 60 * 60 * 24);
	const currentAcademicYear =
		diffInDays < 1 * 365
			? "first-year"
			: diffInDays < 2 * 365
				? "second-year"
				: diffInDays < 3 * 365
					? "third-year"
					: diffInDays < 4 * 365
						? "fourth-year"
						: diffInDays < 5 * 365
							? "fifth-year"
							: "graduate";

	const whoAmI =
		currentAcademicYear === "graduate"
			? "Software Developer and Computer Science (BCS) graduate from the University of Waterloo"
			: `Software Developer and ${currentAcademicYear} Computer Science (BCS) student at the University of Waterloo, graduating in April 2027`;

	return (
		<section id={"about"}>
			<Grid container size={12} spacing={3} padding={3}>
				<Grid container size={12} justifyContent={"center"}>
					<Typography variant={"h4"} component={"h3"} color={"primary.main"}>
						About
					</Typography>
				</Grid>
				<Grid container size={12} data-aos={"fade-up"} data-aos-once={"true"}>
					<AboutInfoBlock headshot={aboutAssets.headshot} resume={"/Jiro_Kakpovbia_Resume.pdf"} whoAmI={whoAmI} />
				</Grid>
			</Grid>
		</section>
	);
};

export default AboutSection;
