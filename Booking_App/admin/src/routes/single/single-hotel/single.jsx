// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../single.scss";

// Components
import { AuthContext } from "../../../context/auth/context";
import { columns } from "../../../data/hotels-tables";
import useFetch from "../../../hooks/useFetch";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import Chart from "../../../components/charts/chart";
import DataTable from "../../../components/table/table";

// Material UI
import { Avatar, Box, Grid, Typography } from "@mui/material";

const ST = {
	type: "",
	name: "",
	title: "",
	city: "",
	address: "",
	distance: "",
	photos: [],
	description: "",
	rating: "",
	cheapestPrice: "",
};

const SingleHotel = () => {
	// Context & Navigation
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	const { id } = useParams();

	// Fetch Data
	const { data } = useFetch(`/hotels/find/${id}`);
	const { data: hotels } = useFetch(`/hotels/`);

	// State
	const [hotelsData, setHotelsData] = useState([]);
	const [card, setCard] = useState(ST);

	// UseEffects
	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		setCard(data);
		setHotelsData(hotels);
	}, [data, hotels]);

	return (
		<section className="single-page">
			<Sidebar />
			<Navbar />

			<Grid className="user-info" container>
				<Grid className="card" item xs={12} md={3.5}>
					<Box className="card-header">
						<Avatar className="avatar" src={(card?.photos?.length && card.photos[0]) || ""} alt="info" />
					</Box>
					<Box className="card-body">
						<Typography className="body-header" variant="h6">
							Information
						</Typography>
						<Box className="body-info">
							<Typography className="info" variant="body2">
								type: <span className="info-val">{card.type}</span>
							</Typography>
							<Typography className="info" variant="body2">
								name: <span className="info-val">{card.name}</span>
							</Typography>
							<Typography className="info" variant="body2">
								title: <span className="info-val">{card.title}</span>
							</Typography>
							<Typography className="info" variant="body2">
								city: <span className="info-val">{card.city}</span>
							</Typography>
							<Typography className="info" variant="body2">
								address: <span className="info-val">{card.address}</span>
							</Typography>
							<Typography className="info" variant="body2">
								distance: <span className="info-val">{card.distance}</span>
							</Typography>
							<Typography className="info" variant="body2">
								description: <span className="info-val">{card.description}</span>
							</Typography>
							<Typography className="info" variant="body2">
								rating: <span className="info-val">{card.rating}</span>
							</Typography>
							<Typography className="info" variant="body2">
								cheapestPrice: <span className="info-val">${card.cheapestPrice}</span>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid className="chart" item xs={12} md={8}>
					<Chart aspect={2 / 1} title="User Spending ( Last 6 Months )" />
				</Grid>
			</Grid>

			<div className="user-transactions">
				<DataTable rows={hotelsData} columns={columns} title="hotel" />
			</div>
		</section>
	);
};

export default SingleHotel;
