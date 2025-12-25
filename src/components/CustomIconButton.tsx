import { IconButton, IconButtonProps, SvgIconProps } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
	icon: React.ComponentType<SvgIconProps>;
}

const CustomIconButton = ({ icon: Icon, sx, ...iconButtonProps }: CustomIconButtonProps) => {
	return (
		<IconButton
			{...iconButtonProps}
			color={"text.primary"}
			size={"large"}
			sx={{
				// boxShadow: 10,
				textTransform: "none",
				"&:hover": {
					transform: "scale(1.1)",
				},
			}}
		>
			<Icon fontSize={"large"} />
		</IconButton>
	);
};

export default CustomIconButton;
