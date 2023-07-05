import { useLocation, useNavigate } from "react-router-dom";
import { SignIn, SignUp } from "@/components";
import "./styles/login.scss";

export const Login = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<section className="login-section">
			<div className="box">
				<i className="fa fa-arrow-left back-icon" onClick={() => navigate("/")} />
				<i className="fas fa-street-view person-icon" />
				{pathname === "/signin" && <SignIn />}
				{pathname === "/signup" && <SignUp />}
			</div>
		</section>
	);
};
