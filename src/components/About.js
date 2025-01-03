import React from 'react'
import './About.css'

import headshotImage from '../assets/imgs/Headshot.jpg';
import resumePdf from '../assets/docs/Jiro Kakpovbia\'s Resume.pdf';

function About() {
    return (
        <section id="about">
            <h1>About Me</h1>
            <div id="about-container" className="about" data-aos="fade-up">
                <img id="headshot" alt="Headshot of Jiro Kakpovbia" src={headshotImage}></img>

                {/* Description */}
                <div className="text-content">
                    <p>
                        Hi! My name is Jiro Kakpovbia, and I'm a third-year Computer Science student at the University of Waterloo, graduating in Spring 2027.
                        At age 13, I independently developed a platformer video game in Python, which laid the foundation for my deep technical skills and passion for software development.
                        Since then, through my coursework and employment, I have honed my skills in various programming languages and development tools.
                        Outside of programming, I enjoy watching football, making music, and spending time with others.
                    </p>
                    <br></br>
                    <p>Please feel free to reach out — I'm always open to meeting new people!</p>
                    <br></br>

                    {/* Resume Button */}
                    <button className="button" onClick={() => window.open(resumePdf, '_blank')}>Resume</button>
                </div>
            </div>
        </section>
    )
}

export default About
