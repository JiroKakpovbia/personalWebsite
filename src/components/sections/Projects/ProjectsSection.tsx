import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import { fetchProjects } from "../../../store/projectsSlice.tsx";
import { GithubRepo } from "../../../types/Projects";
import ProjectInfoBlock from "./components/ProjectInfoBlock.tsx";
import { Grid } from "@mui/material";
import "./Projects.css";

const ProjectsSection = () => {
	const dispatch = useAppDispatch();
	const url = `https://api.github.com/users/JiroKakpovbia/repos`;
	const { cache, status, error } = useAppSelector((state) => state.projects);
	const repos: GithubRepo[] = (cache[url] || []).filter((repo: GithubRepo) => repo.name !== "JiroKakpovbia");

	useEffect(() => {
		if (!cache[url]) {
			dispatch(fetchProjects(url));
		}
	}, [cache, url, dispatch]);

	return (
		<section id="projects">
			<h1>Projects</h1>
			{status === "loading" && <p>Loading...</p>}
			{status === "failed" && <p>Error: {error}</p>}
			<Grid container id="projects-container" size={12} spacing={3}>
				{repos.map((repo, idx: number) => (
					<Grid container size={{ sm: 12, md: 6, lg: 6 }}>
						<ProjectInfoBlock key={repo.id} repo={repo} id={`project-${idx}`} index={idx} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ProjectsSection;
