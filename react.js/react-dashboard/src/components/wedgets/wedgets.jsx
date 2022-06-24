import React, { useEffect, useState } from "react";
import "./wedgets.scss";

import { ShoppingCartOutlined, KeyboardArrowUp, PersonOutline } from "@mui/icons-material";
import { MonetizationOnOutlined, AccountBalanceWalletOutlined } from "@mui/icons-material";

const Wedgets = ({ type }) => {
	const [data, setData] = useState({ title: "", isMoney: false, link: "", icon: "" });

	useEffect(() => {
		switch (type) {
			case "USERS":
				return setData({
					title: "Users",
					isMoney: false,
					count: 86520,
					link: "See All Users",
					icon: <PersonOutline className="icon" style={{ backgroundColor: "rgba(255, 0, 0, 0.2)", color: "crimson" }} />,
				});

			case "ORDER":
				return setData({
					title: "ORDER",
					isMoney: false,
					count: 25613,
					link: "See All Users",
					icon: (
						<ShoppingCartOutlined className="icon" style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }} />
					),
				});

			case "EARNING":
				return setData({
					title: "EARNING",
					isMoney: true,
					count: 21312,
					link: "See New Earning",
					icon: <MonetizationOnOutlined className="icon" style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />,
				});

			case "BALANCE":
				return setData({
					title: "BALANCE",
					isMoney: true,
					count: 31213,
					link: "See Details",
					icon: (
						<AccountBalanceWalletOutlined
							className="icon"
							style={{ backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple" }}
						/>
					),
				});

			default:
				break;
		}
	}, [type]);

	return (
		<div className="wedget">
			<div className="wedget-left">
				<h3 className="wedget-title">{data?.title}</h3>
				<span className="wedget-counter">
					{data?.isMoney && "$"} {data?.count}
				</span>
				<span className="wedget-link">{data?.link}</span>
			</div>
			<div className="wedget-right">
				<p className="percent-tag negative">
					<KeyboardArrowUp className="icon" />
					20%
				</p>
				{data?.icon}
			</div>
		</div>
	);
};

export default Wedgets;
