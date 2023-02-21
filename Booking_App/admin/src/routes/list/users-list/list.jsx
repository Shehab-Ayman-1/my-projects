// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateAvatar from "react-file-base64";
import "../list.scss";

// Material Ui
import { Alert, Avatar, Button, ButtonGroup, Grid, Modal, Paper, TextField, Typography } from "@mui/material";

// Components
import axios from "axios";
import useFetch from "../../../hooks/useFetch";
import { columns, status } from "../../../data/users-tables";
import { AuthContext } from "../../../context/auth/context";
import Sidebar from "../../../layout/sidebar/sidebar";
import Navbar from "../../../layout/navbar/navbar";
import DataTable from "../../../components/table/table";

const List = () => {
	// Check If User Not Admin Go To Login Page
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	// Get User Data
	const { data, UseReFetch } = useFetch("/auths");
	const [listOfUsers, setListOfUsers] = useState([]);
	const [upUser, setUpUser] = useState({ avatar: "", fName: "", lName: "", age: "", email: "" });
	const chUpFields = (event) => setUpUser({ ...upUser, [event.target.name]: event.target.value });

	useEffect(() => {
		const user = data.map((item, i) => {
			item.status = status[i];
			return item;
		});
		setListOfUsers(user);
	}, [data]);

	// Controle In The Modal
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// Create Actions To The Table
	let appendActions = () => {
		const viewUser = (id) => {
			navigate(id);
		};
		const updateUser = (user) => {
			console.log(user);
			handleOpen();
			setUpUser(user);
		};
		const deleteUser = async ({ _id }) => {
			try {
				setListOfUsers(listOfUsers.filter((item) => item._id !== _id));
				const response = await axios.delete(`/auths/delete/${_id}`);
				return response.data;
			} catch (error) {
				console.log(error);
			}
		};
		const renderButtons = ({ row }) => {
			return (
				<ButtonGroup className="actions-btns" variant="contained">
					<Button color="secondary" onClick={() => viewUser(row._id)}>
						View
					</Button>
					<Button color="primary" onClick={() => updateUser(row)}>
						Update
					</Button>
					<Button color="error" onClick={() => deleteUser(row)}>
						Delete
					</Button>
				</ButtonGroup>
			);
		};

		return { field: "actions", headerName: "Actions", minWidth: 260, renderCell: (row) => renderButtons(row) };
	};

	// Handle Submit Update
	const [msg, setMsg] = useState({ state: null, msg: null });
	const handleSubmitUpdate = async (event) => {
		event.preventDefault();
		setMsg({ state: null, msg: null });
		try {
			const response = await axios.put(`/auths/update/${upUser._id}/update`, upUser);
			setMsg({ state: true, msg: `Successfully, ${upUser.username} Was Updated` });
			const interval = setInterval(() => {
				UseReFetch();
				handleClose();
				clearInterval(interval);
			}, 2000);
			return response.data;
		} catch (error) {
			console.log(error);
			setMsg({ state: false, msg: error?.response?.data?.UPDATE_AUTH || error?.response?.statusText });
		}
	};

	return (
		<div className="list-page">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<div className="list-data-table">
					<DataTable rows={listOfUsers} columns={columns.concat(appendActions())} title="user" />
				</div>
			</div>

			<Modal className="updated-modal" open={open} onClose={handleClose}>
				<Paper className="paper" component="form" elevation={10} onSubmit={handleSubmitUpdate}>
					<Typography variant="h4" align="center" color="var(--main-color)" fontWeight="bold" fontSize="25px">
						Update User
					</Typography>
					<Grid className="paper-body" container spacing={2}>
						<Grid item xs={12} sm={12} className="avatar-grid">
							<Avatar className="avatar" src={upUser.avatar} alt="avatar-img" />
							<CreateAvatar onDone={({ base64 }) => setUpUser({ ...upUser, avatar: base64 })} />
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
						<Grid item xs={12} sm={12}>
							<TextField value={upUser.fName} name="fName" variant="standard" label="First Name" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField value={upUser.lName} name="lName" variant="standard" label="Last Name" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField type="number" value={upUser.age} name="age" variant="standard" label="Age" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField value={upUser.username} name="username" variant="standard" label="username" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField value={upUser.email} name="email" variant="standard" label="email" onChange={chUpFields} />
						</Grid>
						<Grid item xs={12} sm={12}>
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

export default List;
