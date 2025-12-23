import { Box, Grid, Typography } from "@mui/material";
import { Experience } from "../../../../types";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ExperienceInfoBlockProps {
	experience: Experience;
}

const ExperienceInfoBlock = ({ experience }: ExperienceInfoBlockProps) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.up("sm"));
	return (
		<Box bgcolor={"accent.main"}>
			<Grid
				container
				size={12}
				justifyContent={"center"}
				alignItems={"center"}
				spacing={3}
				padding={3}
				flex={1}
				flexDirection={isSmall ? "row" : "column"}
			>
				<Grid size={{ xs: 6, sm: 3, md: 2, lg: 2, xl: 1 }}>
					<img alt={`${experience.company} Logo`} src={experience.image} />
				</Grid>
				<Grid container size={{ xs: 12, sm: 12, md: 10, lg: 10, xl: 11 }} spacing={1}>
					<Grid container size={12} justifyContent={"space-between"} className="job-title">
						<Typography variant={"h5"}>{experience.position}</Typography>
						<Typography variant={"h5"} className="dates">
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
						</Typography>
					</Grid>
					<Typography variant={"h6"} className="location">
						{experience.company}, {experience.location}
					</Typography>
					<Typography variant={"body1"} dangerouslySetInnerHTML={{ __html: experience.content }}></Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ExperienceInfoBlock;
