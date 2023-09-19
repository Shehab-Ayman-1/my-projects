import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getImgUrl } from "@/client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { TestimonialProps, BrandProps } from "@/types";
import { componentWrap } from "@/wrapper";
import { Error, Loading } from "@/layout";
import { useSanity } from "@/hooks";
import { animate } from "@/constants";
import "./testimonials.scss";

export const _Testimonials = () => {
	const [testimonials, tLoading, tError, tFetcher] = useSanity<TestimonialProps[]>("get");
	const [brands, bLoading, bError, bFetcher] = useSanity<BrandProps[]>("get");
	const [testimonial, setTestimonial] = useState<TestimonialProps>({ name: "", company: "", feedback: "", imgUrl: "" });
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		tFetcher("testimonials");
		bFetcher("brands");
	}, []);

	useEffect(() => {
		if (!testimonials?.length) return;
		setTestimonial(() => testimonials[slideIndex]);
	}, [testimonials, slideIndex]);

	const handlePrevSlide = () => setSlideIndex((i) => (i <= 0 ? 0 : --i));
	const handleNextSlide = () => setSlideIndex((i) => (i + 1 >= testimonials.length ? i : ++i));

	if (tLoading && bLoading) return <Loading />;
	if (tError && bError) return <Error error={tError || bError} />;

	const { name, company, feedback, imgUrl } = testimonial;

	return (
		<div className="testimonials-section">
			<div className="testimonials">
				<motion.div className="testimonial" whileHover={{ scale: [1, 1.1] }} {...animate}>
					<div className="testimonial-img">
						<img src={imgUrl ? getImgUrl(imgUrl).toString() : ""} alt={name} />
					</div>
					<div className="testimonial-content">
						<h2 className="">{feedback}</h2>
						<div className="reviewer">
							<p className="p-text">{name}</p>
							<p className="p-text">{company}</p>
						</div>
					</div>
				</motion.div>
				<div className="arrows">
					<motion.div className="left-arrow" onClick={handlePrevSlide} whileHover={{ scale: [1, 1.1] }} {...animate}>
						<HiChevronLeft />
					</motion.div>
					<p>
						{slideIndex + 1} / {testimonials?.length}
					</p>
					<motion.div className="right-arrow" onClick={handleNextSlide} whileHover={{ scale: [1, 1.1] }} {...animate}>
						<HiChevronRight />
					</motion.div>
				</div>
			</div>
			<div className="brands">
				{brands?.map(({ name, imgUrl }) => (
					<motion.div className="brand" key={name}>
						<motion.img src={imgUrl ? getImgUrl(imgUrl).toString() : ""} alt={name} whileHover={{ scale: [1, 1.1] }} {...animate} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

const Testimonials = componentWrap(_Testimonials, "testimonials");
export { Testimonials };
