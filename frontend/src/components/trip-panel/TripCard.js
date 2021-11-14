import { Paper, Typography } from "@mui/material";

export const TripCard = ({ name, date, places, selectTrip }) => {
	const select = () => {
		const trip = {
			name: name,
			places: places,
		};
		selectTrip(trip);
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
