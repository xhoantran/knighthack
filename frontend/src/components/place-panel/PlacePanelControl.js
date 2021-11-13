import { Box, Button, Typography } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const PlacePanelControl = () => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				mb: 2,
			}}
		>
			<Typography variant="h5" sx={{ flex: "1", margin: 0.8 }}>
				Trip Name:{" "}
			</Typography>
			<Button
				size="small"
				variant="contained"
				startIcon={<AddCircleSharpIcon />}
			>
				Add Place
			</Button>
		</Box>
	);
};
