import { Grid } from "@mui/material";
import "./Footer.css";

const FooterSection = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="footer">
			<Grid container size={12} id="footer-container" className="footer" justifyContent={"center"} padding={3} spacing={3}>
				<p className="footer">
					The source code for this website can be found on my{" "}
					<a href="https://github.com/JiroKakpovbia/personalWebsite" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					, so be sure to check it out!
				</p>
				<p className="footer">Copyright &copy; {currentYear} Jiro Kakpovbia. All Rights Reserved.</p>
			</Grid>
		</footer>
	);
};

export default FooterSection;
