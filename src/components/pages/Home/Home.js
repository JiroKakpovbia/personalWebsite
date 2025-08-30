import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
	return (
		<section id="home">
			{/* Animation */}
			<div className="background-animation" id="home-animation">
				<DotLottieReact
					src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
					loop
					autoplay
					data-aos="fade-in"
					data-aos-once="true"
				/>
			</div>

			{/* Content */}
			<div className="home" id="home-textContainer">
				<div id="home-textContainer">
					<div id="subtitle-1-container" data-aos="fade-down" data-aos-once="true">
						<p id="subtitle-1-content" className="homeSubtitle">
							Hi, my name is
						</p>
					</div>

					<div id="title-container" data-aos="fade-in" data-aos-once="true">
						<h1 id="title-content" className="homeTitle">
							Jiro Kakpovbia
						</h1>
					</div>
					<div id="subtitle-2-container" data-aos="fade-up" data-aos-once="true">
						<p id="subtitle-2-content" className="homeSubtitle">
							Full-Stack Software Developer
						</p>
					</div>
				</div>

				{/* Social Media */}
				<div className="socials" id="home-socialsContainer" data-aos="fade-up" data-aos-once="true">
					<p>
						<a aria-label="Visit my Instagram" href="https://www.instagram.com/jiro.kakpovbia" target="_blank" rel="noopener noreferrer">
							<i id="instagram" className="fa-brands fa-instagram" alt="Visit my Instagram">
								{" "}
							</i>
						</a>
					</p>
					<p>
						<a aria-label="Visit my X (formerly Twitter)" href="https://x.com/JiroKakpovbia" target="_blank" rel="noopener noreferrer">
							<i id="x/twitter" className="fa-brands fa-x-twitter" alt="Visit my X (formerly Twitter)"></i>
						</a>
					</p>
					<p>
						<a aria-label="Visit my LinkedIn" href="https://linkedin.com/in/jiro-kakpovbia" target="_blank" rel="noopener noreferrer">
							<i id="s-linkedin" className="fa-brands fa-linkedin-in" alt="Visit my LinkedIn"></i>
						</a>
					</p>
					<p>
						<a aria-label="Visit my GitHub" href="https://github.com/JiroKakpovbia" target="_blank" rel="noopener noreferrer">
							<i id="s-github" className="fa-brands fa-github" alt="Visit my GitHub"></i>
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Home;
