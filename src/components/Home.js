import React from "react"
import "./Home.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import instagramImage from '../assets/imgs/instagram.png';
import xImage from '../assets/imgs/x.png';
import linkedinImage from '../assets/imgs/linkedin.png';
import githubImage from '../assets/imgs/github.png';


function Home() {
    return (
        <section id="home">
            {/* Animation */}
            <DotLottieReact className="background-animation"
                background="transparent"
                speed="1"
                data-aos="fade-in" data-aos-delay="2250" data-aos-once="true"
                src="https://lottie.host/a367f2aa-4068-44af-b626-4e55960578dc/Xla2bWkpIb.lottie"
                loop
                autoplay
            />

            {/* Text */}
            <div className="home">
                <p className="homeSubtitle" data-aos="fade-down" data-aos-delay="1000" data-aos-once="true">Hi, my name is</p>
                <h1 className="homeTitle" data-aos="fade-in" data-aos-delay="2000" data-aos-once="true">Jiro Kakpovbia</h1>
                <p className="homeSubtitle" data-aos="fade-up" data-aos-delay="1500" data-aos-once="true">Full-Stack Software Developer</p>

                {/* Social Media */}
                <div className="socials" data-aos="fade-up" data-aos-delay="2500" data-aos-once="true">
                        <a href="https://www.instagram.com/jiro.kakpovbia" target="_blank" rel="noopener noreferrer">
                            <img id="instagram" className="invert" alt="Visit my Instagram" src={instagramImage}/>
                        </a>
                        <a href="https://x.com/JiroKakpovbia" target= "_blank" rel="noopener noreferrer">
                            <img id="x" className="invert" alt="Visit my X (formerly Twitter)" src={xImage}/>
                        </a>
                        <a href="https://linkedin.com/in/jiro-kakpovbia" target="_blank" rel="noopener noreferrer">
                            <img id="linkedin" className="invert" alt="Visit my LinkedIn" src={linkedinImage}/>
                        </a>
                        <a href="https://github.com/JiroKakpovbia" target="_blank" rel="noopener noreferrer">
                            <img id="github" className="invert" alt="Visit my GitHub" src={githubImage}/>
                        </a>
                </div>
            </div>
        </section>
    )
}

export default Home;
