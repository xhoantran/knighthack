import { Chip, Typography, Box } from "@mui/material";

export const PlaceDetailView = ({ place }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box
				src="https://picsum.photos/600/300"
				component="img"
				sx={{ borderRadius: "16px" }}
			/>
			<Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
				<Typography
					sx={{
						fontWeight: "medium",
						fontSize: "2rem",
						textTransform: "uppercase",
					}}
				>
					{place.name}
				</Typography>
				<Chip label={place.type} color="primary" sx={{ ml: 4 }} />
			</Box>
			<Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
			<Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
				[Street], [City], [Zipcode], [City], [Country]
			</Typography>
		</Box>
	);
};
