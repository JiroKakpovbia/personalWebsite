import { Grid } from "@mui/material";
import ContactInfoBlock from "../Contact/components/ContactInfoBlock.tsx";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Contact } from "../../../types";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

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
			<Grid container size={12} justifyContent={"center"} padding={3}>
				{/* Animation */}
				<Grid size={{ xs: 12, sm: 10, md: 10, lg: 9, xl: 6 }} className="background-animation">
					<DotLottieReact
						src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
						loop
						autoplay
						data-aos={"fade-in"}
						data-aos-once={"true"}
					/>
				</Grid>
				{/* Content */}
				<Grid container size={12} justifyContent={"center"}>
					{/* Text */}
					<Grid container size={12}>
						<Grid container size={12} justifyContent={"center"} data-aos={"fade-down"} data-aos-once={"true"}>
							<p className="homeSubtitle">Hi, my name is</p>
						</Grid>
						<Grid container size={12} justifyContent={"center"} data-aos={"fade-in"} data-aos-once={"true"}>
							<h1 className="homeTitle">Jiro Kakpovbia</h1>
						</Grid>
						<Grid container size={12} justifyContent={"center"} data-aos={"fade-up"} data-aos-once={"true"}>
							<p className="homeSubtitle">Full-Stack Software Developer</p>
						</Grid>
					</Grid>

					{/* Social Media */}
					<Grid container size={{ xs: 10, sm: 6, md: 4, lg: 3, xl: 2 }} justifyContent={"center"} data-aos={"fade-up"} data-aos-once={"true"}>
						<ContactInfoBlock contactMethods={socialMedias} sizing={3} />
					</Grid>
				</Grid>

				{/* Advance Arrow */}
				<Grid container size={12} className={"advance-arrow icon-link"} justifyContent={"center"}>
					<ExpandCircleDownIcon
						fontSize="large"
						onClick={() => (window.location.href = "#about")}
						data-aos={"fade-up"}
						data-aos-once={"true"}
						data-aos-delay={1000}
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default HomeSection;
