import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import { fetchProjects } from "../../../store/projectsSlice.tsx";
import { GitHubProject } from "../../../types/Projects";
import ProjectInfoBlock from "./components/ProjectInfoBlock.tsx";
import { Box, Grid, Typography } from "@mui/material";

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
				<Typography variant={"h4"} component={"h3"} color={"primary.main"}>
					Projects
				</Typography>
				{status === "loading" && (
					<Grid container size={12}>
						<Typography variant={"body1"}>Loading...</Typography>
					</Grid>
				)}
				{status === "failed" && (
					<Grid container size={12}>
						<Typography variant={"body1"}>Error: {error}</Typography>
					</Grid>
				)}
				<Box
					sx={{
						columnCount: { xs: 1, sm: 1, md: 2 },
						columnGap: 3,
						width: "100%",
					}}
				>
					{repos.map((repo, idx: number) => (
						<Box
							key={`project-${idx}`}
							sx={{
								display: "inline-block",
								width: "100%",
								mb: 3,
								breakInside: "avoid",
							}}
							data-aos={idx % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
							data-aos-once={"true"}
						>
							<ProjectInfoBlock repo={repo} />
						</Box>
					))}
				</Box>
			</Grid>
		</section>
	);
};

export default ProjectsSection;
