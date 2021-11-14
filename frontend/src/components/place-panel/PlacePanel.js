import React from "react";
import { PlaceCard } from "./PlaceCard";
import { PlacePanelControl } from "./PlacePanelControl";

export const PlacePanel = ({ places, setPlaces, selectPlace }) => {
  const handleAddPlace = () => {
    const newPlace = {
      id: new Date().getTime(),
      name: "Place",
      type: "Type",
      from: new Date(),
      to: new Date(),
      city: "City",
      state: "State",
      zipcode: "Zipcode",
      country: "Country",
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

      <PlaceCard
        name="Olive's Garden"
        from={new Date()}
        to={new Date()}
        type="food"
      />
    </>
  );
};
