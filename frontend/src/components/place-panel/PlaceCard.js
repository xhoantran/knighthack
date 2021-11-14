import { Chip, Paper, Typography, Box } from "@mui/material";

export const PlaceCard = ({ name, from, to, type }) => {
  const getColor = () => {
    let color;
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        color = "primary";
        break;
      case 1:
        color = "secondary";
        break;
      case 2:
        color = "warning";
        break;
    }

    return color;
  };
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        px: 3,
        py: 1.5,
        my: 2,
        ml: 4,
        cursor: "pointer",
      }}
    >
      <Box component="span" sx={{ flexGrow: 1 }}>
        {from.getHours()}:{from.getMinutes()} - {to.getHours()}:
        {to.getMinutes()}
        <Box component="span" sx={{ mx: 1, color: "#CBD5E0" }}>
          |
        </Box>
        {name}
      </Box>

      <Chip
        label={type}
        color={getColor()}
        sx={{ textTransform: "uppercase" }}
        size="small"
      />
    </Paper>
  );
};
