import { Button, Box } from "@mui/material";
import { ModeEdit, Delete, Save } from "@mui/icons-material";

export const PlaceDetailPanelControl = ({
	isEditable,
	handleEdit,
	handleSave,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "flex-end",
				height: "3rem",
				mt: "auto",
			}}
		>
			{isEditable ? (
				<Button
					variant="contained"
					size="large"
					sx={{ mr: 2, width: "7rem" }}
					onClick={handleSave}
					startIcon={<Save />}
				>
					Save
				</Button>
			) : (
				<Button
					variant="contained"
					size="large"
					sx={{ mr: 2, width: "7rem" }}
					onClick={handleEdit}
					startIcon={<ModeEdit />}
				>
					Edit
				</Button>
			)}
			<Button
				variant="contained"
				size="large"
				color="error"
				startIcon={<Delete />}
			>
				Delete
			</Button>
		</Box>
	);
};
