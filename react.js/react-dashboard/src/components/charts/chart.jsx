import React from "react";
import "./chart.scss";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
	{
		name: "Jan",
		Total: 1200,
	},
	{
		name: "Feb",
		Total: 2100,
	},
	{
		name: "Mar",
		Total: 800,
	},
	{
		name: "Apr",
		Total: 1600,
	},
	{
		name: "May",
		Total: 900,
	},
	{
		name: "June",
		Total: 1700,
	},
	{
		name: "July",
		Total: 2000,
	},
];

const chart = ({ aspect, title }) => {
	return (
		<div className="chart">
			<h3 className="chart-title">{title}</h3>
			<ResponsiveContainer className="chart-art" aspect={aspect}>
				<AreaChart data={data} width="100%" height={250}>
					{/* The Linear Wave */}
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--main-color)" stopOpacity={1} />
							<stop offset="95%" stopColor="var(--second-color)" stopOpacity={0} />
						</linearGradient>
					</defs>

					{/* X Axis  */}
					<XAxis dataKey="name" />

					{/* The Light Grip On The Chart */}
					<CartesianGrid strokeDasharray="1 1" className="chard-grid" opacity={0.5} />

					{/* The ToolTipe What Is Showing When Mouse Hover */}
					<Tooltip />

					{/* The Top Wave Border */}
					<Area type="monotone" dataKey="Total" stroke="var(--main-color)" fillOpacity={1} fill="url(#total)" />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default chart;
