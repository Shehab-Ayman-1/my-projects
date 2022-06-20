// ============= NaveBar =============
let NaveBar = document.querySelector("header nav");
let Bars = document.querySelector("header .Form .fa-bars");
Bars.onclick = function () {
	NaveBar.classList.toggle("Active");
};

// ============= Header =============
let header = document.querySelector("header");
let Sections = document.querySelectorAll("section");
let Links = document.querySelectorAll("header nav a");
window.onscroll = function () {
	if (window.scrollY > 0) {
		header.classList.add("Active");
	} else {
		header.classList.remove("Active");
	}
	Sections.forEach((event) => {
		let Scroll = window.scrollY;
		let OffsetTop = event.offsetTop - 200;
		let ID = event.getAttribute("id");
		if (Scroll >= OffsetTop) {
			Links.forEach((el) => {
				el.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			});
		}
	});
};

// ============= MouseMoveMent =============
let Home = document.querySelector(".Home");
let Image = document.querySelector(".Home img");
let Title = document.querySelector(".Home h1");
let Button = document.querySelector(".Home button");

Home.onmousemove = function (el) {
	let X = (window.innerWidth - el.pageX) / 40;
	let Y = (window.innerHeight - el.pageY) / 40;
	Image.style.transform = `translate(${-X * 1.5}px, ${-Y}px)`;
	Title.style.transform = `translate(${-X * 2}px, ${-Y}px)`;
	Button.style.transform = `translate(${-X * 2}px, ${-Y}px)`;
};
Home.onmouseleave = function (el) {
	let X = (window.innerWidth - el.pageX) / 20;
	let Y = (window.innerHeight - el.pageY) / 20;
	Image.style.transform = `translate(${0}px, ${0}px)`;
	Title.style.transform = `translate(${0}px, ${0}px)`;
	Button.style.transform = `translate(${0}px, ${0}px)`;
};

// ============= Night Mood =============
let body = document.querySelector("body");
let Night = document.querySelector("header .Form .fa-moon");

Night.onclick = function () {
	body.classList.toggle("Active");
	if (body.className === "Active") {
		Night.className = "fa fa-moon";
	} else {
		Night.className = "fa fa-sun";
	}
};

// ============= Loading =============
window.onload = function () {
	Loading = document.querySelector(".Loading");
	setTimeout(() => Loading.classList.add("Active"), 1000);
};

// ============= Swipper =============
var swiper = new Swiper(".Vehicles", {
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".Galory", {
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".Catagory-2", {
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
