/* 
	-- We Have 4 Wedgets --
	[1] Signin Widget
	[2] Signup Widget
	[3] Google Signin Widget
	[4] Google Signup Widget
*/

// React
import React, { useState } from "react";
import "./login.scss";
import logo from "../../images/logo.png";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { EXIST, LOGIN_AUTH, REGISTER_AUTH } from "../../redux/reducers/auth-slice";

// Google Login
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script"; // It's a global variable To Make The Google Login Work

// Material Ui
import { Alert, Avatar, Button, Container, Grid, Paper, Snackbar, Stack, Typography } from "@mui/material";
import { LockOutlined, Google, ArrowBack } from "@mui/icons-material/";

// Components
import InputField from "./input-field";

const GOOGLE_CLIENT_ID = "903980825507-4jdidfuaad036vkm6h0o22bkt9qgbrlo.apps.googleusercontent.com";

const formInitialState = { firstName: "", lastName: "", email: "", imageUrl: logo, password: "", confirmedPassword: "" };

const Authentication = () => {
	const navigate = useNavigate();

	// Redux
	const dispatch = useDispatch();
	const { signinExist, signupExist } = useSelector((state) => state.auth);

	// Fields State
	const [userForm, setUserForm] = useState(formInitialState);

	// SnackBar
	const [wrongmsg, setWrongmsg] = useState("Invalid Email OR Password !!");
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const closeSnackbar = () => setOpenSnackbar(false);
	const handleOpenSnackbar = (msg) => {
		setWrongmsg(msg);
		setOpenSnackbar(true);
	};

	// Input Field Settings
	const [showPassword, setShowPassword] = useState(true);
	const handleShowPassword = () => setShowPassword(!showPassword);
	const handleChange = (event) => {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
		dispatch(EXIST(true));
	};

	// Wedgets States
	const handleSign = (method) => {
		switch (method) {
			case "signin":
				setIsSignin(true);
				setIsSignup(false);
				setIsGoogleSignin(false);
				setIsGoogleSignup(false);
				break;

			case "signup":
				setIsSignin(false);
				setIsSignup(true);
				setIsGoogleSignin(false);
				setIsGoogleSignup(false);
				break;

			case "google-signin":
				setIsSignin(false);
				setIsSignup(false);
				setIsGoogleSignin(true);
				setIsGoogleSignup(false);
				break;

			case "google-signup":
				setIsSignin(false);
				setIsSignup(false);
				setIsGoogleSignin(false);
				setIsGoogleSignup(true);
				break;
		}
	};

	// [1] Signin Widget
	const [isSignin, setIsSignin] = useState(true);
	const handle_signin = (event) => {
		event.preventDefault();

		if (isSignin) {
			if (signinExist && userForm.email && userForm.password) {
				dispatch(LOGIN_AUTH(userForm));
			} else {
				handleOpenSnackbar("Wrong Password, Or This Account Doesn't Register !!");
			}
		}
		if (isGoogleSignin) {
			if (signinExist && userForm.password === userForm.confirmedPassword) {
				dispatch(LOGIN_AUTH(userForm));
			} else {
				handleOpenSnackbar("Wrong Password, Or This Account Doesn't Register !!");
			}
		}
	};

	// [2] Signup Widget
	const [isSignup, setIsSignup] = useState(false);
	const handle_signup = (event) => {
		event.preventDefault();

		if (isSignup) {
			if (userForm.firstName && userForm.lastName && userForm.email && userForm.password && userForm.confirmedPassword) {
				if (signupExist && userForm.password === userForm.confirmedPassword) {
					dispatch(REGISTER_AUTH(userForm));
				} else {
					handleOpenSnackbar("Invalid Fields ! !");
				}
			} else {
				handleOpenSnackbar("All Fields Have To Be Filled ! !");
			}
		}
		if (isGoogleSignup) {
			if (signupExist && userForm.password) {
				dispatch(REGISTER_AUTH(userForm));
			} else {
				handleOpenSnackbar("All Fields Have To Be Filled! !");
			}
		}
	};

	// [3] Google Signin Widget
	const [isGoogleSignin, setIsGoogleSignin] = useState(false);
	const handle_google_signin = (response) => {
		const { email, imageUrl } = response?.profileObj;
		setUserForm({ ...userForm, email, imageUrl });
		handleSign("google-signin");
	};

	// [4] Google Signup Widget
	const [isGoogleSignup, setIsGoogleSignup] = useState(false);
	const handle_google_signup = (response) => {
		const { givenName, familyName, email, imageUrl } = response?.profileObj;
		setUserForm({ ...userForm, firstName: givenName, lastName: familyName, email, imageUrl });
		handleSign("google-signup");
	};

	return (
		<Container className="auth-container" maxWidth="sm">
			<Paper className="paper" elevation={3}>
				<div className="navigate-back">
					<ArrowBack className="icon" onClick={() => navigate("/")} />
				</div>
				<div className="paper-header">
					<Avatar className="auth-icon">
						<LockOutlined />
					</Avatar>

					<Typography variant="h3" className="auth-title">
						{isSignin && "Sign In"}
						{isSignup && "Sign Up"}
						{isGoogleSignin && "Google Sign In"}
						{isGoogleSignup && "Google Sign Up"}
					</Typography>
				</div>

				<form className="paper-body">
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} className="firstName-field">
							{isSignup && <InputField type="text" name="firstName" label="First Name" focus change={handleChange} />}
						</Grid>

						<Grid item xs={12} sm={6} className="lastName-field">
							{isSignup && <InputField type="text" name="lastName" label="Last Name" change={handleChange} />}
						</Grid>

						<Grid item xs={12} className="email-field">
							{isSignin && <InputField type="email" name="email" label="Your Email" change={handleChange} focus />}
							{isSignup && <InputField type="email" name="email" label="Your Email" change={handleChange} focus />}
						</Grid>

						<Grid item xs={12} className="password-field">
							<InputField
								type={showPassword ? "password" : "text"}
								name="password"
								label="Your Password"
								change={handleChange}
								showPass={handleShowPassword}
								showPasswordIcon={showPassword}
								visPass
							/>
						</Grid>

						<Grid item xs={12} className="confirmed-password-field">
							{isSignup && (
								<InputField
									type={showPassword ? "password" : "text"}
									name="confirmedPassword"
									label="Repeat Password 2"
									change={handleChange}
									showPass={handleShowPassword}
									showPasswordIcon={showPassword}
									visPass
								/>
							)}
							{isGoogleSignup && (
								<InputField
									type={showPassword ? "password" : "text"}
									name="confirmedPassword"
									label="Repeat Password 2"
									change={handleChange}
									showPass={handleShowPassword}
									showPasswordIcon={showPassword}
									visPass
								/>
							)}
						</Grid>

						<Grid item xs={12} className="image-field">
							{isSignup && (
								<Stack direction="row-reverse" justifyContent="space-between" alignItems="center">
									<img src={userForm.imageUrl} alt="file" width={45} height={45} />
									<FileBase
										type="file"
										multiple={false}
										onDone={(e) => setUserForm({ ...userForm, imageUrl: e.base64 })}
									/>
								</Stack>
							)}
						</Grid>

						<Grid item xs={12} className="buttons-field">
							{isSignin && (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handle_signin}>
									Sign In
								</Button>
							)}
							{isSignup && (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handle_signup}>
									Sign Up
								</Button>
							)}
							{isGoogleSignin && (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handle_signin}>
									Sign In
								</Button>
							)}
							{isGoogleSignup && (
								<Button type="submit" variant="contained" color="primary" fullWidth onClick={handle_signup}>
									Sign Up
								</Button>
							)}
						</Grid>

						<Grid item xs={12} className="google-field">
							{isSignin && (
								<GoogleLogin
									// Hint: We Get The CliendId From console.cloud.google.com
									clientId={GOOGLE_CLIENT_ID}
									cookiePolicy="single_host_origin"
									// isSignedIn={true} // Auto Signin
									onSuccess={handle_google_signin}
									render={(props) => (
										<Button
											className="google-signin"
											color="primary"
											variant="contained"
											onClick={props.onClick}
											disabled={props.disabled}
											startIcon={<Google />}
											fullWidth>
											Google Sign In
										</Button>
									)}
								/>
							)}
							{isSignup && (
								<GoogleLogin
									// Hint: We Get The CliendId From console.cloud.google.com
									clientId={GOOGLE_CLIENT_ID}
									cookiePolicy="single_host_origin"
									// isSignedIn={true} // Auto Signin
									onSuccess={handle_google_signup}
									render={(props) => (
										<Button
											className="google-signin"
											color="primary"
											variant="contained"
											onClick={props.onClick}
											disabled={props.disabled}
											startIcon={<Google />}
											fullWidth>
											Google Sign In
										</Button>
									)}
								/>
							)}
						</Grid>

						<Grid item xs={12} className="is-signin-field">
							<Typography className="is-sign-up" variant="body2">
								{isSignin && <span onClick={() => handleSign("signup")}> Don't Have An Account </span>}
								{isSignup && <span onClick={() => handleSign("signin")}> I Already Have An Account </span>}
								{isGoogleSignin && <span onClick={() => handleSign("signup")}> Don't Have An Account </span>}
								{isGoogleSignup && <span onClick={() => handleSign("signin")}> I Already Have An Account </span>}
							</Typography>
						</Grid>

						<Grid item xs={12} className="is-signin-field">
							<Snackbar open={openSnackbar} autoHideDuration={1500} onClose={closeSnackbar}>
								<Alert
									severity="error"
									onClose={closeSnackbar}
									sx={{ bgcolor: "#d32f2f", color: "white", ".MuiSvgIcon-root": { color: "white" } }}>
									{wrongmsg}
								</Alert>
							</Snackbar>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Authentication;
