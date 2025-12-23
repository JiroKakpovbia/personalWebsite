import { Box, Grid, Typography } from "@mui/material";
import { Skill } from "../../../../types";

interface SkillsInfoBlockProps {
	skills: Skill[];
}

const SkillsInfoBlock = ({ skills }: SkillsInfoBlockProps) => {
	return (
		<Box bgcolor={"accent.main"}>
			<Grid container padding={3} spacing={3} justifyContent={"center"} alignItems={"center"}>
				{skills.map((skill, idx) => (
					<Grid key={`skill-${idx}`} size={{ xs: 4, sm: 2, md: 1.6, lg: 1.2, xl: 0.8 }}>
						<a href={skill.url} target="_blank" rel="noopener noreferrer">
							<img alt={`${skill.name} Logo`} src={skill.logo} className="icon-link" />
							<span className="tooltip">
								<Typography variant={"body1"}>{skill.name}</Typography>
							</span>
						</a>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default SkillsInfoBlock;
