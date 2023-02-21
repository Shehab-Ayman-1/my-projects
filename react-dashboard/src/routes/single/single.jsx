// React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./single.scss";

// Components
import Sidebar from "../../layout/sidebar/sidebar";
import Navbar from "../../layout/navbar/navbar";
import Chart from "../../components/charts/chart";
import DataTable from "../../components/table/table";
import { productsRows, productsColumns } from "../../data/products-tables";

// Material UI
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Single = ({ rows }) => {
	const [card, setCard] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const card = rows.find((card) => card.id === +id);
		setCard(card ? card : {});
	}, [card, rows, id]);

	return (
		<section className="single-page">
			<Sidebar />
			<Navbar />

			<div className="user-info">
				<div className="card-container">
					<Card>
						<CardActionArea>
							<div className="card">
								<div className="card-img">
									<CardMedia component="img" image={card.img} alt="info" />
								</div>
								<div className="card-body">
									<CardContent>
										<Typography className="card-header" gutterBottom variant="h5" component="div">
											{card?.username && "Information"}
											{card?.product && "Information"}
										</Typography>
										<Typography className="card-body" variant="h3" component="div">
											{card?.username && (
												<>
													<h3 className="card-name">
														Name: <span className="name">{card.username}</span>
													</h3>
													<h3 className="card-email">
														Email: <span className="email">{card.email}</span>
													</h3>
													<h3 className="card-phone">
														Phone: <span className="phone">+1 1234 56 789</span>
													</h3>
													<h3 className="card-address">
														Address: <span className="address">Newyork</span>
													</h3>
													<h3 className="card-country">
														Country: <span className="country">USA</span>
													</h3>
													<h3 className="card-status">
														Status: <span className="status">{card.status}</span>
													</h3>
												</>
											)}
											{card?.product && (
												<>
													<h3 className="card-name">
														customer: <span className="name">{card.customer}</span>
													</h3>
													<h3 className="card-country">
														product: <span className="country">{card.product}</span>
													</h3>
													<h3 className="card-phone">
														amount: <span className="phone">{card.amount}</span>
													</h3>
													<h3 className="card-address">
														method: <span className="address">{card.method}</span>
													</h3>
													<h3 className="card-status">
														status: <span className="status">{card.status}</span>
													</h3>
													<h3 className="card-email">
														date: <span className="email">{card.date}</span>
													</h3>
												</>
											)}
										</Typography>
									</CardContent>
								</div>
							</div>
						</CardActionArea>
					</Card>
				</div>
				<div className="chart">
					<Chart aspect={2 / 1} title="User Spending ( Last 6 Months )" />
				</div>
			</div>

			<div className="user-transactions">
				<DataTable columns={productsColumns} rows={productsRows} />
			</div>
		</section>
	);
};

export default Single;
