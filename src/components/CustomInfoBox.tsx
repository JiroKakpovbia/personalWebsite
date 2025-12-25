import { Box, BoxProps } from "@mui/material";

interface CustomInfoBoxProps extends BoxProps {
	transparent?: boolean;
}

const CustomInfoBox = ({ transparent = false, children, ...boxProps }: CustomInfoBoxProps) => {
	return (
		<Box bgcolor={!transparent ? "background.paper" : undefined} borderRadius={3} {...boxProps}>
			{children}
		</Box>
	);
};

export default CustomInfoBox;
