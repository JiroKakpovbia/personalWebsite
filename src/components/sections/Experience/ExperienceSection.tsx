import "./Experience.css";

import equitableImage from "../../../assets/experience/equitable.webp";
import prsImage from "../../../assets/experience/wprint.webp";
import warriorsImage from "../../../assets/experience/waterloowarriors.webp";
import svpImage from "../../../assets/experience/svpteens.webp";
import homeDepotImage from "../../../assets/experience/homedepot.webp";
import sobeysImage from "../../../assets/experience/sobeys.webp";
import ExperienceInfoBlock from "./components/ExperienceInfoBlock.tsx";
import { Grid } from "@mui/material";

const ExperienceSection = () => {
	const experiences = [
		{
			company: "The Equitable Life Insurance Company of Canada",
			position: "Junior Software Developer",
			startDate: "May 2025",
			endDate: "Present",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> React, TypeScript, C#, SQL, .NET, Azure, Jest, xUnit, Postman, Swagger, Figma, Storybook.",
			image: equitableImage,
		},
		{
			company: "Print + Retail Solutions, University of Waterloo",
			position: "Back-End Software Engineer",
			startDate: "September 2024",
			endDate: "December 2024",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> BASIC, PHP, HTML, Javascript, MySQL, Node.js, Docker, GraphQL.",
			image: prsImage,
		},
		{
			company: "Print + Retail Solutions, University of Waterloo",
			position: "Front-End Web Developer",
			startDate: "January 2024",
			endDate: "April 2024",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> BASIC, PHP, HTML, Javascript, MySQL.",
			image: prsImage,
		},
		{
			company: "University of Waterloo Varsity Football",
			position: "Varsity Athlete",
			startDate: "August 2022",
			endDate: "August 2024",
			location: "Waterloo, ON",
			content:
				"Received University of Waterloo Varsity Football Athletic Scholarship, and balanced a 30-hour weekly training schedule with a full academic course load.",
			image: warriorsImage,
		},
		{
			company: "Home Depot",
			position: "Order Fulfillment Systems Associate",
			startDate: "July 2023",
			endDate: "October 2023",
			location: "Waterloo, ON",
			content:
				"Executed accurate order fulfillment using digital inventory systems, ensuring error-free results and high customer satisfaction under tight deadlines.",
			image: homeDepotImage,
		},
		{
			company: "Sobeys",
			position: "Data Workflow Associate",
			startDate: "April 2023",
			endDate: "September 2024",
			location: "Waterloo, ON",
			content:
				"Optimized product placement and maintained inventory accuracy while providing responsive customer support in a fast-paced environment.",
			image: sobeysImage,
		},
		{
			company: "Social Venture Partners Teens",
			position: "Vice Chair of Engagement",
			startDate: "September 2019",
			endDate: "June 2022",
			location: "Waterloo, ON",
			content:
				"Contributed to raising nearly $4000 presented to the Bereaved Families of Ontario in 2021, and nearly $5000 to Martin Luther University College in 2022.",
			image: svpImage,
		},
	];
	return (
		<section id="experience">
			<Grid container size={12} spacing={3}>
				<Grid container size={12} justifyContent={"center"}>
					<h1>Experience</h1>
				</Grid>
				{experiences.map((exp, idx: number) => (
					<Grid container size={12} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="true">
						<ExperienceInfoBlock key={`${exp.company}-${exp.position}`} id={`experience-${idx}`} experience={exp} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ExperienceSection;
