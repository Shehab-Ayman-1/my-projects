// React
import React, { useContext } from "react";
import "./banner.scss";
import { Link } from "react-router-dom";

// Material Ui
import { AuthContext } from "../../context/auth/context";
import { Button, Typography } from "@mui/material";

const Searchbar = () => {
	const isSignin = useContext(AuthContext).state.isSignin;

	return (
		<>
			<Typography className="heading" variant="h3">
				A LifeTime Of Discounts? It's Genius.
			</Typography>
			<Typography className="content" variant="body1">
				Get Rewards For Your Travels - Saving Of 10% Or More With A Free Book.com
			</Typography>
			{!isSignin && (
				<Typography className="button">
					<Button component={Link} to="/auth/login" variant="contained" color="primary" size="large">
						Signin / Register
					</Button>
				</Typography>
			)}
		</>
	);
};

export default Searchbar;
