import React, { useEffect, useState } from "react";
import Arrival from "../Components/Home/Arrival";
import Label from "../Components/Home/Label";
import Banner from "../Components/Home/Banner";
import fetchData from "../Components/layout/fetchData";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
SwiperCore.use([Autoplay]);

function Home() {
	let [data, setData] = useState();
	useEffect(() => fetchData().then((result) => setData(result)), []);

	let getBanner = () => {
		return data.home.banner.map((item, index) => (
			<SwiperSlide className="Catagory" key={index}>
				<Banner img={item.img} offer={item.offer} price={item.price} title={item.title} />
			</SwiperSlide>
		));
	};

	let getLabel = () => {
		return data.home.labelContent.map((item, index) => (
			<Label key={index} img={item.img} Price={item.Price} title={item.Title} />
		));
	};

	let getArrival = () => {
		return data.home.arrivalContent.map((item, index) => (
			<Arrival key={index} img1={item.Main_img} img2={item.Hover_img} title={item.Title} price={item.Price} />
		));
	};

	return (
		<section className="Home" id="Home">
			<Swiper
				className="Home-Banner"
				modules={[Navigation, Pagination]}
				loop={true}
				spaceBetween={20}
				slidesPerView={1}
				grabCursor={true}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}>
				{data ? getBanner() : ""}
			</Swiper>

			<div className="Labels"> {data ? getLabel() : ""} </div>

			<div className="Arrivals">
				<h1 className="title">
					New <span>Arrivals</span>
				</h1>
				<div className="Catagory"> {data ? getArrival() : ""} </div>
			</div>
		</section>
	);
}

export default Home;
