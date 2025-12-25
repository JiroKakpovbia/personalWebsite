import { Grid, TextField } from "@mui/material";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";
import CustomButton from "../../../CustomComponents/CustomButton.tsx";

const ContactForm = () => {
	return (
		<CustomInfoBox component={"form"} sx={{ "data-netlify": "true" }}>
			<Grid container size={12} spacing={3} padding={3}>
				<TextField required fullWidth variant={"outlined"} label={"Name"} autoComplete={"name"} />
				<TextField required fullWidth variant={"outlined"} label={"Email"} autoComplete={"email"} />
				<TextField required fullWidth multiline rows={6} variant={"outlined"} label={"Message"} />
				<CustomButton fullWidth label={"Submit Form"} onClick={() => {}} sx={{ type: "Submit" }} />
			</Grid>
		</CustomInfoBox>
	);
};

export default ContactForm;
