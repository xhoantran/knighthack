import { Box } from "@mui/material";
import { useState } from "react";
import { PlaceDetailEdit } from "./PlaceDetailEdit";
import { PlaceDetailPanelControl } from "./PlaceDetailPanelControl";
import { PlaceDetailView } from "./PlaceDetailView";

export const PlaceDetailPanel = () => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {isEditable ? <PlaceDetailEdit /> : <PlaceDetailView />}
      <PlaceDetailPanelControl
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />
    </Box>
  );
};
