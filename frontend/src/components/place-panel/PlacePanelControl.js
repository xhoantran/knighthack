import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const PlacePanelControl = ({ addPlace, tripName, updateTripName }) => {
	const [editTripName, setEditTripName] = useState(false);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					p: 0.8,
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
						value={tripName}
						sx={{ flex: 6, maxHeight: 30 }}
						onChange={(event) => updateTripName(event.target.value)}
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
				onClick={addPlace}
				size="small"
				variant="contained"
				startIcon={<AddCircleSharpIcon />}
				sx={{ marginY: 1 }}
			>
				Add Place
			</Button>
		</>
	);
};
