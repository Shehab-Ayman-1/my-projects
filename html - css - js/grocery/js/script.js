// ======================= NaveBar =======================
let NavBtn = document.querySelector("header .Icons .fa-bars");
let NaveBar = document.querySelector("header nav");
NavBtn.onclick = function() {
	NaveBar.classList.toggle("Active");
};
// ======================= Header ========================
let Header = document.querySelector("header");
window.onscroll = function() {
	if (window.scrollY > 0) {
		Header.style.boxShadow = "0 0 10px 2px rgb(186, 195, 78, 1)";
	} else {
		Header.style.boxShadow = "none";
	}
};

// ======================= Swipper =======================
var swiper = new Swiper(".Catagory", {
	spaceBetween: 20,
	// effect: "fade",
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});
