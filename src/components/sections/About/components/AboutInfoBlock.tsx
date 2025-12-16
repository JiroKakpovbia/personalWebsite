import { Grid } from "@mui/material";

interface AboutInfoBlockProps {
	headshot: string;
	resume: string;
	academicYear: string;
}

const AboutInfoBlock = ({ headshot, resume, academicYear }: AboutInfoBlockProps) => {
	return (
		<Grid container size={12} padding={3} spacing={3} className="about">
			{/* Image */}
			<Grid container size={{ xs: 9, sm: 6, md: 3, lg: 4, xl: 3 }} flex={1} flexDirection={"column"}>
				<img alt="Headshot of Jiro Kakpovbia" src={headshot}></img>
			</Grid>
			<Grid container size={{ xs: 12, sm: 12, md: 9, lg: 8, xl: 9 }} spacing={2} justifyContent={"center"}>
				{/* Paragraph 1 */}
				<Grid size={12}>
					<p>
						Hey! My name is Jiro Kakpovbia, and I'm a {academicYear}. I'm a versatile developer with experience across front-end, back-end,
						full-stack, and AI projects. I've worked with technologies like C#, Python, React, Node.js, and Docker, and contributed to scalable
						enterprise applications, OCR-powered automation, and retail system integrations.
					</p>
				</Grid>
				{/* Paragraph 2 */}
				<Grid size={12}>
					<p>
						As a former student-athlete, I bring discipline, focus, and a team-first mindset to every challenge. Whether I'm optimizing data
						pipelines, refactoring legacy code, or experimenting with AI, I'm always driven by curiosity and a desire to create meaningful solutions.
						Let's connect — I'm always open to new ideas, collaborations, and conversations!
					</p>
				</Grid>
				{/* Paragraph 3 */}
				<Grid size={12}>
					<p>Please feel free to reach out — I'm always open to meeting new people!</p>
				</Grid>
				{/* Resume Button */}
				<Grid size={12}>
					<button className="button" onClick={() => window.open(resume, "_blank")}>
						Resume
					</button>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AboutInfoBlock;
