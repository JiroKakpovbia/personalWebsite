import { Grid } from "@mui/material";
import "./Footer.css";

const FooterSection = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id={"footer"}>
			<Grid container size={12} justifyContent={"center"} spacing={3} padding={3} className="footer">
				<Grid container size={12} justifyContent={"center"}>
					<p>
						The source code for this website can be found on my{" "}
						<a href="https://github.com/JiroKakpovbia/personalWebsite" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						, so be sure to check it out!
					</p>
				</Grid>
				<Grid container size={12} justifyContent={"center"}>
					<p>Copyright &copy; {currentYear} Jiro Kakpovbia. All Rights Reserved.</p>
				</Grid>
			</Grid>
		</footer>
	);
};

export default FooterSection;
