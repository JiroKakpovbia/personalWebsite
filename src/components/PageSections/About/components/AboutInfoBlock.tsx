import { Grid, Typography, useMediaQuery } from "@mui/material";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";
import CustomButton from "../../../CustomComponents/CustomButton.tsx";

interface AboutInfoBlockProps {
	headshot: string;
	resume: string;
	academicYear: string;
}

const AboutInfoBlock = ({ headshot, resume, academicYear }: AboutInfoBlockProps) => {
	const isMedium = useMediaQuery((theme) => theme.breakpoints.up("md"));
	return (
		<CustomInfoBox>
			<Grid container padding={3} spacing={3} justifyContent={"center"} alignItems={"center"}>
				{/* Image */}
				<Grid container size={{ xs: 9, sm: 6, md: 5, lg: 4, xl: 3 }}>
					<img
						alt={"Headshot of Jiro Kakpovbia"}
						src={headshot}
						loading={"lazy"}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					></img>
				</Grid>
				<Grid container size={{ xs: 12, sm: 12, md: 7, lg: 8, xl: 9 }} spacing={3}>
					{/* Paragraph 1 */}
					<Typography variant={"body1"}>
						Hey! My name is Jiro Kakpovbia, and I'm a {academicYear}. I'm a versatile developer with experience across front-end, back-end,
						full-stack, and AI projects. I've worked with technologies like C#, Python, React, Node.js, and Docker, and contributed to scalable
						enterprise applications, OCR-powered automation, and retail system integrations.
					</Typography>
					{/* Paragraph 2 */}
					<Typography variant={"body1"}>
						As a former student-athlete, I bring discipline, focus, and a team-first mindset to every challenge. Whether I'm optimizing data
						pipelines, refactoring legacy code, or experimenting with AI, I'm always driven by curiosity and a desire to create meaningful solutions.
						Let's connect — I'm always open to new ideas, collaborations, and conversations!
					</Typography>

					{/* Paragraph 3 */}
					<Typography variant={"body1"}>Please feel free to reach out — I'm always open to meeting new people!</Typography>

					{/* Resume Button */}
					<Grid container size={12} justifyContent={isMedium ? "flex-start" : "center"}>
						<CustomButton label={"Resume"} onClick={() => window.open(resume, "_blank")} />
					</Grid>
				</Grid>
			</Grid>
		</CustomInfoBox>
	);
};

export default AboutInfoBlock;
