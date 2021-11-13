import Grid from "@mui/material/Grid";
import React from "react";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { TripPanel } from "../components/trip-panel/TripPanel";

const Dashboard = () => {
  return (
    <Grid container direction="row" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={2}
        sx={{
          borderRight: "2px solid #E2E8F0",
          boxSizing: "border-box",
          p: 4,
        }}
      >
        <TripPanel />
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
        <PlacePanel />
      </Grid>
      <Grid
        item
        xs={6}
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
