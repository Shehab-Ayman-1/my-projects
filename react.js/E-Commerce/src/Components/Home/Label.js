import React from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Actions";

export default function Label(props) {
	const Dispatch = useDispatch();

	let APPEND = (img, Title, Price) => {
		Dispatch(ADDTOCART({ img: img, Title: Title, Price: Price }));
		alert("The Product Append To The Cart");
	};

	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img}`} alt="Images" />
			</div>
			<div className="Content">
				<h1>{props.title}</h1>
				<h3>
					<span>Price:</span> ${props.Price}
				</h3>
				<button className="Style" onClick={() => APPEND(props.img, props.title, props.Price)}>
					Shop Now
				</button>
			</div>
		</div>
	);
}
