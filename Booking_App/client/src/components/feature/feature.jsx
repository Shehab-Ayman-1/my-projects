// React
import React from "react";
import "./feature.scss";

// Material Ui
import { Avatar, Box, Typography } from "@mui/material";

const Feature = ({ img, title, length }) => {
	return (
		<Box className="feature-box">
			<Avatar className="avatar" src={img} alt="avatar-img" />
			<div className="box-heading">
				<Typography variant="h4" className="title" data-stroke="black">
					{title}
				</Typography>
				<Typography variant="body1" className="description" data-stroke="black">
					{length} Properties
				</Typography>
			</div>
		</Box>
	);
};

export default Feature;
