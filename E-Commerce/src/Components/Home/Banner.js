import React from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Actions";

export default function Banner(props) {
	const Dispatch = useDispatch();
	let APPEND = (img, Title, Price) => {
		Dispatch(ADDTOCART({ img: img, Title: Title, Price: Price }));
		alert("The Product Append To The Cart");
	};

	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img}`} alt={props.img} />
			</div>
			<div className="Content">
				<span>{props.offer}</span>
				<span> ${props.price}</span>
				<h1>{props.title}</h1>
				<button className="Style" onClick={() => APPEND(props.img, props.title, props.price)}>
					Shop Now
				</button>
			</div>
		</div>
	);
}
