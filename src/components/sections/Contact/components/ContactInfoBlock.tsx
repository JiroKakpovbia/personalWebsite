import { Grid } from "@mui/material";
import { Contact } from "../../../../types";

interface ContactInfoBlockProps {
	contactMethods: Contact[];
	sizing: number | { xs: number; sm: number; md: number; lg: number; xl: number };
}

const ContactInfoBlock = ({ contactMethods, sizing }: ContactInfoBlockProps) => {
	return (
		<Grid container size={12} spacing={6} padding={3} className={"contact"}>
			{contactMethods.map((contact, idx) => (
				<Grid container key={`contact-${idx}`} size={sizing} justifyContent={"center"} className={"icon-link"}>
					<a aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
						<Grid container spacing={1} justifyContent={"center"}>
							<Grid container size={12} justifyContent={"center"}>
								<contact.icon fontSize="large" />
							</Grid>
							{contact.label}
						</Grid>
					</a>
				</Grid>
			))}
		</Grid>
	);
};

export default ContactInfoBlock;
