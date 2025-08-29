import { useState, useEffect } from "react";
import "./Projects.css";

function Projects() {
	const [repos, setRepos] = useState([]);

	// Fetch GitHub Projects
	const fetchGitHubProjects = async () => {
		const url = `https://api.github.com/users/JiroKakpovbia/repos`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch repositories: ${response.status}`);
			}

			const reposData = await response.json();
			setRepos(reposData.filter((repo) => repo.name !== "JiroKakpovbia")); // filter out the README repo
		} catch (error) {
			console.error("Error fetching GitHub repositories:", error);
		}
	};

	useEffect(() => {
		fetchGitHubProjects();
	}, []);

	return (
		<section id="projects">
			<h1>Projects</h1>
			<div id="projects-container">
				{repos.map((repo, index) => (
					<div key={repo.id} className="project" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="true">
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
				))}
			</div>
		</section>
	);
}

export default Projects;
