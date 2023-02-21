// React
import React from "react";
import "./list-item.scss";
import { useNavigate } from "react-router-dom";

// Material Ui
import { Avatar, Button, Grid, Rating, Typography } from "@mui/material";

const ListItem = ({ img, hotel }) => {
	const navigate = useNavigate();
	const handleNavigate = () => navigate(hotel._id, { state: { hotel } });

	return (
		<Grid className="list-item" container spacing={2}>
			<Grid className="avatar-grid" item xs={12} sm={4} lg={3}>
				<Avatar className="avatar" src={img} alt="list-item-img" />
			</Grid>

			<Grid className="body-grid" item xs={12} sm={8} lg={9}>
				<div className="body-header">
					<Typography className="header-title" variant="h5">
						<span className="name">{hotel?.title}</span>
						<Rating className="rate" value={hotel?.rating} name="read-only" />
					</Typography>
					<Typography className="header-subtitle" variant="subtitle1">
						{hotel?.name}
					</Typography>
					<Typography className="header-subtitle" variant="subtitle1">
						{hotel?.distance}m From Center, In <span style={{ color: "#1976d2" }}>{hotel?.city}</span>
					</Typography>
					<Typography className="header-subtitle" variant="subtitle1"></Typography>
				</div>

				<div className="body-section">
					<Button className="success-btn" variant="contained" color="success" sx={{ p: "5px 10px" }}>
						{hotel?.featured ? "Free Airport Taxi" : "$150 For Taxi"}
					</Button>
					<Typography className="apartment" variant="h6">
						Studio {hotel?.city} With Air Conditioning
					</Typography>
					<Typography className="price" variant="overline">
						<span>{hotel?.description}</span>
						<span>${hotel?.cheapestPrice}</span>
					</Typography>
				</div>

				<div className="body-footer">
					<Typography className="cancellation" variant="overline">
						<span>Free Cancellation</span>
						<span>Includes Taxes And Fees</span>
					</Typography>
					<Typography className="available" variant="overline">
						<span>You Can Cancel Later, So Lock To This Great Price Today</span>
						<Button className="primary-btn" variant="contained" size="large" onClick={handleNavigate}>
							See Available
						</Button>
					</Typography>
				</div>
			</Grid>
		</Grid>
	);
};

export default ListItem;
