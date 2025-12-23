import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Contact } from "../../../../types";

interface ContactInfoBlockProps {
	contactMethods: Contact[];
	sizing: number | { xs: number; sm: number; md: number; lg: number; xl: number };
}

const ContactInfoBlock = ({ contactMethods, sizing }: ContactInfoBlockProps) => {
	return (
		<Box bgcolor={"accent.main"}>
			<Grid container padding={3} spacing={3}>
				{contactMethods.map((contact, idx) => (
					<Grid container key={`contact-${idx}`} size={sizing} justifyContent={"center"}>
						<a aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
							<Grid container spacing={1} justifyContent={"center"}>
								<IconButton color={"text"}>
									<contact.icon fontSize="large" className={"icon-link"} />
								</IconButton>
								<Grid container size={12} justifyContent={"center"}>
									<Typography variant={"body1"}>{contact.label}</Typography>
								</Grid>
							</Grid>
						</a>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ContactInfoBlock;
