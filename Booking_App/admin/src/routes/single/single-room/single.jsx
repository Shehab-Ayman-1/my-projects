// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../single.scss";

// Components
import { AuthContext } from "../../../context/auth/context";
import { columns } from "../../../data/rooms-tables";
import useFetch from "../../../hooks/useFetch";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import Chart from "../../../components/charts/chart";
import DataTable from "../../../components/table/table";

// Material UI
import { Box, Grid, Typography } from "@mui/material";

const ST = { title: "", description: "", price: 0, maxPeople: 0, roomNumbers: [] };

const SingleHotel = () => {
	// Context & Navigation
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	const { id } = useParams();

	// Fetch Data
	const { data: allRooms } = useFetch(`/rooms/`);
	const { data: oneRoom } = useFetch(`/rooms/find/${id}/find`);

	// State
	const [listOfRooms, setListOfRooms] = useState([]);
	const [card, setCard] = useState(ST);

	// UseEffects
	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		setCard(oneRoom);
		setListOfRooms(allRooms);
	}, [oneRoom, allRooms]);

	return (
		<section className="single-page">
			<Sidebar />
			<Navbar />

			<Grid className="user-info" container>
				<Grid className="card" item xs={12} md={3.5}>
					<Box className="card-body">
						<Typography className="body-header" variant="h6">
							Information
						</Typography>
						<Box className="body-info">
							<Typography className="info" variant="body2">
								title: <span className="info-val">{card.title}</span>
							</Typography>
							<Typography className="info" variant="body2">
								description: <span className="info-val">{card.description}</span>
							</Typography>
							<Typography className="info" variant="body2">
								price: <span className="info-val">{card.price}</span>
							</Typography>
							<Typography className="info" variant="body2">
								maxPeople: <span className="info-val">{card.maxPeople}</span>
							</Typography>
							<Typography className="info" variant="body2">
								roomNumbers: <span className="info-val">{card?.roomNumbers?.map((room) => room.number)}</span>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid className="chart" item xs={12} md={8}>
					<Chart aspect={2 / 1} title="User Spending ( Last 6 Months )" />
				</Grid>
			</Grid>

			<div className="user-transactions">
				<DataTable rows={listOfRooms} columns={columns} title="room" />
			</div>
		</section>
	);
};

export default SingleHotel;
