import { Box, Button } from "@mui/material";
import { UserSettings } from "./UserSettings";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const TripPanelControl = (props) => {
	return (
		<Box sx={{ alignItems: "center" }}>
			<UserSettings />
			<Button
				onClick={props.addTrip}
				size="small"
				variant="contained"
				fullWidth={true}
				startIcon={<AddCircleSharpIcon />}
				sx={{ mt: 1 }}
			>
				New Trip
			</Button>
		</Box>
	);
};
