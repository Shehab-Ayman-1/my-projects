// React
import React, { useContext, useEffect, useState } from "react";
import CreateAvatar from "react-file-base64";
import { useNavigate } from "react-router";
import "../list.scss";

// Material Ui
import { Alert, Autocomplete, Avatar, AvatarGroup, Badge, Button, ButtonGroup, InputAdornment } from "@mui/material";
import { Modal, Paper, TextField, Typography, Grid } from "@mui/material";
import { SocialDistance } from "@mui/icons-material/";

// Components
import { AuthContext } from "../../../context/auth/context";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import DataTable from "../../../components/table/table";

// Data
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { columns } from "../../../data/hotels-tables";
import { status } from "../../../data/users-tables";
import { CancelRounded, Star } from "@mui/icons-material";

const typeOptions = ["hotel", "apartment", "resort", "cabin", "villa"];

const ST = {
	_id: "",
	name: "",
	title: "",
	photos: [],
	type: "",
	description: "",
	address: "",
	city: "",
	price: "",
	distance: "",
	rating: "",
};

const HotelList = () => {
	// States
	const [msg, setMsg] = useState({ state: null, msg: null });
	const [listOfHotels, setListOfHotels] = useState([]);
	const [upHotel, setUpHotel] = useState(ST);
	const [open, setOpen] = useState(false);

	// Context & Navigations
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	// Fetch Data
	const { data, UseReFetch } = useFetch("/hotels/");

	// UseEffects
	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		const user = data.map((item, i) => {
			item.status = status[i];
			return item;
		});
		setListOfHotels(user);
	}, [data]);

	// Functions
	const chUpFields = (event) => {
		if (event.target.closest("li")) {
			setUpHotel({ ...upHotel, type: event.target.textContent });
		} else {
			setUpHotel({ ...upHotel, [event.target.name]: event.target.value });
		}
	};

	const handlePhotos = (props) => {
		props.map((item) => {
			upHotel.photos.unshift(item.base64);
			return setUpHotel({ ...upHotel, photos: upHotel.photos });
		});
	};

	const cancelChUpPhoto = (img) => {
		const myPhotos = upHotel.photos.filter((photo) => photo !== img);
		setUpHotel({ ...upHotel, photos: myPhotos });
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const appendActions = () => {
		const viewHotel = (id) => {
			navigate(id);
		};
		const updateHotel = (hotel) => {
			console.log(hotel);
			setMsg({ state: null, msg: null });
			handleOpen();
			setUpHotel(hotel);
		};
		const deleteHotel = async ({ _id }) => {
			try {
				setListOfHotels(listOfHotels.filter((item) => item._id !== _id));
				const response = await axios.delete(`/hotels/delete/${_id}`);
				return response.data;
			} catch (error) {
				console.log(error);
			}
		};
		const renderButtons = ({ row }) => {
			return (
				<ButtonGroup className="actions-btns" variant="contained">
					<Button color="secondary" onClick={() => viewHotel(row._id)}>
						View
					</Button>
					<Button color="primary" onClick={() => updateHotel(row)}>
						Update
					</Button>
					<Button color="error" onClick={() => deleteHotel(row)}>
						Delete
					</Button>
				</ButtonGroup>
			);
		};
		return { field: "actions", headerName: "Actions", minWidth: 300, renderCell: (row) => renderButtons(row) };
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setMsg({ state: null, msg: null });
		try {
			const response = await axios.put(`/hotels/update/${upHotel._id}`, upHotel);
			setMsg({ state: true, msg: `Successfully, ${upHotel.name} Was Updated` });
			const interval = setInterval(() => {
				UseReFetch();
				handleClose();
				clearInterval(interval);
			}, 2000);
			return response.data;
		} catch (error) {
			console.log(error);
			let err = error?.response;
			setMsg({
				state: false,
				msg: err?.data?.UPDATE_AUTH || `${err?.statusText}, Maximum Images Size Has To Be 500mb` || error?.message,
			});
		}
	};

	return (
		<div className="list-page">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<div className="list-data-table">
					<DataTable rows={listOfHotels} columns={columns.concat(appendActions())} title="hotel" />
				</div>
			</div>

			<Modal className="updated-modal" open={open} onClose={handleClose}>
				<Paper className="paper" component="form" elevation={10} onSubmit={handleSubmit}>
					<Typography variant="h4" align="center" color="var(--main-color)" fontWeight="bold" fontSize="25px">
						Update Hotel
					</Typography>

					<Grid className="paper-body" container spacing={2}>
						<Grid item xs={12} sm={12} className="avatar-grid">
							<Avatar className="avatar" src={(upHotel?.photos.length && upHotel?.photos[0]) || ""} alt="avatar" />
							<CreateAvatar multiple onDone={handlePhotos} />
						</Grid>
						<Grid item xs={12} className="photos-grid">
							<AvatarGroup max={8}>
								{upHotel?.photos?.length &&
									upHotel?.photos?.map((img, i) => (
										<Badge
											key={i}
											overlap="circular"
											anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
						<Grid item xs={12}>
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
						<Grid item xs={12} sm={6}>
							<TextField type="text" value={upHotel.name} name="name" variant="standard" label="Name" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="text"
								value={upHotel.title}
								name="title"
								variant="standard"
								label="Title"
								onChange={chUpFields}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Autocomplete
								name="type"
								disablePortal
								options={typeOptions}
								value={upHotel.type}
								onChange={chUpFields}
								inputValue={upHotel.type}
								onInputChange={(e, val) => setUpHotel({ ...upHotel, type: val })}
								renderInput={(params) => <TextField {...params} name="type" variant="standard" label="Type" />}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="text"
								value={upHotel.description}
								name="description"
								variant="standard"
								label="description"
								onChange={chUpFields}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="text"
								value={upHotel.address}
								name="address"
								variant="standard"
								label="address"
								onChange={chUpFields}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField type="text" value={upHotel.city} name="city" variant="standard" label="city" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="number"
								value={upHotel.cheapestPrice}
								name="cheapestPrice"
								variant="standard"
								label="price"
								min="0"
								onChange={chUpFields}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<span style={{ color: "var(--light-text)", fontSize: "18px" }}>$</span>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="number"
								value={upHotel.distance}
								name="distance"
								variant="standard"
								label="distance"
								min="0"
								onChange={chUpFields}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<span style={{ color: "var(--light-text)", fontSize: "25px" }}>
												<SocialDistance />
											</span>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								type="number"
								value={upHotel.rating}
								name="rating"
								variant="standard"
								label="rating"
								min="0"
								max="5"
								onChange={chUpFields}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<span style={{ color: "var(--light-text)", fontSize: "18px" }}>
												<Star />
											</span>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button type="submit" className="submit-btn" variant="contained" color="secondary" size="large" fullWidth>
								Update
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Modal>
		</div>
	);
};

export default HotelList;
