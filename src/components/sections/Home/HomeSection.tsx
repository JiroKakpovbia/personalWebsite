import { Grid, IconButton, Typography } from "@mui/material";
import ContactInfoBlock from "../Contact/components/ContactInfoBlock.tsx";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Contact } from "../../../types";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CustomInfoBox from "../../CustomInfoBox.tsx";

const HomeSection = () => {
	const socialMedias = [
		{ method: "Instagram", url: "https://www.instagram.com/jiro.kakpovbia", icon: InstagramIcon } as Contact,
		{ method: "X (formerly Twitter)", url: "https://x.com/JiroKakpovbia", icon: XIcon } as Contact,
		{
			method: "LinkedIn",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: LinkedInIcon,
		} as Contact,
		{ method: "Github", url: "https://github.com/JiroKakpovbia", icon: GitHubIcon } as Contact,
	];

	return (
		<section id={"home"}>
			<Grid container size={12} justifyContent={"space-between"} alignItems={"center"} padding={3} minHeight="100dvh">
				{/* Animation */}
				<Grid
					container
					sx={{
						position: "absolute",
						inset: 0,
						zIndex: 0,
						alignItems: "center",
						justifyContent: "center",
						pointerEvents: "none",
					}}
				>
					<CustomInfoBox
						transparent={true}
						sx={{
							width: {
								xs: "200%",
								sm: "80%",
								md: "60%",
								lg: "50%",
								xl: "40%",
							},
							aspectRatio: "1 / 1",
						}}
					>
						<DotLottieReact
							src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
							loop
							autoplay
							data-aos={"fade-in"}
							data-aos-once={"true"}
						/>
					</CustomInfoBox>
				</Grid>
				<Grid container size={12} justifyContent={"center"}>
					{/* Content */}
					<Grid container size={12} justifyContent={"center"} textAlign={"center"} spacing={3}>
						{/* Text */}
						<Grid size={12} data-aos={"fade-down"} data-aos-once={"true"}>
							<Typography variant={"h5"}>Hi, my name is</Typography>
						</Grid>
						<Grid size={12} data-aos={"fade-in"} data-aos-once={"true"}>
							<Typography variant={"h2"}>Jiro Kakpovbia</Typography>
						</Grid>
						<Grid size={12} data-aos={"fade-up"} data-aos-once={"true"}>
							<Typography variant={"h5"}>Full-Stack Software Developer</Typography>
						</Grid>
					</Grid>
					{/* Social Media */}
					<Grid container size={{ xs: 10, sm: 6, md: 4, lg: 3, xl: 2 }} justifyContent={"center"} data-aos={"fade-up"} data-aos-once={"true"}>
						<ContactInfoBlock contactMethods={socialMedias} sizing={3} background={false} />
					</Grid>
				</Grid>
			</Grid>

			{/* Advance Arrow */}
			{/* <Grid container size={12} justifyContent={"center"}>
				<IconButton className={"advance-arrow icon-link"}>
					<ExpandCircleDownIcon
						fontSize="large"
						onClick={() => (window.location.href = "#about")}
						data-aos={"fade-up"}
						data-aos-once={"true"}
						data-aos-delay={1000}
					/>
				</IconButton>
			</Grid> */}
		</section>
	);
};

export default HomeSection;
