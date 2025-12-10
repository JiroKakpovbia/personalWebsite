import { Grid } from "@mui/material";
import { Contact } from "../../../../types/Contact";

interface ContactInfoBlockProps {
	id: string;
	contact: Contact;
}

const ContactInfoBlock = ({ id, contact }: ContactInfoBlockProps) => {
	return (
		<Grid container size={{ sm: 12, md: 6, lg: 3 }}>
			<p>
				<a aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
					<Grid container spacing={1}>
						<Grid container size={12} justifyContent={"center"}>
							<i id={id} className={contact.icon}></i>
						</Grid>
						<Grid container size={12} justifyContent={"center"}>
							<span>{contact.label}</span>
						</Grid>
					</Grid>
				</a>
			</p>
		</Grid>
	);
};

export default ContactInfoBlock;
