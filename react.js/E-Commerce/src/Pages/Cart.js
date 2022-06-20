import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETEFROMCART, PayMent } from "../Redux/Actions";

function Cart() {
	const States = useSelector((States) => States);
	const Dispatch = useDispatch();

	const Total_Price = States.Cart.reduce((acc, obj) => ("Acc", acc != null ? acc : 0) + parseInt(obj.Price), 0);

	const Handle_Delete = (i) => Dispatch(DELETEFROMCART(i));
	const Handle_PayMent = () => Dispatch(PayMent());

	return (
		<section className="Shopping-Cart" id="Shopping-Cart">
			<h1 className="title">
				My <span>Cart</span>
			</h1>
			<div className="Cart">
				{States.Cart.map((item, index) => (
					<div className="box" key={index}>
						<i className="fa fa-times" onClick={() => Handle_Delete(index)}></i>
						<div className="img">
							<img src={`./Images/${item.img}`} alt={item.img} />
						</div>
						<div className="Contact">
							<h1>{item.Title}</h1>
							<h2>Price: ${item.Price}</h2>
						</div>
					</div>
				))}
			</div>
			<h1 className="Total-Price">Total: ${Total_Price}</h1>
			<button type="button" className="Style" onClick={Handle_PayMent}>
				Buy Now
			</button>
		</section>
	);
}

export default Cart;
