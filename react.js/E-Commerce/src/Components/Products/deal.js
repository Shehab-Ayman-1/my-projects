import React from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Actions";

export default function Deal(props) {
	const Dispatch = useDispatch();

	let APPEND = (img, Title, Price) => {
		Dispatch(ADDTOCART({ img: img, Title: Title, Price: Price }));
		alert("The Product Append To The Cart");
	};

	return (
		<div className="box">
			<img src={`./Images/${props.img}`} alt={props.img} />
			<div className="Content">
				<h1>{props.title}</h1>
				<span>Special Offer</span>
				<p>Price: ${props.price}</p>
				<button className="Style" onClick={() => APPEND(props.img, props.title, props.price)}>
					Shop Now
				</button>
			</div>
		</div>
	);
}
