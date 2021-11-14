import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { TripPanel } from "../components/trip-panel/TripPanel";
import { axiosBaseInstance } from "../utils/axiosHelper";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState({});
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});

  useEffect(() => {
    axiosBaseInstance
      .get("api/trips")
      .then((res) => {
        setTrips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectTrip = (trip) => {
    setSelectedTrip(trip);
  };

  const selectPlace = (place) => {
    setSelectedPlace(place);
  };

  return (
    <Grid container direction="row" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={2.5}
        sx={{
          borderRight: "2px solid #E2E8F0",
          boxSizing: "border-box",
          p: 4,
        }}
      >
        <TripPanel trips={trips} setTrips={setTrips} selectTrip={selectTrip} />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          borderRight: "2px solid #E2E8F0",
          boxSizing: "border-box",
          py: 4,
          px: 6,
        }}
      >
        <PlacePanel
          places={places}
          setPlaces={setPlaces}
          selectPlace={selectPlace}
        />
      </Grid>
      <Grid
        item
        xs={5.5}
        sx={{
          px: 14,
          py: 4,
        }}
      >
        <PlaceDetailPanel />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
