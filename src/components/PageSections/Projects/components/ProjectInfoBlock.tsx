import { Grid, Typography } from "@mui/material";
import { GitHubProject } from "../../../../types/";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";

interface ProjectInfoBlockProps {
	repo: GitHubProject;
}

const ProjectInfoBlock = ({ repo }: ProjectInfoBlockProps) => {
	return (
		<CustomInfoBox>
			<Grid container padding={3} spacing={1}>
				<Grid size={12}>
					<Typography variant={"h5"} color={"primary.main"} component={"a"} href={repo.url} target="_blank" rel="noopener noreferrer">
						{repo.name}
					</Typography>
				</Grid>
				<Grid size={12}>
					<Typography variant={"body1"}>
						<b>Description:</b> {repo.description || "No description available."}
					</Typography>
				</Grid>
				<Grid size={12}>
					<Typography variant={"body1"}>
						<b>Language:</b> {repo.language || "N/A"}
					</Typography>
				</Grid>
			</Grid>
		</CustomInfoBox>
	);
};

export default ProjectInfoBlock;
