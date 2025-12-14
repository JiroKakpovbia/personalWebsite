import { Grid } from "@mui/material";
import { Skill } from "../../../../types";

interface SkillsInfoBlockProps {
	skills: Skill[];
}

const SkillsInfoBlock = ({ skills }: SkillsInfoBlockProps) => {
	const delay = 5;
	return (
		<Grid container size={12} spacing={3} padding={3} className="skills">
			{skills.map((skill, idx) => (
				<Grid
					key={`skill-${skill.name}`}
					size={{ xs: 3, sm: 2, md: 1.2, lg: 1, xl: 0.8 }}
					data-aos="fade-left"
					data-aos-delay={idx * delay}
					data-aos-once="true"
				>
					<a href={skill.url} target="_blank" rel="noopener noreferrer">
						<img alt={`${skill.name} Logo`} src={skill.logo} />
						<span className="display-text">{skill.name}</span>
					</a>
				</Grid>
			))}
		</Grid>
	);
};

export default SkillsInfoBlock;
