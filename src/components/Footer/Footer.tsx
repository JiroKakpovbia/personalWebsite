import { Grid, Typography } from "@mui/material";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id={"footer"}>
			<Grid
				container
				size={12}
				justifyContent={"center"}
				textAlign={"center"}
				spacing={3}
				padding={3}
				sx={{ backgroundColor: "background.paper" }}
				width={"100dvw"}
			>
				<Grid container size={12} justifyContent={"center"}>
					<Typography variant={"body1"}>
						The source code for this website can be found on my{" "}
						<a href="https://github.com/JiroKakpovbia/personalWebsite" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						, so be sure to check it out!
					</Typography>
				</Grid>
				<Grid container size={12} justifyContent={"center"}>
					<Typography variant={"body1"}>Copyright &copy; {currentYear} Jiro Kakpovbia. All Rights Reserved.</Typography>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
