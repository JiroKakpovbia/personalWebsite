import { Grid } from "@mui/material";
import { GitHubProject } from "../../../../types/";

interface ProjectInfoBlockProps {
	repo: GitHubProject;
}

const ProjectInfoBlock = ({ repo }: ProjectInfoBlockProps) => {
	return (
		<Grid container spacing={1} padding={3} className="project" alignContent={"flex-start"}>
			<Grid size={12}>
				<h2>
					<a href={repo.url} target="_blank" rel="noopener noreferrer">
						{repo.name}
					</a>
				</h2>
			</Grid>
			<Grid size={12}>
				<p>
					<b>Description:</b> {repo.description || "No description available."}
				</p>
			</Grid>
			<Grid size={12}>
				<p>
					<b>Language:</b> {repo.language || "N/A"}
				</p>
			</Grid>
		</Grid>
	);
};

export default ProjectInfoBlock;
