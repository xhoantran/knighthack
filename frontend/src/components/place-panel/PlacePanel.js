import React, { useState } from "react";
import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";
import { Box } from "@mui/material";

export const PlacePanel = ({ places, setPlaces, selectPlace }) => {
	const handleAddPlace = () => {
		const newPlace = {
			name: "Place",
			type: "Type",
			from: Date.now(),
			to: Date.now(),
			city: "City",
		};

		setPlaces([newPlace, ...places]);
	};

	return (
		<>
			<PlacePanelControl addPlace={handleAddPlace} />

			{places.map((place) => (
				<PlaceCard
					key={place.id}
					name={place.name}
					from={place.from}
					to={place.to}
					type={place.type}
					selectPlace={selectPlace}
				/>
			))}
		</>
	);
};
