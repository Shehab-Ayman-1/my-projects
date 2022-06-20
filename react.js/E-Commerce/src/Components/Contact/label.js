import React from "react";

function Label(props) {
	return (
		<div className="box">
			<i className={props.icone}></i>
			<h1>{props.title}</h1>
			<p>{props.paragraph}</p>
		</div>
	);
}

export default Label;
