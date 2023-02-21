// React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Base64 from "react-file-base64";
import "../form.scss";

// Components
import axios from "axios";
import { AuthContext } from "../../../context/auth/context";
import Navbar from "../../../layout/navbar/navbar";
import Sidebar from "../../../layout/sidebar/sidebar";
import TextField from "../text-field";

// Material UI
import { Alert, Avatar, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FormValidation = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!context?.state?.user?.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	// Filds Data
	const [formData, setFormData] = useState({
		avatar: "",
		fName: "",
		lName: "",
		age: "",
		username: "",
		email: "",
		password: "",
		confirmedPassword: "",
	});
	const [isPass, setIsPass] = useState(true);
	const [isRegister, setIsRegister] = useState({ state: null, msg: null });
	const chField = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name === "avatar") {
			setFormData({ ...formData, avatar: event.target.files[0] });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("/auths/register", formData);
			setIsRegister({ state: true, msg: `${formData.email} Was Added As A Client` });
			setFormData({ avatar: "", fName: "", lName: "", age: "", username: "", email: "", password: "", confirmedPassword: "" });
			return response.data;
		} catch (error) {
			setIsRegister({ state: false, msg: error?.response?.data?.REGISTER_AUTH });
		}
	};

	return (
		<section className="add-user">
			<Navbar />
			<Sidebar />

			<Paper className="paper-form" component="form" onSubmit={handleSubmit}>
				<Typography className="header-title" variant="h5" fontWeight="bold">
					Add New User
				</Typography>
				<Grid className="container-grid" container spacing={2}>
					<Grid className="left-section" item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<br />
								{isRegister.state === true && (
									<Alert className="alert success" severity="success">
										{isRegister.msg}
									</Alert>
								)}
								{isRegister.state === false && (
									<Alert className="alert error" severity="error">
										{isRegister.msg}
									</Alert>
								)}
							</Grid>
							<Grid item xs={12} sm={4}>
								<TextField type="text" name="fName" value={formData.fName} label="First Name" change={chField} focus />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TextField type="text" name="lName" value={formData.lName} label="Last Name" change={chField} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<TextField type="number" name="age" value={formData.age} label="Age" change={chField} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField type="text" name="username" value={formData.username} label="Username" change={chField} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField type="email" name="email" value={formData.email} label="Email" change={chField} />
							</Grid>
							<Grid item xs={12} sm={6} className="password-grid">
								<TextField
									type={isPass ? "password" : "text"}
									value={formData.password}
									name="password"
									label="Password"
									change={chField}
								/>
								<IconButton className="adornment-icon" onClick={() => setIsPass(!isPass)}>
									{isPass ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</Grid>
							<Grid item xs={12} sm={6} className="password-grid">
								<TextField
									type={isPass ? "password" : "text"}
									name="confirmedPassword"
									value={formData.confirmedPassword}
									label="Confirm"
									change={chField}
								/>
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
							<Base64 type="file" onDone={({ base64 }) => setFormData({ ...formData, avatar: base64 })} onChange={chField} />
							<Avatar className="avatar" src={formData.avatar || ""} alt="user-avatar" />
						</label>
					</Grid>
				</Grid>
			</Paper>
		</section>
	);
};

export default FormValidation;
