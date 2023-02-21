// React
import React, { useContext, useState } from "react";
import "./list-reserve.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

// Material Ui
import { Box, Button, Checkbox, Modal, Typography } from "@mui/material";

// Layout
import Loading from "../../layout/loading/loading";

// Components
import { HotelContext } from "../../context/hotel/context";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { pink } from "@mui/material/colors";

const ListReserve = ({ id, isSignin, openReserve, handleCloseReserve }) => {
	const context = useContext(HotelContext);
	const navigate = useNavigate();
	const { data, isLoading } = useFetch(`/rooms/find/${id}/find`);
	const [selectedRooms, setSelectedRooms] = useState(data?.roomNumbers?.unavailableDates || []);

	// UnAvailable Days [ The Rooms Are Reserved Before ]
	const handleRangeDates = () => {
		const start = new Date(context.state.date[0].startDate);
		const end = new Date(context.state.date[0].endDate);
		const list = [];

		while (end.getDate() >= start.getDate()) {
			list.push(new Date(start).getTime());
			start.setDate(start.getDate() + 1);
		}
		return list;
	};
	const listOfRngDays = handleRangeDates();

	// Handle SelectedRooms
	const handleSelectedRooms = (event) => {
		const checked = event.target.checked;
		const value = event.target.value;
		const removedValue = selectedRooms.filter((room) => room !== value);
		setSelectedRooms(checked ? [...selectedRooms, value] : removedValue);
	};

	// Check If The Rooms Is Reserved OR Not
	const notAvailable = (roomNum, i) => {
		const isFound = roomNum.unavailableDates.some((date) => listOfRngDays.includes(new Date(date).getTime()));
		return isFound;
	};

	// Submit The Reserved Rooms To The Server
	const handleSubmit = async () => {
		try {
			const response = (roomID) => axios.put(`/rooms/update/unavailable-rooms/${roomID}/update`, { dates: listOfRngDays });
			await Promise.all(selectedRooms.map((roomID) => response(roomID).data));
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Modal className="modal-container" open={openReserve} onClose={handleCloseReserve}>
			{isSignin ? (
				isLoading ? (
					<Box className="reserves-box">
						<Loading body sx={{ width: "100%" }} />
						<Loading body sx={{ width: "100%" }} />
						<Loading body sx={{ width: "100%" }} />
						<Loading body sx={{ width: "100%" }} />
					</Box>
				) : (
					<>
						<div className="reserves-box">
							<Box>
								<Typography className="reserve-title" variant="h6">
									Select Your Room
								</Typography>
								<Typography variant="body2">
									You Will Reserve From: {new Date(context.state.date[0].startDate).getDate()} To:{" "}
									{new Date(context.state.date[0].endDate).getDate()}
								</Typography>
							</Box>
							{data.map((room, i) => (
								<div className="reserve-room" key={i}>
									<Box className="left-part">
										<Typography className="room-name" variant="h6">
											{room.title}
										</Typography>
										<Typography className="room-desc" variant="subtitle1">
											{room.description}
										</Typography>
										<Typography className="room-people" variant="subtitle2">
											Max People: {room.maxPeople}
										</Typography>
										<Typography className="room-price" variant="subtitle2">
											Price: ${room.price}
										</Typography>
									</Box>
									<Box className="right-part room-roomnumbers" variant="body2">
										{room.roomNumbers.map((roomNum, i) => (
											<div key={i} style={{ cursor: "pointer" }}>
												<label htmlFor={roomNum._id} style={{ color: notAvailable(roomNum) ? "red" : "green" }}>
													{roomNum.number}
												</label>
												<Checkbox
													className="checkbox"
													id={roomNum._id}
													value={roomNum._id}
													color="success"
													disabled={notAvailable(roomNum, i)}
													onChange={handleSelectedRooms}
													sx={{ color: pink[800], "&.Mui-checked": { color: "red" } }}
												/>
											</div>
										))}
									</Box>
								</div>
							))}
							<Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit}>
								Reserve Now !
							</Button>
						</div>
					</>
				)
			) : (
				<Box className="not-signin-box">
					<Typography className="box-title" variant="h6">
						Opps, You Are Not Authonticated
					</Typography>
					<Button component={Link} to="/auth/register" variant="contained" color="primary" size="large" sx={{ mr: 1 }}>
						Signin
					</Button>
					<Button component={Link} to="/auth/register" variant="contained" color="primary" size="large">
						Signup
					</Button>
				</Box>
			)}
		</Modal>
	);
};

export default ListReserve;
