import { Grid } from "@mui/material";
import { Experience } from "../../../../types";

interface ExperienceInfoBlockProps {
	id: string;
	experience: Experience;
}

const ExperienceInfoBlock = ({ id, experience }: ExperienceInfoBlockProps) => {
	return (
		<Grid container size={12} id={`${id}-container`} spacing={3} padding={3} className="experience">
			<Grid container size={{ xs: 5, sm: 2, md: 2, lg: 0.8, xl: 0.8 }} id={`${id}-logo`}>
				<img alt={`${experience.company} Logo`} src={experience.image} />
			</Grid>
			<Grid container size={{ xs: 12, sm: 10, md: 10, lg: 11, xl: 11.2 }} spacing={1} id={`${id}-content`}>
				<Grid container size={12} spacing={0}>
					<Grid container size={12} justifyContent={"space-between"} className="job-title">
						<h2 id={`${id}-position`} className="position">
							{experience.position}
						</h2>
						<h2 id={`${id}-dates`} className="dates">
							<span className="short">
								{`${experience.startDate.split(" ")[0].substring(0, 3)} ${experience.startDate.split(" ")[1]} — ${
									experience.endDate === "Present"
										? "Present"
										: experience.endDate.split(" ")[0].substring(0, 3) + " " + experience.endDate.split(" ")[1]
								}`}
							</span>
							<span className="full">
								{experience.startDate} — {experience.endDate}
							</span>
						</h2>
					</Grid>
					<Grid container size={12}>
						<p id={`${id}-location`} className="location">
							{experience.company}, {experience.location}
						</p>
					</Grid>
				</Grid>
				<Grid container size={12}>
					<p id={`${id}-tools`} dangerouslySetInnerHTML={{ __html: experience.content }}></p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ExperienceInfoBlock;
