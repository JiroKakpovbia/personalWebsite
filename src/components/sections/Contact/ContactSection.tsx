import { Grid } from "@mui/material";
import ContactInfoBlock from "./components/ContactInfoBlock.tsx";
import "./Contact.css";
import ContactForm from "./components/ContactForm.tsx";

const ContactInfoSection = () => {
	const contactMethods = [
		{ method: "Phone Number", label: "(226) 899-3921", url: "tel:2268993921", icon: "fa-solid fa-phone mb-4" },
		{ method: "Email", label: "kakpovbia.jiro@gmail.com", url: "mailto:kakpovbia.jiro@gmail.com", icon: "fa-regular fa-envelope mb-4" },
		{
			method: "LinkedIn",
			label: "jiro-kakpovbia",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: "fa-brands fa-linkedin-in mb-4",
		},
		{ method: "Github", label: "JiroKakpovbia", url: "https://github.com/JiroKakpovbia", icon: "fa-brands fa-github mb-4" },
	];
	return (
		<section id="contact">
			<Grid container size={12} spacing={3}>
				<Grid container size={12} justifyContent={"center"}>
					<h1>Contact</h1>
				</Grid>
				<Grid container size={12} data-aos="fade-left" data-aos-once="true">
					<ContactForm />
				</Grid>
				<Grid container size={12} data-aos="fade-right" data-aos-once="true">
					<ContactInfoBlock id={"contact-info"} contactMethods={contactMethods} sizing={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}/>
				</Grid>
			</Grid>
		</section>
	);
};

export default ContactInfoSection;
