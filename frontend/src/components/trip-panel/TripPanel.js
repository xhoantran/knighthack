import React, { useState } from "react";
import { TripCard } from "./TripCard";
import { TripPanelControl } from "./TripPanelControl";
export const TripPanel = ({ trips, setTrips, selectTrip }) => {
	const handleAddTrip = () => {
		const newTrip = {
			name: "New trip",
			places: [],
		};
		setTrips([newTrip, ...trips]);
		selectTrip(newTrip);
	};
	return (
		<>
			<TripPanelControl addTrip={handleAddTrip} />
			{/* Used index because array of trips is not going to change */}
			{trips.map((trip, index) => [
				<TripCard
					key={index}
					name={trip.name}
					places={trip.places}
					selectTrip={selectTrip}
				/>,
			])}
		</>
	);
};
