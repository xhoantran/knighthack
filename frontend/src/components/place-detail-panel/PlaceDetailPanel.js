import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { PlaceDetailEdit } from "./PlaceDetailEdit";
import { PlaceDetailPanelControl } from "./PlaceDetailPanelControl";
import { PlaceDetailView } from "./PlaceDetailView";

export const PlaceDetailPanel = ({ selectedPlace, updatePlace }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [name, setName] = useState(selectedPlace.name);
	const [type, setType] = useState(selectedPlace.type);

	const handleEdit = () => {
		setIsEditable(true);
		console.log("name: " + name);
	};

	const handleSave = () => {
		setIsEditable(false);
		const place = {
			name: name,
			type: type,
		};
		updatePlace(place);
		setName("");
		setType("");
	};

	const handleDelete = () => {
		// deletePlace();
	};
	if (selectedPlace != null)
		return (
			<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
				{isEditable ? (
					<PlaceDetailEdit
						name={name}
						setName={setName}
						type={type}
						setType={setType}
					/>
				) : (
					<PlaceDetailView place={selectedPlace} />
				)}
				<PlaceDetailPanelControl
					isEditable={isEditable}
					handleEdit={handleEdit}
					handleSave={handleSave}
					handleDelete={handleDelete}
				/>
			</Box>
		);
	else
		return (
			<Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
				<Typography>Select a place to edit it</Typography>
			</Box>
		);
};
