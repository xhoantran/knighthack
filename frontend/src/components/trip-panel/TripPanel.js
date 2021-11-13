import React, { useState } from "react";
import { TripCard } from "./TripCard";
import { TripPanelControl } from "./TripPanelControl";
export const TripPanel = () => {
	const [tripCards, setTripCards] = useState([]);

	const handleClick = () => {
		addEmptyTrip();
	};

	const addEmptyTrip = () => {
		const newTrip = {
			TripName: "tripname",
			FromDate: "from date",
			ToDate: "to date",
			Places: [],
		};
		setTripCards([...tripCards, newTrip]);
	};

	return (
		<>
			<TripPanelControl addTrip={handleClick} />
			{/* Used index because array of trips is not going to change */}
			{tripCards.map((item, index) => [<TripCard key={index} />])}
		</>
	);
};
