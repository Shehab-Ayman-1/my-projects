// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Base64 from "react-file-base64";
import "../form.scss";

// Components
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/auth/context";
import Navbar from "../../../layout/navbar/navbar";
import Sidebar from "../../../layout/sidebar/sidebar";
import InputField from "../text-field";

// Material UI
import { Alert, Autocomplete, Avatar, AvatarGroup, Badge, Button, Chip, Grid, Paper, Typography, TextField } from "@mui/material";
import { CancelRounded, Star } from "@mui/icons-material";
import { Box } from "@mui/system";

const ST = {
	name: "",
	title: "",
	type: "",
	city: "",
	address: "",
	rooms: [],
	distance: "",
	photos: [],
	featured: false,
	description: "",
	rating: 0,
	cheapestPrice: 0,
};

const CreateHotel = () => {
	// Context & Navigation
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	// States
	const [formData, setFormData] = useState(ST);
	const [roomsOptions, setRoomsOptions] = useState([]);
	const [msg, setMsg] = useState({ state: null, msg: null });

	// Fetch Data
	const { data } = useFetch("/rooms");

	// Use Effects
	useEffect(() => {
		if (!context?.state?.user?.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		setRoomsOptions(data);
	}, [data]);

	// Functions
	const chField = (event, newVal) => {
		if (event.target.tagName === "DIV") {
			if (newVal[0]?.title) {
				return newVal.map((item) => setFormData({ ...formData, rooms: [...formData.rooms, item.title] }));
			} else if (Boolean(newVal)) {
				setFormData({ ...formData, featured: newVal === "true" ? true : false });
			}
		} else {
			setFormData({ ...formData, [event.target.name]: event.target.value });
		}
	};

	const handlePhotos = (props) => {
		props.map((item) => {
			formData.photos.unshift(item.base64);
			return setFormData({ ...formData, photos: formData.photos });
		});
	};

	const cancelChUpPhoto = (img) => {
		const myPhotos = formData.photos.filter((photo) => photo !== img);
		setFormData({ ...formData, photos: myPhotos });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setMsg({ state: null, msg: null });

		try {
			const response = await axios.post("/hotels/create", formData);
			setMsg({ state: true, msg: `${formData.name} Was Added` });
			setFormData(ST);
			return response.data;
		} catch (error) {
			console.log(error);
			setMsg({
				state: false,
				msg: error?.response?.data?.CREATE_HOTEL || error?.response?.statusText + ", Maximume Image Size Have To Be 75KB",
			});
		}
	};

	return (
		<section className="add-user">
			<Navbar />
			<Sidebar />

			<Paper className="paper-form" component="form" onSubmit={handleSubmit}>
				<Typography className="header-title" variant="h5" fontWeight="bold">
					Add New Hotel
				</Typography>
				<Grid className="container-grid" container spacing={2}>
					<Grid className="left-section" item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6} md={4}>
								<InputField type="text" name="name" value={formData.name} label="name" change={chField} focus required />
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField type="text" name="title" value={formData.title} label="title" change={chField} required />
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField type="text" name="type" value={formData.type} label="type" change={chField} required />
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField
									type="text"
									name="description"
									value={formData.description}
									label="description"
									change={chField}
									required
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField type="text" name="city" value={formData.city} label="city" change={chField} required />
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField type="text" name="address" value={formData.address} label="address" change={chField} required />
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<InputField
									type="number"
									value={formData.distance}
									name="distance"
									label="distance"
									min="0"
									change={chField}
									required
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="adorn-grid">
								<span className="adornment">$</span>
								<InputField
									type="number"
									name="cheapestPrice"
									value={formData.cheapestPrice}
									label="Price"
									min="0"
									change={chField}
									required
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="adorn-grid">
								<Star className="adornment star" />
								<InputField
									type="number"
									name="rating"
									value={formData.rating}
									min="0"
									max="5"
									label="rating"
									change={chField}
									required
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="auto-complete">
								<Autocomplete
									multiple
									onChange={chField}
									disableCloseOnSelect
									options={roomsOptions}
									defaultChecked={roomsOptions[0]}
									getOptionLabel={(option) => option.title}
									renderOption={(props, option) => (
										<Box {...props} sx={{ fontSize: "16px" }}>
											{option.title}
										</Box>
									)}
									sx={{ bgcolor: "var(--mode-bg)", width: "100%" }}
									renderTags={(value, getTagProps) =>
										value.map((option, index) => (
											<Chip
												variant="outlined"
												label={option.title}
												size="small"
												sx={{ color: "var(--light-text)", fontSize: "12px" }}
												{...getTagProps({ index })}
											/>
										))
									}
									renderInput={(params) => (
										<TextField className="field" {...params} variant="standard" label="Rooms...." />
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={4} className="auto-complete">
								<Autocomplete
									onChange={chField}
									disablePortal
									defaultChecked="false"
									options={["false", "true"]}
									renderOption={(props, option) => (
										<Box {...props} sx={{ fontSize: "16px" }}>
											{option}
										</Box>
									)}
									sx={{ bgcolor: "var(--mode-bg)", width: "100%" }}
									renderInput={(params) => (
										<TextField className="field" {...params} variant="standard" label="Featured...." />
									)}
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
					</Grid>
					<Grid className="right-section" item xs={12}>
						<label htmlFor="avatar" className="label">
							<Base64 multiple onDone={handlePhotos} />
							<Avatar className="avatar" src={(formData.photos.length && formData.photos[0]) || ""} alt="user-avatar" />
						</label>
						<AvatarGroup max={8}>
							{formData?.photos?.length &&
								formData?.photos?.map((img, i) => (
									<Badge
										key={i}
										overlap="circular"
										anchorOrigin={{ vertical: "top", horizontal: "right" }}
										sx={{ zIndex: 3 }}
										badgeContent={
											<CancelRounded
												sx={{ color: "var(--main-color)", cursor: "pointer" }}
												onClick={() => cancelChUpPhoto(img)}
											/>
										}>
										<Avatar src={img || ""} alt="avatar-img" />
									</Badge>
								))}
						</AvatarGroup>
					</Grid>
				</Grid>
			</Paper>
		</section>
	);
};

export default CreateHotel;
