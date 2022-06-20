// ========================= NaveBar =========================
let NaveBar = document.querySelector("header nav");
let Links = document.querySelectorAll("header nav a");
let Icons = ["fas fa-home", "fas fa-list", "fas fa-tags", "fas fa-comments", "fas fa-blog"];
let Text = ["Home", "Featured", "Arrivals", "Reviews", "Blogs"];

window.onscroll = () => {
	if (window.scrollY >= NaveBar.offsetTop) NaveBar.classList.add("Active");

	if (window.scrollY <= NaveBar.offsetTop) NaveBar.classList.remove("Active");

	// ==============================
	Links.forEach((item, index) => {
		if (window.innerWidth <= 600) {
			item.innerHTML = "";
			item.className = Icons[index];
		} else {
			item.className = "";
			item.innerHTML = Text[index];
		}
	});
};
window.onload = () => {
	Links.forEach((item, index) => {
		if (window.innerWidth <= 600) {
			item.innerHTML = "";
			item.className = Icons[index];
			console.log("run");
		} else {
			item.className = "";
			item.innerHTML = Text[index];
		}
	});
};

// ========================== Search Form ====================
let SearchForm = document.querySelector("header .Header .SearchForm");
let SearchBTN = document.querySelector("header .Header .Icons .fa-search");
SearchBTN.onclick = () => SearchForm.classList.toggle("Active");

// ========================== Swipper ========================
var swiper1 = new Swiper(".Home .Catagory .right", {
	spaceBetween: 20,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 9500,
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

var swiper2 = new Swiper(".Featured .Catagory2", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});

var swiper3 = new Swiper(".Arrivals .Catagory3", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
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

var swiper4 = new Swiper(".Reviews .Catagory4", {
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
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

var swiper5 = new Swiper(".Blogs .Catagory5", {
	spaceBetween: 10,
	grabCursor: true,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
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
