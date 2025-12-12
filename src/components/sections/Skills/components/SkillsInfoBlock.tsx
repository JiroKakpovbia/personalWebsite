import { Grid } from "@mui/material";
import { Skill } from "../../../../types";

interface SkillsInfoBlockProps {
	id: string;
	skills: Skill[];
}

const SkillsInfoBlock = ({ id, skills }: SkillsInfoBlockProps) => {
	const delay = 5;
	return (
		<Grid container size={12} id={`${id}-container`} spacing={6} padding={3} className="skills">
			{skills.map((skill, idx) => (
				<Grid container size={{ xs: 6, sm: 2, md: 0.8, lg: 0.8, xl: 0.8 }} flex={1} flexDirection={"column"}>
					<a
						key={skill.name}
						id={`${id}-${idx}`}
						href={skill.url}
						target="_blank"
						rel="noopener noreferrer"
						data-aos="fade-left"
						data-aos-delay={idx * delay}
						data-aos-once="true"
					>
						<img id={`${id}-logo`} alt={`${skill.name} Logo`} src={skill.logo} />
						<span id={`${id}-display-text`} className="display-text">
							{skill.name}
						</span>
					</a>
				</Grid>
			))}
		</Grid>
	);
};

export default SkillsInfoBlock;
