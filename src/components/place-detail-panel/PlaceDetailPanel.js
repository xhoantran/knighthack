import { Box } from "@mui/material";
import { useState } from "react";
import { PlaceDetailEdit } from "./PlaceDetailEdit";
import { PlaceDetailPanelControl } from "./PlaceDetailPanelControl";
import { PlaceDetailView } from "./PlaceDetailView";

export const PlaceDetailPanel = ({ selectedPlace, editSelectedPlace }) => {
	const [isEditable, setIsEditable] = useState(false);

	const handleSave = () => {
		setIsEditable(false);
	};

	const handleEdit = () => {
		setIsEditable(true);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
			{isEditable ? (
				<PlaceDetailEdit
					selectedPlace={selectedPlace}
					editSelectedPlace={editSelectedPlace}
				/>
			) : (
				<PlaceDetailView place={selectedPlace} />
			)}
			<PlaceDetailPanelControl
				isEditable={isEditable}
				handleEdit={handleEdit}
				handleSave={handleSave}
			/>
		</Box>
	);
};
