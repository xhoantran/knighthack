import { Chip, Typography, Box } from "@mui/material";

export const PlaceDetailView = ({ place }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box sx={{ backgroundColor: "red", height: "16rem", mb: 8 }}></Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: "2rem",
						textTransform: "uppercase",
					}}
				>
					Name: {place ? place.name : null}
				</Typography>
				<Chip
					label={place ? place.type : "TYPE"}
					color="primary"
					sx={{ ml: 4 }}
				/>
			</Box>
			<Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
			<Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
				[Street], [City], [Zipcode], [City], [Country]
			</Typography>
		</Box>
	);
};
