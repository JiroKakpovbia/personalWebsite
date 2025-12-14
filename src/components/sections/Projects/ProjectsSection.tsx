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
			<Grid container size={12} spacing={3}>
				<Grid container size={12} justifyContent={"center"}>
					<h1>Projects</h1>
				</Grid>
				{status === "loading" && <p>Loading...</p>}
				{status === "failed" && <p>Error: {error}</p>}
				{repos.map((repo, idx: number) => (
					<Grid container key={`project-${idx}}`} size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 4 }} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="true">
						<ProjectInfoBlock key={repo.id} id={`project-${idx}`} repo={repo} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default ProjectsSection;
