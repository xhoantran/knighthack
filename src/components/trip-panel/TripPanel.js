import React, { useState } from "react";
import { axiosBaseInstance } from "../../utils/axiosHelper";
import { TripCard } from "./TripCard";
import { TripPanelControl } from "./TripPanelControl";

export const TripPanel = ({ trips, createTrip, selectTrip }) => {
  const addTrip = () => {
    createTrip();
  };

  return (
    <>
      <TripPanelControl addTrip={addTrip} />
      {/* Used index because array of trips is not going to change */}
      {trips.map((trip) => [
        <TripCard
          key={trip.id}
          id={trip.id}
          name={trip.name}
          places={trip.places}
          selectTrip={selectTrip}
        />,
      ])}
    </>
  );
};
