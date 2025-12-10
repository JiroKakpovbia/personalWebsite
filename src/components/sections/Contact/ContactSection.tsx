import { Grid } from "@mui/material";
import ContactInfoBlock from "./components/ContactInfoBlock.tsx";
import "./Contact.css";
import ContactForm from "./components/ContactForm.tsx";

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
			<Grid container size={12} spacing={2} justifyContent={"center"}>
				<Grid container size={12} justifyContent={"center"}>
					<h1>Contact</h1>
				</Grid>
				<Grid container size={12} justifyContent={"center"} id="form-container" data-aos="fade-left" data-aos-once="true">
					<ContactForm />
				</Grid>
				<Grid size={12} id="method-container" className={"contact"} data-aos="fade-right" data-aos-once="true">
					{contactMethods.map((contact) => {
						return (
							<Grid container size={{ sm: 12, md: 6, lg: 3 }} justifyContent={"center"}>
								<ContactInfoBlock id={contact.id} contact={contact} />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</section>
	);
};

export default ContactInfoSection;
