import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<section className="Login" id="Login">
			<form>
				<h1>LOGIN NOW</h1>
				<input type="email" placeholder="Your Email" />
				<input type="password" placeholder="Your Password" />
				<div className="row">
					<input type="checkbox" id="Check" />
					<label htmlFor="Check">Remember Me</label>
				</div>
				<Link to="/" className="Style">
					Login Now
				</Link>
				<Link to="/Register" className="Style RegisterBTN">
					Don't Have An Account?
				</Link>
			</form>
		</section>
	);
}

export default Login;
