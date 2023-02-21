import React from "react";

function label(props) {
	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img}`} alt={props.img} />
			</div>
			<h3>{props.title}</h3>
		</div>
	);
}
export default label;
