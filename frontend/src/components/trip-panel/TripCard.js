import { Paper, Typography } from "@mui/material";

export const TripCard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 3,
        py: 1.5,
        my: 2,
        cursor: "pointer",
      }}
    >
      <Typography sx={{ fontWeight: "medium", textTransform: "uppercase" }}>
        Name
      </Typography>
      <Typography>Date</Typography>
    </Paper>
  );
};
