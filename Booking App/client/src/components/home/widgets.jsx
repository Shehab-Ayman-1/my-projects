import { widgets } from "@/constants";
import "./styles/widgets.scss";

export const Widgets = () => {
	return (
		<section className="widgets-section">
			{widgets.map((widget) => (
				<div className="widget" key={widget.name}>
					<img src={widget.img} alt={widget.name} />
					<h1>{widget.name}</h1>
					<h3>{widget.properties} Properties</h3>
				</div>
			))}
		</section>
	);
};
