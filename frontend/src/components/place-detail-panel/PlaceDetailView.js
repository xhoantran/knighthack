import { Chip, Typography, Box } from "@mui/material";

export const PlaceDetailView = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <img src="https://picsum.photos/600/300" />
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          Name
        </Typography>
        <Chip label="housing" color="primary" sx={{ ml: 4 }} />
      </Box>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
        [Street], [City], [Zipcode], [City], [Country]
      </Typography>
    </Box>
  );
};
