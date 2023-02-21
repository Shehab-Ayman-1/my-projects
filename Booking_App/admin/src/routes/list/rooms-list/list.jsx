// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../list.scss";

// Material Ui
import { Button, ButtonGroup } from "@mui/material";

// Components
import { AuthContext } from "../../../context/auth/context";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import DataTable from "../../../components/table/table";

// Data
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { columns } from "../../../data/rooms-tables";

const HotelList = () => {
	// States
	const [listOfRooms, setListOfRooms] = useState([]);

	// Context & Navigations
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	// Fetch Data
	const { data: rooms } = useFetch("/rooms");

	// UseEffects
	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	useEffect(() => {
		setListOfRooms(rooms);
	}, [rooms]);

	const appendActions = () => {
		const viewHotel = (id) => {
			navigate(id);
		};
		const deleteHotel = async ({ _id }) => {
			try {
				listOfRooms(listOfRooms.filter((item) => item._id !== _id));
				const response = await axios.delete(`/rooms/delete/${_id}`);
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
					<Button color="error" onClick={() => deleteHotel(row)}>
						Delete
					</Button>
				</ButtonGroup>
			);
		};
		return { field: "actions", headerName: "Actions", minWidth: 300, renderCell: (row) => renderButtons(row) };
	};

	return (
		<div className="list-page">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<div className="list-data-table">
					<DataTable rows={rooms || []} columns={columns.concat(appendActions())} title="Room" />
				</div>
			</div>
		</div>
	);
};

export default HotelList;
