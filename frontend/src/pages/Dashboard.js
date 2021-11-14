import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { TripPanel } from "../components/trip-panel/TripPanel";

const Dashboard = () => {
	const [trips, setTrips] = useState([]);
	const [selectedTrip, setSelectedTrip] = useState({
		id: 0,
		name: "default",
		places: [],
	});
	const [selectedPlace, setSelectedPlace] = useState({
		id: 0,
		name: "default",
		type: "DEFAULT",
	});

	const [tripCounter, setTripCounter] = useState(0);
	const [placeCounter, setPlaceCounter] = useState(0);

	const setTripName = (name) => {
		const trip = {
			...selectedTrip,
			name: name,
		};
		setSelectedTrip(trip);
		updateTripInTrips(trip);
	};

	const setTripPlaces = (places) => {
		const trip = {
			...selectedTrip,
			name: selectedTrip.name,
		};
		setSelectedTrip(trip);
		updateTripInTrips(trip);
	};

	const editSelectedPlace = (placeDetails) => {
		console.log("test");
		const place = {
			...selectedPlace,
			...placeDetails,
		};
		console.log(place);
		setSelectedPlace(place);
		savePlaceChanges(place);
	};

	const selectTrip = (trip) => {
		setSelectedTrip(trip);
		console.log(trip);
	};

	const selectPlace = (place) => {
		setSelectedPlace(place);
		console.log(place);
	};

	const createTrip = () => {
		const trip = {
			id: tripCounter,
			name: "default",
			places: [],
		};
		setTrips([trip, ...trips]);
		setTripCounter(tripCounter + 1);
		selectTrip(trip);
	};

	const addEmptyPlacetoSelectedTrip = () => {
		const place = {
			id: placeCounter,
			name: "default",
			type: "default",
		};
		const newTrip = {
			...selectedTrip,
			places: [place, ...selectedTrip.places],
		};
		setSelectedTrip(newTrip);
		setPlaceCounter(placeCounter + 1);
		selectPlace(place);
		updateTripInTrips(newTrip);
	};

	const updateTripInTrips = (trip) => {
		const index = trips.findIndex((item) => item.id == trip.id);
		var newTrips = [...trips];
		newTrips[index] = trip;
		setTrips(newTrips);
	};

	const savePlaceChanges = (place) => {
		const index = selectedTrip.places.findIndex((item) => item.id == place.id);
		var newPlaces = [...selectedTrip.places];
		newPlaces[index] = place;
		const trip = {
			...selectedTrip,
			places: newPlaces,
		};
		updateTripInTrips(trip);
	};

	return (
		<Grid
			container
			direction="row"
			sx={{ height: "100vh", backgroundColor: "#E2E8F0" }}
		>
			<Grid
				item
				xs={2.5}
				sx={{
					borderRight: "2px solid #E2E8F0",
					boxSizing: "border-box",
					p: 4,
					height: "100vh",
					overflowY: "scroll",
				}}
			>
				<TripPanel
					trips={trips}
					createTrip={createTrip}
					selectTrip={selectTrip}
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
					height: "100vh",
					overflowY: "scroll",
					backgroundColor: "#dbe2e9",
				}}
			>
				<PlacePanel
					places={selectedTrip.places}
					createNewPlace={addEmptyPlacetoSelectedTrip}
					selectPlace={selectPlace}
					tripName={selectedTrip.name}
					updateTripName={setTripName}
				/>
			</Grid>
			<Grid
				item
				xs={5.5}
				sx={{
					px: 14,
					py: 4,
					height: "100vh",
				}}
			>
				<PlaceDetailPanel
					selectedPlace={selectedPlace}
					editSelectedPlace={editSelectedPlace}
				/>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
