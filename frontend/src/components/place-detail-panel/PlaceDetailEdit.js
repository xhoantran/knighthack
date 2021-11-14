import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Input,
	Stack,
} from "@mui/material";

export const PlaceDetailEdit = ({ editSelectedPlace, selectedPlace }) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column " }}>
			<Box sx={{ backgroundColor: "red", height: "16rem", mb: 8 }}></Box>

			{/* Name, Type */}
			<Stack spacing={4}>
				<Box sx={{ display: "flex" }}>
					<TextField
						label="Name"
						placeholder="Name"
						variant="standard"
						sx={{ flexGrow: 1, mr: 4 }}
						value={selectedPlace.name}
						onChange={(event) =>
							editSelectedPlace({ name: event.target.value })
						}
					/>
					<FormControl variant="standard" sx={{ width: "13rem" }}>
						<InputLabel id="type-label">Type</InputLabel>
						<Select
							labelId="type-label"
							id="type-select"
							label="Type"
							value={selectedPlace.type}
							defaultValue="housing"
							onChange={(event) =>
								editSelectedPlace({ type: event.target.value })
							}
						>
							<MenuItem value="HOUSING">Housing</MenuItem>
							<MenuItem value="FOOD">Food</MenuItem>
							<MenuItem value="AMUSEMENT">Amusement</MenuItem>
							<MenuItem value="ENTERTAINMENT">Entertainment</MenuItem>
						</Select>
					</FormControl>
				</Box>

				{/* From - To */}
				<Box sx={{ mb: 4 }}>
					<TextField
						variant="standard"
						id="datetime-local"
						label="From"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						sx={{ width: "18rem", mr: 4 }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						variant="standard"
						id="datetime-local"
						label="To"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						sx={{ width: "18rem" }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Box>
				<Box sx={{ display: "flex" }}>
					<TextField
						label="Street"
						variant="standard"
						sx={{ flexGrow: 1, mr: 4 }}
					/>
					<TextField label="City" variant="standard" sx={{ width: "18rem" }} />
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<TextField label="State" variant="standard" sx={{ width: "30%" }} />
					<TextField label="Zipcode" variant="standard" sx={{ width: "30%" }} />
					<TextField label="Country" variant="standard" sx={{ width: "30%" }} />
				</Box>
			</Stack>
		</Box>
	);
};
