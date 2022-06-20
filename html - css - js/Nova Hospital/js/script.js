// ============== NaveBar ==============
let NaveBar = document.querySelector("header nav");
let NaveBtn = document.querySelector("header .Icons .fa-bars");

NaveBtn.onclick = function () {
	NaveBar.classList.toggle("Active");
};

// ============== SearchForm ==============
let SearchForm = document.querySelector("header .SearchForm");
let SearchBtn = document.querySelector("header .Icons .fa-search");
SearchBtn.onclick = function () {
	SearchForm.classList.toggle("Active");
};

// ============== OnScroll ====================
let Label = document.querySelector(".Labels");
let About = document.querySelector(".About");
let Numbers = document.querySelectorAll(".Labels .box h1");
let State = false;

window.onscroll = function () {
	// ============== Labels ==================
	if (window.scrollY >= Label.offsetTop - 350) {
		if (State !== true) Numbers.forEach((num) => Interval(num));
		State = true;
	}
};

// ============== Functions() ==================
function Interval(el) {
	let Goal = el.dataset.num;
	let Count = setInterval(() => {
		el.textContent++;
		if (el.textContent === Goal) {
			clearInterval(Count);
		}
		console.log(Goal);
	}, 2);
}

var swiper = new Swiper(".Doctors .Catagory", {
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
