import React from "react";
import Grid from "@mui/material/Grid";

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
					Trip Column
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
					Place Column
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
					Place details
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;
