import { Grid, Link, Tooltip } from "@mui/material";
import { Skill } from "../../../../types";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";

interface SkillsInfoBlockProps {
	skills: Skill[];
}

const SkillsInfoBlock = ({ skills }: SkillsInfoBlockProps) => {
	return (
		<CustomInfoBox>
			<Grid container padding={3} spacing={6} alignItems={"center"}>
				{skills.map((skill, idx) => (
					<Grid key={`skill-${idx}`} size={{ xs: 3, sm: 1.5, md: 1.2, lg: 1, xl: 0.8 }}>
						<Tooltip
							arrow
							title={skill.name}
							slotProps={{
								tooltip: {
									sx: {
										backgroundColor: "background.default",
										color: "text.primary",
										fontSize: "1rem",
										borderRadius: 1,
										boxShadow: 10,
									},
								},
								arrow: {
									sx: {
										color: "background.default",
									},
								},
							}}
						>
							<Link href={skill.url} target={"_blank"} rel={"noopener noreferrer"}>
								<img alt={`${skill.name} Logo`} src={skill.logo} loading={"lazy"} style={{ width: "100%" }} />
							</Link>
						</Tooltip>
					</Grid>
				))}
			</Grid>
		</CustomInfoBox>
	);
};

export default SkillsInfoBlock;
