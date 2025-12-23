import { Grid, Typography } from "@mui/material";
import ContactInfoBlock from "./components/ContactInfoBlock.tsx";
import "./Contact.css";
import ContactForm from "./components/ContactForm.tsx";
import { Contact } from "../../../types";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactInfoSection = () => {
	const contactMethods = [
		{ method: "Phone Number", label: "(226) 899-3921", url: "tel:2268993921", icon: PhoneIcon } as Contact,
		{ method: "Email", label: "kakpovbia.jiro@gmail.com", url: "mailto:kakpovbia.jiro@gmail.com", icon: EmailIcon } as Contact,
		{
			method: "LinkedIn",
			label: "jiro-kakpovbia",
			url: "https://linkedin.com/in/jiro-kakpovbia",
			icon: LinkedInIcon,
		} as Contact,
		{ method: "Github", label: "JiroKakpovbia", url: "https://github.com/JiroKakpovbia", icon: GitHubIcon } as Contact,
	];
	return (
		<section id={"contact"}>
			<Grid container size={12} spacing={3} padding={3}>
				<Grid container size={12} justifyContent={"center"}>
					<Typography variant={"h4"}>Contact</Typography>
				</Grid>
				<Grid container size={12} data-aos={"zoom-out"} data-aos-once={"true"}>
					<ContactForm />
				</Grid>
				<Grid container size={12} justifyContent={"center"} data-aos={"zoom-out"} data-aos-once={"true"}>
					<ContactInfoBlock contactMethods={contactMethods} sizing={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} />
				</Grid>
			</Grid>
		</section>
	);
};

export default ContactInfoSection;
