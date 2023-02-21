import React from "react";
import { Link } from "react-router-dom";

function Register() {
	return (
		<section className="Register" id="Register">
			<form>
				<h1>REGISTER NOW</h1>
				<input type="text" placeholder="Your UserName" />
				<input type="email" placeholder="Your Email" />
				<input type="password" placeholder="Your Password" />
				<input type="password" placeholder="Return Your Password" />
				<div className="row">
					<input type="checkbox" id="Check" />
					<label htmlFor="Check">Remember Me</label>
				</div>
				<Link to="/Login" className="Style">
					Register
				</Link>
				<p>Already Have Am Account?</p>
			</form>
		</section>
	);
}

export default Register;
