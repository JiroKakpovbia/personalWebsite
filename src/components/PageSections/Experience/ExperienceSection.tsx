import * as experienceLogos from "../../../assets/experience/index.ts";

import ExperienceInfoBlock from "./components/ExperienceInfoBlock.tsx";
import { Grid, Typography } from "@mui/material";
import { Experience } from "../../../types";

const ExperienceSection = () => {
	const experiences: Experience[] = [
		{
			company: "The Equitable Life Insurance Company of Canada",
			position: "Junior Software Developer",
			startDate: "May 2025",
			endDate: "Present",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> React, TypeScript, C#, SQL, .NET, Azure, Jest, xUnit, Postman, Swagger, Figma, Storybook.",
			image: experienceLogos.equitable,
			url: "https://equitable.ca/home",
		},
		{
			company: "Print + Retail Solutions, University of Waterloo",
			position: "Back-End Software Engineer",
			startDate: "September 2024",
			endDate: "December 2024",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> BASIC, PHP, HTML, Javascript, MySQL, Node.js, Docker, GraphQL.",
			image: experienceLogos.prs,
			url: "https://uwaterloo.ca/print-and-retail-solutions/",
		},
		{
			company: "Print + Retail Solutions, University of Waterloo",
			position: "Front-End Web Developer",
			startDate: "January 2024",
			endDate: "April 2024",
			location: "Waterloo, ON",
			content: "<b>Languages and Tools:</b> BASIC, PHP, HTML, Javascript, MySQL.",
			image: experienceLogos.prs,
			url: "https://uwaterloo.ca/print-and-retail-solutions/",
		},
		{
			company: "Varsity Football, University of Waterloo",
			position: "Varsity Athlete",
			startDate: "August 2022",
			endDate: "August 2024",
			location: "Waterloo, ON",
			content:
				"Received University of Waterloo Varsity Football Athletic Scholarship, and balanced a 30-hour weekly training schedule with a full academic course load.",
			image: experienceLogos.warriors,
			url: "https://athletics.uwaterloo.ca/sports/football",
		},
		{
			company: "Home Depot",
			position: "Order Fulfillment Associate",
			startDate: "July 2023",
			endDate: "October 2023",
			location: "Waterloo, ON",
			content:
				"Executed accurate order fulfillment using digital inventory systems, ensuring error-free results and high customer satisfaction under tight deadlines.",
			image: experienceLogos.homeDepot,
			url: "https://www.homedepot.ca/en/home.html",
		},
		{
			company: "Sobeys",
			position: "Data Workflow Associate",
			startDate: "April 2023",
			endDate: "September 2024",
			location: "Waterloo, ON",
			content:
				"Optimized product placement and maintained inventory accuracy while providing responsive customer support in a fast-paced environment.",
			image: experienceLogos.sobeys,
			url: "https://www.sobeys.com/",
		},
		{
			company: "Social Venture Partners Teens",
			position: "Vice Chair of Engagement",
			startDate: "September 2019",
			endDate: "June 2022",
			location: "Waterloo, ON",
			content:
				"Contributed to raising nearly $4000 presented to the Bereaved Families of Ontario in 2021, and nearly $5000 to Martin Luther University College in 2022.",
			image: experienceLogos.svp,
			url: "https://www.svpwr.org/home/",
		},
	];

	return (
		<section id={"experience"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3}>
				<Typography variant={"h4"} color={"primary.main"}>
					Experience
				</Typography>
				<Grid container size={12}>
					{experiences.map((exp, idx: number) => (
						<Grid container key={`experience-${idx}`} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once={"true"}>
							<ExperienceInfoBlock experience={exp} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</section>
	);
};

export default ExperienceSection;
