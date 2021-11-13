import { Typography, Box } from "@mui/material";

export const CityHeading = () => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontWeight: "medium",
          fontSize: "1.2rem",
          mt: 3,
          mr: 4,
          mb: 1,
          textTransform: "uppercase",
        }}
      >
        City
      </Typography>
      [FromDate] - [ToDate]
    </Box>
  );
};
