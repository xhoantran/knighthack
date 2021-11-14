import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { TripPanel } from "../components/trip-panel/TripPanel";

const Dashboard = () => {
	const [trips, setTrips] = useState([]);
	const [tripName, setTripName] = useState("");
	const [places, setPlaces] = useState([]);
	const [selectedTrip, setSelectedTrip] = useState({
		name: "",
		places: [],
	});
	const [selectedPlace, setSelectedPlace] = useState({
		name: "",
		type: "",
	});

	const updatePlace = (place) => {
		var index = places.findIndex((item) => (item.name = place.name));
		var updatedPlaces = [...places];
		updatedPlaces[index] = place;
		setPlaces(updatedPlaces);
		const updatedTrip = {
			name: selectedTrip.name,
			places: places,
		};
		updateTrip(updatedTrip);
	};

	const updateTrip = (trip) => {
		var index = trips.findIndex((item) => (item.name = trip.name));
		var updatedTrips = [...trips];
		updatedTrips[index] = trip;
		setTrips(updatedTrips);
	};

	return (
		<Grid container direction="row" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={2.5}
				sx={{
					borderRight: "2px solid #E2E8F0",
					boxSizing: "border-box",
					p: 4,
				}}
			>
				<TripPanel
					trips={trips}
					setTrips={setTrips}
					selectTrip={setSelectedTrip}
				/>
			</Grid>
			<Grid
				item
				xs={4}
				sx={{
					borderRight: "2px solid #E2E8F0",
					boxSizing: "border-box",
					py: 4,
					px: 6,
				}}
			>
				<PlacePanel
					selectPlace={setSelectedPlace}
					selectedTrip={selectedTrip}
					places={places}
					setPlaces={setPlaces}
					tripName={tripName}
					setTripName={setTripName}
				/>
			</Grid>
			<Grid
				item
				xs={5.5}
				sx={{
					px: 14,
					py: 4,
				}}
			>
				<PlaceDetailPanel
					selectedPlace={selectedPlace}
					updatePlace={updatePlace}
				/>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
