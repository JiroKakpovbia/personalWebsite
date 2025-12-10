import { Grid } from "@mui/material";
import { GithubRepo } from "../../../../types/Projects";

interface ProjectInfoBlockProps {
	repo: GithubRepo;
	id: string;
	index: number;
}

const ProjectInfoBlock = ({ repo, id, index }: ProjectInfoBlockProps) => {
	return (
		<Grid
			container
			id={`${id}-block`}
			className="project"
			data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
			data-aos-once="true"
			alignContent={"flex-start"}
		>
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
