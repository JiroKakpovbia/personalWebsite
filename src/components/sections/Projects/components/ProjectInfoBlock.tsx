import { Grid } from "@mui/material";
import { GithubRepo } from "../../../../types/";

interface ProjectInfoBlockProps {
	id: string;
	repo: GithubRepo;
}

const ProjectInfoBlock = ({ repo, id }: ProjectInfoBlockProps) => {
	return (
		<Grid container id={`${id}-container`} spacing={1} padding={3} className="project" alignContent={"flex-start"}>
			<Grid container size={12}>
				<h2>
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
						{repo.name}
					</a>
				</h2>
			</Grid>
			<Grid container size={12}>
				<p>
					<b>Description:</b> {repo.description || "No description available."}
				</p>
			</Grid>
			<Grid container size={12}>
				<p>
					<b>Language:</b> {repo.language || "N/A"}
				</p>
			</Grid>
		</Grid>
	);
};

export default ProjectInfoBlock;
