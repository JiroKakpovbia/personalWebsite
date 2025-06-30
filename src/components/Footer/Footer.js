import "./Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="footer">
			<div id="footer-container" className="footer">
				<br></br>
				<p className="footer">
					The source code for this website can be found on my{" "}
					<a
						href="https://github.com/JiroKakpovbia/personalWebsite"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					, so be sure to check it out!
				</p>
				<br></br>
				<p className="footer">
					Copyright &copy; {currentYear} Jiro Kakpovbia. All Rights
					Reserved.
				</p>
				<br></br>
			</div>
		</footer>
	);
}

export default Footer;
