import React from "react";

export default function Accourdion(props) {
	let Handle = (event) => {
		const head = event.target.closest("h3");
		head.classList.toggle("Open");
		head.nextElementSibling.classList.toggle("Show");
	};
	console.log(props);
	return (
		<div className="box">
			<h3 className="Title" onClick={Handle}>
				-- {props.title}
				<i className="fas fa-angle-up"></i>
			</h3>
			<p className="Content">
				{props.content}
				<button type="button" className="Style">
					Read More
				</button>
			</p>
		</div>
	);
}
