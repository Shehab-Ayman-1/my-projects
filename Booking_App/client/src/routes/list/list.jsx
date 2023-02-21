// React
import React, { useContext, useState } from "react";
import "./list.scss";
import { useLocation } from "react-router";

// Material Ui
import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import { PinDrop } from "@mui/icons-material";

// Components
import { HotelContext } from "../../context/hotel/context";
import { AuthContext } from "../../context/auth/context";
import Navbar from "../../layout/navbar/navbar";
import Footer from "../../layout/footer/footer";
import Slider from "../../components/slider/slider";
import ReserveModal from "../../components/list-reserve/list-reserve";
import Subscribe from "../../components/subscribe/subscribe";

// Images
import feature1 from "../../assets/images/feature 1.webp";
import feature2 from "../../assets/images/feature 2.webp";
import feature3 from "../../assets/images/feature 3.webp";
import furnitur1 from "../../assets/images/furnitur 1.webp";
import furnitur2 from "../../assets/images/furnitur 2.webp";
import furnitur3 from "../../assets/images/furnitur 3.webp";

const List = () => {
	// Context
	const hotelContext = useContext(HotelContext);
	const authContext = useContext(AuthContext);
	const { date, options } = hotelContext.state;
	const isSignin = authContext.state.isSignin;

	// Location
	const location = useLocation();
	const { _id, title, address, city, distance, cheapestPrice, rating } = location.state.hotel;

	// Slider
	const photos = [{ img: feature1 }, { img: feature2 }, { img: feature3 }, { img: furnitur1 }, { img: furnitur2 }, { img: furnitur3 }];
	const [slideIndex, setSlideIndex] = useState(3);
	const [openSlider, setOpenSlider] = useState(false);
	const handleSlider = (i) => {
		setSlideIndex(i);
		setOpenSlider(true);
	};

	// Get Days
	const deffDays = () => {
		const deffTime = Math.abs(date[0]?.startDate - date[0]?.endDate);
		const deffDays = Math.ceil(deffTime / (1000 * 60 * 60 * 24));
		return deffDays;
	};

	// Reserving Modal
	const [openReserve, setOpenReserve] = useState(false);
	const handleOpenReserve = () => setOpenReserve(true);
	const handleCloseReserve = () => setOpenReserve(false);
	const handleReserving = () => {
		if (isSignin) handleOpenReserve();
		else handleCloseReserve();
	};

	return (
		<div className="list-page">
			<div className="Navbar">
				<Navbar />
			</div>

			{openSlider && <Slider photos={photos} slideIndex={slideIndex} setSlideIndex={setSlideIndex} setOpenSlider={setOpenSlider} />}

			<Container className="list-container" maxWidth="lg">
				<div className="header">
					<div className="title">
						<Typography className="name" variant="h4">
							{title}
						</Typography>
						<Button variant="contained" color="primary" size="large" onClick={handleReserving}>
							Reserve OR Book Now !
						</Button>
					</div>

					<Typography className="subtitle" variant="body2">
						<PinDrop className="icon" /> {address}
					</Typography>

					<Typography className="rating" variant="h6">
						{rating === 0 ? "Bad" : rating < 2.5 ? "Nice" : rating >= 2.5 ? "Good" : rating >= 4.5 ? "Excellent" : ""} Location
						- {distance}m From Center, 2Bathroom, 1Balcont, More...
					</Typography>

					<Typography className="offer" variant="h6">
						Book A Stay Over ${cheapestPrice} At This Property And Get A Free Airport Taxi
					</Typography>
				</div>

				<div className="body">
					<Grid className="images-container" container spacing={2}>
						{photos.map((obj, i) => (
							<Grid item xs={12} md={6} lg={4} key={i}>
								<Avatar className="avatar" src={obj.img} alt="list-img" onClick={() => handleSlider(i)} />
							</Grid>
						))}
					</Grid>
					<Grid className="stay-grid" container spacing={2}>
						<Grid className="left-section" item xs={12} md={9}>
							<Typography className="title" variant="h6">
								Stay in the heart of {city}
							</Typography>
							<Typography className="content" variant="body2">
								Offering free WiFi and free private parking, Piso moderno y acogedor en el centro de la ciudad is located in
								{city}, within just a 2-minute walk of Puerta del Sol. The property is an 8-minute walk from Mercado San
								Miguel and half a kilometer from Prado Museum. The air-conditioned apartment is composed of 1 separate
								bedroom, a living room, a fully equipped kitchen, and 1 bathroom. A flat-screen TV is provided.
							</Typography>
						</Grid>

						<Grid className="right-section" item xs={12} md={3}>
							<Typography className="title" variant="body2">
								Perfect For A {deffDays()} Night Stay!
							</Typography>
							<Typography className="content" variant="subtitle2">
								Located In The Real Heart Of Madried The Property Has An
								{rating === 0 ? "Bad" : rating < 2.5 ? "Nice" : rating >= 2.5 ? "Good" : rating >= 4.5 ? "Excellent" : ""}
								Location Score Of {rating}
							</Typography>
							<Typography className="price" variant="h6">
								<span>${+cheapestPrice * +options.room * +deffDays()}</span> <span>( {deffDays()} Nights )</span>
							</Typography>
							<Button variant="contained" color="primary" fullWidth onClick={handleReserving}>
								Reserve Your Apartment Stay
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>

			<div className="footer">
				<div className="subscribes">
					<Subscribe />
				</div>
				<Container maxWidth="lg">
					<Footer />
				</Container>
			</div>

			<ReserveModal id={_id} isSignin={isSignin} openReserve={openReserve} handleCloseReserve={handleCloseReserve} />
		</div>
	);
};

export default List;
