// React
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./home.scss";

// Components
import { AuthContext } from "../../context/auth/context";
import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";
import Wedget from "../../components/wedgets/wedgets";
import Featured from "../../components/featured/featured";
import Chart from "../../components/charts/chart";
import DataTable from "../../components/table/table";
import { columns } from "../../data/hotels-tables";
import useFetch from "../../hooks/useFetch";

const Home = () => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!context.state.user.fName) {
			navigate("/auth/login");
		}
	}, [context.state.user, navigate]);

	const { data } = useFetch("/hotels");
	const [hotelsData, setHotelsData] = useState([]);

	useEffect(() => {
		setHotelsData(data);
	}, [data]);

	return (
		<section className="home-page">
			<Sidebar />
			<div className="home-page-container">
				<Navbar />
				<div className="wedgets">
					<Wedget type="USERS" />
					<Wedget type="ORDER" />
					<Wedget type="EARNING" />
					<Wedget type="BALANCE" />
				</div>
				<div className="charts">
					<Featured />
					<Chart aspect={2 / 1} title="Last 6 Months ( Revenue )" />
				</div>
				<div className="data-table-container">
					<DataTable columns={columns} rows={hotelsData} title="hotel" />
				</div>
			</div>
		</section>
	);
};

export default Home;
