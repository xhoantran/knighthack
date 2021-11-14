import { Typography, Box } from "@mui/material";

export const CityHeading = ({ city, from, to }) => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontWeight: "medium",
          fontSize: "1.25rem",
          mr: 4,
          textTransform: "uppercase",
        }}
      >
        {city}
      </Typography>
      <Box component="span" sx={{ fontSize: "1.25rem", color: "#718096" }}>
        {from} - {to}
      </Box>
    </Box>
  );
};
