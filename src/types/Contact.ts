import { SvgIconProps } from "@mui/material";

export interface Contact {
	method: string;
	label?: string;
	url: string;
	icon: React.ComponentType<SvgIconProps>;
}
