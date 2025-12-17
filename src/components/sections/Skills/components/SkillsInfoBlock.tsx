import { Grid } from "@mui/material";
import { Skill } from "../../../../types";

interface SkillsInfoBlockProps {
	skills: Skill[];
}

const SkillsInfoBlock = ({ skills }: SkillsInfoBlockProps) => {
	return (
		<Grid container size={12} spacing={6} padding={3} className="skills" justifyContent={"flex-start"} alignItems={"center"}>
			{skills.map((skill, idx) => (
				<Grid key={`skill-${idx}`} size={{ xs: 6, sm: 2, md: 1.6, lg: 1.2, xl: 0.8 }}>
					<a href={skill.url} target="_blank" rel="noopener noreferrer">
						<img alt={`${skill.name} Logo`} src={skill.logo} className="icon-link" />
						<span className="tooltip">{skill.name}</span>
					</a>
				</Grid>
			))}
		</Grid>
	);
};

export default SkillsInfoBlock;
