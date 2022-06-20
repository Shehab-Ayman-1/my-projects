import React, { useEffect, useState } from "react";
import Label from "../Components/Products/label";
import Product from "../Components/Products/Product";
import Deal from "../Components/Products/deal";
import fetchData from "../Components/layout/fetchData";

function Products() {
	let [data, setData] = useState();
	useEffect(() => fetchData().then((result) => setData(result.products)), []);

	let labels = () => {
		return data.labels.map((item, index) => <Label key={index} img={item.img} title={item.Title} />);
	};

	let products = () => {
		return data.products.map((item, index) => (
			<Product i={index} key={index} img1={item.img1} img2={item.img2} title={item.title} price={item.price} />
		));
	};

	let deals = () => {
		return data.deals.map((item, index) => <Deal img={item.img} key={index} price={item.price} title={item.Title} />);
	};

	return (
		<section className="Products" id="Products">
			<h1 className="title">
				Shop By <span>Category</span>
			</h1>

			<div className="Labels">{data ? labels() : ""}</div>

			<h1 className="title">
				Featured <span>Products</span>
			</h1>

			<div className="Caragory">{data ? products() : ""}</div>

			<h1 className="title">
				Deal Of <span>The Day</span>
			</h1>

			<div className="Deals">{data ? deals() : ""}</div>
		</section>
	);
}

export default Products;
