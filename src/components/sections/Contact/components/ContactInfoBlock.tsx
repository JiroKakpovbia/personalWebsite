import { Grid } from "@mui/material";

interface ContactInfoBlockProps {
	id: string;
	method: string;
	label: string;
	url: string;
	icon: string;
}

const ContactInfoBlock = ({ id, method, label, url, icon }: ContactInfoBlockProps) => {
	return (
		<Grid container size={{ sm: 12, md: 6, lg: 3 }}>
			<p>
				<a aria-label={`Visit my ${method}`} href={url} target="_blank" rel="noopener noreferrer">
					<Grid container spacing={1}>
						<Grid container size={12} justifyContent={"center"}>
							<i id={id} className={icon}></i>
						</Grid>
						<Grid container size={12} justifyContent={"center"}>
							<span>{label}</span>
						</Grid>
					</Grid>
				</a>
			</p>
		</Grid>
	);
};

export default ContactInfoBlock;
