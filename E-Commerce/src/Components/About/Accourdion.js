import React from "react";

export default function Accourdion({ title, content }) {
	let Handle = (event) => {
		const head = event.target.closest("h3");
		head.classList.toggle("Open");
		head.nextElementSibling.classList.toggle("Show");
	};

	return (
		<div className="box">
			<h3 className="Title" onClick={Handle}>
				-- {title}
				<i className="fas fa-angle-up"></i>
			</h3>
			<p className="Content">
				{content}
				<button type="button" className="Style">
					Read More
				</button>
			</p>
		</div>
	);
}
