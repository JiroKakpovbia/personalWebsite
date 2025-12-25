import { Grid, Link, Typography } from "@mui/material";
import { Contact } from "../../../../types";
import CustomInfoBox from "../../../CustomInfoBox.tsx";
import CustomIconButton from "../../../CustomIconButton.tsx";

interface ContactInfoBlockProps {
	contactMethods: Contact[];
	sizing: number | { xs: number; sm: number; md: number; lg: number; xl: number };
	background?: boolean;
}

const ContactInfoBlock = ({ contactMethods, sizing, background = true }: ContactInfoBlockProps) => {
	return (
		<CustomInfoBox transparent={!background}>
			<Grid container justifyContent={"space-between"} padding={3} spacing={3}>
				{contactMethods.map((contact, idx) => (
					<Grid container key={`contact-${idx}`} size={sizing} justifyContent={"center"}>
						<Link aria-label={`Visit my ${contact.method}`} href={contact.url} target="_blank" rel="noopener noreferrer">
							<Grid container spacing={1} justifyContent={"center"}>
								<CustomIconButton icon={contact.icon} />
								<Grid container size={12} justifyContent={"center"}>
									<Typography variant={"body1"}>{contact.label}</Typography>
								</Grid>
							</Grid>
						</Link>
					</Grid>
				))}
			</Grid>
		</CustomInfoBox>
	);
};

export default ContactInfoBlock;
