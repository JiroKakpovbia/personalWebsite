import { Grid } from "@mui/material";
import ContactInfoBlock from "../Contact/components/ContactInfoBlock.tsx";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HomeSection = () => {
	const socialMedias = [
		{ method: "Instagram", url: "https://www.instagram.com/jiro.kakpovbia", icon: "fa-brands fa-instagram" },
		{ method: "X (formerly Twitter)", url: "https://x.com/JiroKakpovbia", icon: "fa-brands fa-x-twitter" },
		{
			method: "LinkedIn",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: "fa-brands fa-linkedin-in mb-4",
		},
		{ method: "Github", url: "https://github.com/JiroKakpovbia", icon: "fa-brands fa-github mb-4" },
	];

	return (
		<section id="home">
			<Grid container size={12}>
				{/* Animation */}
				<Grid container size={12} className="background-animation" id="home-animation">
					<DotLottieReact
						src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
						loop
						autoplay
						data-aos="fade-in"
						data-aos-once="true"
					/>
				</Grid>

				{/* Content */}
				<Grid container size={12} spacing={3} justifyContent={"center"} id="home-content">
					{/* Text */}
					<Grid container size={12} id="home-textContainer">
						<Grid container size={12} justifyContent={"center"} id="subtitle-1-container" data-aos="fade-down" data-aos-once="true">
							<p id="subtitle-1-content" className="homeSubtitle">
								Hi, my name is
							</p>
						</Grid>
						<Grid container size={12} justifyContent={"center"} id="title-container" data-aos="fade-in" data-aos-once="true">
							<h1 id="title-content" className="homeTitle">
								Jiro Kakpovbia
							</h1>
						</Grid>
						<Grid container size={12} justifyContent={"center"} id="subtitle-2-container" data-aos="fade-up" data-aos-once="true">
							<p id="subtitle-2-content" className="homeSubtitle">
								Full-Stack Software Developer
							</p>
						</Grid>
					</Grid>

					{/* Social Media */}
					<Grid
						container
						size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 4 }}
						justifyContent={"center"}
						id={"social-media-container"}
						data-aos="fade-up"
						data-aos-once="true"
					>
						<ContactInfoBlock id={"social-media"} contactMethods={socialMedias} sizing={3} />
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
};

export default HomeSection;
