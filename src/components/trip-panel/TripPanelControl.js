import { Box, Button } from "@mui/material";
import { UserSettings } from "./UserSettings";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const TripPanelControl = ({ addTrip }) => {
	return (
		<Box>
			<UserSettings />
			<Button
				onClick={addTrip}
				size="small"
				variant="contained"
				color="secondary"
				fullWidth={true}
				startIcon={<AddCircleSharpIcon />}
				sx={{ mb: "1rem", height: "2.5rem" }}
			>
				New Trip
			</Button>
		</Box>
	);
};
