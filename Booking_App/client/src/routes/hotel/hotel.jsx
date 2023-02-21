// React
import React, { useContext } from "react";
import "./hotel.scss";

// Material Ui
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

// Loyout
import Navbar from "../../layout/navbar/navbar";
import Footer from "../../layout/footer/footer";
import Loading from "../../layout/loading/loading";
import Error from "../../layout/Error/error";

// Components
import { HotelContext } from "../../context/hotel/context";
import useFetch from "../../hooks/useFetch";
import Subscribe from "../../components/subscribe/subscribe";
import ListSearch from "../../components/list-search/list-search";
import ListItem from "../../components/list-item/list-item.jsx";

const Hotel = () => {
	const given = useContext(HotelContext).state;

	const url = `hotels?${given.destination && `city=${given.destination?.toLowerCase()}`}&min=${+given.min}&max=${+given.max}`;
	const { data, isLoading, isError, UseReFetch } = useFetch(url);

	return (
		<div className="hotel-page">
			<div className="Navbar">
				<Navbar />
			</div>

			<Container className="hotel-container" maxWidth="xl">
				<Grid container spacing={2}>
					<Grid className="left-section" item xs={12} md={4} lg={3}>
						<ListSearch UseReFetch={UseReFetch} />
					</Grid>

					<Grid className="right-section" item xs={12} md={8} lg={9}>
						{isLoading ? (
							<Loading />
						) : (
							data &&
							data?.map((hotel, i) => (
								<ListItem img={given.photos[i > 12 ? i - 12 : i]} hotel={hotel} UseReFetch={UseReFetch} key={i} />
							))
						)}
						{data.length === 0 && <Error section="Items" severity="warning" bgcolor="#ff9800" />}
						{isError && <Error severity="error" section="List" bgcolor="red" />}
					</Grid>
				</Grid>
			</Container>

			<div className="subscribes">
				<Subscribe />
			</div>

			<Container className="home-footer" maxWidth="lg">
				<Footer />
			</Container>
		</div>
	);
};

export default Hotel;
