import { Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Typography } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIconButton from "../../CustomComponents/CustomIconButton.tsx";
import { useState } from "react";
import { Section } from "../../../types/";

interface MobileNavigationProps {
	sections: Section[];
	theme: any;
	toggleTheme: () => void;
}

const MobileNavigation = ({ sections, theme, toggleTheme }: MobileNavigationProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const menuOpen = Boolean(anchorEl);

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};
	return (
		<Grid container>
			{/* Theme Toggle */}
			<CustomIconButton icon={theme === "light" ? LightModeIcon : NightlightRoundIcon} aria-label="theme-toggle" onClick={toggleTheme} />
			{/* Menu Icon */}
			<CustomIconButton icon={MenuIcon} aria-label="Navigation" onClick={handleOpenMenu} />
			{/* Page Links */}
			<SwipeableDrawer
				anchor="right"
				open={menuOpen}
				onOpen={handleOpenMenu}
				onClose={handleCloseMenu}
				slotProps={{
					paper: {
						sx: {
							width: 250,
						},
					},
				}}
			>
				<List>
					{sections.map((section, idx) => (
						<>
							<ListItem disablePadding key={section.title}>
								<ListItemButton component="a" href={`#${section.title.toLowerCase()}`} onClick={handleCloseMenu}>
									<ListItemIcon>
										<section.icon />
									</ListItemIcon>
									<ListItemText primary={section.title} slotProps={{ primary: { variant: "h6" } }} />
								</ListItemButton>
							</ListItem>
							{idx < sections.length - 1 && <Divider component="li" sx={{ opacity: 0.6 }} />}
						</>
					))}
				</List>
			</SwipeableDrawer>
		</Grid>
	);
};

export default MobileNavigation;
