import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ContactForm = () => {
	return (
		<Box component={"form"} bgcolor={"accent.main"} sx={{ "data-netlify": "true" }}>
			<Grid container size={12} spacing={3} padding={3}>
				<TextField required fullWidth variant={"outlined"} label={"Name"} autoComplete={"name"} />
				<TextField required fullWidth variant={"outlined"} label={"Email"} autoComplete={"email"} />
				<TextField required fullWidth multiline rows={6} variant={"outlined"} label={"Message"} />
				<Button fullWidth variant="contained" color={"primary"} onClick={() => {}}>
					<Typography variant="button" color={"text"} sx={{ type: "Submit" }}>
						Submit Form
					</Typography>
				</Button>
			</Grid>
		</Box>
	);
};

export default ContactForm;
