export default function setting() {
	let navBtn = document.querySelector("header .left-section .fa.fa-bars");
	let navbar = document.querySelector(".menu-nav");
	let subNavbar = document.querySelector(".sub-nav");
	let videosContainer = document.querySelector(".videos-container");
	let nightmode = document.querySelector("header .right-section .fa-moon");

	// Navbar Settings
	navBtn.onclick = () => {
		navbar.classList.toggle("hide-left-clip");
		if (navbar.classList.contains("hide-left-clip")) {
			videosContainer.style.width = "calc(100% - 80px)";
			navbar.style.width = "0";
			subNavbar.style.width = "80px";
			subNavbar.classList.add("show-left-clip");
			subNavbar.classList.remove("hide-left-clip");
		} else {
			videosContainer.style.width = "calc(100% - 230px)";
			navbar.style.width = "230px";
			subNavbar.style.width = "0";
			subNavbar.classList.remove("show-left-clip");
			subNavbar.classList.add("hide-left-clip");
		}
	};

	// Controle In The Sub Navbar
	function subNavbarMobile() {
		let searchBtn = document.querySelector("header .right-section .fa-search");
		let midSection = document.querySelector("header .mid-section");
		// remove desktop styles
		navbar.classList.add("hide-left-clip");
		navbar.classList.remove("show-left-clip");
		videosContainer.style.width = "calc(100% - 80px)";
		navbar.style.width = "0";
		subNavbar.style.width = "80px";

		// add mobile styles
		subNavbar.classList.add("show-left-clip");
		subNavbar.classList.remove("hide-left-clip");
		searchBtn.onclick = () => midSection.classList.toggle("show-right-clip");
	}

	function subNavbarDesktop() {
		// add desktop styles
		navbar.classList.add("show-left-clip");
		navbar.classList.remove("hide-left-clip");
		videosContainer.style.width = "calc(100% - 230px)";
		navbar.style.width = "230px";
		subNavbar.style.width = "0";

		// remove mobile styles
		subNavbar.classList.remove("show-left-clip");
		subNavbar.classList.add("hide-left-clip");
	}

	if (window.screen.width > 792) {
		subNavbarDesktop();
	} else {
		subNavbarMobile();
	}

	// Night Mode
	nightmode.onclick = () => {
		if (document.body.getAttribute("data-theme") === "nightMode-theme") {
			document.body.setAttribute("data-theme", "light-red-theme");
			nightmode.className = "far fa-moon";
		} else {
			document.body.setAttribute("data-theme", "nightMode-theme");
			nightmode.className = "far fa-sun";
		}
	};

	// Notifications
	let notiMenu = document.querySelector("header .dropdown-menus .notifications-menu");
	let notiBell = document.querySelector("header .right-section .fa-bell");
	let megaMenu = document.querySelector("header .dropdown-menus .mega-menu");
	let megaImg = document.querySelector("header .right-section img");
	let appMenu = document.querySelector("header .dropdown-menus .app-menu");
	let appBtn = document.querySelector("header .right-section .fa-border-none");
	notiBell.onclick = () => {
		notiMenu.classList.toggle("hide-scale");
		megaMenu.classList.add("hide-scale");
		appMenu.classList.add("hide-scale");
	};
	megaImg.onclick = () => {
		megaMenu.classList.toggle("hide-scale");
		notiMenu.classList.add("hide-scale");
		appMenu.classList.add("hide-scale");
	};
	appBtn.onclick = () => {
		appMenu.classList.toggle("hide-scale");
		notiMenu.classList.add("hide-scale");
		megaMenu.classList.add("hide-scale");
	};

	// Swiper
	var swiper = new Swiper(".swiper", {
		slidesPerView: "auto",
		spaceBetween: 5,
	});
}
