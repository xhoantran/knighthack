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

export const PlaceDetailEdit = ({ name, setName, type, setType }) => {
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
						value={name}
						sx={{ flexGrow: 1, mr: 4 }}
						onChange={(event) => setName(event.target.value)}
					/>
					<FormControl variant="standard" sx={{ width: "13rem" }}>
						<InputLabel id="type-label">Type</InputLabel>
						<Select
							labelId="type-label"
							id="type-select"
							label="Type"
							value={type}
							onChange={(event) => setType(event.target.value)}
						>
							<MenuItem value="housing">Housing</MenuItem>
							<MenuItem value="food">Food</MenuItem>
							<MenuItem value="amusement">Amusement</MenuItem>
							<MenuItem value="entertainment">Entertainment</MenuItem>
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
