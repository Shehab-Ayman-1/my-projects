import React from "react";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../../Redux/Actions";

export default function Product(props) {
	const Dispatch = useDispatch();

	let APPEND = (img, Title, Price) => {
		Dispatch(ADDTOCART({ img: img, Title: Title, Price: Price }));
		alert("The Product Append To The Cart");
	};

	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img1}`} alt={props.img1} className="Main-img" />
				<img src={`./Images/${props.img2}`} alt={props.img2} className="Hover-img" />
			</div>

			<div className="Content">
				<h1>{props.title}</h1>

				<h3 className="Price">
					${props.price} <del>${props.price - 99}</del>
				</h3>

				<div className="Stars">
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star-half"></i>
				</div>

				<div className="Icons">
					<i className="fas fa-cart-plus" onClick={() => APPEND(props.img1, props.title, props.price)}></i>
					<i className="fas fa-search-plus"></i>
					<i className="fas fa-heart"></i>
					<i className="fas fa-share"></i>
				</div>
			</div>
		</div>
	);
}
