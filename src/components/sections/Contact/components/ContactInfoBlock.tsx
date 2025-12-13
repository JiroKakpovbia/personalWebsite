import { Grid } from "@mui/material";
import { Contact } from "../../../../types";

interface ContactInfoBlockProps {
	id: string;
	contactMethods: Contact[];
	sizing: number | { xs: number; sm: number; md: number; lg: number; xl: number };
}

const ContactInfoBlock = ({ id, contactMethods, sizing }: ContactInfoBlockProps) => {
	return (
		<Grid container size={12} id={`${id}-container`} spacing={6} padding={3} className={"contact"}>
			{contactMethods.map((contact) => {
				return (
					<Grid container id={`${id}-${contact.method}`} size={sizing} justifyContent={"center"}>
						<p>
							<a aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
								<Grid container spacing={1}>
									<Grid container size={12} justifyContent={"center"}>
										<i id={`${id}-${contact.method}-icon`} className={contact.icon}></i>
									</Grid>
									<Grid container size={12} justifyContent={"center"}>
										<span id={`${id}-${contact.method}-label`}>{contact.label}</span>
									</Grid>
								</Grid>
							</a>
						</p>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ContactInfoBlock;
