import { Grid } from "@mui/material";
import ContactInfoBlock from "../Contact/components/ContactInfoBlock.tsx";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Contact } from "../../../types";

const HomeSection = () => {
	const socialMedias = [
		{ method: "Instagram", url: "https://www.instagram.com/jiro.kakpovbia", icon: "fa-brands fa-instagram" } as Contact,
		{ method: "X (formerly Twitter)", url: "https://x.com/JiroKakpovbia", icon: "fa-brands fa-x-twitter" } as Contact,
		{
			method: "LinkedIn",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: "fa-brands fa-linkedin-in mb-4",
		} as Contact,
		{ method: "Github", url: "https://github.com/JiroKakpovbia", icon: "fa-brands fa-github mb-4" } as Contact,
	];

	return (
		<section id={"home"}>
			<Grid container size={12}>
				{/* Animation */}
				<Grid size={12} className="background-animation">
					<DotLottieReact
						src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
						loop
						autoplay
						data-aos="fade-in"
						data-aos-once="true"
					/>
				</Grid>
				{/* Content */}
				<Grid container size={12} justifyContent={"center"}>
					{/* Text */}
					<Grid container size={12}>
						<Grid container size={12} justifyContent={"center"} data-aos="fade-down" data-aos-once="true">
							<p className="homeSubtitle">Hi, my name is</p>
						</Grid>
						<Grid container size={12} justifyContent={"center"} data-aos="fade-in" data-aos-once="true">
							<h1 className="homeTitle">Jiro Kakpovbia</h1>
						</Grid>
						<Grid container size={12} justifyContent={"center"} data-aos="fade-up" data-aos-once="true">
							<p className="homeSubtitle">Full-Stack Software Developer</p>
						</Grid>
					</Grid>

					{/* Social Media */}
					<Grid container size={{ xs: 8, sm: 6, md: 6, lg: 4, xl: 4 }} justifyContent={"center"} data-aos="fade-up" data-aos-once="true">
						<ContactInfoBlock contactMethods={socialMedias} sizing={3} />
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
};

export default HomeSection;
