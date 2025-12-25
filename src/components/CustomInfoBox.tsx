import { Box, BoxProps } from "@mui/material";

interface CustomInfoBoxProps extends BoxProps {
	transparent?: boolean;
}

const CustomInfoBox = ({ transparent = false, children, ...boxProps }: CustomInfoBoxProps) => {
	return (
		<Box {...boxProps} bgcolor={!transparent ? "background.paper" : undefined} boxShadow={!transparent ? 10 : undefined} borderRadius={3}>
			{children}
		</Box>
	);
};

export default CustomInfoBox;
