import { Button, ButtonProps, Typography } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
	label: string;
}

const CustomButton = ({ label, ...buttonProps }: CustomButtonProps) => {
	return (
		<Button
			{...buttonProps}
			variant={"contained"}
			color={"primary"}
			size={"large"}
			sx={{
				borderRadius: 1,
				boxShadow: 10,
				textTransform: "none",
			}}
		>
			<Typography variant={"button"} color={"text.primary"}>
				{label}
			</Typography>
		</Button>
	);
};

export default CustomButton;
