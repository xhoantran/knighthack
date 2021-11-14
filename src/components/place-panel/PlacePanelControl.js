import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { ModeEdit, AddCircleSharp } from "@mui/icons-material";

export const PlacePanelControl = ({ addPlace, tripName, updateTripName }) => {
	const [editTripName, setEditTripName] = useState(false);

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box sx={{ flexGrow: 1, mt: 1 }}>
					{editTripName ? (
						<TextField
							hiddenLabel
							size="small"
							variant="filled"
							fullWidth
							sx={{ height: "3rem", width: "90%" }}
							value={tripName}
							onChange={(event) => updateTripName(event.target.value)}
						/>
					) : (
						<Typography
							sx={{
								fontWeight: "medium",
								fontSize: "2rem",
								textTransform: "uppercase",
								height: "3rem",
							}}
						>
							{tripName}
						</Typography>
					)}
				</Box>
				<Button
					onClick={() => setEditTripName(!editTripName)}
					size="small"
					variant="contained"
					sx={{ width: "7rem", height: "2.5rem" }}
					startIcon={<ModeEdit />}
				>
					{editTripName ? "Save" : "Edit"}
				</Button>
			</Box>
			<Button
				onClick={addPlace}
				size="small"
				variant="contained"
				color="secondary"
				startIcon={<AddCircleSharp />}
				sx={{
					ml: 4,
					mt: "6.5rem",
					mb: "16px",
					width: "240px",
					height: "2.5rem",
				}}
			>
				Create Place
			</Button>
		</Box>
	);
};
