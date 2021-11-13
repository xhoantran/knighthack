import React from "react";
import Grid from "@mui/material/Grid";
import { TripPanel } from "../components/trip-panel/TripPanel";
import { PlacePanel } from "../components/place-panel/PlacePanel";
import { PlaceDetailPanel } from "../components/place-detail-panel/PlaceDetailPanel";

function Dashboard(props) {
  return (
    <div>
      <Grid container direction="row">
        <Grid
          item
          xs={6}
          md={3}
          direction="column"
          sx={{ padding: "1rem", height: "100vh" }}
        >
          <TripPanel />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          sx={{
            padding: "1rem",
            background: "grey",
            color: "white",
            height: "100vh",
          }}
        >
          <PlacePanel />
        </Grid>
        <Grid
          item
          xs={6}
          md={5}
          sx={{
            padding: "1rem",
            background: "black",
            color: "white",
            height: "100vh",
          }}
        >
          <PlaceDetailPanel />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
