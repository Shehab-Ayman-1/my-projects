var swiper = new Swiper(".Home", {
	spaceBetween: 20,
	centeredSlides: true,
	effect: "fade",
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper = new Swiper(".Trainers .Reviews .right", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		600: { slidesPerView: 2 },
	},
});

var swiper = new Swiper(".Blogs .Catagory", {
	spaceBetween: 20,
	grabCursor: true,
	loop: true,
	loopFillGroupWithBlank: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: { slidesPerView: 1 },
		400: { slidesPerView: 2 },
		600: { slidesPerView: 3 },
	},
});
