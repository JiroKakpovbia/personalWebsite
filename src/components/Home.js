import React from "react"
import "./Home.css"
import "@lottiefiles/dotlottie-react"


function Home() {
    return (
        <section id="home">
            {/* Animation */}
			<div className="background-animation" data-aos="fade-in" data-aos-delay="2250" data-aos-once="true">
				<dotlottie-player background="transparent" speed="1" src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie" loop autoplay></dotlottie-player>
			</div>

            {/* Text */}
            <div className="home">
                <p className="homeSubtitle" data-aos="fade-down" data-aos-delay="1000" data-aos-once="true">Hi, my name is</p>
                <h1 className="homeTitle" data-aos="fade-in" data-aos-delay="2000" data-aos-once="true">Jiro Kakpovbia</h1>
                <p className="homeSubtitle" data-aos="fade-up" data-aos-delay="1500" data-aos-once="true">Full-Stack Software Developer</p>

                {/* Social Media */}
                <div className="socials" data-aos="fade-up" data-aos-delay="2500" data-aos-once="true">
                        <p><a href="https://www.instagram.com/jiro.kakpovbia" target="_blank" rel="noopener noreferrer">
                            <i id="instagram" className="fa-brands fa-instagram" alt="Visit my Instagram"> </i>
                        </a></p>
                        <p><a href="https://x.com/JiroKakpovbia" target= "_blank" rel="noopener noreferrer">
                            <i id="x" className="fa-brands fa-x-twitter" alt="Visit my X (formerly Twitter)"></i>
                        </a></p>
                        <p><a href="https://linkedin.com/in/jiro-kakpovbia" target="_blank" rel="noopener noreferrer">
                            <i id="s-linkedin" className="fa-brands fa-linkedin-in" alt="Visit my LinkedIn"></i>
                        </a></p>
                        <p><a href="https://github.com/JiroKakpovbia" target="_blank" rel="noopener noreferrer">
                            <i id="s-github" className="fa-brands fa-github" alt="Visit my GitHub"></i>
                        </a></p>
                </div>
            </div>
        </section>
    )
}

export default Home;
