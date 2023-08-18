import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "@/hooks";

export const SignIn = () => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const { data: user, loading, error, Refetch } = useAxios("post", "/");
	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (!user?.email) return;
		localStorage.setItem("user", JSON.stringify(user));
		setTimeout(() => navigate(state?.fromPathname || "/"), 3000);
	}, [user, loading, error]);

	const handleChange = ({ target: { name, value } }) => setCredentials((c) => (c = { ...c, [name]: value }));

	const handleSubmit = () => {
		if (!credentials.email) return alert("Email Is Required Field.");
		if (!credentials.password) return alert("Password Is Required Field.");
		Refetch("post", "users/sign-in", credentials);
	};

	return (
		<Fragment>
			<h1 className="title">Sign In</h1>
			<span className="error">{error}</span>
			<div className="">
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" name="email" placeholder="Enter Your Email" onChange={handleChange} />
			</div>
			<div className="">
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" name="password" placeholder="Enter Your Password" onChange={handleChange} />
			</div>
			<button className="mybtn" data-varient="outline" disabled={loading} onClick={handleSubmit}>
				Submit
			</button>
			<p className="flex-center gap">
				Don't Have An Account?
				<Link className="have-account" to="/signup">
					Sign Up
				</Link>
			</p>
		</Fragment>
	);
};
