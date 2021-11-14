import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

export const PlacePanelControl = ({ tripName, setTripName, addPlace }) => {
	const [editName, setEditName] = useState(false);

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
				{editName ? (
					<TextField
						hiddenLabel
						size="small"
						variant="filled"
						value={tripName}
						onChange={(event) => console.log(event.target.value)}
						sx={{ flex: 6, maxHeight: 30 }}
					/>
				) : (
					<Typography variant="h5" sx={{ flex: 6 }}>
						{tripName}
					</Typography>
				)}
				<Button
					onClick={() => setEditName(!editName)}
					size="small"
					variant="contained"
					fullWidth={true}
					sx={{ flex: 1, minWidth: 100, maxHeight: 30 }}
				>
					{editName ? "Save" : "Edit name"}
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
