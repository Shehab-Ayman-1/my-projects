import { useState } from "react";
import { Feature1, Feature2, Furnitur1, Furnitur2, Furnitur3, Furnitur4 } from "@/assets";
import "./styles/slider.scss";

export const Slider = () => {
	let images = [Feature1, Feature2, Furnitur1, Furnitur2, Furnitur3, Furnitur4];
	let [open, setOpen] = useState({ state: false, slide: 0 });

	return (
		<section className="slider-section">
			<div className="images-container">
				{images.map((img, i) => (
					<img src={img} alt="image" key={i} onClick={() => setOpen((o) => (o = { state: true, slide: i }))} />
				))}
			</div>
			<div className={`slider ${open.state ? "" : "hide-display"}`}>
				<i className="fa fa-times-circle close-icon" onClick={() => setOpen((o) => (o = { ...o, state: false }))} />
				<div className="wrapper">
					{images.map((img, i) => (
						<img className={`slide ${i === +open.slide ? "active" : ""}`} src={img} alt="image" key={i} />
					))}
				</div>
				<i className="fa fa-chevron-right next" onClick={() => setOpen((o) => (o = { ...o, slide: o.slide >= images.length - 1 ? o.slide : o.slide + 1 }))} />
				<i className="fa fa-chevron-left prev" onClick={() => setOpen((o) => (o = { ...o, slide: o.slide <= 0 ? o.slide : o.slide - 1 }))} />
			</div>
		</section>
	);
};
