import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../../store/projectsSlice";
import "./Projects.css";

function Projects() {
	const dispatch = useDispatch();
	const url = `https://api.github.com/users/JiroKakpovbia/repos`;
	const { cache, status, error } = useSelector((state) => state.projects);
	const repos = (cache[url] || []).filter((repo) => repo.name !== "JiroKakpovbia");

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
				{repos.map((repo, idx) => (
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
}

export default Projects;
