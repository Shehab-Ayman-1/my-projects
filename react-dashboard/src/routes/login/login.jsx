// React
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

// Logo
import Logo from "../../layout/sidebar/logo.png";

// Material UI
import { Button } from "@mui/material";

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		let email = document.querySelector("#email-field").value;
		let password = document.querySelector("#password-field").value;
		let emailValid = document.querySelector(".wrong-validation.email");
		let passwordValid = document.querySelector(".wrong-validation.password");

		if (email.toUpperCase() !== "JOHN_DUO@EXAMPLE.COM") {
			emailValid.classList.add("active");
		} else if (password !== "123") {
			emailValid.classList.remove("active");
			passwordValid.classList.add("active");
		} else {
			emailValid.classList.remove("active");
			passwordValid.classList.remove("active");
			email = "";
			password = "";
			navigate("/home-page");
		}
	};
	return (
		<div className="login-page">
			<div className="form-container">
				<div className="login-header">
					<img src={Logo} alt="logo-img" className="logo-img" />
					<h1 className="header-title">Sign In </h1>
				</div>

				<form className="login-body">
					<div className="form-field email">
						<label htmlFor="email-field" className="field-label">
							Email :
						</label>
						<span className="wrong-validation email">Default Email Is: John_Duo@example.com</span>
						<input type="email" className="input-field" id="email-field" placeholder="John_Duo@example.com" required />
					</div>
					<div className="form-field password">
						<label htmlFor="password-field" className="field-label">
							Password :
						</label>
						<span className="wrong-validation password">The Default Password Is: 123</span>
						<input type="password" className="input-field" id="password-field" placeholder="**************" required />
					</div>
					<Button type="submit" className="submit-button" variant="contained" color="primary" onClick={handleSubmit}>
						Sign In
					</Button>
				</form>

				<div className="login-footer">
					<h3 className="footer-register">
						Don't Have An Account ? <span className="register">Register</span>
					</h3>
					<h3 className="footer-forgit">Forget My Password</h3>
				</div>
			</div>
		</div>
	);
};

export default Login;
