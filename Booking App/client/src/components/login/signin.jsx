import { Fragment } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
	return (
		<Fragment>
			<h1 className="title">Sign In</h1>
			<div className="">
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" placeholder="Enter Your Email" />
			</div>
			<div className="">
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" placeholder="Enter Your Password" />
			</div>
			<button className="mybtn" data-varient="outline">
				Submit
			</button>
			<Link className="have-account" to="/signup">
				Don't Have An Account !!!
			</Link>
		</Fragment>
	);
};
