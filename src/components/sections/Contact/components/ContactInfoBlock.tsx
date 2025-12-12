import { Grid } from "@mui/material";
import { Contact } from "../../../../types";

interface ContactInfoBlockProps {
	id: string;
	contactMethods: Contact[];
}

const ContactInfoBlock = ({ id, contactMethods }: ContactInfoBlockProps) => {
	return (
		<Grid container size={12} id={`${id}-container`} spacing={6} padding={3} className={"contact"}>
			{contactMethods.map((contact) => {
				return (
					<Grid container id={`${id}-${contact.method}`} size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} justifyContent={"center"}>
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
