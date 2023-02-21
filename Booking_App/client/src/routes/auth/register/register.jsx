// React
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateAvatar from "react-file-base64";

// Material Ui
import { Alert, Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { ArrowBack, LockOutlined } from "@mui/icons-material";

// Components
import axios from "axios";
import { AuthContext } from "../../../context/auth/context";
import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT } from "../../../context/auth/actions";
import InputField from "../assets/text-field";

const Register = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

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

	const handleChange = (event) => {
		if (event.target.name === "avatar") {
			setFormData({ ...formData, [event.target.name]: event.target.files[0] });
		} else {
			setFormData({ ...formData, [event.target.name]: event.target.value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		context.dispatch(LOGIN_PENDING());
		try {
			const response = await axios.post("/auths/register", formData);
			context.dispatch(LOGIN_SUCCESS(response.data));
			navigate("/");
		} catch (error) {
			context.dispatch(LOGIN_FAILURE(error?.response?.data?.REGISTER_AUTH));
		}
	};

	return (
		<Container className="auths-page register-page" maxWidth="sm">
			<Paper className="paper" component="form" elevation={10} onSubmit={handleSubmit}>
				<div className="login-header">
					<Avatar className="back" component={Link} to="/">
						<ArrowBack className="back-icon" />
					</Avatar>
					<Avatar className="auth-icon">
						<LockOutlined className="icon" />
					</Avatar>
					<Typography className="auth-title" variant="h4">
						Sign Up
					</Typography>
				</div>

				<Grid className="login-body" container spacing={2}>
					<Grid className="avatar-grid" item xs={12}>
						<Avatar className="avatar" src={formData?.avatar} />
						<CreateAvatar onDone={({ base64 }) => setFormData({ ...formData, avatar: base64 })} />
					</Grid>
					<Grid item xs={12} md={4}>
						<InputField type="text" name="fName" label="First Name" change={handleChange} focus />
					</Grid>
					<Grid item xs={12} md={4}>
						<InputField type="text" name="lName" label="Last Name" change={handleChange} />
					</Grid>
					<Grid item xs={12} md={4}>
						<InputField type="text" name="age" label="Age" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type="text" name="username" label="username" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type="email" name="email" label="Email" change={handleChange} />
					</Grid>
					<Grid item xs={12}>
						<InputField type={isPass ? "password" : "text"} change={handleChange} isPass={isPass} setIsPass={setIsPass} />
					</Grid>
					<Grid item xs={12}>
						<InputField
							type={isPass ? "password" : "text"}
							name="confirmedPassword"
							label="confirmed Password"
							change={handleChange}
						/>
					</Grid>
				</Grid>

				<div className="login-footer">
					{context.state.error && <Alert severity="error">{context.state.error}</Alert>} <br />
					<Button type="submit" variant="contained" color="primary" size="large" fullWidth>
						Sign Up
					</Button>
					<Button
						className="is-signup"
						component={Link}
						to="/auth/login"
						variant="text"
						color="primary"
						onClick={() => context.dispatch(LOGOUT())}>
						Already Have An Account
					</Button>
				</div>
			</Paper>
		</Container>
	);
};

export default Register;
