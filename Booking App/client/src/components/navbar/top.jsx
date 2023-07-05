import { Link, useNavigate } from "react-router-dom";
import "./styles/top.scss";

export const TopSection = () => {
	const navigate = useNavigate();

	return (
		<div className="top-section">
			<Link to="/" className="logo">
				Booking.com
			</Link>
			<div className="buttons">
				<i className="far fa-question-circle fa-xl" />
				<button className="mybtn" data-varient="outline">
					List Your Property
				</button>
				<button className="mybtn" data-varient="fill" onClick={() => navigate("/signup")}>
					Sign Up
				</button>
				<button className="mybtn" data-varient="fill" onClick={() => navigate("/signin")}>
					Sign In
				</button>
			</div>
		</div>
	);
};
