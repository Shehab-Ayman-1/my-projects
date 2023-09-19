import { useState } from "react";
import { motion } from "framer-motion";

import { componentWrap } from "@/wrapper";
import { email, mobile } from "@/assets";
import { useSanity } from "@/hooks";
import { animate } from "@/constants";
import { InputEvent, TextAreaEvent, FormEvent } from "@/types";
import { Error, Loading } from "@/layout";
import "./contact.scss";

export const _Contact = () => {
	// In Sanity -> We Use Other Loading And Error States Because In Create The Hook Will Just Woking After The Request Is Send To The Server
	const [, , , creator] = useSanity("create");
	const [formData, setFormData] = useState({ _type: "contact", name: "", email: "", message: "" });
	const [isSubmited, setIsSubmited] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: { name, value } }: InputEvent & TextAreaEvent) => {
		setFormData((f) => ({ ...f, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		setLoading(true);
		const error = await creator(formData);

		if (!error) setIsSubmited(true);
		else setError(() => error);

		setLoading(false);
	};

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="contact-section">
			<motion.h3 className="head-text" {...animate}>
				Take A Coffee <span>&</span> Chat With Me
			</motion.h3>

			<div className="labels">
				<motion.div className="label" whileHover={{ scale: [1, 1.1] }} {...animate}>
					<img src={email} alt="email" />
					<a href="mailto:micael@email.com" className="p-text">
						micael@email.com
					</a>
				</motion.div>
				<motion.div className="label" whileHover={{ scale: [1, 1.1] }} {...animate}>
					<img src={mobile} alt="mobile" />
					<a href="tel:(+123)-456-789)" className="p-text">
						(+123) 456 789
					</a>
				</motion.div>
			</div>
			{!isSubmited ? (
				<div className="form-data">
					<motion.form action="" className="form" onSubmit={handleSubmit} {...animate}>
						<div className="input-field">
							<input type="text" className="p-text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} />
						</div>
						<div className="input-field">
							<input type="email" className="p-text" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} />
						</div>
						<div className="input-field">
							<textarea className="p-text" name="message" value={formData.message} placeholder="Message" onChange={handleChange} />
						</div>
						<button type="submit" className="btn">
							{loading ? "Sending..." : "Send Message"}
						</button>
					</motion.form>
				</div>
			) : (
				<h3 className="submitted">👋 Thank You For Getting In Touch ❤️</h3>
			)}
		</div>
	);
};

const Contact = componentWrap(_Contact, "contact", "app__whitebg");

export { Contact };
