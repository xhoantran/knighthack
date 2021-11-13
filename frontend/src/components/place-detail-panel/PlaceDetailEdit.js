import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Stack,
} from "@mui/material";

export const PlaceDetailEdit = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column  " }}>
      <Box sx={{ backgroundColor: "red", height: "16rem" }}></Box>
      <Stack spacing={2}>
        <Typography
          sx={{
            fontWeight: "medium",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          Edit
        </Typography>
        <FormControl sx={{ width: "13rem" }}>
          <InputLabel id="type-label">Type</InputLabel>
          <Select labelId="type-lbael" id="type-select" label="Type">
            <MenuItem value="housing">Housing</MenuItem>
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="amusement">Amusement</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>

        {/* From - To */}
        <Box sx={{ mb: 2 }}>
          <TextField
            id="datetime-local"
            label="From"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: "13rem", mr: 4 }}
          />
          <TextField
            id="datetime-local"
            label="To"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: "13rem" }}
          />
        </Box>
        <TextField label="Street" variant="outlined" />
        <TextField label="City" variant="outlined" />
        <TextField label="State" variant="outlined" />
        <TextField label="Zipcode" variant="outlined" />
        <TextField label="Country" variant="outlined" />
      </Stack>
    </Box>
  );
};
