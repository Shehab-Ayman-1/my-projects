// ====================== Bars Form ======================
let BarsButton = document.querySelector("#BarsButton");
let NaveBare = document.querySelector("header nav");
BarsButton.onclick = () => {
	NaveBare.classList.toggle("Active");
	SearchForm.classList.remove("Active");
	ShoppingForm.classList.remove("Active");
	UserLogin.classList.remove("Active");
};

// ====================== Search Form ====================
let SearchButton = document.querySelector("#SearchButton");
let SearchForm = document.querySelector(".SearchForm");
SearchButton.onclick = () => {
	SearchForm.classList.toggle("Active");
	NaveBare.classList.remove("Active");
	ShoppingForm.classList.remove("Active");
	UserLogin.classList.remove("Active");
};

// ====================== Shopping Form ==================
let ShoppingButton = document.querySelector("#ShoppingButton");
let ShoppingForm = document.querySelector(".ShoppingCart");
ShoppingButton.onclick = () => {
	ShoppingForm.classList.toggle("Active");
	NaveBare.classList.remove("Active");
	SearchForm.classList.remove("Active");
	UserLogin.classList.remove("Active");
};

// ====================== User Form ======================
let UserButton = document.querySelector("#UserButton");
let UserLogin = document.querySelector(".UserLogin");
UserButton.onclick = () => {
	UserLogin.classList.toggle("Active");
	ShoppingForm.classList.remove("Active");
	NaveBare.classList.remove("Active");
	SearchForm.classList.remove("Active");
};

// ====================== Mark The Link ==================
let Links = document.querySelectorAll("header nav a");
Links.forEach((link) => {
	link.onclick = (Click) => {
		Links.forEach((event) => {
			event.classList.remove("Active");
		});
		Click.target.classList.add("Active");
	};
});

// ====================== When Scroll ====================
let Section = document.querySelectorAll("section");
let Header = document.querySelector("header");
window.onscroll = () => {
	if (window.scrollY === 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
	Section.forEach((event) => {
		let Scroll = window.scrollY;
		let Offset = event.offsetTop - 100;
		let ID = event.getAttribute("id");
		if (Scroll >= Offset) {
			Links.forEach((ev) => {
				ev.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			});
		}
	});
};

// ====================== When OnLoad ====================
window.onload = () => {
	if (window.scrollY === 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
};

// ====================== Swipper ========================
var swiper = new Swiper(".Galory-1", {
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
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
var swiper = new Swiper(".Galory-2", {
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
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
var swiper = new Swiper(".Galory-3", {
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
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
