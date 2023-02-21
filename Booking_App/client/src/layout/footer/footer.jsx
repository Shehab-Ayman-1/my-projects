import React from "react";
import "./footer.scss";
import { North } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
	return (
		<footer>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Countries</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Regions</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Cities</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Districts</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Airports</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Hotels</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Countries</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Homes</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Apartments</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Resorts</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Villas</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Hostels</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">B & Bs</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Guest Houses</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Unique Places To Stay</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">All Destinations</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Discover</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Reviews</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Unpacked: Travel Articles</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Travel Communities</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Seasonal And Holiday Deals</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Car Retal</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Flight Finder</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Resturant Reservations</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Booking.com For Travel Agents</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">CoronaVirus ( COVID-19 ) FAQs</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">About Booking.com</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Customer Services Help</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Partner help</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Careers</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Sustainability</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Press center</Typography>
					</div>
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Safety Resource Center</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Investor relations</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Terms & conditions</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Partner dispute</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">How We Work</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Privacy & cookie statement</Typography>
					</div>
					<div className="row">
						<North className="icon" />
						<Typography variant="subtitle1">Corporate contact</Typography>
					</div>
				</Grid>
			</Grid>
			<div className="copyright">
				<Typography className="externet-login" variant="h5">
					externet-login
				</Typography>
				<Typography className="copy" variant="body1">
					Copyright © 1996-2022 Booking.com™. All rights reserved.
				</Typography>
			</div>
		</footer>
	);
};

export default Footer;
