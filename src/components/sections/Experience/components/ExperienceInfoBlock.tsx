import { Grid, Link, Typography } from "@mui/material";
import { Experience } from "../../../../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";

interface ExperienceInfoBlockProps {
	experience: Experience;
}

const ExperienceInfoBlock = ({ experience }: ExperienceInfoBlockProps) => {
	const isLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	return (
		<CustomInfoBox>
			<Grid container size={12} justifyContent={"center"} alignItems={"center"} spacing={3} padding={3}>
				<Grid size={{ xs: 5, sm: 2, md: 2, lg: 1, xl: 1 }}>
					<Link href={experience.url} target="_blank" rel="noopener noreferrer">
						<img alt={`${experience.company} Logo`} src={experience.image} style={{ width: "100%" }} />
					</Link>
				</Grid>
				<Grid container size={{ xs: 12, sm: 10, md: 10, lg: 11, xl: 11 }} spacing={1}>
					<Grid container size={12} justifyContent={"space-between"} alignItems={"center"}>
						<Grid container size={{ sm: 12, lg: "auto" }}>
							<Typography variant={"h5"}>{experience.position}</Typography>
						</Grid>
						<Grid container size={{ sm: 12, lg: "auto" }}>
							<Typography variant={"h5"} fontWeight={"normal"}>
								{!isLarge &&
									`${experience.startDate.split(" ")[0].substring(0, 3)} ${experience.startDate.split(" ")[1]} — ${
										experience.endDate === "Present"
											? "Present"
											: experience.endDate.split(" ")[0].substring(0, 3) + " " + experience.endDate.split(" ")[1]
									}`}
								{isLarge && `${experience.startDate} — ${experience.endDate}`}
							</Typography>
						</Grid>
					</Grid>
					<Grid container size={12}>
						<Typography variant={"h6"} fontStyle={"italic"}>
							{experience.company}, {experience.location}
						</Typography>
					</Grid>
					<Grid container size={12}>
						<Typography variant={"body1"} dangerouslySetInnerHTML={{ __html: experience.content }}></Typography>
					</Grid>
				</Grid>
			</Grid>
		</CustomInfoBox>
	);
};

export default ExperienceInfoBlock;
