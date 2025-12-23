import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import { fetchProjects } from "../../../store/projectsSlice.tsx";
import { GitHubProject } from "../../../types/Projects";
import ProjectInfoBlock from "./components/ProjectInfoBlock.tsx";
import { Grid, Typography } from "@mui/material";
import "./Projects.css";

const ProjectsSection = () => {
	const dispatch = useAppDispatch();
	const url = `https://api.github.com/users/JiroKakpovbia/repos`;
	const { cache, status, error } = useAppSelector((state) => state.projects);
	const repos: GitHubProject[] = (cache[url] || []).filter((repo: GitHubProject) => repo.name !== "JiroKakpovbia");

	useEffect(() => {
		if (!cache[url]) {
			dispatch(fetchProjects(url));
		}
	}, [cache, url, dispatch]);

	return (
		<section id={"projects"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3}>
				<Typography variant={"h4"}>Projects</Typography>
				{status === "loading" && <Typography variant={"body1"}>Loading...</Typography>}
				{status === "failed" && <Typography variant={"body1"}>LError: {error}</Typography>}
				<Grid container size={12}>
					{repos.map((repo, idx: number) => (
						<Grid
							container
							key={`project-${idx}`}
							size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }}
							data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
							data-aos-once={"true"}
						>
							<ProjectInfoBlock key={`project-${idx}`} repo={repo} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</section>
	);
};

export default ProjectsSection;
