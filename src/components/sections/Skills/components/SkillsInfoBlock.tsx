import { Grid, Link, Typography } from "@mui/material";
import { Skill } from "../../../../types";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";

interface SkillsInfoBlockProps {
	skills: Skill[];
}

const SkillsInfoBlock = ({ skills }: SkillsInfoBlockProps) => {
	return (
		<CustomInfoBox>
			<Grid container padding={3} spacing={3} justifyContent={"center"} alignItems={"center"}>
				{skills.map((skill, idx) => (
					<Grid key={`skill-${idx}`} size={{ xs: 2.2, sm: 1.4, md: 1, lg: 1, xl: 0.6 }}>
						<Link href={skill.url} target="_blank" rel="noopener noreferrer">
							<img alt={`${skill.name} Logo`} src={skill.logo} style={{ width: "100%" }} className="icon-link" />
							<CustomInfoBox className="tooltip">
								<Typography variant={"caption"}>{skill.name}</Typography>
							</CustomInfoBox>
						</Link>
					</Grid>
				))}
			</Grid>
		</CustomInfoBox>
	);
};

export default SkillsInfoBlock;
