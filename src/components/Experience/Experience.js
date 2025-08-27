import "./Experience.css";

import equitableImage from "../../assets/equitable.png";
import prsImage from "../../assets/wprint.png";
import warriorsImage from "../../assets/waterloowarriors.png";
import svpImage from "../../assets/svpteens.png";

function Experience() {
	return (
		<section id="experience">
			<h1>Experience</h1>
			<div id="experience5-container" className="experience" data-aos="fade-right">
				<img id="equitable" alt="The Equitable Life Insurance Company of Canada Logo" src={equitableImage}></img>
				<div className="text-content">
					<h2 className="job-title">
						<span className="position">Junior Software Developer</span>
						<span className="dates">
							<span className="short">May 2025 — Present</span>
							<span className="full">May 2025 — Present</span>
						</span>
					</h2>
					<p className="location">The Equitable Life Insurance Company of Canada, Waterloo, ON</p>
					<p>
						<b>Languages and Tools:</b> React, TypeScript, C#, SQL, .NET, Azure, Jest, xUnit.
					</p>
				</div>
			</div>
			<br></br>
			<div id="experience4-container" className="experience" data-aos="fade-left">
				<img id="prs2" alt="University of Waterloo's Print + Retail Solutions Logo" src={prsImage}></img>
				<div className="text-content">
					<h2 className="job-title">
						<span className="position">Back-End Software Engineer</span>
						<span className="dates">
							<span className="short">Sep 2024 — Dec 2024</span>
							<span className="full">September 2024 — December 2024</span>
						</span>
					</h2>
					<p className="location">University of Waterloo's Print + Retail Solutions, Waterloo, ON</p>
					<p>
						<b>Languages and Tools:</b> UniVerse BASIC, PHP, HTML, Javascript, Node.js, Docker, MySQL.
					</p>
				</div>
			</div>
			<br></br>
			<div id="experience3-container" className="experience" data-aos="fade-right">
				<img id="prs1" alt="University of Waterloo's Print + Retail Solutions Logo" src={prsImage}></img>
				<div className="text-content">
					<h2 className="job-title">
						<span className="position">Front-End Web Developer</span>
						<span className="dates">
							<span className="short">Jan 2024 — Apr 2024</span>
							<span className="full">January 2024 — April 2024</span>
						</span>
					</h2>
					<p className="location">University of Waterloo's Print + Retail Solutions, Waterloo, ON</p>
					<p>
						<b>Languages and Tools:</b> BASIC, PHP, HTML, Javascript, SQL.
					</p>
				</div>
			</div>
			{/* <br></br>
            <div className="experience" data-aos="fade-left">
                <img id="homedepot" alt="Home Depot Logo" src="./../assets/homedepot.png"/>
                <div className="text-content">
                    <h2 className="job-title">
                        <span className="position">Order Picker, Part-Time</span>
                        <span className="dates">
                            <span className="short">Jul 2023 — Oct 2023</span>
                            <span className="full">July 2023 — October 2023</span>
                        </span>
                    </h2>
                    <p className="location">Home Depot, Waterloo, ON</p>
                    <p>Gathered merchandise throughout the store, filled orders promptly, and carefully packed orders ensuring products remained undamaged.</p>
                </div>
            </div>
            <br></br>
            <div className="experience" data-aos="fade-right">
                <img id="sobeys" alt="Sobeys Logo" src="./../assets/sobeys.png"/>
                <div className="text-content">
                    <h2 className="job-title">
                        <span className="position">Grocery Clerk, Part-Time</span>
                        <span className="dates">
                            <span className="short">Apr 2023 — Sep 2024</span>
                            <span className="full">April 2023 — September 2024</span>
                        </span>
                    </h2>
                    <p className="location">Sobeys, Waterloo, ON</p>
                    <p>Efficiently and effectively organized shelf products while maintaining displays within the store.</p>
                </div>
            </div> */}
			<br></br>
			<div id="experience2-container" className="experience" data-aos="fade-left">
				<img id="warriors" alt="Waterloo Warriors Logo" src={warriorsImage}></img>
				<div className="text-content">
					<h2 className="job-title">
						<span className="position">Varsity Athlete</span>
						<span className="dates">
							<span className="short">Aug 2022 — Aug 2024</span>
							<span className="full">August 2022 — August 2024</span>
						</span>
					</h2>
					<p className="location">University of Waterloo Varsity Football, Waterloo, ON</p>
					<p>Received University of Waterloo Varsity Football Athletic Scholarship.</p>
				</div>
			</div>
			<br></br>
			<div id="experience1-container" className="experience" data-aos="fade-right">
				<img id="svpteens" alt="Social Venture Partners Teens Logo" src={svpImage}></img>
				<div className="text-content">
					<h2 className="job-title">
						<span className="position">Vice Chair of Engagement</span>
						<span className="dates">
							<span className="short">Sep 2019 — Jun 2022</span>
							<span className="full">September 2019 — June 2022</span>
						</span>
					</h2>
					<p className="location">Social Venture Partners Teens, Waterloo, ON</p>
					<p>
						Contributed to raising nearly $4000 presented to the Bereaved Families of Ontario in 2021, and nearly $5000 to Martin Luther
						University College in 2022.
					</p>
				</div>
			</div>
			<br></br>
		</section>
	);
}

export default Experience;
