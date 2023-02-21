// React
import React from "react";
import "./container.scss";

// Components
import Navbar from "../navbar/navbar";
import Loading from "../loading/loading";
import Form from "../../components/form/form";
import Posts from "../../components/posts/posts";

// Material Ui
import { Container, Grid, Grow } from "@mui/material";

// Redux
import { useSelector } from "react-redux";

const HomeContainer = () => {
	const state = useSelector((state) => state.posts);

	return (
		<Container className="app-container" maxWidth="xl">
			<Navbar />

			<Grow in>
				<Grid className="grid-container" container spacing={3}>
					<Grid item xs={12} sm={7} md={8}>
						{!state.loading ? <Posts /> : <Loading />}
					</Grid>
					<Grid item xs={12} sm={5} md={4}>
						<Form title="Create New Memory" />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
};

export default HomeContainer;
