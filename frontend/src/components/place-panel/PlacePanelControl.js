import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const PlacePanelControl = (props) => {
  const [tripName, setTripName] = useState("Test name here");
  const [editTripName, setEditTripName] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography variant="h5" sx={{ flex: 1 }}>
          Trip:
        </Typography>
        {editTripName ? (
          <TextField
            hiddenLabel
            size="small"
            variant="filled"
            sx={{ flex: 6, maxHeight: 30 }}
            onChange={(event) => setTripName(event.target.value)}
          />
        ) : (
          <Typography variant="h5" sx={{ flex: 6 }}>
            {tripName}
          </Typography>
        )}
        <Button
          onClick={() => setEditTripName(!editTripName)}
          size="small"
          variant="contained"
          fullWidth={true}
          sx={{ flex: 1, minWidth: 100, maxHeight: 30 }}
        >
          {editTripName ? "Save" : "Edit name"}
        </Button>
      </Box>
      <Button
        onClick={props.addPlace}
        size="small"
        variant="contained"
        startIcon={<AddCircleSharpIcon />}
        sx={{ ml: 4, mt: "48px", mb: 2, width: "240px" }}
      >
        Add Place
      </Button>
    </Box>
  );
};
