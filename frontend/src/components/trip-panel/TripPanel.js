import React, { useState } from "react";
import { axiosBaseInstance } from "../../utils/axiosHelper";
import { TripCard } from "./TripCard";
import { TripPanelControl } from "./TripPanelControl";

export const TripPanel = () => {
  const [tripCards, setTripCards] = useState([]);

  const handleClick = () => {
    const addEmptyTrip = () => {
      const newTrip = {
        TripName: "tripname",
        FromDate: "from date",
        ToDate: "to date",
        Places: [],
      };
      setTripCards([...tripCards, newTrip]);
    };
    //   axiosBaseInstance.post("/trip/", {
    // 		name: "Trip 1",
    // 	},

    addEmptyTrip();
  };

  return (
    <>
      <TripPanelControl addTrip={handleClick} />
      {/* Used index because array of trips is not going to change */}
      {tripCards.map((item, index) => [<TripCard key={index} />])}
    </>
  );
};
