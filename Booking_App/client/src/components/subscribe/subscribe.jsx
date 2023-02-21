import React from "react";
import "./subscribe.scss";

import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";

const Subscribe = () => {
	const services = [
		"Mobile Version",
		"Your Account",
		"Make Changes Online To Your Booking",
		"Customize Service Help",
		"Browser An Offline",
		"Book.com For Bussiness",
	];

	return (
		<>
			<Box className="subscribe-top">
				<Typography className="title" variant="h4">
					Save Time, Save Money !
				</Typography>
				<Typography className="description" variant="overline">
					Signup And We Will Send To You The Best Deel To You
				</Typography>
				<div className="text-field">
					<TextField type="email" label="Your Email" variant="outlined" fullWidth />
					<Button className="submit-btn" variant="contained" color="primary" size="large">
						Subscribe
					</Button>
				</div>
				<FormControlLabel control={<Checkbox />} label="Send Me A Link To Get The Free Booking.com App" />
			</Box>

			<Box className="subscribe-bottom">
				<Button variant="outlined" color="primary" sx={{ color: "white", borderColor: "white" }}>
					List Your Properties
				</Button>
				<Grid className="services" container spacing={2}>
					{services.map((serve, i) => (
						<Grid item xs={6} md={4} lg={2} key={i}>
							<Typography variant="subtitle2">{serve}</Typography>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Subscribe;
