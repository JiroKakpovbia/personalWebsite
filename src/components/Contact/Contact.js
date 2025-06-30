import "./Contact.css";

function Contact() {
	return (
		<section id="contact">
			<h1>Contact</h1>
			<form
				className="contact-form"
				data-aos="fade-left"
				data-netlify="true"
			>
				<input
					type="text"
					name="name"
					autoComplete="name"
					placeholder="Name*"
					required
				></input>
				<input
					type="email"
					name="email"
					autoComplete="email"
					placeholder="Email*"
					required
				></input>
				<textarea
					name="message"
					placeholder="Message*"
					required
				></textarea>
				<button type="submit" className="button">
					Submit Form
				</button>
			</form>
			<br></br>
			<div
				id="contact-container"
				className="contact"
				data-aos="fade-right"
			>
				<div className="method">
					<p>
						<a
							href="tel:2268993921"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i
								id="phone"
								className="fa-solid fa-phone mb-4"
								alt="Call my Phone Number"
							></i>
							<span>(226) 899-3921</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							href="mailto:kakpovbia.jiro@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i
								id="email"
								className="fa-regular fa-envelope mb-4"
								alt="Send me an Email"
							></i>
							<span>kakpovbia.jiro@gmail.com</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							href="https://linkedin.com/in/jiro-kakpovbia"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i
								id="c-linkedin"
								className="fa-brands fa-linkedin-in mb-4"
								alt="Visit my LinkedIn"
							></i>
							<span>jiro-kakpovbia</span>
						</a>
					</p>
				</div>
				<div className="method">
					<p>
						<a
							href="https://github.com/JiroKakpovbia"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center text-center"
						>
							<i
								id="c-github"
								className="fa-brands fa-github mb-4"
								alt="Visit my GitHub"
							></i>
							<span>JiroKakpovbia</span>
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
