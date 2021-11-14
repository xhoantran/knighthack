import { Box, Button } from "@mui/material";
import { UserSettings } from "./UserSettings";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const TripPanelControl = (props) => {
  return (
    <Box>
      <UserSettings />
      <Button
        onClick={props.addTrip}
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
