import { Button, Box } from "@mui/material";

export const PlaceDetailPanelControl = ({ isEditable, setIsEditable }) => {
  const handleSave = () => {
    setIsEditable(false);
  };
  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "auto" }}>
      {isEditable ? (
        <Button variant="contained" sx={{ mr: 1 }} onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button variant="contained" sx={{ mr: 1 }} onClick={handleEdit}>
          Edit
        </Button>
      )}
      <Button variant="contained" color="error">
        Delete
      </Button>
    </Box>
  );
};
