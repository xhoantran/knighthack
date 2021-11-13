import { Box, Button } from "@mui/material";
import { UserSettings } from "./UserSettings";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const TripPanelControl = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
			<UserSettings />
			<Button
				size="small"
				variant="contained"
				startIcon={<AddCircleSharpIcon />}
			>
				New Trip
			</Button>
		</Box>
	);
};
