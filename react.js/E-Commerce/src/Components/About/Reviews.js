import React from "react";

export default function Reviews(props) {
	return (
		<div className="box">
			<div className="img">
				<img src={`./Images/${props.img}`} alt={`${props.img}`} />
			</div>
			<div className="Content">
				<h2>{props.Name}</h2>
				<span>{props.Job}</span>
				<p>
					Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus, Laboriosam Non Eligendi Reiciendis Quis
					Laborum Exercitationem Voluptatibus Autem Harum Nihil Nisi Sed Mollitia, Quam Blanditiis Architecto
					Cumque? Sit, Voluptate Maiores.
				</p>
			</div>
		</div>
	);
}
