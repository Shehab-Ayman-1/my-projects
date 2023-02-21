// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../single.scss";

// Components
import { columns } from "../../../data/hotels-tables";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import Chart from "../../../components/charts/chart";
import DataTable from "../../../components/table/table";

// Material UI
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { AuthContext } from "../../../context/auth/context";
import useFetch from "../../../hooks/useFetch";

const SingleUser = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	const { id } = useParams();

	const { data } = useFetch(`/auths/find/${id}/find`);
	const { data: hotels } = useFetch(`/hotels`);
	const [hotelsData, setHotelsData] = useState([]);
	const [card, setCard] = useState({ avatar: "", username: "", email: "", status: "active" });

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
						<Avatar className="avatar" src={card.avatar || ""} alt="info" />
					</Box>
					<Box className="card-body">
						<Typography className="body-header" variant="h6">
							Information
						</Typography>
						<Box className="body-info">
							<Typography className="info" variant="body2">
								Name: <span className="info-val">{card.username}</span>
							</Typography>
							<Typography className="info" variant="body2">
								Email: <span className="info-val">{card.email}</span>
							</Typography>
							<Typography className="info" variant="body2">
								Phone: <span className="info-val">+1 1234 56 789</span>
							</Typography>
							<Typography className="info" variant="body2">
								Address: <span className="info-val">Newyork</span>
							</Typography>
							<Typography className="info" variant="body2">
								Country: <span className="info-val">USA</span>
							</Typography>
							<Typography className="info" variant="body2">
								Status: <span className="info-val">Active</span>
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid className="chart" item xs={12} md={8}>
					<Chart aspect={2 / 1} title="User Spending ( Last 6 Months )" />
				</Grid>
			</Grid>

			<div className="user-transactions">
				<DataTable rows={hotelsData} columns={columns} title="user" />
			</div>
		</section>
	);
};

export default SingleUser;
