import "./About.css"

import headshotImage from "../../assets/headshot.jpg";
import resumePdf from "../../assets/Jiro Kakpovbia's Resume.pdf";

const degreeStart = new Date("September 1, 2022 00:00:00");
const currentDate = new Date();
const diffInDays = (currentDate - degreeStart) / (1000*60*60*24);

var currentAcademicYear;

if (diffInDays < (1*365)) {
    currentAcademicYear = "first-year Computer Science (BCS) student at the University of Waterloo, graduating in Spring 2027";
} else if ((diffInDays >= (1*365)) && (diffInDays < (2*365))) {
    currentAcademicYear = "second-year Computer Science (BCS) student at the University of Waterloo, graduating in Spring 2027";
} else if ((diffInDays >= (2*365)) && (diffInDays < (3*365))) {
    currentAcademicYear = "third-year Computer Science (BCS) student at the University of Waterloo, graduating in Spring 2027";
} else if ((diffInDays >= (3*365)) && (diffInDays < (4*365))) {
    currentAcademicYear = "fourth-year Computer Science (BCS) student at the University of Waterloo, graduating in Spring 2027";
} else if ((diffInDays >= (4*365)) && (diffInDays < (5*365))) {
    currentAcademicYear = "fifth-year Computer Science (BCS) student at the University of Waterloo, graduating in Spring 2027";
} else {
    currentAcademicYear = "Computer Science (BCS) graduate from the University of Waterloo";
}

function About() {
    return (
        <section id="about">
            <h1>About Me</h1>
            <div id="about-container" className="about" data-aos="fade-up">
                <img id="headshot" alt="Headshot of Jiro Kakpovbia" src={headshotImage}></img>

                {/* Description */}
                <div className="text-content">
                    <p>
                        Hi! My name is Jiro Kakpovbia, and I'm a {currentAcademicYear}.
                        At age 13, I independently developed a platformer video game in Python, which laid the foundation for my deep technical skills and passion for software development.
                        Since then, through my coursework and employment, I have honed my skills in various programming languages and development tools.
                        Outside of programming, I enjoy watching football, working out, and making music.
                    </p>
                    <br></br>
                    <p>Please feel free to reach out — I'm always open to meeting new people!</p>
                    <br></br>

                    {/* Resume Button */}
                    <button className="button" onClick={() => window.open(resumePdf, "_blank")}>Resume</button>
                </div>
            </div>
        </section>
    )
}

export default About
