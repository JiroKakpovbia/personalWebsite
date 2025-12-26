import { IconButton, IconButtonProps, SvgIconProps } from "@mui/material";

interface CustomIconButtonProps extends IconButtonProps {
	icon: React.ComponentType<SvgIconProps>;
}

const CustomIconButton = ({ icon: Icon, sx, ...iconButtonProps }: CustomIconButtonProps) => {
	return (
		<IconButton
			{...iconButtonProps}
			size={"large"}
			sx={{
				// boxShadow: 10,
				color: "text.primary",
				textTransform: "none",
				"&:hover": {
					transform: "scale(1.1)",
					color: "text.primary",
				},
			}}
		>
			<Icon fontSize={"large"} />
		</IconButton>
	);
};

export default CustomIconButton;
