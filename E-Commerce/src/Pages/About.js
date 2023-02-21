import React, { useEffect, useState } from "react";
import Reviews from "../Components/About/Reviews";
import Accourdion from "../Components/About/Accourdion";
import fetchData from "../Components/layout/fetchData";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Autoplay]);

function About() {
	let [data, setData] = useState();
	useEffect(() => fetchData().then((result) => setData(result)), []);

	let accourdion = () => {
		return data.about.accourdions.map((item, index) => (
			<Accourdion key={index} title={item.title} content={item.content} />
		));
	};

	let clients = () => {
		return data.about.clients.map((item, index) => (
			<SwiperSlide key={index}>
				<Reviews img={item.img} Name={item.name} Job={item.job} />
			</SwiperSlide>
		));
	};

	return (
		<section className="About" id="About">
			<div className="One">
				<div className="Left">
					<img src="./Images/about-img.png" alt="images" />
				</div>
				<div className="Right">
					<h1>OUR STORY</h1>
					<p>
						Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Quam Modi Ea Fuga Quibusdam Fugiat Porro
						Doloremque, Quas Dignissimos Culpa Unde. Recusandae Maxime Aliquam Beatae Reiciendis, Facilis
						Voluptatum Eligendi Nesciunt Ipsa?
					</p>
					<p>
						Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Accusamus, Distinctio Et? Odio Voluptatum
						Eius Reprehenderit Saepe Quisquam Excepturi Molestiae Architecto.
					</p>
					<a href="#About" className="Style">
						Read More
					</a>
				</div>
			</div>

			<div className="Two">
				<h1 className="title">
					Questions & <span> Answers </span>
				</h1>
				<div className="Accourdion">{data ? accourdion() : "not defined"}</div>
			</div>

			<div className="Three">
				<h1 className="title">
					Clients <span>Review</span>
				</h1>
				<div className="Reviews">
					<Swiper
						modules={[Navigation, Pagination]}
						loop={true}
						spaceBetween={30}
						slidesPerView={3}
						grabCursor={true}
						navigation
						breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 } }}
						pagination={{ clickable: true }}
						autoplay={{ delay: 5000, disableOnInteraction: false }}>
						{data ? clients() : ""}
					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default About;
