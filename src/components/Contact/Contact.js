import "./Contact.css";

function Contact() {
	return (
		<section id="contact">
			<h1>Contact</h1>
			<form className="contact-form" data-aos="fade-left" data-aos-delay="0" data-aos-once="true" data-netlify="true">
				<input type="text" name="name" autoComplete="name" placeholder="Name*" required></input>
				<input type="email" name="email" autoComplete="email" placeholder="Email*" required></input>
				<textarea name="message" placeholder="Message*" required></textarea>
				<button type="submit" className="button">
					Submit Form
				</button>
			</form>
			<br></br>
			<div id="contact-container" className="contact" data-aos="fade-right" data-aos-delay="0" data-aos-once="true">
				<div className="method">
					<p>
						<a
							aria-label="Call my Phone Number"
							href="tel:2268993921"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i id="phone" className="fa-solid fa-phone mb-4" alt="Call my Phone Number"></i>
							<span>(226) 899-3921</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							aria-label="Send me an Email"
							href="mailto:kakpovbia.jiro@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i id="email" className="fa-regular fa-envelope mb-4" alt="Send me an Email"></i>
							<span>kakpovbia.jiro@gmail.com</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							aria-label="Visit my LinkedIn"
							href="https://linkedin.com/in/jiro-kakpovbia"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i id="c-linkedin" className="fa-brands fa-linkedin-in mb-4" alt="Visit my LinkedIn"></i>
							<span>jiro-kakpovbia</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							aria-label="Visit my GitHub"
							href="https://github.com/JiroKakpovbia"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i id="c-github" className="fa-brands fa-github mb-4" alt="Visit my GitHub"></i>
							<span>JiroKakpovbia</span>
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
