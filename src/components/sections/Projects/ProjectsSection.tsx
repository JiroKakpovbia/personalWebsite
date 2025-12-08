import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks.ts";
import { fetchProjects } from "../../../store/projectsSlice.tsx";
import "./Projects.css";

interface GithubRepo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	language: string | null;
}

export const ProjectsSection = () => {
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
			<div id="projects-container">
				{repos.map((repo, idx: number) => (
					<div key={repo.id} id={`projects-${idx}-container`} data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="true">
						<div id={`project-${idx}`} className="project">
							<h2>
								<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
									{repo.name}
								</a>
							</h2>
							<p>
								<b>Description:</b> {repo.description || "No description available."}
							</p>
							<p>
								<b>Language:</b> {repo.language || "N/A"}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
