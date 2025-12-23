import { Box, Grid, Typography } from "@mui/material";
import { GitHubProject } from "../../../../types/";

interface ProjectInfoBlockProps {
	repo: GitHubProject;
}

const ProjectInfoBlock = ({ repo }: ProjectInfoBlockProps) => {
	return (
		<Box bgcolor={"accent.main"}>
			<Grid container padding={3} spacing={1}>
				<Grid size={12}>
					<a href={repo.url} target="_blank" rel="noopener noreferrer">
						<Typography variant={"h5"}>{repo.name}</Typography>
					</a>
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
		</Box>
	);
};

export default ProjectInfoBlock;
