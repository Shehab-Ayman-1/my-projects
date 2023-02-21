import React from "react";
import Label from "../Components/Contact/label";
import ContactForm from "../Components/Contact/form";

function Contact() {
	const Labels = [
		{
			Icons: "fas fa-map-marked",
			Title: "Address",
			Paragraph: "Alexandria, Egypt",
		},
		{
			Icons: "fa fa-envelope",
			Title: "Email",
			Paragraph: "Alexandria, Egypt",
		},
		{
			Icons: "fas fa-phone",
			Title: "Number",
			Paragraph: "Alexandria, Egypt",
		},
	];
	return (
		<section className="Contact" id="Contact">
			<div className="Labels">
				{Labels.map((item, index) => (
					<Label key={index} icone={item.Icons} title={item.Title} paragraph={item.Paragraph} />
				))}
			</div>
			<div className="Form">
				<ContactForm />
			</div>
		</section>
	);
}

export default Contact;
