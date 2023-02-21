// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../form.scss";

// Components
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/auth/context";
import Navbar from "../../../layout/navbar/navbar";
import Sidebar from "../../../layout/sidebar/sidebar";
import InputField from "../text-field";

// Material UI
import { Alert, Autocomplete, Button, Grid, Paper, Typography, TextField } from "@mui/material";
import { AccessibilityNew } from "@mui/icons-material";
import { Box } from "@mui/system";

const ST = { title: "", description: "", price: "number", maxPeople: "number", roomNumbers: [] };

const CreateRoom = () => {
	// Context & Navigation
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	// States
	const [formData, setFormData] = useState(ST);
	const [listOfHotels, setListOfHotels] = useState([]);
	const [hotelID, setHotelID] = useState(undefined);
	const [msg, setMsg] = useState({ state: null, msg: null });

	// Fetch Data
	const { data: hotels } = useFetch("/hotels");

	// Use Effects
	useEffect(() => {
		if (!context?.state?.user?.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		setListOfHotels(hotels);
		setHotelID(listOfHotels[0]?._id);
	}, [hotels, listOfHotels]);

	// Functions
	const chField = (event) => {
		if (event.target.name === "roomNumbers") {
			const roomNums = event.target.value.split(",").map((item) => item.replace(/[\W_]/g, ""));
			console.log(roomNums);
			if (roomNums[roomNums.length - 1] !== "") {
				setFormData({ ...formData, roomNumbers: [...roomNums.map((room) => ({ number: room }))] });
			}
		} else {
			setFormData({ ...formData, [event.target.name]: event.target.value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setMsg({ state: null, msg: null });

		try {
			const response = await axios.post(`/rooms/create/${hotelID}/create`, formData);
			setMsg({ state: true, msg: `${formData.title} Was Added` });
			setFormData(ST);
			return response.data;
		} catch (error) {
			console.log(error);
			setMsg({ state: false, msg: error?.response?.data?.CREATE_ROOM });
		}
	};

	return (
		<section className="add-user">
			<Navbar />
			<Sidebar />

			<Paper className="paper-form" component="form" onSubmit={handleSubmit}>
				<Typography className="header-title" variant="h5" fontWeight="bold">
					Create New Room
				</Typography>
				<Box className="container-grid">
					<Grid container spacing={2} className="left-section">
						<Grid item xs={12} sm={6} md={4}>
							<InputField type="text" name="title" value={formData.title} label="Title" change={chField} focus />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<InputField type="text" name="description" value={formData.description} label="description" change={chField} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} className="adorn-grid">
							<span className="adornment">$</span>
							<InputField type="number" name="price" value={formData.price} label="price" change={chField} />
						</Grid>
						<Grid item xs={12} sm={6} md={4} className="adorn-grid">
							<AccessibilityNew className="adornment" />
							<InputField type="number" name="maxPeople" value={formData.maxPeople} label="maxPeople..." change={chField} />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<InputField type="text" name="city" value={formData.city} label="city" change={chField} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputField
								type="text"
								name="roomNumbers"
								label="roomNumbers [ Give Comma Between Rooms Number => 101, 102, 103 ]"
								change={chField}
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="auto-complete">
							<Autocomplete
								onChange={(e, val) => setHotelID(listOfHotels.find((hotel) => hotel.name === val)._id)}
								disablePortal
								defaultChecked={hotelID}
								options={[...listOfHotels.map((item) => item.name)]}
								renderOption={(props, option) => (
									<Box {...props} sx={{ fontSize: "16px" }}>
										{option}
									</Box>
								)}
								sx={{ bgcolor: "var(--mode-bg)", width: "100%" }}
								renderInput={(params) => <TextField className="field" {...params} variant="standard" />}
							/>
						</Grid>
						<Grid item xs={12}>
							<br />
							{msg.state === true && (
								<Alert className="alert success" severity="success">
									{msg.msg}
								</Alert>
							)}
							{msg.state === false && (
								<Alert className="alert error" severity="error">
									{msg.msg}
								</Alert>
							)}
						</Grid>
						<Grid item xs={12}>
							<Button type="submit" className="btn" variant="contained" color="secondary" fullWidth>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Paper>
		</section>
	);
};

export default CreateRoom;
