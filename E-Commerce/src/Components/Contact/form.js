import React from "react";

export default function Form() {
	return (
		<>
			<form>
				<h1>Get In Touch</h1>
				<p>
					Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe Provident Nihil Non Unde, Quia Magnam
					Quibusdam Ad Obcaecati Nam Animi?
				</p>
				<input type="text" placeholder="Your Name" />
				<input type="email" placeholder="Your Email" />
				<input type="number" placeholder="Your Number" />
				<input type="text" placeholder="Your Subject" />
				<textarea placeholder="Your Message" />
				<a href="#Contact" className="Style">
					Send Message
				</a>
			</form>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13645.834418369386!2d30.008736650000003!3d31.235725499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1642270820168!5m2!1sen!2seg"
				className="map"
				title="map"
				allowFullScreen
				loading="lazy"></iframe>
		</>
	);
}
