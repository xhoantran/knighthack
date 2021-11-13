import { Typography, Box } from "@mui/material";

export const CityHeading = () => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontWeight: "medium",
          fontSize: "1.3rem",
          mr: 4,
          textTransform: "uppercase",
        }}
      >
        City
      </Typography>
      [FromDate] - [ToDate]
    </Box>
  );
};
