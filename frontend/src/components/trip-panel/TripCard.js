import { Paper, Typography } from "@mui/material";

export const TripCard = ({ id, name, places, selectTrip }) => {
	const select = () => {
		selectTrip({
			id: id,
			name: name,
			places: places,
		});
	};

	return (
		<Paper
			onClick={() => select()}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				px: 3,
				py: 1.5,
				my: 2,
				cursor: "pointer",
			}}
		>
			<Typography sx={{ fontWeight: "medium", textTransform: "uppercase" }}>
				{name}
			</Typography>
			<Typography>Date</Typography>
		</Paper>
	);
};
