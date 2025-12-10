import { Grid } from "@mui/material";

const ContactForm = () => {
	return (
		<Grid container size={12} flex={1} flexDirection={"column"}>
			<form className="contact-form" data-netlify="true">
				<input type="text" name="name" autoComplete="name" placeholder="Name*" required></input>
				<input type="email" name="email" autoComplete="email" placeholder="Email*" required></input>
				<textarea name="message" placeholder="Message*" required></textarea>
				<button type="submit" className="button">
					Submit Form
				</button>
			</form>
		</Grid>
	);
};

export default ContactForm;
