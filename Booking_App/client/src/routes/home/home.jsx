// React
import React, { useContext } from "react";
import "./home.scss";

// Material Ui
import { Container, Grid, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

// Layout
import Navbar from "../../layout/navbar/navbar";
import Loading from "../../layout/loading/loading";
import Footer from "../../layout/footer/footer.jsx";
import Error from "../../layout/Error/error";

// Components
import useFetch from "../../hooks/useFetch";
import { HotelContext } from "../../context/hotel/context";
import Searchbar from "../../components/searchbar/searchbar";
import Banner from "../../components/banner/banner";
import Feature from "../../components/feature/feature";
import Property from "../../components/property/property";
import Hotel from "../../components/hotel/hotel";
import Subscribe from "../../components/subscribe/subscribe";

const Home = () => {
	const photos = useContext(HotelContext).state.photos;
	const { data: cities, isLoading: citiesLoading, isError: citiesError } = useFetch("/hotels/query?city=madrid,london,berlin");
	const { data: types, isLoading: TLoad, isError: TErr } = useFetch("/hotels/query?type=hotel,apartment,resort,hotel,villa,cabin");
	const { data: hotels, isLoading: hotelsLoading, isError: hotelsError } = useFetch("/hotels?limit=10");

	return (
		<div className="home-page">
			<div className="Navbar">
				<Navbar />
			</div>

			<Container className="front-container" maxWidth="xl" sx={{ bgcolor: blue[900], pb: 4 }}>
				<div className="home-banner">
					<Banner />
					<div className="home-searchbar">
						<Searchbar />
					</div>
				</div>
			</Container>

			<Container className="page-container" maxWidth="lg">
				<div className="home-features">
					{citiesLoading ? (
						<Stack direction="row" justifyContent="space-between" gap={2}>
							<Loading header sx={{ width: "calc(350px)" }} />
							<Loading header sx={{ width: "calc(350px)" }} />
							<Loading header sx={{ width: "calc(350px)" }} />
						</Stack>
					) : (
						<Grid container spacing={2}>
							{cities.map((num, i) => (
								<Grid item xs={12} md={6} lg={4} key={i}>
									<Feature img={photos[i]} title={num?.type} length={num?.count} />
								</Grid>
							))}
						</Grid>
					)}
					{citiesError && <Error section="Cities" severity="error" bgcolor="red" />}
				</div>

				<div className="home-properties">
					<Typography className="properties-header" variant="h5">
						Browser By Property Type
					</Typography>
					{TLoad ? (
						<Stack direction="row" gap={2} justifyContent="space-between">
							<Loading header body sx={{ width: "200px", height: "250px" }} />
							<Loading header body sx={{ width: "200px", height: "250px" }} />
							<Loading header body sx={{ width: "200px", height: "250px" }} />
							<Loading header body sx={{ width: "200px", height: "250px" }} />
							<Loading header body sx={{ width: "200px", height: "250px" }} />
						</Stack>
					) : (
						<Grid container spacing={2}>
							{types.map((item, i) => (
								<Grid item xs={6} sm={4} md={3} lg={2} key={i}>
									<Property img={photos[i]} title={item?.type} count={item?.count} />
								</Grid>
							))}
						</Grid>
					)}
					{TErr && <Error section="Types" severity="error" bgcolor="red" />}
				</div>

				<div className="home-guests">
					<Typography className="properties-header" variant="h5">
						Homes Guests Love
					</Typography>
					{hotelsLoading ? (
						<Stack direction="row" justifyContent="space-between" gap={2}>
							<Loading header body footer sx={{ width: "300px" }} />
							<Loading header body footer sx={{ width: "300px" }} />
							<Loading header body footer sx={{ width: "300px" }} />
						</Stack>
					) : (
						<Grid container spacing={2}>
							{hotels?.map((hotel, i) => (
								<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
									<Hotel img={photos[i]} hotel={hotel && hotel} />
								</Grid>
							))}
						</Grid>
					)}
					{hotelsError && <Error section="Guests" severity="error" bgcolor="red" />}
				</div>
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

export default Home;
