// React
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

// Material Ui
import { Alert, Avatar, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { ArrowBack, LockOutlined } from "@mui/icons-material";

// Components
import axios from "axios";
import { AuthContext } from "../../../context/auth/context";
import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT } from "../../../context/auth/actions";
import InputField from "../assets/text-field";

const Login = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({ email: "", password: "" });
	const [isPass, setIsPass] = useState(true);

	const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

	const handleSubmit = async () => {
		try {
			context.dispatch(LOGIN_PENDING());
			const response = await axios.post("/auths/login", formData);
			context.dispatch(LOGIN_SUCCESS(response.data.other));
			navigate("/");
		} catch (error) {
			context.dispatch(LOGIN_FAILURE(error?.response?.data?.SIGNIN_AUTH));
		}
	};

	return (
		<Container className="auths-page" maxWidth="sm">
			<Paper className="paper" component="form" elevation={10}>
				<div className="login-header">
					<Avatar className="back" component={Link} to="/">
						<ArrowBack className="back-icon" />
					</Avatar>
					<Avatar className="auth-icon">
						<LockOutlined className="icon" />
					</Avatar>

					<Typography variant="h4" className="auth-title">
						Sign In
					</Typography>
				</div>
				<Grid className="login-body" container spacing={2}>
					<Grid item xs={12}>
						<InputField type="email" name="email" label="Email" change={handleChange} focus />
					</Grid>
					<Grid item xs={12}>
						<InputField type={isPass ? "password" : "text"} change={handleChange} isPass={isPass} setIsPass={setIsPass} />
					</Grid>
				</Grid>
				<div className="login-footer">
					{context.state.error && <Alert severity="error">{context.state.error}</Alert>}
					<Button className="submit-btn" variant="contained" color="primary" size="large" onClick={handleSubmit} fullWidth>
						Login
					</Button>
					<Button
						className="is-signup"
						component={Link}
						to="/auth/register"
						type="submit"
						variant="text"
						color="primary"
						onClick={() => context.dispatch(LOGOUT())}>
						Don't Have An Account
					</Button>
				</div>
			</Paper>
		</Container>
	);
};

export default Login;
