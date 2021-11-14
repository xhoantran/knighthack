import React, { useState } from "react";
import { CityHeading } from "./CityHeading";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";
import { Box, Typography } from "@mui/material";

export const PlacePanel = ({
	selectPlace,
	setPlaces,
	places,
	selectedTrip,
	tripName,
	setTripName,
}) => {
	const handleAddPlace = () => {
		const newPlace = {
			name: "Place",
			type: "Type",
			from: Date.now(),
			to: Date.now(),
			city: "City",
		};
		setPlaces([newPlace, ...places]);
		selectPlace(newPlace);
	};

	if (selectedTrip)
		return (
			<>
				<PlacePanelControl
					tripName={tripName}
					setTripName={setTripName}
					addPlace={handleAddPlace}
				/>

				{places.map((place, index) => (
					<PlaceCard
						key={index}
						name={place.name}
						from={place.from}
						to={place.to}
						type={place.type}
						selectPlace={selectPlace}
					/>
				))}
			</>
		);
	else return <Typography>Create a new trip</Typography>;
};
