export function normalSwiper(path, space = 20, loopStatue = true) {
	new Swiper(path, {
		slidesPerView: "auto",
		spaceBetween: space,
		grabCursor: true,
		loop: loopStatue,
		pagination: { el: ".swiper-pagination", clickable: true },
		navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	});
}

export function autoSwiper(path, space = 20, delay = 5000) {
	new Swiper(path, {
		spaceBetween: space,
		loop: true,
		grabCursor: true,
		centeredSlides: true,
		autoplay: { delay: delay, disableOnInteraction: false },
		pagination: { el: ".swiper-pagination", clickable: true },
		navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	});
}
