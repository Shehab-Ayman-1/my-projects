import React from "react";
import "./property.scss";
import { Avatar, Box, Typography } from "@mui/material";

const Property = ({ img, title, count }) => {
	return (
		<Box className="property-box">
			<Avatar className="avatar" src={img} alt="avatar-img" />
			<div className="box-content">
				<Typography className="title" variant="h6">
					{title}s
				</Typography>
				<Typography className="description" variant="body1">
					{count && count} {title && title}s
				</Typography>
			</div>
		</Box>
	);
};

export default Property;
