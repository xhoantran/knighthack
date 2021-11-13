import { Chip, Typography, Box } from "@mui/material";

export const PlaceDetail = () => {
  return (
    <>
      <Box sx={{ height: "10rem", backgroundColor: "red", mb: 2 }}>
        Image Placeholder
      </Box>
      <Typography
        sx={{
          fontWeight: "medium",
          fontSize: "2rem",
          mt: 2,
          textTransform: "uppercase",
        }}
      >
        Name
        <Chip label="housing" color="info" size="small" sx={{ ml: 4 }} />
      </Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>[From] - [To]</Typography>
      <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>Address</Typography>
      <Typography sx={{ fontSize: "1.2rem" }}>Comment</Typography>
    </>
  );
};
