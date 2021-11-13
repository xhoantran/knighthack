import React, { useState } from "react";
import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";

export const PlacePanel = () => {
	const [placeCards, setPlaceCards] = useState([]);

	const handleClick = () => {
		addEmptyPlace();
	};

	const addEmptyPlace = () => {
		const newPlace = {
			TripName: "tripname",
			FromDate: "from date",
			ToDate: "to date",
			Places: [],
		};
		setPlaceCards([...placeCards, newPlace]);
	};

	return (
		<>
			<PlacePanelControl addPlace={handleClick} />
			<CityHeading />
			<PlaceCard />
			<PlaceCard />
			<PlaceCard />
			<CityHeading />
			<PlaceCard />
			<PlaceCard />
			{/* Used index because array of trips is not going to change */}
			{placeCards.map((item, index) => [<PlaceCard key={index} />])}
		</>
	);
};
