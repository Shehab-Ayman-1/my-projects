// ============================= Menu Bare btn =============================
let Navebar = document.querySelector("header nav");
let MenuBTN = document.querySelector("#MenuBar");
MenuBTN.addEventListener("click", function() {
	Navebar.classList.toggle("MenuActive");
	SearchForm.classList.remove("Active");
});

// ========================== Menu Bare Links ==========================
let Links = document.querySelectorAll("header nav a");
Links.forEach(event => {
	event.onclick = function() {
		Links.forEach(event => {
			event.classList.remove("Active");
		});
		event.classList.add("Active");
		console.log(event);
	};
});

// =========================== Search Button ===========================
let SearchBtn = document.querySelector("#Search");
let SearchForm = document.querySelector(".Search-Form");
SearchBtn.onclick = function() {
	SearchForm.classList.toggle("Active");
	Navebar.classList.remove("MenuActive");
};

// ======================= Put Class When Reload =======================
window.onload = function() {
	if (window.scrollY > 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
};

// ======================= Put Class When Scroll =======================
let Header = document.getElementById("Header");
let Section = document.querySelectorAll("section");
window.onscroll = function() {
	SearchForm.classList.remove("Active");
	Navebar.classList.remove("MenuActive");
	if (window.scrollY > 0) {
		Header.classList.add("Active");
	} else {
		Header.classList.remove("Active");
	}
	// Active The Current NaveLink Automaticly
	Section.forEach(function(event) {
		let Scroll = window.scrollY;
		let OffsetTop = event.offsetTop - 200;
		let ID = event.getAttribute("id");
		if (Scroll >= OffsetTop) {
			Links.forEach(e => {
				e.classList.remove("Active");
				document.querySelector("header nav a[href*=" + ID + "]").classList.add("Active");
			});
		}
	});
};

// ========================= Swipper ========================
var swiper = new Swiper(".slides", {
	spaceBetween: 20,
	effect: "fade",
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});

var swiper = new Swiper(".Catagory", {
	spaceBetween: 50,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	grabCursor: true,
	breakpoints: {
		0: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		991: {
			slidesPerView: 3
		}
	}
});
