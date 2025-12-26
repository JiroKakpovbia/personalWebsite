import { Grid, Typography } from "@mui/material";
import { Contact } from "../../../../types";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";
import CustomIconButton from "../../../CustomComponents/CustomIconButton.tsx";

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
						<Grid container spacing={1} justifyContent={"center"}>
							<CustomIconButton
								icon={contact.icon}
								component={"a"}
								aria-label={`${contact.method} Profile`}
								href={contact.url}
								target={"_blank"}
								rel={"noopener noreferrer"}
							/>
							<Grid container size={12} justifyContent={"center"}>
								<Typography variant={"body1"}>{contact.label}</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</CustomInfoBox>
	);
};

export default ContactInfoBlock;
