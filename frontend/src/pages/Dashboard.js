import Grid from "@mui/material/Grid";
import React from "react";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { TripPanel } from "../components/trip-panel/TripPanel";
import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container direction="row" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={2}
        sx={{
          border: "2px solid blue",
          boxSizing: "border-box",
          p: 2,
        }}
      >
        <TripPanel />
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          border: "2px solid blue",
          boxSizing: "border-box",
          backgroundColor: "gray",
          p: 2,
        }}
      >
        <PlacePanel />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          border: "2px solid blue",
          boxSizing: "border-box",
          p: 2,
        }}
      >
        <PlaceDetailPanel />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
