import { Chip, Paper, Typography, Box } from "@mui/material";

export const PlaceCard = ({ id, name, type, selectPlace }) => {
	const select = () => {
		selectPlace({
			id: id,
			name: name,
			type: type,
		});
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
				Time
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
