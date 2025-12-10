import { Grid } from "@mui/material";
import { Experience } from "../../../../types/Experience";

interface ExperienceInfoBlockProps {
	id: string;
	experience: Experience;
	index: number;
}

const ExperienceInfoBlock = ({ id, experience, index }: ExperienceInfoBlockProps) => {
	return (
		<Grid container id={`${id}-container`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-once="true">
			<Grid container size={12} spacing={3} id={`${id}-content`} className="experience">
				<Grid container size={2}>
					<img alt={`${experience.company} Logo`} src={experience.image} />
				</Grid>
				<Grid container size={10} spacing={0}className="text-content">
					<h2 className="job-title">
						<span className="position">{experience.position}</span>
						<span className="dates">
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
						</span>
					</h2>
					<p className="location">
						{experience.company}, {experience.location}
					</p>
					<p dangerouslySetInnerHTML={{ __html: experience.content }}></p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ExperienceInfoBlock;
