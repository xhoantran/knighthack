import { Chip, Paper, Typography, Box } from "@mui/material";

export const PlaceCard = ({ name, time, type, selectPlace }) => {
	const select = () => {
		const place = {
			name: name,
			type: type,
		};
		selectPlace(place);
	};

	return (
		<Paper
			onClick={() => select()}
			sx={{
				display: "flex",
				alignItems: "center",
				px: 3,
				py: 1.5,
				my: 2,
				ml: 4,
				cursor: "pointer",
			}}
		>
			<Box component="span" sx={{ flexGrow: 1 }}>
				{time}
				<Box component="span" sx={{ mx: 1, color: "#CBD5E0" }}>
					|
				</Box>
				{name}
			</Box>

			<Chip
				label={type}
				color="primary"
				sx={{ textTransform: "uppercase" }}
				size="small"
			/>
		</Paper>
	);
};
