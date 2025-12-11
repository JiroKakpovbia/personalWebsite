import { Grid } from "@mui/material";
import { Contact } from "../../../../types/Contact";

interface ContactInfoBlockProps {
	id: string;
	contact: Contact;
}

const ContactInfoBlock = ({ id, contact }: ContactInfoBlockProps) => {
	return (
		<p>
			<a aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
				<Grid container>
					<Grid container size={12} justifyContent={"center"}>
						<i id={id} className={contact.icon}></i>
					</Grid>
					<Grid container size={12} justifyContent={"center"}>
						<span>{contact.label}</span>
					</Grid>
				</Grid>
			</a>
		</p>
	);
};

export default ContactInfoBlock;
