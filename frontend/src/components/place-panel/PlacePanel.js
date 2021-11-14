import React, { useState, useEffect } from "react";
import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";
import { Box } from "@mui/material";

export const PlacePanel = ({
	places,
	createNewPlace,
	selectPlace,
	tripName,
	updateTripName,
}) => {
	const addPlace = () => {
		createNewPlace();
	};

	useEffect(() => {
		console.log("changes");
	}, [places]);

	return (
		<>
			<PlacePanelControl
				addPlace={addPlace}
				tripName={tripName}
				updateTripName={updateTripName}
			/>
			{places.map((place) => (
				<PlaceCard
					key={place.id}
					id={place.id}
					name={place.name}
					type={place.type}
					selectPlace={selectPlace}
				/>
			))}
		</>
	);
};
