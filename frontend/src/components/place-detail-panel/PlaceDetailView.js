import { Chip, Typography, Box } from "@mui/material";

export const PlaceDetailView = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ backgroundColor: "red", height: "16rem", mb: 8 }}></Box>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
      >
        Name
        <Chip label="housing" color="info" size="small" sx={{ ml: 4 }} />
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
        [Street], [City], [Zipcode], [City], [Country]
      </Typography>
    </Box>
  );
};
