import React from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Actions";

export default function Arrival(props) {
	const Dispatch = useDispatch();
	let APPEND = (img, Title, Price) => {
		Dispatch(ADDTOCART({ img: img, Title: Title, Price: Price }));
		alert("The Product Append To The Cart");
	};

	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img1}`} alt="Images" className="Main-Image" />
				<img src={`./Images/${props.img2}`} alt="Images" className="Hover-Image" />
			</div>
			<div className="Content">
				<h3 className="product-name">{props.title}</h3>
				<span className="price">
					${props.price}
					<del className="Del" style={{ textDecoration: "line-through" }}>
						${props.price - 50}
					</del>
				</span>
				<div className="Icons">
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star-half"></i>
				</div>
				<button type="button" className="Style btn" onClick={() => APPEND(props.img1, props.title, props.price)}>
					Shop Now
				</button>
			</div>
		</div>
	);
}
