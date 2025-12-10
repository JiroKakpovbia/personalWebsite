import ContactInfoBlock from "./components/ContactInfoBlock.tsx";
import "./Contact.css";

const ContactInfoSection = () => {
	const contactMethods = [
		{ id: "phone", method: "Phone Number", label: "(226) 899-3921", url: "tel:2268993921", icon: "fa-solid fa-phone mb-4" },
		{ id: "email", method: "Email", label: "kakpovbia.jiro@gmail.com", url: "mailto:kakpovbia.jiro@gmail.com", icon: "fa-regular fa-envelope mb-4" },
		{
			id: "c-linkedin",
			method: "LinkedIn",
			label: "jiro-kakpovbia",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: "fa-brands fa-linkedin-in mb-4",
		},
		{ id: "c-github", method: "Github", label: "JiroKakpovbia", url: "https://github.com/JiroKakpovbia", icon: "fa-brands fa-github mb-4" },
	];
	return (
		<section id="contact">
			<h1>Contact</h1>
			<div id="form-container" data-aos="fade-left" data-aos-once="true">
				<form className="contact-form" data-netlify="true">
					<input type="text" name="name" autoComplete="name" placeholder="Name*" required></input>
					<input type="email" name="email" autoComplete="email" placeholder="Email*" required></input>
					<textarea name="message" placeholder="Message*" required></textarea>
					<button type="submit" className="button">
						Submit Form
					</button>
				</form>
			</div>
			<br></br>
			<div id="method-container" data-aos="fade-right" data-aos-once="true">
				<div id="method-content" className="contact">
					{contactMethods.map((contact) => {
						return <ContactInfoBlock id={contact.id} contact={contact} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default ContactInfoSection;
