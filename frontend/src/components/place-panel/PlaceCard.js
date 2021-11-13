import { Chip, Paper, Typography, Box } from "@mui/material";

export const PlaceCard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        py: 1.5,
        my: 1,
        cursor: "pointer",
      }}
    >
      <Typography sx={{ pr: 3 }}>
        Date{" "}
        <Box
          component="span"
          sx={{ fontWeight: "medium", textTransform: "uppercase", ml: 4 }}
        >
          Name
        </Box>
      </Typography>

      <Chip label="housing" color="info" size="small" />
    </Paper>
  );
};
